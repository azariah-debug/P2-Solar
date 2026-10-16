# P2 Solar website

Static website for P2 Solar, Inc. (OTC: PTOS). Every page is plain HTML, so it can be hosted anywhere: Bluehost, GitHub Pages or any web server. No database or build tools are needed on the server.

## Pages

| Address | Content |
| --- | --- |
| `/` | Home: companies, solar services, research, latest news, common questions |
| `/about/` | Mission, values, operating companies, board of directors |
| `/solutions/` | Futricity Solar services and solar questions |
| `/research/` | P2 CleanTech Labs research and roadmap |
| `/investors/` | Company facts, filings, investor contact, governance, investor questions |
| `/news/` | Press releases, newest first |
| `/contact/` | Consultation, general, research and mailing contacts |

Old single-page links such as `/#/investors` forward automatically to the new pages.

## Checks required before updating GitHub

Before every GitHub update, compare the latest work from the owning task and its local checkout with the current remote branch and deployed site. Reconcile any differences before preparing a commit; do not assume a previous handoff or deployment is current.

Review the exact diff and run checks for the affected pages and features before pushing. Homepage changes must include mobile rendering, native animation visibility and playback, console/network asset checks, and reduced-motion behavior. Preserve approved work and verify that required assets are included. If a check fails or the source state is uncertain, resolve it before pushing.

After publication, verify the deployed result and report the commit and checks performed. When maintaining both GitHub Pages and the private Sites copy, compare their affected features so an older copy is not presented as fully synchronized.

## Editing content

All text lives in `build.py` (news, directors, services, questions and answers, page copy). The homepage layout is in `src/home.html`. After editing, run:

```
python3 build.py
```

This regenerates every page plus `sitemap.xml`, `robots.txt` and `llms.txt`, so search engines, structured data and AI assistants always match what is on the page. To add a press release, add it to `NEWS` in `build.py`, put the PDF in the site folder, and rebuild.

Styles are in `site.css`. Typography uses two self-hosted open-licence fonts in `fonts/` (Instrument Sans for headings and text, IBM Plex Mono for dates and labels) on one fluid type scale and one spacing scale, both defined as variables near the end of the file. Colour comes from three ramps built from the logo green (leaf, forest and a green-tinted stone neutral) and named roles such as `--text`, `--accent-text` and `--on-dark`; every text pairing meets WCAG AA contrast; the small script for the mobile menu and animation toggle is `app.js`. After changing either, bump `VERSION` in `build.py` and rebuild so browsers fetch the new files.

The homepage story film (right after the hero) is native SVG and HTML animated by `p2-film.js` with a local copy of GSAP in `vendor/`. Only the small `p2-film-boot.js` loads with the page; it fetches GSAP and `p2-film.js` when the section nears the viewport, or when a visitor presses Play (never with reduced motion unless they do). Its markup lives in `src/home.html` (section `#p2f`) and its styles at the end of `site.css` (prefix `.p2f`). It has no sound, plays once when scrolled into view, and always ends on the company card. Without JavaScript or with reduced motion, the card shows straight away.

Preview locally with `python3 -m http.server 4176` and open http://localhost:4176.

## Search and AI-answer optimization

- A unique title, description and canonical address on every page, with sharing previews for social and messaging apps.
- schema.org structured data: corporation with ticker and address, subsidiaries, directors, services, news articles, breadcrumbs, and question-and-answer blocks that match the visible questions.
- `sitemap.xml` and `robots.txt` for search engines, and `llms.txt`, a plain-language summary for AI assistants.
- WebP images, one stylesheet, a deferred script and a preloaded hero image for fast loading.

## Security

- The site loads nothing from other servers: no third-party scripts, fonts or trackers.
- A strict Content Security Policy lets pages run only the site's own script and styles. It is sent as a server header on Bluehost and as a page tag elsewhere.
- `.htaccess` forces HTTPS, blocks framing (clickjacking), refuses anything but page reads, hides build files and dotfiles, and sets privacy-preserving referrer and permissions headers.
- `/.well-known/security.txt` tells researchers where to report a vulnerability. Its expiry date renews each time the site is rebuilt.

## Hosting on Bluehost

Upload everything except `src/`, `build.py` and `README.md` to `public_html`. The included `.htaccess` sends visitors to `https://www.p2solar.com`, enables compression and caching, adds security headers and shows `404.html` for missing pages.

The canonical address is set by `BASE` in `build.py` (currently `https://www.p2solar.com/`). After launch, submit `https://www.p2solar.com/sitemap.xml` in Google Search Console and Bing Webmaster Tools.
