// Small, always-loaded boot for the homepage story film (section #p2f).
// It only scales the static film frame to its stage and decides when to fetch the real animation:
//   - motion allowed: GSAP and p2-film.js load when the section comes near the viewport;
//   - reduced motion, the site's "Pause animations", or the user never scrolls there: nothing loads
//     unless the visitor presses Play.
// The finished company card (static HTML) is the default, so nothing shifts while scripts load.
(() => {
  const root = document.getElementById('p2f');
  if (!root) return;
  const stage = root.querySelector('.p2f-stage');
  const controls = root.querySelector('.p2f-controls');
  const toggle = root.querySelector('.p2f-toggle');
  const skip = root.querySelector('.p2f-skip');

  // scale the 1920 × 1080 film to the stage with one CSS variable (CSSOM, allowed by the CSP)
  const fit = () => root.style.setProperty('--p2f-k', (stage.clientWidth / 1920).toFixed(5));
  fit();
  if ('ResizeObserver' in window) new ResizeObserver(fit).observe(stage);
  else addEventListener('resize', fit);

  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  const motionAllowed = () => !reduce.matches && !document.body.classList.contains('motion-paused');
  const intent = { play: false };
  let loading = null;

  const addScript = src => new Promise((resolve, reject) => {
    const el = document.createElement('script');
    el.src = src;
    el.async = false;
    el.onload = resolve;
    el.onerror = reject;
    document.head.appendChild(el);
  });
  const load = () => {
    if (!loading) {
      loading = (window.gsap ? Promise.resolve() : addScript(root.dataset.p2fGsap))
        .then(() => addScript(root.dataset.p2fFilm))
        .then(() => window.P2Film.init(root, intent))
        .catch(() => {                       // keep the static card; let the visitor try again
          loading = null;
          toggle.disabled = false;
          toggle.textContent = 'Play animation';
        });
    }
    return loading;
  };

  toggle.textContent = 'Play animation';
  skip.hidden = true;
  controls.hidden = false;
  toggle.addEventListener('click', () => {
    if (window.P2Film && window.P2Film.ready) return;   // the film's own handler takes over
    intent.play = true;
    toggle.disabled = true;
    toggle.textContent = 'Loading…';
    load();
  });

  if (!motionAllowed() || !('IntersectionObserver' in window)) return;
  const near = new IntersectionObserver(entries => {
    if (!entries.some(e => e.isIntersecting) || !motionAllowed()) return;
    near.disconnect();
    load();
  }, { rootMargin: '300px 0px' });
  near.observe(stage);
})();
