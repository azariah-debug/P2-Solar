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

## Editing content

All text lives in `build.py` (news, directors, services, questions and answers, page copy). The homepage layout is in `src/home.html`. After editing, run:

```
python3 build.py
```

This regenerates every page plus `sitemap.xml`, `robots.txt` and `llms.txt`, so search engines, structured data and AI assistants always match what is on the page. To add a press release, add it to `NEWS` in `build.py`, put the PDF in the site folder, and rebuild.

Styles are in `site.css`; the small script for the mobile menu and animation toggle is `app.js`. After changing either, bump `VERSION` in `build.py` and rebuild so browsers fetch the new files.

Preview locally with `python3 -m http.server 4176` and open http://localhost:4176.

## Search and AI-answer optimization

- A unique title, description and canonical address on every page, with sharing previews for social and messaging apps.
- schema.org structured data: corporation with ticker and address, subsidiaries, directors, services, news articles, breadcrumbs, and question-and-answer blocks that match the visible questions.
- `sitemap.xml` and `robots.txt` for search engines, and `llms.txt`, a plain-language summary for AI assistants.
- WebP images, one stylesheet, a deferred script and a preloaded hero image for fast loading.

## Hosting on Bluehost

Upload everything except `src/`, `build.py` and `README.md` to `public_html`. The included `.htaccess` sends visitors to `https://www.p2solar.com`, enables compression and caching, adds security headers and shows `404.html` for missing pages.

The canonical address is set by `BASE` in `build.py` (currently `https://www.p2solar.com/`). After launch, submit `https://www.p2solar.com/sitemap.xml` in Google Search Console and Bing Webmaster Tools.
