const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const root = path.resolve(__dirname, '..');
const origin = 'https://www.versaliate.com';
const aliases = new Map([
  [`${origin}/en/`, `${origin}/`],
  [`${origin}/en/codex.html`, `${origin}/codex.html`],
]);

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    if (entry.name.startsWith('.')) return [];
    const file = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(file) : [file];
  });
}

function attrs(tag) {
  return Object.fromEntries([...tag.matchAll(/([\w:-]+)\s*=\s*["']([^"']*)["']/g)]
    .map(match => [match[1], match[2]]));
}

function alternates(html) {
  return Object.fromEntries([...html.matchAll(/<(?:xhtml:)?link\b[^>]*>/g)]
    .map(match => attrs(match[0]))
    .filter(link => link.rel === 'alternate' && link.hreflang)
    .map(link => [link.hreflang, link.href]));
}

const pages = new Map(walk(root).filter(file => file.endsWith('.html')).flatMap(file => {
  const html = fs.readFileSync(file, 'utf8');
  if (!/<html\b/.test(html)) return []; // Google's plain verification response.
  const relative = path.relative(root, file).replaceAll('\\', '/');
  const url = `${origin}/${relative.replace(/(^|\/)index\.html$/, '$1')}`;
  const head = html.match(/<head>([\s\S]*?)<\/head>/)[1];
  const links = [...head.matchAll(/<link\b[^>]*>/g)].map(match => attrs(match[0]));
  return [[url, {
    html,
    language: attrs(html.match(/<html\b[^>]*>/)[0]).lang,
    canonicals: links.filter(link => link.rel === 'canonical').map(link => link.href),
    alternates: alternates(head),
    ogUrl: [...head.matchAll(/<meta\b[^>]*>/g)].map(match => attrs(match[0]))
      .find(meta => meta.property === 'og:url')?.content,
  }]];
}));
const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
const entries = [...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)].map(match => ({
  url: match[1].match(/<loc>(.*?)<\/loc>/)[1],
  alternates: alternates(match[1]),
}));

test('every page declares one existing canonical in the same language', () => {
  assert.ok(pages.size > 80, 'Inspect the whole multilingual site');
  for (const [url, page] of pages) {
    const expected = aliases.get(url) || url;
    assert.deepEqual(page.canonicals, [expected], url);
    assert.equal(pages.get(expected)?.language, page.language, url);
    assert.equal(page.ogUrl, expected, `Open Graph URL on ${url}`);
  }
});

test('hreflang groups are reciprocal and point only to canonical pages', () => {
  for (const [url, page] of pages) {
    assert.deepEqual(Object.keys(page.alternates).sort(), ['de', 'en', 'es', 'fr', 'pt-BR', 'x-default'], url);
    assert.equal(page.alternates[page.language], page.canonicals[0], url);
    for (const [language, target] of Object.entries(page.alternates)) {
      const alternate = pages.get(target);
      assert.ok(alternate, `${url}: missing ${target}`);
      assert.deepEqual(alternate.canonicals, [target], `${url}: non-canonical ${target}`);
      if (language !== 'x-default') assert.equal(alternate.language, language, target);
      assert.deepEqual(alternate.alternates, page.alternates, `Return links between ${url} and ${target}`);
    }
  }
});

test('sitemap lists every canonical once and agrees with HTML hreflang', () => {
  const urls = entries.map(entry => entry.url);
  assert.equal(urls.length, new Set(urls).size, 'Duplicate sitemap URLs');
  assert.deepEqual(new Set(urls), new Set([...pages.values()].map(page => page.canonicals[0])));
  for (const entry of entries) {
    assert.deepEqual(pages.get(entry.url)?.canonicals, [entry.url], entry.url);
    assert.deepEqual(entry.alternates, pages.get(entry.url).alternates, entry.url);
  }
});

test('internal navigation, language selectors and assets resolve to existing files', () => {
  for (const [url, page] of pages) {
    for (const match of page.html.matchAll(/<(?:a|link|script|img|source|option)\b[^>]*>/g)) {
      const attributes = attrs(match[0]);
      const reference = attributes.href || attributes.src || attributes.value;
      if (!reference) continue;
      const target = new URL(reference.replaceAll('&amp;', '&'), url);
      if (target.origin !== origin) continue;
      const relative = decodeURIComponent(target.pathname).slice(1);
      const file = path.join(root, relative.endsWith('/') || !relative ? relative + 'index.html' : relative);
      assert.ok(fs.existsSync(file) && fs.statSync(file).isFile(), `${url}: broken ${reference}`);
      if (/^<(?:a|option)\b/.test(match[0]) && !reference.startsWith('#')) {
        assert.ok(!aliases.has(`${target.origin}${target.pathname}`), `${url}: navigation points to duplicate ${reference}`);
      }
    }
  }
});

test('English aliases keep the same page content as their canonical targets', () => {
  function bodyText(page) {
    return page.html.match(/<body\b[^>]*>([\s\S]*?)<\/body>/)[1]
      .replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '')
      .replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  }
  for (const [alias, canonical] of aliases) {
    assert.equal(bodyText(pages.get(alias)), bodyText(pages.get(canonical)), alias);
  }
});
