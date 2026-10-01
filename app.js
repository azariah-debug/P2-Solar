const sections = [
  {
    slug: 'about', title: 'About P2 Solar', summary: 'Company overview, purpose and values.',
    headline: 'Clean technology with a long-term view.',
    intro: 'P2 Solar is committed to advancing sustainable solutions through renewable energy and carbon mitigation research while creating long-term shareholder value.',
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
      { title: 'Ground mount solar', text: 'Flexible and scalable systems where rooftop space is limited, including agricultural properties, rural land, community solar and commercial developments.' },
      { title: 'Battery energy storage', text: 'Battery solutions that improve resilience and solar energy utilization.', list: ['Backup power', 'Load management', 'Peak-demand reduction', 'Enhanced energy security'] }
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
      { title: 'Research roadmap', list: ['Literature review', 'Technology assessment', 'Research planning', 'Proof-of-concept development', 'Intellectual property evaluation', 'Pilot program development', 'Commercialization assessment'] }
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

const directory = document.querySelector('#directory-grid');
const preview = document.querySelector('#content-preview');
const menuButton = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('#main-nav');

const directoryGroups = [
  { title: 'Our company', description: 'The people, purpose and direction.', slugs: ['about', 'companies', 'news'] },
  { title: 'Our work', description: 'Energy today. Ideas for tomorrow.', slugs: ['solutions', 'research', 'projects'] },
  { title: 'Get involved', description: 'Find your connection to P2 Solar.', slugs: ['investors', 'careers', 'contact'] }
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
      <a class="breadcrumb" href="#/">← Overview</a>
      <header class="route-header">
        <div>
          <p class="eyebrow">${section.title}</p>
          <h1>${section.headline}</h1>
        </div>
        <p class="route-intro">${section.intro}</p>
      </header>
      <div class="route-grid">
        ${section.blocks.map(block => `
          <section class="route-item">
            <h2>${block.title}</h2>
            ${block.text ? `<p>${block.text}</p>` : ''}
            ${block.list ? `<ul>${block.list.map(item => `<li>${item}</li>`).join('')}</ul>` : ''}
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
