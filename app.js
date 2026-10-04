// Old single-page links (e.g. p2solar.com/#/investors) now forward to the real pages.
(() => {
  const match = location.hash.match(/^#\/([a-z]*)/);
  if (!match) return;
  const moved = { about: 'about', companies: 'about', solutions: 'solutions', research: 'research', investors: 'investors', news: 'news', contact: 'contact' };
  const target = moved[match[1]];
  const home = document.querySelector('.brand').getAttribute('href');
  const root = home === './' ? '' : home;
  location.replace(root + (target ? `${target}/` : ''));
})();

const menuButton = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('#main-nav');

menuButton.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && mainNav.classList.contains('open')) {
    mainNav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.focus();
  }
});

const motionToggle = document.querySelector('.motion-toggle');
motionToggle.addEventListener('click', () => {
  const paused = document.body.classList.toggle('motion-paused');
  motionToggle.setAttribute('aria-pressed', String(paused));
  motionToggle.textContent = paused ? 'Resume animations' : 'Pause animations';
});
