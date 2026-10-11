# versaliate.com

Official website for Versaliate and its games, with Versalox as the current main project.

The site is a dependency-free static GitHub Pages project. It supports German, English, French, Spanish and Brazilian Portuguese through dedicated language URLs and a manual language selector.

## Landing-page content and presentation

The public release is Prototype 0.0.2, covering Eras 1 and 2. The development overview describes the later project state (documented through 30 September 2026), with prototypes across Eras 3–8 and Eras 9–10 as long-term direction. These later systems are not included in the public download. The ten-era framework is flexible. Keep this distinction in all five translations when updating release copy. The landing pages introduce Versaliate as a solo developer based in Switzerland.

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

## Development overview

`development.html` and the four localized pages introduce energy, Versux, the tablet and Vorysken. The landing pages and Codex navigation link to this overview. Keep the public release and development scope explicit in all five languages. Source material: `C:/Versalox/Docs/Versalox_Game_Overview.md`, `Era6_8_Status.md`, `Versux_Tablet_Radio.md` and `Central_Storage_Logistics.md` (27–30 September 2026). No new gameplay screenshots or unreleased download are implied by this update.

## Expanded Codex

The Codex now has 19 entries per language: 15 covering Prototype 0.0.2 and four development articles on energy, Versux, the tablet and Vorysken. Availability filters intersect with category and text search. New articles link to related systems and the development overview. The Versux article includes the current program-media, data-storage and multi-program compute-station concepts; source documentation includes `Versux_Collections_And_Software.md`, `Versux_Physical_Software.md`, `Versux_Data_Memory.md`, `Versux_Multiple_Programs.md` and `Versux_Compute.md` in addition to the earlier overview sources. All new illustrations are existing inventory icons from the game (generator, console, data conduit and blank module); no tablet or storage render is implied.

## Game and systems paper

The complete game and systems reference is available in all five website languages. Each landing, development and Codex overview page links to its matching PDF.

| Language | Pages | PDF |
| --- | ---: | --- |
| Deutsch | 52 | [Download](assets/papers/versalox-spiel-und-systemreferenz.pdf) |
| English | 54 | [Download](assets/papers/versalox-game-and-systems-reference.pdf) |
| Français | 57 | [Download](assets/papers/versalox-reference-du-jeu-et-des-systemes.pdf) |
| Español | 57 | [Download](assets/papers/versalox-referencia-del-juego-y-sus-sistemas.pdf) |
| Português (Brasil) | 54 | [Download](assets/papers/versalox-referencia-do-jogo-e-dos-sistemas.pdf) |

All editions contain 32 explanatory chapters, diagrams, examples and the full registered content snapshot: 187 items, 20 materials, 121 recipes, 129 main objectives and 50 optional quests. The editions use the project snapshot of 11 October 2026 and include a source register. They distinguish public 0.0.2, current prototype systems and future plans. The catalog lists registered data, not a release or balance guarantee. Executable code, API identifiers and numeric values are preserved; translated item and material names retain the original catalog names for lookup.
