#!/usr/bin/env python3
"""Build the P2 Solar website as static, crawlable HTML pages.

Edit the content in this file, then run:  python3 build.py
It writes index.html, one folder per page (about/, solutions/, ...),
404.html, sitemap.xml, robots.txt and llms.txt. No dependencies.
"""
import datetime
import html
import json
import os

BASE = "https://www.p2solar.com/"   # final public address; used for canonical URLs, sitemap and sharing
VERSION = "20261004-seo"             # bump to refresh browser caches after editing CSS or JS
TODAY = datetime.date.today().isoformat()
YEAR = datetime.date.today().year

EMAIL = "info@p2solar.com"
PHONE = "778-321-0047"
PHONE_INTL = "+1-778-321-0047"
ADDRESS = {"street": "13718 91 Avenue", "city": "Surrey", "region": "BC", "region_long": "British Columbia",
           "postal": "V3V 7X1", "country": "CA"}
EDGAR = "https://www.sec.gov/edgar/browse/?CIK=1172069"
SEDAR = "https://www.sedarplus.ca/"
OTC = "https://www.otcmarkets.com/stock/PTOS/overview"

ORG_ID = BASE + "#organization"
SITE_ID = BASE + "#website"
FUTRICITY_ID = BASE + "solutions/#futricity-solar"
LABS_ID = BASE + "research/#p2-cleantech-labs"


def esc(text):
    return html.escape(text, quote=False)


def attr(text):
    return html.escape(text, quote=True)


# --------------------------------------------------------------------------
# Content
# --------------------------------------------------------------------------

NEWS = [
    {"id": "co2-capture-initiative", "title": "P2 Solar Launches R&D Initiative in Biological CO₂ Capture",
     "date": "2025-09-04",
     "text": "The company announced a research and development initiative exploring the use of engineered bacteria, powered by solar energy, to capture atmospheric carbon dioxide and convert it into products such as fuels or chemicals. The release outlined plans for a laboratory-scale prototype, followed by a potential pilot plant and licensing model."},
    {"id": "new-website", "title": "P2 Solar, Inc. Announces Launch of New Website", "date": "2025-03-03",
     "text": "The company announced the launch of its updated website, providing information for investors and stakeholders.",
     "file": "press-release-2025-03-03.pdf"},
    {"id": "cease-trade-order-revoked", "title": "P2 Solar Announces Revocation of the Cease Trade Order by British Columbia Securities Commission",
     "date": "2025-01-24",
     "text": "The British Columbia Securities Commission revoked the 2015 cease trade order on P2 Solar’s securities. The release also updates shareholders on corporate activity, the acquisition of Futricity Solar and historical financial information.",
     "file": "press-release-2025-01-24.pdf"},
    {"id": "director-appointment", "title": "P2 Solar, Inc. Announces Appointment of New Director", "date": "2024-01-11",
     "text": "The company announced the appointment of electrical engineer Sham Dhari to its board of directors.",
     "file": "press-release-2024-01-11.pdf"},
    {"id": "private-placement-completed", "title": "P2 Solar, Inc. Announces Completion of $110,000 Private Placement Under Partial Revocation Order",
     "date": "2023-09-21",
     "text": "The company announced completion of a CA$110,000 convertible-debt private placement under a partial revocation order.",
     "file": "press-release-2023-09-21.pdf"},
    {"id": "annual-report-filed", "title": "P2 Solar, Inc. Announces Filing 2023 Annual Report and Private Placement Under Partial Revocation Order",
     "date": "2023-08-28",
     "text": "The company reported filing its annual and interim reports and provided a progress update on its private placement under a partial revocation order.",
     "file": "press-release-2023-08-28.pdf"},
]
NEWS.sort(key=lambda item: item["date"], reverse=True)

DIRECTORS = [
    {"name": "Raj-Mohinder S. Gurm", "role": "President, Chief Executive Officer, Chief Financial Officer and Director",
     "job": "President, Chief Executive Officer and Chief Financial Officer", "alumni": "University of British Columbia",
     "text": "Raj-Mohinder S. Gurm’s career spans international trade, operations management, telecommunications and public-company leadership. He has been President and CEO of Spectrum International Inc. since 1990. In 1995 he founded Xanatel Communications Inc., a wireless communications company later sold to a company listed on the Alberta Stock Exchange, and from 2000 to 2001 he was President and CEO of Canoil Exploration Corporation, a publicly traded company. He has consulted for public companies since 2015. He earned a Bachelor of Science degree in Biology from the University of British Columbia in 1983."},
    {"name": "Sham Dhari", "role": "Director", "job": "Director", "alumni": "University of British Columbia",
     "text": "Sham Dhari holds a Bachelor of Applied Science degree in Electrical Engineering from the University of British Columbia. His engineering experience spans the pulp and paper industry, technology research and development, and field applications. A certified energy advisor, he specializes in energy modelling and testing for single-family homes and multi-unit buildings, with a focus on energy efficiency, occupant comfort and sustainable building practices."},
    {"name": "Hans Edblad", "role": "Vice President, Business Development and Director",
     "job": "Vice President, Business Development",
     "text": "Hans Edblad served as a consultant to P2 Solar from 2006 to 2009 before joining the company. He has been President of Chag Investments Ltd., which assists businesses with business development and investment strategy, since 1997, and has consulted with APR Consulting Group on technical market strategy since 2002."},
]

SERVICES = [
    {"name": "Residential solar", "service": "Residential solar installation",
     "text": "Designed to lower utility costs, improve energy independence and reduce household carbon footprints.",
     "list": ["Rooftop solar installations", "Battery system integration", "EV charger integration", "Net metering support", "System monitoring"]},
    {"name": "Commercial solar", "service": "Commercial solar installation",
     "text": "Solar applications for office buildings, retail centres, warehouses, farms, agricultural facilities and industrial properties.",
     "list": ["Reduced operating expenses", "Long-term energy savings", "Improved ESG performance", "Sustainability leadership"]},
    {"name": "Ground-mounted solar", "service": "Ground-mounted solar installation",
     "text": "Flexible and scalable systems where rooftop space is limited, including agricultural properties, rural land, community solar and commercial developments."},
    {"name": "Battery energy storage", "service": "Battery energy storage installation",
     "text": "Battery solutions designed to improve resilience and solar energy utilization.",
     "list": ["Backup power", "Load management", "Peak-demand reduction", "Enhanced energy security"]},
]

HOME_FAQ = [
    ("What does P2 Solar do?",
     "P2 Solar, Inc. is a publicly traded clean technology company headquartered in Surrey, British Columbia. It designs and installs residential and commercial solar energy systems through its subsidiary Futricity Solar, and explores biological approaches to carbon mitigation through P2 CleanTech Labs."),
    ("Is P2 Solar a public company?",
     "Yes. P2 Solar, Inc. is quoted on the OTC Markets under the symbol PTOS. It is incorporated in Delaware and reports to the U.S. Securities and Exchange Commission and the British Columbia Securities Commission. See the <a href=\"{root}investors/\">investor page</a> for filings."),
    ("What solar services does Futricity Solar offer?",
     "Futricity Solar handles rooftop solar for homes and businesses, ground-mounted systems, battery energy storage and EV charger integration, along with net metering support and system monitoring. It manages each project from the first consultation through installation and commissioning."),
    ("Where does Futricity Solar install solar systems?",
     "Futricity Solar is based in British Columbia, where P2 Solar is focusing on building its solar installation business."),
    ("What is P2 CleanTech Labs researching?",
     "P2 CleanTech Labs is in the foundational research phase, evaluating biological approaches to carbon mitigation, including biological carbon capture and microbial carbon utilization, with a Canadian university laboratory."),
    ("How do I request a solar consultation?",
     "Email <a href=\"mailto:" + EMAIL + "?subject=Solar%20consultation%20request\">" + EMAIL + "</a> with your property address, the type of property and a recent electricity bill if you have one, and Futricity Solar will follow up."),
]

SOLUTIONS_FAQ = [
    ("Does Futricity Solar install battery storage?",
     "Yes. Futricity Solar integrates battery storage with solar systems for backup power, load management and peak-demand reduction."),
    ("Can Futricity Solar help with net metering?",
     "Yes. Net metering support is part of Futricity Solar’s residential service, alongside rooftop installation, EV charger integration and system monitoring."),
    ("What if my roof is not suitable for solar?",
     "Ground-mounted systems are an option where rooftop space is limited, including agricultural properties, rural land, community solar and commercial developments."),
]

INVESTOR_FAQ = [
    ("What is P2 Solar’s stock symbol?",
     "P2 Solar, Inc. is quoted on the OTC Markets under the symbol PTOS."),
    ("Where can I find P2 Solar’s financial statements and filings?",
     "Annual and quarterly reports are filed with the U.S. Securities and Exchange Commission and are available on EDGAR under CIK 1172069. Canadian continuous disclosure documents are available on SEDAR+. Links to both are in Filings and stock information on this page."),
    ("When does P2 Solar’s fiscal year end?",
     "P2 Solar’s fiscal year ends on March 31."),
    ("Is the British Columbia cease trade order still in effect?",
     "No. The British Columbia Securities Commission fully revoked the cease trade order issued in 2015, as announced on <a href=\"{root}news/#cease-trade-order-revoked\">January 24, 2025</a>."),
    ("How do I contact investor relations?",
     "Email " + EMAIL + " or call " + PHONE + ". Shareholders can also write to the Corporate Secretary at 13718 91 Avenue, Surrey, BC V3V 7X1."),
]

PAGES = [
    {"slug": "about", "nav": "Our company", "type": "AboutPage",
     "title": "About P2 Solar | Leadership, Mission and Companies",
     "description": "P2 Solar, Inc. is a Surrey, BC clean technology company. Meet the board, the operating companies Futricity Solar and P2 CleanTech Labs, and our mission.",
     "eyebrow": "About P2 Solar", "headline": "Clean technology with a long-term view.",
     "intro": "P2 Solar is committed to advancing sustainable solutions through renewable energy and carbon mitigation research, with the aim of creating long-term shareholder value.",
     "blocks": [
         {"title": "Vision", "text": "To become a recognized leader in renewable energy and climate innovation by developing practical solutions that contribute to a cleaner and more sustainable future."},
         {"title": "Mission", "text": "To advance clean energy adoption and foster innovation through responsible business practices, scientific research, strategic partnerships and environmental stewardship."},
         {"title": "Core values", "list": ["Integrity: operating transparently and ethically", "Innovation: supporting breakthrough ideas and technologies", "Sustainability: creating measurable environmental benefits", "Collaboration: working alongside customers, researchers, governments and industry", "Excellence: maintaining high standards across our operations"]},
         {"title": "Sustainability commitment", "text": "Reducing greenhouse gas emissions through renewable energy deployment and scientific innovation."},
         {"heading": "Our companies"},
         {"title": "P2 Solar, Inc.", "role": "Parent company", "text": "The public parent company, providing strategic leadership, corporate governance, capital allocation and growth planning."},
         {"title": "Futricity Solar", "role": "Solar installation", "text": "A renewable energy company delivering residential, commercial, rooftop and ground-mounted solar projects.", "links": [("solutions/", "Futricity Solar services", False)]},
         {"title": "P2 CleanTech Labs", "role": "Climate research", "text": "An early-stage climate technology research company evaluating biological approaches to carbon mitigation through university partnerships and government-supported innovation programs.", "links": [("research/", "P2 CleanTech Labs research", False)]},
         {"heading": "Board of directors"},
     ] + [{"title": d["name"], "role": d["role"], "text": d["text"]} for d in DIRECTORS]},

    {"slug": "solutions", "nav": "Solar solutions", "type": "WebPage", "logo": ("futricity.jpg", "Futricity Solar Inc.", 382, 263),
     "title": "Residential and Commercial Solar in BC | Futricity Solar",
     "description": "Futricity Solar designs and installs rooftop, commercial and ground-mounted solar, battery storage and EV charging across British Columbia.",
     "eyebrow": "Futricity Solar", "headline": "Renewable energy solutions for homes and businesses.",
     "intro": "Futricity Solar provides end-to-end project management, from the first consultation through installation and commissioning.",
     "blocks": [{"title": s["name"], "text": s["text"], "list": s.get("list")} for s in SERVICES] + [
         {"title": "Start with a consultation", "text": "Send your property address, the type of property and a recent electricity bill if you have one, and Futricity Solar will follow up.",
          "links": [("contact/", "Request a solar consultation", False)]}],
     "faq": SOLUTIONS_FAQ, "faq_title": "Solar questions"},

    {"slug": "research", "nav": "Research", "type": "WebPage", "logo": ("p2-cleantech.jpg", "P2 CleanTech Labs Inc.", 864, 307),
     "title": "Carbon Mitigation Research | P2 CleanTech Labs",
     "description": "P2 CleanTech Labs, the research arm of P2 Solar, is evaluating biological carbon capture and microbial carbon utilization with a Canadian university lab.",
     "eyebrow": "P2 CleanTech Labs", "headline": "Advancing carbon mitigation through science.",
     "intro": "P2 CleanTech Labs is exploring biological approaches to carbon mitigation through scientific research, academic collaboration and government-supported innovation.",
     "blocks": [
         {"title": "Current research stage", "text": "The organization is in the foundational research phase.", "list": ["Scientific literature review", "Technology assessment", "Commercial opportunity evaluation", "Intellectual property landscape review", "Research planning"]},
         {"title": "Academic partnership", "text": "The company is collaborating with a major Canadian university laboratory to evaluate carbon mitigation opportunities involving biological systems."},
         {"title": "Government-supported innovation", "text": "Grants and innovation programs support the evaluation of climate-focused technologies that may contribute to future emissions reductions."},
         {"title": "Biological carbon capture", "text": "Exploring biological mechanisms that naturally remove carbon from the atmosphere."},
         {"title": "Microbial carbon utilization", "text": "Assessing ways biological systems may contribute to carbon reduction pathways."},
         {"title": "Environmental biotechnology", "text": "Investigating technologies with potential environmental and climate applications."},
         {"title": "Synthetic biology", "text": "Evaluating future opportunities involving engineered biological systems designed to improve carbon mitigation capabilities."},
         {"title": "Research roadmap", "text": "The roadmap outlines the intended progression of research. P2 CleanTech Labs is currently in the foundational research phase; the later stages are not presented as completed milestones.", "ordered": ["Literature review", "Technology assessment", "Research planning", "Proof-of-concept development", "Intellectual property evaluation", "Pilot program development", "Commercialization assessment"]},
     ]},

    {"slug": "investors", "nav": "Investors", "type": "WebPage",
     "title": "Investors | P2 Solar, Inc. (OTC: PTOS)",
     "description": "Investor information for P2 Solar, Inc. (OTC: PTOS): company facts, SEC and SEDAR+ filings, governance documents and investor relations contact.",
     "eyebrow": "Investors", "headline": "Exposure to deployment and innovation.",
     "intro": "Corporate information, regulatory filings and governance documents for shareholders and prospective investors.",
     "blocks": [
         {"title": "Company at a glance", "facts": [("Symbol", "OTC: PTOS"), ("Incorporated", "State of Delaware"), ("Head office", "Surrey, British Columbia"), ("Fiscal year end", "March 31"), ("Reporting", "U.S. Securities and Exchange Commission; British Columbia Securities Commission (OTC reporting issuer under MI 51-105)")]},
         {"title": "Filings and stock information", "text": "Annual and quarterly reports, material change reports and other continuous disclosure documents are available from the regulators’ public databases.",
          "links": [(EDGAR, "SEC filings on EDGAR", True), (SEDAR, "Canadian filings on SEDAR+", True), (OTC, "PTOS quote on OTC Markets", True)]},
         {"heading": "Investment highlights"},
         {"title": "Renewable energy growth", "text": "Participation in growing solar markets through Futricity Solar."},
         {"title": "Climate innovation", "text": "Development of future opportunities through P2 CleanTech Labs."},
         {"title": "Partnerships and support", "text": "Collaboration with Canadian research institutions and innovation-backed research initiatives."},
         {"title": "Diversified strategy", "text": "Balancing operating business activities with long-term technology development."},
         {"heading": "Investor relations"},
         {"title": "Investor contact", "role": "Raj-Mohinder S. Gurm, President and CEO", "text": "Shareholders can request corporate documents by writing to the Corporate Secretary.",
          "address": ["P2 Solar, Inc.", "Attention: Corporate Secretary", "13718 91 Avenue", "Surrey, BC V3V 7X1"],
          "email": (EMAIL, "Investor inquiry", None), "phone": PHONE},
         {"heading": "Corporate governance"},
         {"title": "Audit Committee Charter", "date": "2025-03-15", "text": "The charter sets out the Audit Committee’s purpose, authority, composition and oversight responsibilities for financial reporting, internal controls and the independent auditor.",
          "file": ("audit-committee-charter-2025.pdf", "Audit Committee Charter (PDF)")},
     ],
     "faq": INVESTOR_FAQ, "faq_title": "Investor questions"},

    {"slug": "news", "nav": "News", "type": "CollectionPage",
     "title": "News and Press Releases | P2 Solar, Inc.",
     "description": "Press releases and announcements from P2 Solar, Inc. (OTC: PTOS), including research initiatives, regulatory updates and board appointments.",
     "eyebrow": "News & media", "headline": "Updates across the P2 Solar platform.",
     "intro": "Company announcements, newest first. Archived releases reflect information at their original publication dates; historical plans and regulatory statements should not be read as current status.",
     "blocks": [{"title": n["title"], "id": n["id"], "date": n["date"], "text": n["text"],
                 "file": (n["file"], "Press release (PDF)") if n.get("file") else None} for n in NEWS]},

    {"slug": "contact", "nav": "Get in touch", "type": "ContactPage",
     "title": "Contact P2 Solar | Solar Consultations and Investors",
     "description": "Contact P2 Solar in Surrey, BC to request a solar consultation, discuss research partnerships with P2 CleanTech Labs, or reach investor relations.",
     "eyebrow": "Contact", "headline": "Start the right conversation.",
     "intro": "Choose the route that fits your inquiry and your message will reach the right team.",
     "blocks": [
         {"title": "Solar consultation", "text": "Thinking about solar for your home, business or land? Send us your address, the type of property and a recent electricity bill if you have one, and Futricity Solar will follow up.",
          "email": (EMAIL, "Solar consultation request", "Request a solar consultation")},
         {"title": "General and investor inquiries", "text": "Questions about P2 Solar, its strategy or shareholder matters.",
          "email": (EMAIL, "General inquiry", None)},
         {"title": "Research partnerships", "text": "Researchers and institutions interested in collaborating with P2 CleanTech Labs.",
          "email": (EMAIL, "Research partnership inquiry", "Contact P2 CleanTech Labs")},
         {"title": "Mailing address", "address": ["P2 Solar, Inc.", "13718 91 Avenue", "Surrey, British Columbia V3V 7X1", "Canada"]},
     ]},
]

HEADER_NAV = ["about", "solutions", "research", "investors"]  # plus the "Get in touch" button


def date_label(iso):
    d = datetime.date.fromisoformat(iso)
    return f"{d:%B} {d.day}, {d.year}"


# --------------------------------------------------------------------------
# Structured data (schema.org JSON-LD)
# --------------------------------------------------------------------------

def organization():
    return {
        "@type": "Corporation", "@id": ORG_ID, "name": "P2 Solar", "legalName": "P2 Solar, Inc.",
        "url": BASE, "logo": {"@type": "ImageObject", "url": BASE + "p2-solar-transparent.png", "width": 600, "height": 224},
        "image": BASE + "p2-solar-hero-v2.jpg",
        "description": "Publicly traded clean technology company in Surrey, British Columbia, installing residential and commercial solar through Futricity Solar and researching biological carbon mitigation through P2 CleanTech Labs.",
        "tickerSymbol": "OTC PTOS", "email": EMAIL, "telephone": PHONE_INTL,
        "address": {"@type": "PostalAddress", "streetAddress": ADDRESS["street"], "addressLocality": ADDRESS["city"],
                    "addressRegion": ADDRESS["region"], "postalCode": ADDRESS["postal"], "addressCountry": ADDRESS["country"]},
        "areaServed": {"@type": "AdministrativeArea", "name": "British Columbia"},
        "contactPoint": [
            {"@type": "ContactPoint", "contactType": "customer service", "email": EMAIL, "areaServed": "CA", "availableLanguage": "en"},
            {"@type": "ContactPoint", "contactType": "investor relations", "email": EMAIL, "telephone": PHONE_INTL, "availableLanguage": "en"},
        ],
        "subOrganization": [{"@id": FUTRICITY_ID}, {"@id": LABS_ID}],
        "sameAs": [EDGAR, OTC],
    }


def futricity():
    return {"@type": "Organization", "@id": FUTRICITY_ID, "name": "Futricity Solar", "legalName": "Futricity Solar, Inc.",
            "url": BASE + "solutions/", "logo": BASE + "futricity.jpg", "parentOrganization": {"@id": ORG_ID},
            "description": "Renewable energy company delivering residential, commercial, rooftop and ground-mounted solar projects.",
            "areaServed": {"@type": "AdministrativeArea", "name": "British Columbia"}}


def labs():
    return {"@type": "Organization", "@id": LABS_ID, "name": "P2 CleanTech Labs", "legalName": "P2 CleanTech Labs Inc.",
            "url": BASE + "research/", "logo": BASE + "p2-cleantech.jpg", "parentOrganization": {"@id": ORG_ID},
            "description": "Research division of P2 Solar evaluating biological approaches to carbon mitigation.",
            "knowsAbout": ["Biological carbon capture", "Microbial carbon utilization", "Environmental biotechnology", "Synthetic biology"]}


def faq_schema(faq, url, root):
    import re
    strip = lambda s: re.sub(r"<[^>]+>", "", s.replace("{root}", root))
    return {"@type": "FAQPage", "@id": url + "#faq", "mainEntity": [
        {"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": strip(a)}} for q, a in faq]}


def page_schema(page, url):
    graph = [organization(), {"@type": "WebSite", "@id": SITE_ID, "url": BASE, "name": "P2 Solar",
                              "publisher": {"@id": ORG_ID}, "inLanguage": "en-CA"}]
    webpage = {"@type": page.get("type", "WebPage"), "@id": url + "#webpage", "url": url, "name": page["title"],
               "description": page["description"], "isPartOf": {"@id": SITE_ID}, "about": {"@id": ORG_ID},
               "inLanguage": "en-CA", "dateModified": TODAY,
               "primaryImageOfPage": {"@type": "ImageObject", "url": BASE + "p2-solar-hero-v2.jpg"}}
    slug = page.get("slug")
    if slug:
        webpage["breadcrumb"] = {"@id": url + "#breadcrumb"}
        graph.append({"@type": "BreadcrumbList", "@id": url + "#breadcrumb", "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Home", "item": BASE},
            {"@type": "ListItem", "position": 2, "name": page["eyebrow"], "item": url}]})
    graph.append(webpage)
    if slug in (None, "about"):
        graph += [futricity(), labs()]
    if slug == "about":
        for d in DIRECTORS:
            person = {"@type": "Person", "name": d["name"], "jobTitle": d["job"], "worksFor": {"@id": ORG_ID},
                      "description": d["text"]}
            if d.get("alumni"):
                person["alumniOf"] = {"@type": "CollegeOrUniversity", "name": d["alumni"]}
            graph.append(person)
    if slug == "solutions":
        graph.append(futricity())
        for s in SERVICES:
            graph.append({"@type": "Service", "name": s["service"], "serviceType": s["service"], "description": s["text"],
                          "provider": {"@id": FUTRICITY_ID},
                          "areaServed": {"@type": "AdministrativeArea", "name": "British Columbia"}})
    if slug == "research":
        graph.append(labs())
    if slug == "news":
        graph.append({"@type": "ItemList", "name": "P2 Solar press releases", "itemListElement": [
            {"@type": "ListItem", "position": i + 1, "item": {
                "@type": "NewsArticle", "headline": n["title"][:110], "datePublished": n["date"], "description": n["text"],
                "url": BASE + n["file"] if n.get("file") else url + "#" + n["id"],
                "mainEntityOfPage": url + "#" + n["id"], "image": BASE + "p2-solar-hero-v2.jpg",
                "author": {"@id": ORG_ID}, "publisher": {"@id": ORG_ID}}}
            for i, n in enumerate(NEWS)]})
    if page.get("faq"):
        graph.append(faq_schema(page["faq"], url, page["_root"]))
    return json.dumps({"@context": "https://schema.org", "@graph": graph}, ensure_ascii=False, separators=(",", ":"))


# --------------------------------------------------------------------------
# HTML
# --------------------------------------------------------------------------

def head(page, url, root, extra=""):
    robots = page.get("robots", "index, follow, max-image-preview:large, max-snippet:-1")
    og_type = "website"
    return f"""<!doctype html>
<html lang="en-CA">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{esc(page["title"])}</title>
  <meta name="description" content="{attr(page["description"])}" />
  <meta name="robots" content="{robots}" />
  <link rel="canonical" href="{url}" />
  <meta name="theme-color" content="#22362d" />
  <meta property="og:type" content="{og_type}" />
  <meta property="og:site_name" content="P2 Solar" />
  <meta property="og:locale" content="en_CA" />
  <meta property="og:title" content="{attr(page["title"])}" />
  <meta property="og:description" content="{attr(page["description"])}" />
  <meta property="og:url" content="{url}" />
  <meta property="og:image" content="{BASE}p2-solar-hero-v2.jpg" />
  <meta property="og:image:width" content="1600" />
  <meta property="og:image:height" content="1000" />
  <meta property="og:image:alt" content="Two installers positioning solar panels on a rooftop overlooking a green landscape." />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="{attr(page["title"])}" />
  <meta name="twitter:description" content="{attr(page["description"])}" />
  <meta name="twitter:image" content="{BASE}p2-solar-hero-v2.jpg" />
  <link rel="icon" href="{root}favicon.svg" type="image/svg+xml" />
  <link rel="apple-touch-icon" href="{root}apple-touch-icon.png" />
  <link rel="alternate" type="text/plain" href="{root}llms.txt" title="LLM-readable site summary" />
{extra}  <link rel="stylesheet" href="{root}site.css?v={VERSION}" />
  <script type="application/ld+json">{page_schema(page, url)}</script>
</head>"""


def header(root, current=None):
    home = root or "./"
    links = "".join(
        f'<a href="{root}{slug}/"{" aria-current=\"page\"" if slug == current else ""}>{esc(next(p["nav"] for p in PAGES if p["slug"] == slug))}</a>'
        for slug in HEADER_NAV)
    contact_current = ' aria-current="page"' if current == "contact" else ""
    return f"""  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header">
    <a class="brand" href="{home}" aria-label="P2 Solar home"><img class="corporate-logo" src="{root}p2-solar.jpg" width="440" height="160" alt="P2 Solar, Powering Change" /></a>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="main-nav">Menu <span aria-hidden="true">☰</span></button>
    <nav id="main-nav" aria-label="Primary navigation">
      {links}<a class="nav-contact" href="{root}contact/"{contact_current}>Get in touch <span aria-hidden="true">↗</span></a>
    </nav>
  </header>"""


def footer(root):
    home = root or "./"
    return f"""  <footer>
    <div class="footer-top"><div><p class="eyebrow">A shared ambition</p><h2>Let’s move<br /><em>energy forward.</em></h2></div><a class="button button-primary" href="{root}contact/">Connect with P2 Solar <span aria-hidden="true">↗</span></a></div>
    <div class="footer-bottom"><a class="brand footer-logo" href="{home}" aria-label="P2 Solar home"><picture><source type="image/webp" srcset="{root}images/logo-footer.webp" /><img class="corporate-logo" src="{root}p2-solar-transparent.png" width="600" height="224" alt="P2 Solar, Powering Change" loading="lazy" /></picture></a><p>Renewable energy today. Climate solutions for tomorrow.</p><nav aria-label="Footer navigation"><a href="{root}investors/">Investors</a><a href="{root}news/">News</a></nav></div>
    <div class="footer-legal">
      <p class="footer-note">© {YEAR} P2 Solar, Inc. · OTC: PTOS · {ADDRESS["street"]}, {ADDRESS["city"]}, {ADDRESS["region_long"]} · <a href="mailto:{EMAIL}">{EMAIL}</a></p>
      <p class="footer-disclaimer"><strong>Forward-looking statements.</strong> This website contains forward-looking statements, including statements about planned products, services, research and growth. They are based on current expectations and are subject to risks and uncertainties that could cause actual results to differ materially. Please refer to the risk factors in P2 Solar, Inc.’s filings with the U.S. Securities and Exchange Commission and on SEDAR+. P2 Solar, Inc. undertakes no obligation to update these statements except as required by law.</p>
      <button class="motion-toggle" type="button" aria-pressed="false">Pause animations</button>
    </div>
  </footer>
  <script src="{root}app.js?v={VERSION}" defer></script>"""


def faq_html(faq, root, title, eyebrow, lead, wrap=True):
    items = "\n".join(
        f'        <details class="faq-item"><summary>{esc(q)}</summary><p>{a.replace("{root}", root)}</p></details>' for q, a in faq)
    cls = "faq section-wrap" if wrap else "faq"
    return f"""    <section class="{cls}" id="faq" aria-labelledby="faq-title">
      <div class="faq-heading">
        <div><p class="eyebrow">{esc(eyebrow)}</p><h2 id="faq-title">{title}</h2>{f'<p class="route-intro">{esc(lead)}</p>' if lead else ''}</div>
        <div class="faq-list">
{items}
        </div>
      </div>
    </section>"""


def block_html(b, root):
    if b.get("heading"):
        return f'        <h2 class="leadership-heading">{esc(b["heading"])}</h2>'
    out = [f'        <section class="route-item"{" id=" + chr(34) + b["id"] + chr(34) if b.get("id") else ""}>', f'          <h2>{esc(b["title"])}</h2>']
    if b.get("role"):
        out.append(f'          <p class="route-role">{esc(b["role"])}</p>')
    if b.get("date"):
        out.append(f'          <time datetime="{b["date"]}">{date_label(b["date"])}</time>')
    if b.get("text"):
        out.append(f'          <p>{esc(b["text"])}</p>')
    if b.get("facts"):
        rows = "".join(f"<div><dt>{esc(t)}</dt><dd>{esc(v)}</dd></div>" for t, v in b["facts"])
        out.append(f'          <dl class="fact-list">{rows}</dl>')
    if b.get("list"):
        out.append("          <ul>" + "".join(f"<li>{esc(i)}</li>" for i in b["list"]) + "</ul>")
    if b.get("ordered"):
        out.append("          <ol>" + "".join(f"<li>{esc(i)}</li>" for i in b["ordered"]) + "</ol>")
    if b.get("address"):
        out.append('          <address class="route-address">' + "<br />".join(esc(l) for l in b["address"]) + "</address>")
    actions = []
    if b.get("email"):
        address, subject, label = b["email"]
        actions.append(f'<a class="document-link" href="mailto:{address}?subject={subject.replace(" ", "%20")}">{esc(label or address)}</a>')
    if b.get("phone"):
        actions.append(f'<a class="document-link" href="tel:+1{"".join(c for c in b["phone"] if c.isdigit())}">{b["phone"]}</a>')
    for href, label, external in b.get("links") or []:
        if external:
            actions.append(f'<a class="document-link" href="{href}" target="_blank" rel="noopener">{esc(label)} <span aria-hidden="true">↗</span><span class="sr-only"> (opens in a new tab)</span></a>')
        else:
            actions.append(f'<a class="document-link" href="{root}{href}">{esc(label)}</a>')
    if b.get("file"):
        path, label = b["file"]
        actions.append(f'<a class="document-link" href="{root}{path}" target="_blank" rel="noopener">{esc(label)}<span class="sr-only"> (opens in a new tab)</span></a>')
    if actions:
        out.append('          <div class="route-actions">' + "".join(actions) + "</div>")
    out.append("        </section>")
    return "\n".join(out)


def inner_page(page):
    root = "../"
    page["_root"] = root
    url = BASE + page["slug"] + "/"
    logo = ""
    if page.get("logo"):
        src, alt, w, h = page["logo"]
        logo = f'      <div class="route-brand"><img src="{root}{src}" width="{w}" height="{h}" alt="{attr(alt)}" /></div>\n'
    blocks = "\n".join(block_html(b, root) for b in page["blocks"])
    faq = ""
    if page.get("faq"):
        faq = "\n" + faq_html(page["faq"], root, esc(page["faq_title"]), "Questions", None, wrap=False)
    return f"""{head(page, url, root)}
<body class="detail-view">
{header(root, page["slug"])}
  <main id="main" tabindex="-1">
    <article class="route-panel">
      <nav class="breadcrumb-nav" aria-label="Breadcrumb"><ol><li><a href="{root}">Home</a></li><li aria-current="page">{esc(page["eyebrow"])}</li></ol></nav>
{logo}      <header class="route-header">
        <div>
          <p class="eyebrow">{esc(page["eyebrow"])}</p>
          <h1>{esc(page["headline"])}</h1>
        </div>
        <p class="route-intro">{esc(page["intro"])}</p>
      </header>
      <div class="route-grid">
{blocks}
      </div>{faq}
    </article>
  </main>
{footer(root)}
</body>
</html>
"""


def news_rows(root):
    rows = []
    for n in NEWS[:3]:
        inner = (f'<time datetime="{n["date"]}">{date_label(n["date"])}</time><strong>{esc(n["title"])}</strong>'
                 f'<span class="news-kind">{"Press release · PDF" if n.get("file") else "Announcement"}</span>')
        if n.get("file"):
            rows.append(f'        <li><a class="news-row" href="{root}{n["file"]}" target="_blank" rel="noopener">{inner}<span class="sr-only"> (opens in a new tab)</span></a></li>')
        else:
            rows.append(f'        <li><div class="news-row news-row-static">{inner}</div></li>')
    return "\n".join(rows)


def home_page():
    page = {"title": "P2 Solar | Solar Installation and Climate Research in BC",
            "description": "P2 Solar, Inc. (OTC: PTOS) installs home and commercial solar in British Columbia through Futricity Solar and researches carbon capture at P2 CleanTech Labs.",
            "type": "WebPage", "faq": HOME_FAQ, "_root": ""}
    preload = ('  <link rel="preload" as="image" type="image/webp" href="images/hero-1600.webp" '
               'imagesrcset="images/hero-800.webp 800w, images/hero-1600.webp 1600w" '
               'imagesizes="(max-width: 700px) 100vw, 56vw" fetchpriority="high" />\n')
    body = open("src/home.html", encoding="utf-8").read()
    body = body.replace("{{NEWS_LIST}}", news_rows(""))
    body = body.replace("{{FAQ}}", faq_html(HOME_FAQ, "", "Common <em>questions.</em>", "About P2 Solar",
                                            "Quick answers about the company, its solar services and its research."))
    return f"""{head(page, BASE, "", preload)}
<body>
{header("")}
  <main id="main" tabindex="-1">
{body.rstrip()}
  </main>
{footer("")}
</body>
</html>
"""


def not_found_page():
    page = {"title": "Page not found | P2 Solar", "description": "The page you were looking for could not be found.",
            "robots": "noindex, follow", "type": "WebPage", "_root": "/"}
    root = "/"
    return f"""{head(page, BASE + "404.html", root)}
<body class="detail-view">
{header(root)}
  <main id="main" tabindex="-1">
    <section class="notfound">
      <p class="eyebrow">Error 404</p>
      <h1>This page has moved or no longer exists.</h1>
      <p>The P2 Solar website has been reorganized. Use the menu above, or start from the home page.</p>
      <a class="button button-dark" href="/">Go to the home page</a>
    </section>
  </main>
{footer(root)}
</body>
</html>
"""


def write(path, text):
    os.makedirs(os.path.dirname(path) or ".", exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        f.write(text)


def llms_txt():
    lines = [
        "# P2 Solar, Inc.",
        "",
        "> P2 Solar, Inc. (OTC: PTOS) is a publicly traded clean technology company headquartered in Surrey, British Columbia, Canada. "
        "It designs and installs residential and commercial solar energy systems through its subsidiary Futricity Solar, and researches "
        "biological approaches to carbon mitigation through P2 CleanTech Labs.",
        "",
        "Key facts:",
        "- Legal name: P2 Solar, Inc.; quoted on the OTC Markets as PTOS",
        "- Incorporated in the State of Delaware; head office in Surrey, British Columbia",
        "- Fiscal year end: March 31",
        "- Reports to the U.S. Securities and Exchange Commission (CIK 1172069) and the British Columbia Securities Commission",
        "- Subsidiaries: Futricity Solar (solar installation) and P2 CleanTech Labs (carbon mitigation research)",
        f"- Contact: {EMAIL}; 13718 91 Avenue, Surrey, BC V3V 7X1, Canada",
        "",
        "## Pages",
        "",
    ]
    for p in PAGES:
        lines.append(f"- [{p['eyebrow']}]({BASE}{p['slug']}/): {p['description']}")
    lines += ["", "## Filings", "", f"- [SEC filings on EDGAR]({EDGAR})", f"- [Canadian filings on SEDAR+]({SEDAR})",
              f"- [PTOS on OTC Markets]({OTC})", "", "## Press releases", ""]
    for n in NEWS:
        link = BASE + n["file"] if n.get("file") else f"{BASE}news/#{n['id']}"
        lines.append(f"- [{n['title']}]({link}) ({date_label(n['date'])}): {n['text']}")
    lines += ["", "## Optional", "", f"- [Audit Committee Charter, March 15, 2025]({BASE}audit-committee-charter-2025.pdf)", ""]
    return "\n".join(lines)


def main():
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    write("index.html", home_page())
    for page in PAGES:
        write(f"{page['slug']}/index.html", inner_page(page))
    write("404.html", not_found_page())
    urls = [(BASE, "1.0")] + [(f"{BASE}{p['slug']}/", "0.8") for p in PAGES]
    write("sitemap.xml", '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
          + "".join(f"  <url><loc>{u}</loc><lastmod>{TODAY}</lastmod><priority>{pr}</priority></url>\n" for u, pr in urls)
          + "</urlset>\n")
    write("robots.txt", f"User-agent: *\nAllow: /\n\nSitemap: {BASE}sitemap.xml\n")
    write("llms.txt", llms_txt())
    print("Built", 2 + len(PAGES), "pages")


if __name__ == "__main__":
    main()
