# Technical implementation of a bilingual (es/en) software-engineer portfolio, late 2026

All sources were accessed on 2026-11-11. "Updated" dates are each page's own last-updated stamp, where one exists. Bullets marked *(secondary)* or *(via search snippet)* were not checked against a primary source.

## 1. Performance: Core Web Vitals thresholds, image/video/font optimization, cost of heavy animation and 3D, realistic Lighthouse expectations

### Takeaway
The Core Web Vitals thresholds have not changed since INP replaced FID in 2024: LCP ≤ 2.5 s, INP ≤ 200 ms and CLS ≤ 0.1, measured at the 75th percentile and separately for mobile and desktop. Only about half of all sites pass on mobile. A static portfolio that ships little JavaScript can pass comfortably. The usual ways a portfolio fails are a lazy-loaded or hidden hero image (LCP), web-font swaps (CLS), and large JavaScript such as Three.js (INP/TBT on mobile).

### Cited Findings
**Thresholds and metric status**
- The thresholds at p75 are as follows. LCP: good ≤ 2,500 ms, needs improvement 2,500–4,000 ms, poor > 4,000 ms. INP: good ≤ 200 ms, needs improvement 200–500 ms, poor > 500 ms. CLS: good ≤ 0.1, needs improvement 0.1–0.25, poor > 0.25. The 75th percentile was chosen so that most visits meet the target without the value being overly affected by outliers. — [web.dev, Defining the Core Web Vitals thresholds (updated May 7, 2025)](https://web.dev/articles/defining-core-web-vitals-thresholds)
- A page passes only if all three metrics meet their targets at the 75th percentile, segmented by mobile and desktop. INP became a stable Core Web Vital in 2024, replacing FID. Stable Core Web Vitals change at most once a year, and pending metrics stay pending for at least six months. The page names no current experimental candidate. TBT is described as a lab proxy for INP. — [web.dev, Web Vitals (updated Oct 31, 2024)](https://web.dev/articles/vitals)

**Field context: HTTP Archive Web Almanac 2025, July 2025 data**
- 48% of mobile sites and 56% of desktop sites have good Core Web Vitals. — [Web Almanac 2025, Performance](https://almanac.httparchive.org/en/2025/performance)
- Share with a good score on each metric: LCP 62% mobile and 74% desktop; INP 77% mobile and 97% desktop; CLS 81% mobile and 72% desktop. — [Web Almanac 2025](https://almanac.httparchive.org/en/2025/performance)
- Home pages do worse than secondary pages: 45% vs 56% on mobile and 47% vs 61% on desktop. — [Web Almanac 2025](https://almanac.httparchive.org/en/2025/performance)
- The LCP element is an image on 76.0% of mobile pages and 85.3% of desktop pages, and text on 23.7% and 14.4%. About 17% of mobile pages lazy-load their LCP image. `fetchpriority="high"` appears on 17.3% of mobile and 16.3% of desktop pages whose LCP is an image. Median TBT is 1,916 ms on mobile and 92 ms on desktop. — [Web Almanac 2025](https://almanac.httparchive.org/en/2025/performance)

**LCP and images**
- Suggested split of LCP time: TTFB about 40%, resource load delay under 10%, resource load duration about 40%, element render delay under 10%. — [web.dev, Optimize LCP (updated Mar 31, 2025)](https://web.dev/articles/optimize-lcp)
- The page's advice:
  - Put the LCP `<img>` `src`/`srcset` in the initial HTML, and avoid lazy-load libraries that use `data-src`.
  - Use `fetchpriority="high"` on one or two images at most, and `fetchpriority="low"` on hidden carousel slides.
  - The page states: "Never lazy-load your LCP image."
  - Preload CSS background images that could be the LCP element.
  - Serve correctly sized AVIF/WebP images.
  - Use a CDN, avoid redirects, and serve critical resources from the same origin.
  - Avoid client-side rendering of LCP content; prefer SSG or prerendering, and don't hide the LCP element until JavaScript loads.
  - Inline small CSS, defer non-critical CSS and scripts, and break up long tasks.

  — [web.dev, Optimize LCP](https://web.dev/articles/optimize-lcp)
- Elements that can be the LCP: `<img>`, `<image>` inside `<svg>`, `<video>` (poster or first frame, whichever comes first), elements with a `url()` background image, and block-level text. CSS gradients don't count. Chromium excludes elements with opacity 0, elements that cover the full viewport (treated as background), and low-entropy placeholder images. `<canvas>`/WebGL is not on the list. — [web.dev, LCP (updated Sep 4, 2025)](https://web.dev/articles/lcp)

**Video**
- Replace GIFs with `<video autoplay loop muted playsinline>`, providing MP4 (H.264) and WebM (VP9), with WebM listed first so it is preferred. The page's example turned a 3.7 MB GIF into a 551 KB MP4 and a 341 KB WebM. Without a `poster` attribute, the video is not an LCP candidate. — [web.dev, Replace animated GIFs with video](https://web.dev/articles/replace-gifs-with-videos)

**Fonts**
- Put `@font-face` rules inline in `<head>`. Preconnect when fonts come from a third party. Preload sparingly, and in one format only. Self-hosting is not automatically faster: it needs a CDN and HTTP/2, and should be measured. — [web.dev, Best practices for fonts](https://web.dev/articles/font-best-practices)
- Use WOFF2, which is about 30% smaller than WOFF. Subset with `unicode-range`, after checking the font licence allows it. Use fewer fonts, or `system-ui`. Variable fonts help mainly when you use many styles. — [web.dev, fonts](https://web.dev/articles/font-best-practices)
- Without `font-display`, Chromium and Firefox block text for up to 3 s and Safari blocks indefinitely. The options trade off as follows:
  - `swap`: 0 ms block, but can cause CLS.
  - `optional`: 100 ms block and no swap, so no font-swap CLS.
  - `fallback`: 100 ms block, then a 3 s swap period.

  You can combine them, e.g. `swap` for branding and `optional` for body text. Replace icon fonts with SVG, and use `size-adjust` on fallback fonts to reduce CLS. — [web.dev, fonts](https://web.dev/articles/font-best-practices)
- The Astro 6 Fonts API takes fonts from local files, Google or Fontsource. It downloads and caches them for self-hosting, generates optimized fallbacks and adds preload hints, all through the `<Font />` component. — [Astro 6 release post](https://astro.build/blog/astro-6/)

**Heavy JavaScript, animation and 3D**
- *(secondary)* Blog sources say Three.js core is about 600 KB minified before scene code, models and textures. A large bundle parsed before the hero text renders pushes LCP up. INP suffers from long main-thread tasks; the suggested fixes are deferring or lazy-loading the scene, splitting long tasks and using Web Workers. Lighthouse lab runs barely capture INP, so they recommend real-user data via the `web-vitals` library. — [hontran.dev](https://www.hontran.dev/blog/core-web-vitals-for-animation-heavy-sites); [utsubo.com](https://www.utsubo.com/blog/webgl-three-js-site-seo-rankable-guide)
- **Conflict:** one search-surfaced blog said the LCP element on a Three.js hero "is usually the canvas". That contradicts [web.dev's list of LCP-eligible elements](https://web.dev/articles/lcp), which does not include `<canvas>`.

**Lighthouse and measurement**
- Lighthouse 10 performance weights: FCP 10%, Speed Index 10%, LCP 25%, TBT 30%, CLS 25%. Score bands are 0–49 poor, 50–89 needs improvement and 90–100 good. Much of the run-to-run variability comes from outside Lighthouse (network, extensions, device), so scores should be read as a distribution. — [Chrome for Developers, Lighthouse performance scoring](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring)
- Free real-user monitoring options:
  - Vercel Speed Insights (Hobby): 10,000 events over the last 30 days. — [Vercel Hobby plan (updated 2026-09-14)](https://vercel.com/docs/plans/hobby)
  - Cloudflare Web Analytics: collects real-user page performance through a JavaScript beacon. — [Cloudflare Web Analytics docs](https://developers.cloudflare.com/web-analytics/about/)

### Inferences
- **Checklist:**
  - Build static HTML (SSG) that ships no JavaScript by default and hydrates only the components that need it.
  - Make the hero either text-led (block text as LCP) or a real `<img>` in the HTML with `width`/`height`, `fetchpriority="high"`, no `loading="lazy"`, and AVIF/WebP via `srcset`/`sizes`.
  - Lazy-load everything below the fold.
- Avoid full-bleed hero background images or videos as the main content. They are excluded from LCP, so the LCP falls on some other element, and they still cost bandwidth.
- **Fonts for a Spanish/English site:**
  - Use one or two families in WOFF2, self-hosted with the Astro Fonts API or `next/font`.
  - Subset to Basic Latin plus Latin-1 Supplement; á é í ó ú ü ñ ¿ ¡ are all in Latin-1.
  - Use `swap` with a size-adjusted fallback for headings, and `optional` or `system-ui` for body text.
- **3D as progressive enhancement:**
  - Render the text or poster first.
  - Load Three.js with a dynamic `import()` only when it is visible or the browser is idle, and skip it under `prefers-reduced-motion` and Save-Data.
  - Pause the render loop when the scene is off-screen or the tab is hidden.
  - Since 3D raises TBT (30% of the Lighthouse score) and mobile INP, frontend and creative roles benefit most from it. For backend and systems profiles it is mostly cost.
- **Realistic targets:** "good" Core Web Vitals at p75 on mobile, and a Lighthouse mobile score of 90+ (median of several runs) for a static Astro-style site. Expect the score to fall noticeably once a WebGL scene or a heavy animation library loads early. This is an inference from the TBT weighting and the Almanac's mobile TBT median, not a benchmark.
- A low-traffic portfolio may lack field data in PageSpeed Insights. Use your own RUM (Cloudflare Web Analytics, Speed Insights or `web-vitals`) and repeated lab runs.

### Gaps
- No authoritative benchmark was found that measures Three.js's effect on portfolio Core Web Vitals. The bundle-size and LCP figures come from unverified blogs.
- web.dev does not explicitly say whether canvas/WebGL is excluded from LCP. The inference rests on the element not being in the eligible list.
- CrUX's minimum-traffic rule for including small sites was not checked.
- Lazy-loading guidance for `<video>` was not covered by the fetched web.dev pages.
- The Lighthouse version current in November 2026, and whether its weights changed after v10, could not be confirmed: the scoring page shows the Lighthouse 10 table without stating the current version.

## 2. Accessibility: WCAG 2.2 AA essentials, most common failures in developer portfolios, effect on hiring perception

### Takeaway
WCAG 2.2 AA is the practical bar; it has been a W3C Recommendation since October 2023. For a portfolio that means fixing the six failures WebAIM finds every year: contrast, alt text, labels, empty links, empty buttons and missing `lang`. On top of those come the WCAG 2.2 additions (focus not obscured, 24×24 px targets) and reduced-motion support. Evidence that hiring managers judge portfolios on accessibility specifically is thin. Surveys do show that employers value accessibility skills and report a shortage of them.

### Cited Findings
- WCAG 2.2 became a W3C Recommendation on 5 October 2023 and adds nine success criteria (SC):

  | SC | Level | Requirement |
  |---|---|---|
  | 2.4.11 Focus Not Obscured (Minimum) | AA | The focused element is at least partly visible, not hidden by author content |
  | 2.4.12 Focus Not Obscured (Enhanced) | AAA | The focused element is fully visible |
  | 2.4.13 Focus Appearance | AAA | Indicator at least a 2 CSS px perimeter, with 3:1 contrast between states |
  | 2.5.7 Dragging Movements | AA | A single-pointer alternative exists for dragging |
  | 2.5.8 Target Size (Minimum) | AA | Targets at least 24×24 CSS px, or a spacing exception applies |
  | 3.2.6 Consistent Help | A | Help appears in the same relative order across pages |
  | 3.3.7 Redundant Entry | A | Information already entered is not asked for again |
  | 3.3.8 Accessible Authentication (Minimum) | AA | No cognitive test without an alternative |
  | 3.3.9 Accessible Authentication (Enhanced) | AAA | No cognitive test, such as object recognition |

  4.1.1 Parsing is obsolete and was removed. The other 2.0/2.1 criteria are essentially unchanged. — [W3C WAI, What's New in WCAG 2.2](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/)
- SC 2.3.3 Animation from Interactions (AAA): motion animation triggered by interaction must be possible to disable, unless it is essential. The intent mentions vestibular disorders and uses parallax as an example of non-essential motion. Sufficient techniques are C39 (the CSS `prefers-reduced-motion` query), SCR40 (the same query read from JavaScript) and a user preference setting. Animation that starts on its own falls under SC 2.2.2 Pause, Stop, Hide (Level A). — [W3C, Understanding SC 2.3.3](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html)
- WebAIM Million 2026 (data from February 2026; page updated Mar 30, 2026):
  - 95.9% of home pages had detectable WCAG 2 failures, up from 94.8%.
  - Pages averaged 56.1 errors, up 10.1%.

  — [WebAIM Million](https://webaim.org/projects/million/)
- The most common failures, by share of home pages: low-contrast text 83.9%, missing alt text 53.1%, missing form labels 51%, empty links 46.3%, empty buttons 30.6%, missing document language 13.5%. — [WebAIM Million](https://webaim.org/projects/million/)
- Pages that used ARIA averaged 59.1 errors, against 42 for pages without it. 82.7% of pages use ARIA, and 22% of ARIA menus introduced barriers. — [WebAIM Million](https://webaim.org/projects/million/)
- Average errors by technology, which the report notes are correlations only: Astro 9.0 (−84% vs. the average), Next.js 40.9, React 43.5, Nuxt 54.7, Vue 64.6, Bootstrap 63.3. — [WebAIM Million](https://webaim.org/projects/million/)
- Dark mode is a need for some low-vision users, not only a preference. Avoid pure white text on dark backgrounds because it glows, and respect the user's choice. — [web.dev, prefers-color-scheme](https://web.dev/articles/prefers-color-scheme)
- Cloudflare Turnstile's free plan claims WCAG 2.2 AAA compliance, which makes it relevant as a non-puzzle CAPTCHA alternative for contact forms. — [Cloudflare Turnstile plans](https://developers.cloudflare.com/turnstile/plans/)
- *(via search snippet; PDF not opened)* In a Teach Access survey of 107 respondents, 77% said hiring designers and developers with accessibility skills is important or very important, and 63% said their current staff lack the needed skills. — [Teach Access 2023 Accessibility Skills Gap white paper](https://www.teachaccess.org/wp-content/uploads/2023/06/2023-Accessibility-Skills-Gap-White-Paper-Final-Tagged.pdf)
- *(via search snippet)* A University of Phoenix survey found hiring managers gave slightly more weight to non-credit accessibility courses (36%) than to certification (35%). — [University of Phoenix workplace accessibility skills survey](https://phoenix.edu/content/dam/edu/media-center/doc/workplace-accessibility-skills-survey.pdf)

### Inferences
- **WCAG 2.2 AA checklist for a portfolio.** (SC numbers not listed in the 2.2 table above are standard WCAG 2.x criteria; the spec was not re-fetched this session.)
  - **Semantics:**
    - Landmarks (`header`, `nav`, `main`, `footer`) and a skip link.
    - One `h1` per page and headings in order.
    - Project grids marked up as lists of `article` elements with real headings.
    - `<a>` for navigation and `<button>` for actions.
  - **Language:**
    - `<html lang="es">` or `lang="en"` per page (3.1.1, A).
    - `lang` on foreign-language fragments, such as the switcher label "English" on a Spanish page (3.1.2, AA).
  - **Contrast:**
    - 4.5:1 for body text and 3:1 for large text (1.4.3).
    - 3:1 for UI components and focus indicators (1.4.11).
    - Check both light and dark themes. Low contrast is the most common failure, at 83.9% of home pages.
  - **Focus:**
    - Never remove the outline without a replacement; style `:focus-visible`.
    - Use `scroll-padding-top` so a sticky header doesn't cover the focused element (2.4.11 AA).
  - **Targets:** icon links (social icons, theme toggle, language switcher) at least 24×24 CSS px (2.5.8 AA).
  - **Names:** give icon-only links and buttons an accessible name, using visible text or `aria-label`. Most "empty links/buttons" errors look like they come from these icon-only controls.
  - **Images:** meaningful `alt` text for project screenshots that describes what they show, and `alt=""` for decorative ones.
  - **Forms:** visible `<label>`s, errors linked with `aria-describedby`, and no puzzle CAPTCHAs.
  - **Motion:** `prefers-reduced-motion` disables parallax, scroll-driven effects, auto-rotating 3D and typed-text animations. Autoplaying video longer than 5 s needs a pause control (2.2.2).
  - **ARIA:** prefer native HTML to ARIA, given WebAIM's correlation between ARIA use and errors and its finding that 22% of ARIA menus were broken.
- **Likely common failures in developer portfolios.** This is inferred from WebAIM's top six plus typical portfolio patterns; no portfolio-specific dataset was found:
  - grey-on-dark text in dark themes;
  - icon-only GitHub/LinkedIn links;
  - focus rings removed for aesthetics;
  - custom cursors;
  - "terminal" typed-text effects that screen readers read poorly;
  - content that exists only inside a canvas;
  - motion with no reduced-motion fallback;
  - untagged PDF résumés;
  - a missing or wrong `lang` on the second-language pages.
- **Hiring perception.** No study isolates this. A reasonable reading is that accessibility quality signals frontend craft, and obvious failures (unreadable contrast, a broken keyboard path) are a negative signal that a reviewer can spot in seconds. A short accessibility statement on the site can make the effort visible.
- **Testing:** automated checks (axe or the Lighthouse accessibility audit), a keyboard-only pass, and a screen reader pass (NVDA or VoiceOver), in both languages.

### Gaps
- No dataset or audit specifically of developer portfolios was found.
- No hiring-manager study on whether portfolio accessibility affects candidate evaluation was found. The Teach Access and Phoenix figures concern accessibility skills in general.
- The status and timeline of WCAG 3 were not checked; the W3C page only links to a "WCAG 3 Draft".
- Legal accessibility requirements in Mexico, Spain or the EU were not researched. They are probably not applicable to a personal portfolio, but that is unverified.

## 3. SEO and sharing: titles and descriptions, Open Graph and dynamic OG images, JSON-LD, sitemap, canonicals, ranking for one's own name, Search Console, rel="me"

### Takeaway
Google's documentation gives a clear recipe:
- Write unique, descriptive titles in the page's own language.
- Put `WebSite` structured data on the domain home page for the site name.
- Add `ProfilePage` with a `Person` (with `sameAs`) on the about or home page.
- Use reciprocal hreflang with x-default, and a self-referencing absolute canonical for each language version.
- Publish a sitemap, and generate a 1200×630 OG image per page.

Portfolio project pages generally don't qualify for SoftwareApplication rich results because those require ratings or reviews.

### Cited Findings
- **Titles:**
  - Every page needs a descriptive, concise and distinct `<title>`. Avoid vague titles like "Home" or "Profile", keyword stuffing and boilerplate.
  - Brand concisely at the start or end with a delimiter.
  - Write the title in the same language and script as the page's main content, or Google may replace it.
  - Title links are truncated to fit the device width.
  - Google builds title links from `<title>`, the main visible title or `h1`, `og:title`, other prominent text, anchor text and `WebSite` structured data.

  — [Google, Influencing title links](https://developers.google.com/search/docs/appearance/title-link)
- **Site name:**
  - Add `WebSite` structured data with `name` (required), `url` (required) and optional `alternateName` to the home page. Google also looks at `og:site_name`, `<title>` and headings.
  - The markup must be on the domain or subdomain root; Google's example is that `https://example.com/de/index.html` is not a home page, and subdirectories cannot have their own site name.
  - Use the same markup on duplicate home pages.
  - Validate with the Schema Markup Validator, because the Rich Results Test doesn't support site names.

  — [Google, Site names](https://developers.google.com/search/docs/appearance/site-names)
- **ProfilePage:**
  - For pages centred on a single person or organization affiliated with the site. Blog "About Me" pages qualify.
  - Required: `mainEntity` (a `Person` or `Organization`) with a `name`, or an `alternateName` if `name` is missing.
  - Recommended: `alternateName`, `description`, `identifier`, `image` and `sameAs` on the Person, plus `dateCreated`/`dateModified` on the page.
  - It mainly surfaces in Discussions and Forums features and is not designed specifically for portfolios.

  — [Google, ProfilePage structured data](https://developers.google.com/search/docs/appearance/structured-data/profile-page)
- **SoftwareApplication** rich results require `name`, `offers.price` (0 for free apps) and either `aggregateRating` or `review`. Portfolio projects without genuine ratings can't qualify, and invented ratings would break the guidelines. — [Google, Software app structured data](https://developers.google.com/search/docs/appearance/structured-data/software-app)
- **Canonicals:**
  - Signal strength runs from redirects (strong) and `rel="canonical"` (strong) down to sitemap inclusion (weak).
  - Use absolute URLs, put the canonical in `<head>`, and include a self-referential canonical.
  - The canonical page should be in the same language as the page.
  - `rel="canonical"` with an `hreflang` attribute is not used for canonicalization; use `rel="alternate" hreflang` for language versions.
  - Google prefers URLs that belong to hreflang clusters.
  - Don't use `noindex`, robots.txt or fragments for canonicalization.
  - An HTTP-header canonical works for PDFs.

  — [Google, Consolidate duplicate URLs](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- **hreflang:**
  - Accepted as HTML `<link rel="alternate">`, an HTTP `Link:` header (useful for PDFs) or the sitemap. The three are equivalent, so pick one.
  - Return links are required: "If two pages don't both point to each other, the tags will be ignored."
  - URLs must be fully qualified.
  - x-default covers users whose language matches no version, and is recommended for language selectors and auto-redirecting home pages.
  - Codes are ISO 639-1, optionally with an ISO 3166-1 region. `es-419` is not supported.
  - Google uses neither hreflang nor `lang` to detect a page's language.

  — [Google, Localized versions](https://developers.google.com/search/docs/specialty/international/localized-versions)
- **Sitemap in Astro:**
  - `@astrojs/sitemap` requires `site` and outputs `sitemap-index.xml` plus `sitemap-0.xml`.
  - Its `i18n` option (`defaultLocale` plus a `locales` map such as `es: 'es-ES'`) adds `<xhtml:link rel="alternate" hreflang>` entries per locale.
  - x-default generation is not mentioned.
  - The docs note that Google ignores `changefreq` and `priority`.

  — [Astro docs, @astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
- **Dynamic OG images in Next.js:**
  - The `opengraph-image`/`twitter-image` file conventions use `ImageResponse` from `next/og`, with a 1200×630 example size.
  - Images are statically optimized (generated at build) unless they use request-time APIs.
  - The convention outputs `og:image` with `:alt`, `:type`, `:width` and `:height`, and dynamic segments get per-route images through `params`.
  - Static files must not exceed 8 MB for `opengraph-image` or 5 MB for `twitter-image`, or the build fails.

  — [Next.js docs, opengraph-image (updated 2026-07-09)](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image)
- **rel="me":** Mastodon verification fetches the HTTPS link in your profile and looks for a link back to the Mastodon profile with `rel="me"`, in the body or `<head>`. It must be on the exact page you listed. GitHub adds `rel="me"` to the profile's website field. — [Mastodon docs, profile](https://docs.joinmastodon.org/user/profile); [Simon Willison, TIL](https://til.simonwillison.net/mastodon/verifying-github-on-mastodon); [Eric Meyer, 2022](https://meyerweb.com/eric/thoughts/2022/11/30/how-to-verify-site-ownership-on-mastodon-profiles/)

### Inferences
- **Title pattern:**
  - Inner pages: "{Page} | {Full Name}", written in the page's own language.
  - Home pages: "{Full Name} — Ingeniero de software" on `/es/` and "{Full Name} — Software Engineer" on `/en/`.
  - Write a unique meta description per page and per language.
- **JSON-LD graph.** Property names follow the schema.org vocabulary; schema.org was not re-fetched this session.
  - `WebSite` (`name`, `alternateName`, `url`) only on the true root home page. Because Google doesn't support site names for subdirectories, `/es/` and `/en/` can't each have one.
  - `ProfilePage` → `mainEntity: Person` with `@id`, `name`, `jobTitle`, `image`, `url`, `sameAs` (GitHub, LinkedIn, Mastodon…) and `knowsLanguage` (es, en).
  - `inLanguage` on each page's node.
  - On project pages, `CreativeWork` or `SoftwareSourceCode` (`codeRepository`, `programmingLanguage`, `author` → Person `@id`). This is for entity clarity only; no rich result should be expected.
- **Canonical and hreflang per page:**
  - A self-canonical absolute URL.
  - hreflang alternates for `es`, `en` and `x-default`, listing only translations that exist.
  - Choose one hreflang method: HTML `<link>` tags in a shared `<head>` component, or the sitemap `i18n` option. Combining them adds nothing.
- **Ranking for your own name:**
  - Use exactly the same name in the title, the `WebSite` name, the Person `name` and on your profiles.
  - Link reciprocally: site → profiles with `rel="me"`, profiles → site.
  - Verify the domain property in Search Console, submit `sitemap-index.xml`, and earn links from GitHub, LinkedIn, talks and posts.
- **OG images:**
  - 1200×630, one per page and per locale, with the title text in that page's language.
  - In Astro this is typically a build-time endpoint using Satori with resvg. That is a common pattern but was not verified in Astro docs this session.
  - Add `og:locale` and `og:locale:alternate`; the OGP spec was not fetched.

### Gaps
- Google's meta-description/snippet documentation, Search Console setup docs, the Open Graph protocol spec (`og:locale`) and Satori's CSS limits were not fetched.
- No official Google documentation was found on ranking for a personal name, or on whether Person markup or `sameAs` influences knowledge panels for individuals.
- Whether GitHub currently applies `rel="me"` to its additional social-link fields (reportedly added in 2023) is unverified.

## 4. Bilingual i18n: URL strategy, hreflang plus x-default, html lang, language switcher UX, auto-redirect pitfalls, translation workflow, Astro and Next.js routing today

### Takeaway
- Use language subdirectories, with both languages prefixed (`/es/…`, `/en/…`).
- Add reciprocal hreflang plus x-default and a correct `<html lang>` on every page.
- Use a switcher labelled in text that keeps the user on the equivalent page.
- Never auto-redirect by IP. Limit any Accept-Language redirect to the bare root URL, and mark it as x-default.

Framework support differs: Astro has built-in i18n routing that works for static output; the Next.js App Router has no built-in i18n config and uses a `[lang]` segment plus `proxy.ts` or a library such as next-intl; SvelteKit's official route is Paraglide.

### Cited Findings
- **URL structure options:**
  - Country-code domains are clear but expensive.
  - Subdomains are easy, but users can't tell whether "de" means a language or a country.
  - Subdirectories are easy to set up and maintain.
  - URL parameters are marked "Not recommended".

  — [Google, Managing multi-regional and multilingual sites](https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites)
- **Redirects and adaptation:**
  - Google: "Avoid automatically redirecting users" based on a guessed language.
  - Googlebot usually crawls from the USA and sends no `Accept-Language` header.
  - "Don't use IP analysis to adapt your content."
  - Use a different URL for each language rather than cookies or browser settings, and link to the other language versions.
  - Google does not use `lang` attributes; it detects language from the visible content.

  — [Google, Managing multi-regional sites](https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites)
- The hreflang rules are in section 3: reciprocal, fully qualified, x-default, `es-419` unsupported. The canonical page should be in the same language. — [Google, Localized versions](https://developers.google.com/search/docs/specialty/international/localized-versions); [Google, Consolidate duplicate URLs](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- **Astro i18n routing configuration:**
  - `i18n.locales` and `i18n.defaultLocale`. Locales can be objects with `path` and `codes`, but custom paths require server output.
  - `routing.prefixDefaultLocale` defaults to `false`. With `true`, `redirectToDefaultLocale` sends `/` to `/[defaultLocale]/`.
  - `fallback` maps one locale to another, and `routing.fallbackType` is `"redirect"` (the default) or `"rewrite"`.
  - `domains` requires server rendering and an adapter.
  - `routing: "manual"` lets you write your own logic.
  - Helpers: `getRelativeLocaleUrl()`, `getAbsoluteLocaleUrl()`, `getAbsoluteLocaleUrlList()` and `middleware()`.

  — [Astro docs, i18n routing](https://docs.astro.build/en/guides/internationalization/)
- **Astro locale detection:**
  - `Astro.currentLocale` works on static pages.
  - `Astro.preferredLocale` and `preferredLocaleList` (browser language) work only on on-demand-rendered pages.
  - The docs page doesn't say Astro emits hreflang `<link>` tags automatically.

  — [Astro docs, i18n routing](https://docs.astro.build/en/guides/internationalization/)
- Astro 7 adds Advanced Routing through an optional `src/fetch.ts`, where `i18n()` is a composable middleware. Without that file, Astro "behaves exactly as it does today". — [Astro 7 release post](https://astro.build/blog/astro-7/)
- **Next.js App Router** (docs updated 2026-11-06):
  - Put routes under `app/[lang]`.
  - Detect the locale in `proxy.js` (which replaced middleware) from `Accept-Language`, using `@formatjs/intl-localematcher` and `negotiator`, and redirect paths that have no locale.
  - Load JSON dictionaries server-side with `server-only`, and read the locale anywhere with `next/root-params`.
  - Generate static routes per locale with `generateStaticParams`, and set `<html lang>` in `[lang]/layout`.
  - Listed libraries: next-intl, next-international, next-i18n-router, paraglide-next, lingui, tolgee, next-intlayer and gt-next.

  — [Next.js docs, Internationalization](https://nextjs.org/docs/app/guides/internationalization)
- **SvelteKit:**
  - `npx sv add paraglide` sets up Paraglide: Inlang project settings, the Vite plugin, `reroute` and `handle` hooks, and `lang`/`dir` in `app.html`, with languages given as BCP 47 tags.
  - Paraglide compiles messages into tree-shakable functions and is described as SvelteKit's official i18n integration.

  — [Svelte docs, sv add paraglide](https://svelte.dev/docs/cli/paraglide)
- **Language switcher UX** *(vendor and blog sources, consistent with each other)*:
  - Flags represent countries, not languages, which is a problem for languages spoken in many countries.
  - Use language names written in their own language and script, adding codes if helpful.
  - If you keep flags, pair them with text.
  - A dropdown suits 2–4 languages.

  — [SimpleLocalize](https://simplelocalize.io/blog/posts/flags-as-language-in-language-selector/); [Smartling](https://www.smartling.com/blog/language-selector-best-practices); [UX Planet](https://uxplanet.org/what-is-wrong-with-flag-icons-for-languages-according-to-ux-designers-ef7340423b82); [Localize](https://localizejs.com/articles/why-using-flag-icons-can-confuse-your-users)
- 13.5% of home pages are missing a document language. — [WebAIM Million 2026](https://webaim.org/projects/million/)
- **Conflict:** the Next.js guide recommends redirecting based on `Accept-Language` ([Next.js docs](https://nextjs.org/docs/app/guides/internationalization)), while Google advises avoiding automatic redirection ([Google](https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites)). Google's hreflang guide does allow an auto-redirecting home page if it is annotated as x-default ([Google](https://developers.google.com/search/docs/specialty/international/localized-versions)).

### Inferences
- **URLs:**
  - `example.com/es/...` and `example.com/en/...`, using Astro's `prefixDefaultLocale: true`.
  - Keep the same slugs in both languages (`/es/proyectos/x` vs `/en/projects/x` is optional complexity). Map equivalents with a `translationKey` in frontmatter.
- **Root `/`:**
  - Either a lightweight language chooser or an edge redirect (302 with `Vary: Accept-Language`) to the preferred language, annotated as `hreflang="x-default"`.
  - On purely static hosts, use Astro's `redirectToDefaultLocale` and set x-default to the `/` URL or to `/en/` as the international fallback.
  - Never redirect deep links such as `/es/proyectos/x`. Recruiters share them, users on VPNs or abroad get the wrong guess, and Googlebot sends no `Accept-Language`.
- **Spanish code:** use `es` for neutral Spanish, or `es-MX` only if deliberately targeting Mexico. Google doesn't recognize `es-419`.
- **`<html lang>`:** set it per page from the route locale, and add `dir="ltr"`. Even though Google ignores `lang`, it affects screen-reader pronunciation, hyphenation and spell-check, and missing `lang` is a WebAIM top-six failure.
- **Switcher:**
  - For two languages, a single visible text link is enough, e.g. `<a href="/en/projects/x/" hreflang="en" lang="en">English</a>` on Spanish pages and "Español" on English pages, in both header and footer.
  - Keep the user on the equivalent page. If no translation exists, link to that locale's home page and say so.
  - No flags.
  - Store an explicit choice in a cookie or localStorage, and use it only for the behaviour of `/`.
- **Content structure:**
  - Long-form case studies: `src/content/projects/{es,en}/<slug>.mdx` (Astro content collections) with a shared `translationKey`, `lastTranslated` and `translatedFrom` fields.
  - UI strings: `src/i18n/{es,en}.json`, with typed keys (TypeScript `satisfies`) or Paraglide messages.
  - Dates and numbers: `Intl.DateTimeFormat` / `NumberFormat` (`es-MX` / `en-US`).
- **Workflow:**
  - Write in your stronger language, translate (machine translation is fine as a draft), then edit by hand.
  - CI fails when a UI key or a project exists in only one locale, unless it is deliberately marked untranslated. In that case, omit the hreflang pair rather than pointing it at a fallback.

### Gaps
- Whether Astro 7 emits hreflang `<link>` tags automatically was not confirmed; the docs don't mention it, so assume they must be added manually with `getAbsoluteLocaleUrlList()`.
- Whether `@astrojs/sitemap` emits x-default was not stated.
- next-intl's current version and its App Router/`proxy.ts` integration details were not checked.
- No quantitative UX research on language switchers was found; the sources are vendor blogs.

## 5. Stack and hosting for 2026: Astro vs. Next.js vs. SvelteKit vs. plain HTML, content via MDX/collections, hosting free tiers, privacy-friendly analytics, contact forms without exposing email, spam protection

### Takeaway
Current versions as of 2026-11-11 are Astro 7.4 (Astro 7.0 shipped June 22, 2026), Next.js 16.4 (Next.js 17 not yet released) and SvelteKit 3.0 (reported stable in October 2026). For a content-led, mostly static bilingual portfolio on a free budget, the best-supported default is:
- Astro 7 as a static build, with content collections and MDX;
- hosting on Cloudflare, where static-asset requests are free and unlimited;
- Cloudflare Web Analytics or Umami;
- a contact form built from a tiny Function, Turnstile and Resend, or Formspree.

The alternatives each have a catch. Vercel Hobby is free but limited to non-commercial use. Netlify Free's 300 credits cap production deploys at about 20 a month. GitHub Pages is fine for a purely static site but has no server functions.

### Cited Findings
**Frameworks: versions and features (checked 2026-11-11)**
- **Astro 6.0** (March 10, 2026):
  - Requires Node 22 or later.
  - Built-in Fonts API.
  - CSP API now stable; `security: { csp: true }` hashes scripts and styles and emits CSP headers.
  - Live Content Collections now stable.
  - The rebuilt Cloudflare adapter runs `workerd` in dev, prerender and production.
  - Experimental Rust compiler.

  — [Astro 6 release post](https://astro.build/blog/astro-6/); release date confirmed by [Netlify changelog](https://netlify.com/changelog/2026-03-10-astro-6/)
- *(secondary)* Cloudflare reportedly acquired the team behind Astro in January 2026, and Astro 6 was the first major release under Cloudflare. This was not verified against an official announcement. — [InfoQ](https://www.infoq.com/news/2026/02/astro-v6-beta-cloudflare); [blog post](https://asepalazhari-com-astro.pages.dev/blog/astro-6-upgrade-cloudflare-era)
- **Astro 7.0** (June 22, 2026):
  - Vite 8, with Rolldown replacing esbuild and Rollup.
  - A new Rust compiler, a "full rewrite" described as "mostly backwards compatible".
  - Sätteri is the default Markdown/MDX processor.
  - Queued rendering is stable and the default; route caching is stable.
  - Advanced Routing through `src/fetch.ts`.
  - Experimental CDN cache providers for Netlify, Vercel and Cloudflare.
  - Background dev server and JSON logging.
  - Breaking changes: no automatic HTML correction, stricter handling of unclosed tags, and collapsed whitespace between elements. Upgrade with `npx @astrojs/upgrade`.

  — [Astro 7 release post](https://astro.build/blog/astro-7/)
- **Astro 7 point releases:** 7.1 (Jul 16, 2026), 7.2 (Aug 6, 2026, experimental incremental static builds), 7.3 (Sep 3, 2026) and 7.4 (Oct 15, 2026, the latest). — [Astro blog index](https://astro.build/blog/)
- **Next.js 16** (Oct 21, 2025): Cache Components, stable Turbopack, React Compiler support, and `proxy.ts` replacing middleware. — [Next.js blog](https://nextjs.org/blog); [Next.js 16 post](https://nextjs.org/blog/next-16)
- Next.js 16 requires Node 20.9 or later. *(secondary)* — [LogRocket](https://blog.logrocket.com/next-js-16-whats-new)
- **Next.js after 16.0:**
  - 16.1 (Dec 18, 2025).
  - 16.2 (Mar 18, 2026): stable Adapter API for non-Vercel platforms.
  - 16.3 (Aug 3, 2026): Instant Navigations.
  - 16.4 (Oct 6, 2026).
  - Security releases through Nov 3, 2026.
  - No Next.js 17 post on the blog as of 2026-11-11.

  — [Next.js blog](https://nextjs.org/blog)
- *(via search snippet)* The 16.4 post says Cache Components will become the default in Next.js 17. — [Next.js 16.4](https://nextjs.org/blog/next-16-4)
- *(secondary)* SvelteKit 3.0 reportedly shipped stable in late September or early October 2026, with TypeScript 6 and Node 22 as minimums and a full refresh of adapters. The 2.x line ran through 2.67.0 (June 22, 2026). Verify on GitHub or npm. — [releases.sh digest, Sep 28–Oct 4, 2026](https://releases.sh/collections/frontend-frameworks/digest/2026-09-28); [releases.sh digest, Jul 2026](https://releases.sh/collections/frontend-frameworks/digest/2026-07-06)
- Sites built with Astro averaged 9.0 accessibility errors per home page, against 40.9 for Next.js and 43.5 for React. These are correlations, not causes. — [WebAIM Million 2026](https://webaim.org/projects/million/)

**Hosting free tiers (checked 2026-11-11)**

| Host | Free-tier facts | Source |
|---|---|---|
| Vercel Hobby (updated 2026-09-14) | **Pricing and terms:** free, but "restricts users to non-commercial, personal use only". **Usage included per month:** 100 GB Fast Data Transfer; 1M CDN requests; 1M function invocations; 4 active CPU-hours; 5,000 image transformations; 50,000 Web Analytics events (1 month of data); 10,000 Speed Insights events. **Account limits:** 100 deployments/day; 200 projects; 50 domains per project. **Over the limit:** usually wait 30 days; Web Analytics collection resumes after 7 days. | [Vercel Hobby](https://vercel.com/docs/plans/hobby) |
| Vercel definition of "commercial" | **Definition:** any deployment "used for the purpose of financial gain of **anyone** involved in **any part of the production**". **Examples include:** "Advertising the sale of a product or service" and receiving payment to create or host the site. Donations are exempt; contact support if unsure. | [Vercel Fair Use Guidelines (updated 2026-09-14)](https://vercel.com/docs/limits/fair-use-guidelines) |
| Netlify Free | **Allowance:** "$0 forever", with a "300 credit limit". **Credit costs:** production deploy 15 credits each; bandwidth 20 credits/GB; requests 2 credits per 10,000; compute 10 credits/GB-hour. **Included:** custom domains with SSL, unlimited deploy previews, functions, CDN, basic rate limiting. **Paid tiers:** Personal $9/mo (1,000 credits); Pro $20/mo (3,000 credits). | [Netlify pricing](https://www.netlify.com/pricing/) |
| Netlify credit exhaustion | **Community reports:** Free teams that run out of credits get production deploys paused, with warnings that projects may go offline. Some report pauses persisting after the monthly reset. These are forum posts, not official documentation. | [Netlify forum](https://answers.netlify.com/t/free-plan-production-deploys-paused-but-usage-looks-minimal/167358); [Netlify forum](https://answers.netlify.com/t/projects-still-paused-after-credits-reset/163197) |
| Cloudflare Pages Free (updated Sep 5, 2026) | **Builds:** 500/month; 1 concurrent; 20-minute timeout. **Files:** 20,000 per site; 25 MiB per asset. **Projects and domains:** 100 custom domains per project; 100 projects. **Config limits:** 100 `_headers` rules; 2,000 static + 100 dynamic redirects. **Other:** unlimited previews; Pages Functions count against the Workers quota. | [Cloudflare Pages limits](https://developers.cloudflare.com/pages/platform/limits/) |
| Cloudflare Workers static assets (updated Nov 3, 2026) | **Static assets:** "Requests to static assets are free and unlimited"; storage is free. **Worker requests:** requests that run the Worker (SSR, APIs) are billed under Workers pricing. | [Workers static assets billing](https://developers.cloudflare.com/workers/static-assets/billing-and-limitations/) |
| GitHub Pages | **Limits:** published site ≤ 1 GB; soft bandwidth limit of 100 GB/month; soft limit of 10 builds/hour, which doesn't apply to custom Actions workflows; 10-minute deploy timeout. **Use:** not allowed as free hosting for an online business, e-commerce or SaaS. **HTTPS:** supported on custom domains via Let's Encrypt, with an "Enforce HTTPS" option. | [GitHub Pages limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits); [GitHub Pages HTTPS](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https) |

**Privacy-friendly analytics**
- **Cloudflare Web Analytics:**
  - "Free, privacy-first", and "does not collect or use your visitors' personal data".
  - Works without Cloudflare DNS or proxy, through a JavaScript beacon.
  - Includes real-user performance data.

  — [Cloudflare Web Analytics](https://developers.cloudflare.com/web-analytics/about/)
- **Umami Cloud:**
  - Hobby plan is free: up to 100K events/month, 1 website, 6-month retention.
  - Pro is $20/month for 1M events and 20 sites.
  - Open source, and free to self-host.
  - Vendor claims: no cookies, GDPR/CCPA compliance, no consent banner needed.

  — [Umami pricing](https://umami.is/pricing)
- **Plausible:**
  - Starter is $9/month for up to 10k monthly pageviews on one site.
  - 30-day free trial; no free tier is listed.
  - Open source, so you can run it yourself.
  - Vendor claim: "No cookies".

  — [Plausible](https://plausible.io/)
- **Vercel Web Analytics (Hobby):** 50,000 events/month, 1 month of data. — [Vercel Hobby](https://vercel.com/docs/plans/hobby)

**Contact forms and spam protection**
- **Formspree Free:**
  - 50 submissions/month and unlimited forms.
  - Basic spam filtering (Formshield) and custom reCAPTCHA.
  - "Private Emails" hides your address from bots and visitors.
  - No file uploads.
  - The Personal plan is $15/month ($10/month billed annually) for 200 submissions.

  — [Formspree plans](https://formspree.io/plans)
- **Resend Free:**
  - 3,000 emails/month, capped at 100 per day.
  - 3 custom domains, per the fetched page.
  - 30-day data retention.
  - Pro is $20/month for 50,000 emails.

  — [Resend pricing](https://resend.com/pricing)
- **Cloudflare Turnstile Free:**
  - Up to 20 widgets, with 10 hostnames per widget.
  - Unlimited challenges, and all widget types.
  - 7 days of analytics.
  - Claims WCAG 2.2 AAA compliance.

  — [Turnstile plans](https://developers.cloudflare.com/turnstile/plans/)

### Inferences
- **Recommended default stack (personal budget, bilingual, content-first):**
  - **Astro 7.x with `output: 'static'`:**
    - Content collections: MDX for case studies, YAML or JSON for the résumé data.
    - Built-in i18n with `prefixDefaultLocale: true`.
    - `@astrojs/sitemap` with `i18n`.
    - Astro Fonts API.
    - `astro:assets` `<Picture>` for AVIF/WebP.
    - CSP API for a strict Content-Security-Policy.

    Rationale: it ships no JavaScript by default, which suits LCP and INP; it has first-party i18n and content tooling; and WebAIM's correlation with fewer accessibility errors is a favourable signal, though not a causal one.
  - **Hosting:** Cloudflare Workers static assets or Pages, with a custom domain. Static traffic is free and unlimited, and 500 builds a month is plenty. The contact endpoint is one small Function or Worker that validates the Turnstile token server-side and sends mail through Resend, keeping the API key as a secret. Use `_headers` for CSP and HSTS.
  - **Analytics:** Cloudflare Web Analytics (free, with real-user performance data). Use Umami Cloud Hobby instead if you want custom events, such as "CV downloaded" or "contact submitted".
- **Zero-backend alternative:** GitHub Pages (deployed with Actions), Formspree Free (50 submissions/month is plenty for a portfolio) and Cloudflare Web Analytics. A limitation is that GitHub Pages documents no custom headers (see Gaps), so CSP would need a `<meta>` tag.
- **When to choose Next.js 16:** when the target jobs are React/Next-heavy and the site itself should demonstrate App Router or React Server Components skill.
  - On Vercel Hobby, keep the site strictly non-commercial: no advertising of paid freelance services. Vercel's definition of "commercial" is broad, so a site that offers services for hire probably needs Pro ($20/month) or another host.
  - Otherwise, deploy through the 16.2 Adapter API or OpenNext to Cloudflare or Netlify, or use a static export.
- **When to choose SvelteKit 3:** when Svelte is the skill on show. Pair it with Paraglide for i18n. Confirm the 3.0 adapter for your host is stable first.
- **Plain HTML:** fine for a one-page site. For a multi-page bilingual site, hand-maintained hreflang, sitemaps and duplicated layout drift out of sync, so a static site generator pays for itself.
- **Netlify Free:** 300 credits divided by 15 per production deploy is at most 20 production deploys a month even with zero traffic, and 1 GB of bandwidth costs 20 more credits. Combined with the forum reports of paused deploys, this makes it a weaker fit for a site you iterate on often.
- **Contact without exposing the email:**
  - Avoid a raw `mailto:` link, since harvested addresses attract spam. Use Formspree "Private Emails" or your own endpoint.
  - Layer the spam defences: Turnstile (accessible, no puzzle), a hidden honeypot field, a server-side length/format check, and per-IP rate limiting at the edge.
  - Don't publish a phone number or address on the site or in the PDF.

### Gaps
- The Cloudflare Workers Free daily request limit (commonly cited as 100,000/day) and Cloudflare's free-plan terms on commercial use were not confirmed in the fetched pages.
- Netlify's official documentation on what happens when credits run out was not found; only forum reports were.
- Astro 7's minimum Node.js version and the stability label of the Fonts API were not stated in the fetched posts.
- SvelteKit 3.0's exact version and date are from a secondary aggregator.
- Whether GitHub Pages supports custom response headers isn't covered in the fetched docs.
- Resend's free-plan domain count (3 per the fetched page) should be re-checked at signup.

## 6. Design and UX trends 2025–2026 for developer portfolios (bento grids, minimal typography, dark mode, command palettes, terminal themes, View Transitions, micro-interactions, scroll-driven animations): what helps, what's cliché, and dark/light theming best practices

### Takeaway
The trends that last are about restraint: content-first minimal typography, real case studies, theming that respects the system setting, and motion as progressive enhancement. View Transitions and scroll-driven animations are now viable as enhancements with reduced-motion fallbacks:
- same-document View Transitions have been Baseline since October 2025;
- cross-document transitions are still unsupported in Firefox;
- scroll-driven animations have been Baseline since October 27, 2026.

Terminal themes, command palettes and heavy 3D are optional flourishes. They carry real accessibility and performance costs, and there is weak evidence that they help with hiring.

### Cited Findings
- Same-document View Transitions became Baseline Newly available when Firefox 144 shipped in October 2025. — [web.dev blog, Oct 16, 2025](https://web.dev/blog/same-document-view-transitions-are-now-baseline-newly-available)
- **Cross-document View Transitions** (`@view-transition`, for multi-page sites):
  - Supported in Chrome and Edge 126 (June 2024) and in Safari and iOS Safari 18.2 (December 2024).
  - Not supported in Firefox desktop or Android (bug 1860854).
  - Status is "Limited availability", and Firefox has blocked Baseline since December 2024.

  — [web-features explorer, cross-document view transitions](https://web-platform-dx.github.io/web-features-explorer/features/cross-document-view-transitions/)
- *(secondary)* Interop 2026 lists cross-document View Transitions as a focus area. — [LavX News](https://news.lavx.hu/article/interop-2026-browser-vendors-unite-to-standardize-web-platform-features)
- **Scroll-driven animations** (`animation-timeline`, `scroll-timeline`, `view-timeline`):
  - Baseline Newly available since **2026-10-27**, when Firefox 159 shipped.
  - Earlier support: Chrome 115 (July 2023) and Safari 26 (September 2025).
  - Expected to become Widely available on 2029-04-27.

  — [web-features explorer, scroll-driven animations](https://web-platform-dx.github.io/web-features-explorer/features/scroll-driven-animations/)
- Parallax is the W3C's example of non-essential motion that should be possible to disable, using `prefers-reduced-motion` (technique C39). — [W3C, Understanding SC 2.3.3](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html)
- **Dark/light theming best practices:**
  - Follow the system `prefers-color-scheme` by default, but offer a toggle and persist the user's choice.
  - Declare `color-scheme: light dark` so form controls and scrollbars adapt.
  - Name custom properties by role (`--accent-color`), not by appearance.
  - Use `<meta name="theme-color">` with a `media` attribute for each scheme.
  - Avoid a flash of the wrong theme: load the right CSS early, or use the `Sec-CH-Prefers-Color-Scheme` client hint.
  - Avoid pure white on dark backgrounds, and dim or desaturate images in dark mode.
  - Use `currentColor` for inline SVG, and `<picture>` with `media` for per-theme art direction.
  - Test with DevTools emulation.

  — [web.dev, prefers-color-scheme](https://web.dev/articles/prefers-color-scheme)
- Low-contrast text is the most common accessibility failure, on 83.9% of home pages. — [WebAIM Million 2026](https://webaim.org/projects/million/)
- Elements covering the full viewport are excluded from LCP. A video without a poster is not an LCP candidate. — [web.dev, LCP](https://web.dev/articles/lcp); [web.dev, GIF to video](https://web.dev/articles/replace-gifs-with-videos)
- *(low-rigor opinion sources)* Developer portfolios "will likely remain simple, clean, and minimalistic". Prefer depth over volume: "three meaningful projects instead of twelve cloned tutorials", with each project getting "a chapter rather than a thumbnail". For 3D/creative portfolios, "commit to one strong visual word". Backend developers are warned that weeks spent on fancy animations are better spent on projects. Video backgrounds are listed as a trend. — [svilenkovic.com, 3D portfolio trends 2026](https://www.svilenkovic.com/3d/3d-portfolio-trends-2026); [Colorlib](https://colorlib.com/wp/portfolio-design-trends/); [DEV Community](https://dev.to/__be2942592/how-to-build-a-developer-portfolio-that-actually-gets-you-hired-2026-6kn); [DEV Community](https://dev.to/safdarali25/how-to-build-a-frontend-developer-portfolio-that-stands-out-4d3k)

### Inferences
- **Embrace:**
  - **Minimal typographic layout** with a strong type scale and generous spacing.
  - **Case studies** in a fixed structure: problem → role → constraints → architecture diagram → result/metrics → links to code and live site.
  - **Two to four strong projects** rather than a logo wall.
  - **Theming:**
    - A three-state theme control: system, light, dark.
    - A tiny inline `<head>` script that applies the saved theme before first paint.
    - Contrast checked in both themes, with an off-white text colour.
  - **View Transitions as progressive enhancement:**
    - Same-document transitions for in-page state changes.
    - `@view-transition { navigation: auto; }` for multi-page navigation in Chromium and Safari; Firefox simply navigates normally.
    - All of it inside `@media (prefers-reduced-motion: no-preference)`.
  - **Scroll-driven animations:** CSS-only, behind `@supports (animation-timeline: view())` and the reduced-motion query. CSS timelines avoid JavaScript scroll listeners, which helps INP (an inference, not a measured claim).
  - **Micro-interactions:** short transform/opacity transitions on hover and focus that confirm an action, such as copying the email or sending the form.
- **Use with care:**
  - **Bento grids:** fine as a responsive CSS Grid summary if source order matches visual reading order, each card has a real heading, and whole-card links are built accessibly. They become a cliché when the tiles are filler such as "years of experience" counters or decorative stats.
  - **Command palette (Ctrl/⌘+K):** acceptable only as an extra on top of visible navigation, with an accessible combobox/listbox pattern. As primary navigation it hides content from recruiters who skim.
- **Avoid or treat as clichés:**
  - **Terminal or CLI-themed sites:** low-contrast green-on-black, monospaced body text, typed-text intros that delay content and confuse screen readers. If you want the flavour, use it as an easter egg alongside a conventional UI.
  - **Scroll and cursor gimmicks:** scroll-jacking, custom cursors, preloaders and intro animations.
  - **Unguarded parallax:** parallax with no reduced-motion fallback.
  - **Full-screen 3D heroes:** especially for non-frontend roles.
  - **Skill bars and percentage ratings.**
  - **Flags in the language switcher.**

  The cliché list is an inference: no authoritative source rates these patterns.

### Gaps
- No authoritative or empirical source evaluates bento grids, command palettes or terminal themes in portfolios, or recruiter reactions to them. The trend sources found are SEO blogs and vendor pages.
- No study of recruiter time spent on portfolios was found.
- Design galleries (Awwwards, Godly, etc.) and Smashing Magazine trend pieces were not consulted in this pass.
- Astro's own View Transitions integration (`<ClientRouter />`) and its relationship to native cross-document transitions in Astro 7 was not verified.

## 7. Résumé PDF from a single source of truth, keeping both languages in sync

### Takeaway
Keep the résumé as structured data in the repository, using the JSON Resume schema (v1.7.1) or YAML. Render both the site's `/es/cv` and `/en/cv` pages and the PDFs from that data in CI. JSON Resume has no built-in way to hold several languages, so either keep one file per language or keep localized fields and compile them into two files, and add a parity check. For the PDF engine, either print the site's own print stylesheet with Playwright's `page.pdf()` (which has `tagged` and `outline` options since v1.42), or use a Typst-based renderer such as RenderCV or ferrocv.

### Cited Findings
- The JSON Resume schema is at version 1.7.1. Its sections are `basics`, `work`, `volunteer`, `education`, `awards`, `certificates`, `publications`, `skills`, `languages`, `interests`, `references`, `projects` and `meta`, all optional. `meta` holds `canonical` (URL), `version` (semver) and `lastModified` (ISO 8601). The page says nothing about holding several translations of one résumé. — [JSON Resume schema](https://jsonresume.org/schema)
- JSON Resume's docs list a RenderCV formatter. A converter maps JSON Resume fields to RenderCV's YAML schema. — [JSON Resume, formatters](https://jsonresume.org/docs/010-formatters)
- RenderCV is a CLI that takes a YAML CV, lets you "version-control your CV as source code" and generates the PDF with Typst. — [RenderCV on GitHub](https://github.com/rendercv/rendercv); [RenderCV on PyPI](https://pypi.org/project/rendercv)
- ferrocv is an early-stage Rust tool, distributed as a single binary, that renders JSON Resume to PDF, HTML and text through Typst. — [ferrocv on docs.rs](https://docs.rs/crate/ferrocv/0.5.0)
- **Playwright `page.pdf()`:**
  - Renders with print media by default; call `page.emulateMedia({ media: 'screen' })` to use screen CSS.
  - `format` defaults to Letter.
  - `preferCSSPageSize` lets a CSS `@page` size take priority.
  - `printBackground` prints background graphics; `margin` and `pageRanges` are also available.
  - `tagged` generates an accessible (tagged) PDF, and `outline` embeds a document outline; both were added in v1.42.

  — [Playwright Page API](https://playwright.dev/docs/api/class-page)
- hreflang can be sent as an HTTP `Link:` header, which is useful for non-HTML files such as PDFs. — [Google, Localized versions](https://developers.google.com/search/docs/specialty/international/localized-versions)
- A canonical can also be sent as an HTTP header for PDFs. — [Google, Consolidate duplicate URLs](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- Cloudflare Pages allows up to 100 `_headers` rules, which is enough to set those headers on PDF files. — [Cloudflare Pages limits](https://developers.cloudflare.com/pages/platform/limits/)

### Inferences
- **Data model:**
  - `src/data/resume/base.json` holds facts that don't get translated: dates, URLs, company names, technology names and stable IDs for each entry.
  - `src/data/resume/{es,en}.json` hold the translatable strings, keyed by those IDs.
  - A build step merges them into two valid JSON Resume documents and validates each against the JSON Resume JSON Schema.
  - A parity script fails CI if an ID or a translatable field is missing in either language.
  - Alternative: a single YAML file with `{es, en}` values per field.
- **Rendering pipeline:**
  - Astro renders `/[lang]/cv` from the merged data, with a print stylesheet: `@page { size: A4 or Letter; margin }`, single column, real text, no backgrounds required.
  - A GitHub Actions job builds the site and serves it locally. Playwright (Chromium) then calls `page.pdf({ preferCSSPageSize: true, printBackground: true, tagged: true, outline: true })` for each language.
  - The PDFs are written to `dist/cv/<name>-cv-es.pdf` and `-en.pdf` as build artifacts and are not committed.
  - This gives one HTML/CSS design for both the web and the PDF.
  - Use RenderCV/Typst instead if you want typeset, LaTeX-quality PDFs that are independent of the site's CSS. This needs the JSON Resume → RenderCV conversion per language.
- **Keeping the languages in sync:**
  - Show `meta.lastModified` on the site.
  - Link each language's PDF from the matching language page.
  - Either send `Link` headers with hreflang and canonical for the PDFs through `_headers`, or keep PDFs out of the index and let the HTML `/cv` pages rank.
- **ATS-friendliness and privacy:**
  - ATS: single column, standard section headings, selectable text and a tagged PDF. These are reasonable defaults but unverified for any specific ATS.
  - Privacy: leave the phone number and home address out of the public PDF, and offer a fuller version on request.

### Gaps
- The fetched excerpt didn't confirm whether Playwright's `page.pdf()` is still Chromium-only.
- No source was found that evaluates how ATS systems parse Typst- or Chromium-generated PDFs.
- No standard internationalization extension for JSON Resume was found, and the community tooling for multi-language JSON Resume was not surveyed.
- The JSON Resume CLI and theme ecosystem (e.g., `resumed`, theme-based PDF export) was not documented in the fetched schema page.
