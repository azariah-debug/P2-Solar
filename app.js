const sections = [
  {
    slug: 'about', title: 'About P2 Solar', summary: 'Company overview, purpose and values.',
    headline: 'Clean technology with a long-term view.',
    intro: 'P2 Solar is committed to advancing sustainable solutions through renewable energy and carbon mitigation research, with the aim of creating long-term shareholder value.',
    blocks: [
      { title: 'Vision', text: 'To become a recognized leader in renewable energy and climate innovation by developing practical solutions that contribute to a cleaner and more sustainable future.' },
      { title: 'Mission', text: 'To advance clean energy adoption and foster innovation through responsible business practices, scientific research, strategic partnerships and environmental stewardship.' },
      { title: 'Core values', list: ['Integrity — operating transparently and ethically', 'Innovation — supporting breakthrough ideas and technologies', 'Sustainability — creating measurable environmental benefits', 'Collaboration — working alongside customers, researchers, governments and industry', 'Excellence — maintaining high standards across our operations'] },
      { title: 'Sustainability commitment', text: 'Reducing greenhouse gas emissions through renewable energy deployment and scientific innovation.' }
    ]
  },
  {
    slug: 'companies', title: 'Our Companies', summary: 'The parent company and its operating divisions.',
    headline: 'A diversified clean technology strategy.',
    intro: 'P2 Solar brings together strategic leadership, renewable energy deployment and climate technology research.',
    blocks: [
      { title: 'P2 Solar Inc.', text: 'The public parent company providing strategic leadership, corporate governance, capital allocation and growth planning.' },
      { title: 'Futricity Solar', text: 'A renewable energy company delivering residential, commercial, rooftop and ground-mounted solar projects.' },
      { title: 'P2 CleanTech Labs', text: 'An early-stage climate technology research company evaluating biological approaches to carbon mitigation through university partnerships and government-supported innovation programs.' }
    ]
  },
  {
    slug: 'solutions', title: 'Futricity Solar', summary: 'Solar, storage and energy independence.',
    headline: 'Renewable energy solutions for homes and businesses.',
    intro: 'Futricity Solar provides end-to-end project management from initial consultation through installation and commissioning.',
    blocks: [
      { title: 'Residential solar', text: 'Designed to lower utility costs, improve energy independence and reduce household carbon footprints.', list: ['Rooftop solar installations', 'Battery system integration', 'EV charger integration', 'Net metering support', 'System monitoring'] },
      { title: 'Commercial solar', text: 'Solar applications for office buildings, retail centres, warehouses, farms, agricultural facilities and industrial properties.', list: ['Reduced operating expenses', 'Long-term energy savings', 'Improved ESG performance', 'Sustainability leadership'] },
      { title: 'Ground-mounted solar', text: 'Flexible and scalable systems where rooftop space is limited, including agricultural properties, rural land, community solar and commercial developments.' },
      { title: 'Battery energy storage', text: 'Battery solutions designed to improve resilience and solar energy utilization.', list: ['Backup power', 'Load management', 'Peak-demand reduction', 'Enhanced energy security'] }
    ]
  },
  {
    slug: 'projects', title: 'Projects', summary: 'Residential and commercial project portfolio.',
    headline: 'Project performance, presented with context.',
    intro: 'P2 Solar’s project pages will document the system, setting and measurable outcomes of residential and commercial installations.',
    blocks: [
      { title: 'Residential projects', list: ['Location and system size', 'Annual energy production', 'Carbon reduction estimates', 'Customer perspective', 'Project photography'] },
      { title: 'Commercial projects', list: ['Customer profile and project size', 'Economic benefits', 'Sustainability metrics', 'Installation photography'] }
    ]
  },
  {
    slug: 'research', title: 'P2 CleanTech Labs', summary: 'Carbon mitigation research and partnerships.',
    headline: 'Advancing carbon mitigation through science.',
    intro: 'P2 CleanTech Labs is exploring biological approaches to carbon mitigation through scientific research, academic collaboration and government-supported innovation.',
    blocks: [
      { title: 'Current research stage', text: 'The organization is in the foundational research phase.', list: ['Scientific literature review', 'Technology assessment', 'Commercial opportunity evaluation', 'Intellectual property landscape review', 'Research planning'] },
      { title: 'Academic partnership', text: 'The company is collaborating with a major Canadian university laboratory to evaluate carbon mitigation opportunities involving biological systems.' },
      { title: 'Government-supported innovation', text: 'Grants and innovation programs support the evaluation of climate-focused technologies that may contribute to future emissions reductions.' },
      { title: 'Biological carbon capture', text: 'Exploring biological mechanisms that naturally remove carbon from the atmosphere.' },
      { title: 'Microbial carbon utilization', text: 'Assessing ways biological systems may contribute to carbon reduction pathways.' },
      { title: 'Environmental biotechnology', text: 'Investigating technologies with potential environmental and climate applications.' },
      { title: 'Synthetic biology', text: 'Evaluating future opportunities involving engineered biological systems designed to improve carbon mitigation capabilities.' },
      { title: 'Research roadmap', text: 'The roadmap outlines the intended progression of research. P2 CleanTech Labs is currently in the foundational research phase; the later stages below are not presented as completed milestones.', list: ['Literature review', 'Technology assessment', 'Research planning', 'Proof-of-concept development', 'Intellectual property evaluation', 'Pilot program development', 'Commercialization assessment'] }
    ]
  },
  {
    slug: 'investors', title: 'Investors', summary: 'Investment overview and corporate information.',
    headline: 'Exposure to deployment and innovation.',
    intro: 'P2 Solar provides investors with exposure to renewable energy deployment and emerging climate technology opportunities.',
    blocks: [
      { title: 'Renewable energy growth', text: 'Participation in growing solar markets through Futricity Solar.' },
      { title: 'Climate innovation', text: 'Development of future opportunities through P2 CleanTech Labs.' },
      { title: 'Partnerships and support', text: 'Collaboration with Canadian research institutions and innovation-backed research initiatives.' },
      { title: 'Diversified strategy', text: 'Balancing operating business activities with long-term technology development.' }
    ]
  },
  {
    slug: 'news', title: 'News & Media', summary: 'Company, project, research and investor updates.',
    headline: 'Updates across the P2 Solar platform.',
    intro: 'This area will bring together company announcements and developments from the operating and research businesses.',
    blocks: [
      { title: 'Corporate news', text: 'Company updates and announcements.' },
      { title: 'Project announcements', text: 'Recent solar installations and milestones.' },
      { title: 'Research updates', text: 'Developments within P2 CleanTech Labs.' },
      { title: 'Investor news', text: 'Corporate filings, presentations and shareholder communications.' }
    ]
  },
  {
    slug: 'careers', title: 'Careers', summary: 'Opportunities to work across clean energy and research.',
    headline: 'Join our mission.',
    intro: 'P2 Solar seeks people committed to renewable energy, climate innovation and environmental stewardship.',
    blocks: [
      { title: 'Opportunities', list: ['Solar installation', 'Engineering', 'Project management', 'Research and development', 'Business development', 'Administration'] },
      { title: 'Student programs', text: 'The company supports emerging talent through academic collaborations and research opportunities.' }
    ]
  },
  {
    slug: 'contact', title: 'Contact', summary: 'Connect with the appropriate P2 Solar team.',
    headline: 'Start the right conversation.',
    intro: 'Contact pathways are organized around company information, solar opportunities, research collaboration and investor relations.',
    blocks: [
      { title: 'General inquiries', text: 'Learn more about P2 Solar and its strategic direction.' },
      { title: 'Solar consultation', text: 'Connect with Futricity Solar to discuss residential or commercial solar opportunities.' },
      { title: 'Research partnerships', text: 'Contact P2 CleanTech Labs regarding research collaborations and innovation initiatives.' },
      { title: 'Investor relations', text: 'Access shareholder information and corporate communications.' }
    ]
  }
];

// Supplied corporate documents, staged for review; production remains unchanged.
sections.find(item => item.slug === 'about').blocks.push(
  { title: 'Board of directors', heading: true },
  { title: 'Raj-Mohinder S. Gurm', role: 'President, Chief Executive Officer, Chief Financial Officer and Director', text: 'Raj-Mohinder S. Gurm’s career spans international trade, operations management, telecommunications and public-company leadership. He has been President and CEO of Spectrum International Inc. since 1990. In 1995 he founded Xanatel Communications Inc., a wireless communications company later sold to a company listed on the Alberta Stock Exchange, and from 2000 to 2001 he was President and CEO of Canoil Exploration Corporation, a publicly traded company. He has consulted for public companies since 2015. He earned a Bachelor of Science degree in Biology from the University of British Columbia in 1983.' },
  { title: 'Sham Dhari', role: 'Director', text: 'Sham Dhari holds a Bachelor of Applied Science degree in Electrical Engineering from the University of British Columbia. His engineering experience spans the pulp and paper industry, technology research and development, and field applications. A certified energy advisor, he specializes in energy modelling and testing for single-family homes and multi-unit buildings, with a focus on energy efficiency, occupant comfort and sustainable building practices.' },
  { title: 'Hans Edblad', role: 'Vice President, Business Development and Director', text: 'Hans Edblad served as a consultant to P2 Solar from 2006 to 2009 before joining the company. He has been President of Chag Investments Ltd., which assists businesses with business development and investment strategy, since 1997, and has consulted with APR Consulting Group on technical market strategy since 2002.' }
);
const investorsSection = sections.find(item => item.slug === 'investors');
investorsSection.intro = 'P2 Solar, Inc. is quoted on the OTC Markets under the symbol PTOS and reports to securities regulators in the United States and British Columbia.';
investorsSection.blocks.unshift(
  { title: 'Company at a glance', facts: [
    ['Symbol', 'OTC: PTOS'],
    ['Incorporated', 'State of Delaware'],
    ['Head office', 'Surrey, British Columbia'],
    ['Fiscal year end', 'March 31'],
    ['Reporting', 'U.S. Securities and Exchange Commission; British Columbia Securities Commission (OTC reporting issuer under MI 51-105)']
  ] },
  { title: 'Filings and stock information', text: 'Annual and quarterly reports, material change reports and other continuous disclosure documents are available from the regulators’ public databases.', links: [
    { href: 'https://www.sec.gov/edgar/browse/?CIK=1172069', label: 'SEC filings on EDGAR' },
    { href: 'https://www.sedarplus.ca/', label: 'Canadian filings on SEDAR+' },
    { href: 'https://www.otcmarkets.com/stock/PTOS/overview', label: 'PTOS quote on OTC Markets' }
  ] },
  { title: 'Investment highlights', heading: true }
);
investorsSection.blocks.push(
  { title: 'Investor relations', heading: true },
  { title: 'Investor contact', role: 'Raj-Mohinder S. Gurm, President and CEO', text: 'Shareholders may request corporate documents, including the Audit Committee Charter, by writing to the Corporate Secretary at the address below.', email: 'info@p2solar.com', emailSubject: 'Investor inquiry', phone: '778-321-0047', address: ['P2 Solar, Inc.', 'Attention: Corporate Secretary', '13718 91st Ave', 'Surrey, BC V3V 7X1'] },
  { title: 'Corporate governance', heading: true },
  { title: 'Audit Committee Charter', date: '2025-03-15', dateLabel: 'March 15, 2025', text: 'The charter sets out the Audit Committee’s purpose, authority, composition and oversight responsibilities for financial reporting, internal controls and the independent auditor.', file: 'audit-committee-charter-2025.pdf', fileLabel: 'Read the Audit Committee Charter (PDF)' },
);
const newsSection = sections.find(item => item.slug === 'news');
newsSection.intro = 'Company announcements and updates from P2 Solar. Releases are archived by their publication date.';
newsSection.blocks = [
  { title: 'P2 Solar Announces Revocation of the Cease Trade Order by British Columbia Securities Commission', date: '2025-01-24', dateLabel: 'January 24, 2025', text: 'P2 Solar’s January 24, 2025 release announces the revocation of the cease trade order and provides an update on corporate activity, the acquisition of Futricity Solar and historical financial information. Read the original release for the full announcement and forward-looking statement disclosures.', file: 'press-release-2025-01-24.pdf', fileLabel: 'Read the full press release (PDF)' }
];

// Do not expose placeholder-only destinations.
for (const slug of ['projects', 'careers']) {
  const index = sections.findIndex(item => item.slug === slug);
  if (index !== -1) sections.splice(index, 1);
}
const contactSection = sections.find(item => item.slug === 'contact');
contactSection.intro = 'For company information, solar inquiries, research collaboration or investor relations, contact P2 Solar.';
contactSection.blocks = [
  { title: 'Solar consultation', text: 'Thinking about solar for your home, business or land? Send us your address, the type of property and a recent electricity bill if you have one, and Futricity Solar will follow up.', email: 'info@p2solar.com', emailSubject: 'Solar consultation request', emailLabel: 'Request a solar consultation' },
  { title: 'General and investor inquiries', text: 'Questions about P2 Solar, its strategy or shareholder matters.', email: 'info@p2solar.com', emailSubject: 'General inquiry', phone: '778-321-0047' },
  { title: 'Research partnerships', text: 'Researchers and institutions interested in collaborating with P2 CleanTech Labs.', email: 'info@p2solar.com', emailSubject: 'Research partnership inquiry', emailLabel: 'Contact P2 CleanTech Labs' },
  { title: 'Mailing address', address: ['P2 Solar, Inc.', '13718 91st Ave', 'Surrey, British Columbia V3V 7X1', 'Canada'] }
];
const divisionLogos = { solutions: ['futricity.jpg', 'Futricity Solar Inc.'], research: ['p2-cleantech.jpg', 'P2 CleanTech Labs Inc.'] };
const directory = document.querySelector('#directory-grid');
newsSection.blocks.push(
  { title: 'P2 Solar Launches R&D Initiative in Biological CO₂ Capture', date: '2025-09-04', dateLabel: 'September 4, 2025', text: 'The company announced a research and development initiative exploring the use of engineered bacteria, powered by solar energy, to capture atmospheric carbon dioxide and convert it into products such as fuels or chemicals. The release outlined plans for a laboratory-scale prototype, followed by a potential pilot plant and licensing model.' },
  { title: 'P2 Solar, Inc. Announces Launch of New Website', date: '2025-03-03', dateLabel: 'March 3, 2025', text: 'The company announced the launch of its updated website, providing information for investors and stakeholders. This is an archived announcement from March 2025.', file: 'press-release-2025-03-03.pdf', fileLabel: 'Read the full press release (PDF)' },
  { title: 'P2 Solar, Inc. Announces Appointment of New Director', date: '2024-01-11', dateLabel: 'January 11, 2024', text: 'The company announced the appointment of electrical engineer Sham Dhari to its board of directors.', file: 'press-release-2024-01-11.pdf', fileLabel: 'Read the full press release (PDF)' },
  { title: 'P2 Solar, Inc. Announces Completion of $110,000 Private Placement Under Partial Revocation Order', date: '2023-09-21', dateLabel: 'September 21, 2023', text: 'The company announced completion of a CA$110,000 convertible-debt private placement under a partial revocation order. See the original release for the terms and restrictions applicable at that time.', file: 'press-release-2023-09-21.pdf', fileLabel: 'Read the full press release (PDF)' },
  { title: 'P2 Solar, Inc. Announces Filing 2023 Annual Report and Private Placement Under Partial Revocation Order', date: '2023-08-28', dateLabel: 'August 28, 2023', text: 'The company reported filing its annual and interim reports and provided a progress update on its private placement under a partial revocation order.', file: 'press-release-2023-08-28.pdf', fileLabel: 'Read the full press release (PDF)' }
);
newsSection.blocks.sort((a, b) => b.date.localeCompare(a.date));
newsSection.intro = 'Company announcements, newest first. These archived releases reflect information at their original publication dates; historical plans and regulatory statements should not be read as current status.';
const preview = document.querySelector('#content-preview');
const menuButton = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('#main-nav');

const directoryGroups = [
  { title: 'Our company', description: 'The people, purpose and direction.', slugs: ['about', 'companies', 'news'] },
  { title: 'Our work', description: 'Energy today. Ideas for tomorrow.', slugs: ['solutions', 'research'] },
  { title: 'Get involved', description: 'Find your connection to P2 Solar.', slugs: ['investors', 'contact'] }
];
const directoryCopy = {
  about: ['About us', 'Our vision and values'],
  companies: ['Our companies', 'Meet our operating businesses'],
  news: ['News & media', 'Company and research updates'],
  solutions: ['Solar solutions', 'Homes, businesses and storage'],
  research: ['Climate research', 'Inside P2 CleanTech Labs'],
  projects: ['Projects', 'Our project portfolio framework'],
  investors: ['Investors', 'Strategy and corporate information'],
  careers: ['Careers', 'Work in clean energy and research'],
  contact: ['Contact', 'Start a conversation with our team']
};
directory.innerHTML = directoryGroups.map(group => `
  <nav class="directory-group" aria-label="${group.title}">
    <div class="directory-group-heading"><h3>${group.title}</h3><p>${group.description}</p></div>
    <div class="directory-group-links">${group.slugs.map(slug => {
      const [title, description] = directoryCopy[slug];
      return `<a class="directory-link" href="#/${slug}"><strong>${title}</strong><small>${description}</small></a>`;
    }).join('')}</div>
  </nav>`).join('');

function renderRoute() {
  const slug = location.hash.replace('#/', '') || '';
  const section = sections.find(item => item.slug === slug);
  document.body.classList.toggle('detail-view', Boolean(section));
  document.querySelectorAll('#main > section:not(#content-preview)').forEach(item => { item.hidden = Boolean(section); });
  mainNav.querySelectorAll('a').forEach(link => {
    if (section && link.hash === `#/${slug}`) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
  document.title = section ? `${section.title} | P2 Solar` : 'P2 Solar | Renewable Energy and Climate Innovation';
  if (!section) {
    preview.innerHTML = '';
    mainNav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    if (location.hash !== '#main') window.scrollTo({ top: 0, behavior: 'instant' });
    return;
  }

  preview.innerHTML = `
    <article class="route-panel" tabindex="-1">
      <a class="breadcrumb" href="#/"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5m6-6-6 6 6 6"/></svg> Overview</a>
      ${divisionLogos[slug] ? `<div class="route-brand"><img src="./${divisionLogos[slug][0]}" alt="${divisionLogos[slug][1]}" /></div>` : ''}
      <header class="route-header">
        <div>
          <p class="eyebrow">${section.title}</p>
          <h1>${section.headline}</h1>
        </div>
        <p class="route-intro">${section.intro}</p>
      </header>
      <div class="route-grid">
        ${section.blocks.map(block => block.heading ? `<h2 class="leadership-heading">${block.title}</h2>` : `
          <section class="route-item">
            <h2>${block.title}</h2>
            ${block.role ? `<p class="route-role">${block.role}</p>` : ''}
            ${block.date ? `<time datetime="${block.date}">${block.dateLabel}</time>` : ''}
            ${block.text ? `<p>${block.text}</p>` : ''}
            ${block.facts ? `<dl class="fact-list">${block.facts.map(([term, value]) => `<div><dt>${term}</dt><dd>${value}</dd></div>`).join('')}</dl>` : ''}
            ${block.list ? `<ul>${block.list.map(item => `<li>${item}</li>`).join('')}</ul>` : ''}
            ${block.address ? `<address class="route-address">${block.address.join('<br />')}</address>` : ''}
            ${block.email || block.phone || block.links ? `<div class="route-actions">
              ${block.email ? `<a class="document-link" href="mailto:${block.email}${block.emailSubject ? `?subject=${encodeURIComponent(block.emailSubject)}` : ''}">${block.emailLabel || block.email}</a>` : ''}
              ${block.phone ? `<a class="document-link" href="tel:+1${block.phone.replace(/\D/g, '')}">${block.phone}</a>` : ''}
              ${block.links ? block.links.map(link => `<a class="document-link" href="${link.href}" target="_blank" rel="noopener">${link.label} <span aria-hidden="true">↗</span><span class="sr-only">(opens in a new tab)</span></a>`).join('') : ''}
            </div>` : ''}
            ${block.note ? `<p class="document-note">${block.note}</p>` : ''}
            ${block.file ? `<a class="document-link" href="./${block.file}" target="_blank" rel="noopener">${block.fileLabel} <span class="sr-only">(opens in a new tab)</span></a>` : ''}
          </section>
        `).join('')}
      </div>
      <a class="route-close" href="#/">Return to overview</a>
    </article>`;
  window.scrollTo({ top: 0, behavior: 'instant' });
  preview.querySelector('.route-panel').focus({ preventScroll: true });
  mainNav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}

menuButton.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

window.addEventListener('hashchange', renderRoute);
document.querySelector('.skip-link').addEventListener('click', event => {
  event.preventDefault();
  const main = document.querySelector('#main');
  main.focus();
  main.scrollIntoView();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && mainNav.classList.contains('open')) {
    mainNav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.focus();
  }
});
renderRoute();
const motionToggle = document.querySelector('.motion-toggle');
motionToggle.addEventListener('click', () => {
  const paused = document.body.classList.toggle('motion-paused');
  motionToggle.setAttribute('aria-pressed', String(paused));
  motionToggle.textContent = paused ? 'Resume animations' : 'Pause animations';
});
