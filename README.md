# versaliate.com

Official website for Versaliate and its games, with Versalox as the current main project.

The site is a dependency-free static GitHub Pages project. It supports German, English, French, Spanish and Brazilian Portuguese through dedicated language URLs and a manual language selector.

## Landing-page content and presentation

The public release is Prototype 0.0.2, covering Eras 1 and 2. Era 3 is in development; the 17-era framework is a long-term vision. Keep this distinction in all five translations when updating release copy. The landing pages introduce Versaliate as a solo developer based in Switzerland.

Landing-page text is rendered directly in each `index.html`, including the English alias. They load `language-nav.js` once for the language selector. The legacy `script.js` translation/animation bundle is not loaded by these static pages. Keep content visible by default in CSS, so a missing script cannot hide entire sections. The header background also works without JavaScript.

When changing the layout, check desktop and mobile views, language navigation, content visibility and the download button in addition to the automated SEO checks below.

## Publishing

The `main` branch is published through GitHub Pages with the custom domain `www.versaliate.com` defined in `CNAME`.

## Search indexing and canonical URLs

The English homepage and Codex overview use `/` and `/codex.html` as their canonical URLs. The existing `/en/` and `/en/codex.html` pages remain accessible for old links and declare those root URLs as canonical. English Codex articles keep their `/en/codex-*.html` URLs.

Navigation, language selectors, `hreflang`, Open Graph URLs, structured-data breadcrumbs and the sitemap use the canonical destinations. The sitemap includes only canonical pages. Keep language alternates reciprocal when adding or editing pages.

Run the dependency-free checks with Node.js:

```sh
node --test tests/seo.test.cjs
```

The checks cover canonical targets, reciprocal language alternates, sitemap consistency, internal navigation and assets, and content parity for the English aliases. After publishing, inspect the affected URLs in Google Search Console; Google must crawl the updated pages before its canonical selection and reports can change.
