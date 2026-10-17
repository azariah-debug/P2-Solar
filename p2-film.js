// P2 Solar story film: the approved 0–16 s motion (sunlight → cell → roof → storage → company card)
// rebuilt as native SVG/DOM for the homepage, right after the hero. Source of the motion and cue
// times: the approved "direct" cut (120 BPM cue map). No sound, no video, no inline styles: GSAP
// only sets properties through the CSSOM, which the site's Content Security Policy allows.
//
// Loaded on demand by p2-film-boot.js (near the viewport, or on an explicit Play), never eagerly.
// Without it, or with reduced motion, the section shows its final frame (the company card), which
// is the CSS default. The animation adds `.is-anim`, plays once when the section is in view, pauses
// when it scrolls away or the tab is hidden, and holds the company card at the end with no work left.
window.P2Film = {
  ready: false,
  init(root, intent) {
    if (this.ready || !window.gsap) return;
    this.ready = true;

    const $ = sel => root.querySelector(sel);
    const $$ = sel => Array.from(root.querySelectorAll(sel));
    const stage = $('.p2f-stage');
    const ticker = gsap.ticker;
    const idle = () => ticker.sleep && ticker.sleep();   // no animation frames while paused or finished
    const wake = () => ticker.wake && ticker.wake();
    const NS = 'http://www.w3.org/2000/svg';
    const CUE = {
      sun_rise: 0, brand_in: 0.25, light_strike: 0.5, title_offer: 0.75, cell_glint: 1.5, pullback: 2,
      level_panel: 3.5, title_out: 3.5, tilt: 3.75, level_roof: 4.5, overview: 6, title_roof: 6,
      panel_glint: 6.5, title_storage: 8, trace_charge: 8, battery_1: 8.5, battery_2: 8.75, battery_3: 9,
      dusk: 9, battery_4: 9.25, window_home: 9.5, window_business: 9.75, pan_follow: 10, site_reveal: 11,
      logo_land: 11.25, card_title: 11.25, symbol_land: 11.5, facts_land: 11.75, reporting_land: 12,
      push: 12, close_url: 12.25, close_cta: 12.5, push_end: 16,
    };
    const C = name => CUE[name];
    const f = n => (+n).toFixed(3);
    const E = (tag, attrs, parent) => {
      const el = document.createElementNS(NS, tag);
      for (const k in attrs) el.setAttribute(k, attrs[k]);
      parent.appendChild(el);
      return el;
    };

    /* ---------- solar panels (generated, deterministic) ---------- */
    const CS = 7.6, PITCH = 8, P0 = 1.5, CH = 0.55, COLS = 6, ROWS = 10;
    const PW = P0 * 2 + (COLS - 1) * PITCH + CS, PH = P0 * 2 + (ROWS - 1) * PITCH + CS;
    const IW = PW - 2 * P0, IH = PH - 2 * P0;
    const cellPath = (x, y) => `M${f(x + CH)} ${f(y)}H${f(x + CS - CH)}L${f(x + CS)} ${f(y + CH)}V${f(y + CS - CH)}` +
      `L${f(x + CS - CH)} ${f(y + CS)}H${f(x + CH)}L${f(x)} ${f(y + CS - CH)}V${f(y + CH)}Z`;
    const fingers = (x, y) => {
      let d = '';
      for (let i = 1; i < 64; i++) d += `M${f(x + 0.2)} ${f(y + i * CS / 64)}H${f(x + CS - 0.2)}`;
      return d;
    };
    const cell = (parent, x, y) => {
      E('path', { d: cellPath(x, y), fill: 'url(#p2f-cellGrad)' }, parent);
      E('path', { d: fingers(x, y), stroke: '#b9c4d0', 'stroke-width': 0.014, opacity: 0.5, fill: 'none' }, parent);
      for (let k = 0; k < 5; k++) {
        const bx = x + CS * (k + 0.5) / 5;
        E('rect', { x: f(bx - 0.05), y: f(y + 0.08), width: 0.1, height: f(CS - 0.16), fill: '#dbe1e7' }, parent);
        E('rect', { x: f(bx + 0.03), y: f(y + 0.08), width: 0.022, height: f(CS - 0.16), fill: '#55616c', opacity: 0.75 }, parent);
      }
    };
    const pat = E('pattern', { id: 'p2f-cellsPat', patternUnits: 'userSpaceOnUse', x: P0, y: P0, width: PITCH, height: PITCH }, $('#p2f-world defs'));
    cell(pat, 0, 0);
    const panel = (parent, x, y, hero, worldX) => {
      const p = E('g', { transform: `translate(${x} ${y})` }, parent);
      E('rect', { x: -0.45, y: -0.45, width: f(PW + 0.9), height: f(PH + 0.9), rx: 0.7, fill: '#4f5961' }, p);
      E('rect', { x: 0, y: 0, width: f(PW), height: f(PH), rx: 0.5, fill: 'url(#p2f-frameGrad)' }, p);
      E('rect', { x: P0, y: P0, width: f(IW), height: f(IH), fill: '#e4e8eb' }, p);
      if (hero) {
        for (let r = 0; r < ROWS; r++) for (let c = 0; c < COLS; c++) cell(p, P0 + c * PITCH, P0 + r * PITCH);
        E('rect', { id: 'p2f-heroMatch', x: P0, y: P0, width: f(IW), height: f(IH), fill: 'url(#p2f-cellsPat)', opacity: 0 }, p);
      } else {
        E('rect', { x: P0, y: P0, width: f(IW), height: f(IH), fill: 'url(#p2f-cellsPat)' }, p);
      }
      E('rect', { x: P0, y: P0, width: f(IW), height: f(IH), fill: 'url(#p2f-glassGrad)' }, p);
      E('rect', { x: P0, y: P0, width: f(IW), height: f(IH), fill: '#fff6e0', opacity: 0, class: 'p2f-glare', 'data-x': worldX }, p);
      return p;
    };
    const HOME = { a: 1, b: 0, c: -0.3, d: 0.875, e: 336, f: 465 };
    const BIZ = { a: 1, b: 0, c: -0.2857, d: 0.7857, e: 1120, f: 490 };
    const apply = (M, u, v) => ({ x: M.a * u + M.c * v + M.e, y: M.b * u + M.d * v + M.f });
    const HERO_COL = 2, HERO_ROW = 0, HERO_CELL = { c: 2, r: 4 };
    for (let col = 0; col < 5; col++) for (let row = 0; row < 2; row++) {
      if (col === HERO_COL && row === HERO_ROW) continue;
      const ox = 115 + col * 54, oy = 16 + row * 86;
      panel($('#p2f-homeRoof'), ox, oy, false, apply(HOME, ox, oy).x);
    }
    for (let bc = 0; bc < 9; bc++) { const bx = 37 + bc * 54; panel($('#p2f-bizRoof'), bx, 28, false, apply(BIZ, bx, 28).x); }
    const heroO = { u: 115 + HERO_COL * 54, v: 16 + HERO_ROW * 86 };
    const lc = { x: P0 + HERO_CELL.c * PITCH + CS / 2, y: P0 + HERO_CELL.r * PITCH + CS / 2 };
    const Cw = apply(HOME, heroO.u + lc.x, heroO.v + lc.y);
    const T0 = [1, 0, 0, 1, Cw.x - lc.x, Cw.y - lc.y];
    const T1 = [HOME.a, HOME.b, HOME.c, HOME.d, Cw.x - (HOME.a * lc.x + HOME.c * lc.y), Cw.y - (HOME.b * lc.x + HOME.d * lc.y)];
    const mstr = m => `matrix(${m.map(f).join(' ')})`;
    const hero = $('#p2f-heroPanel');
    hero.setAttribute('transform', mstr(T0));          // face-on, as in the film (the final frame does not show it)
    panel(hero, 0, 0, true, Cw.x);

    /* ---------- timeline: same moves, eases and cue times as the approved film (0–16 s) ---------- */
    const tl = gsap.timeline({ paused: true });
    const FT = (t, from, to, at) => { to.immediateRender = false; tl.fromTo(t, from, to, at); };
    const vb = (x, y, w, h) => [x, y, w, h].map(f).join(' ');
    const svg = $('#p2f-world');
    const m0 = { x: Cw.x + 1.4, y: Cw.y + 1.2, w: 12.5 }, m1 = { x: Cw.x + 0.6, y: Cw.y + 0.5, w: 10.8 };
    const A0 = vb(m0.x - m0.w / 2, m0.y - m0.w * 9 / 32, m0.w, m0.w * 9 / 16);
    const A1 = vb(m1.x - m1.w / 2, m1.y - m1.w * 9 / 32, m1.w, m1.w * 9 / 16);
    const OV = vb(0, 0, 1920, 1080), DRIFT = vb(30, 12, 1860, 1046.25), END = vb(1800, 0, 1920, 1080);
    const ratio = 1920 / m1.w;
    const zoomEase = p => { const e = p < 0.5 ? 2 * p * p : 1 - 2 * (1 - p) * (1 - p); return (Math.pow(ratio, e) - 1) / (ratio - 1); };

    FT(svg, { attr: { viewBox: A0 } }, { attr: { viewBox: A1 }, duration: C('pullback'), ease: 'sine.inOut' }, 0);
    FT(svg, { attr: { viewBox: A1 } }, { attr: { viewBox: OV }, duration: C('overview') - C('pullback'), ease: zoomEase }, C('pullback'));
    FT(svg, { attr: { viewBox: OV } }, { attr: { viewBox: DRIFT }, duration: C('pan_follow') - C('overview'), ease: 'sine.inOut' }, C('overview'));
    FT(svg, { attr: { viewBox: DRIFT } }, { attr: { viewBox: END }, duration: C('site_reveal') - C('pan_follow'), ease: 'power2.inOut' }, C('pan_follow'));
    FT('#p2f-heroMatch', { opacity: 0 }, { opacity: 1, duration: 1, ease: 'sine.inOut' }, C('level_roof'));
    FT(hero, { attr: { transform: mstr(T0) } }, { attr: { transform: mstr(T1) }, duration: 1.85, ease: 'power2.inOut' }, C('tilt'));

    // light
    FT('.p2f-bloom', { opacity: 0 }, { opacity: 1, duration: 0.9, ease: 'sine.out' }, C('sun_rise'));
    FT('.p2f-beam', { opacity: 0, scaleX: 0, transformOrigin: '100% 50%' }, { opacity: 1, scaleX: 1, duration: C('light_strike') - C('sun_rise'), ease: 'power2.in' }, C('sun_rise'));
    FT('.p2f-strike', { opacity: 0, scale: 0.4 }, { opacity: 1, scale: 1, duration: 0.25, ease: 'power2.out' }, C('light_strike'));
    FT('.p2f-strike', { opacity: 1 }, { opacity: 0.35, duration: 1.2, ease: 'sine.out' }, C('light_strike') + 0.25);
    FT('.p2f-cell-dark', { opacity: 0.92 }, { opacity: 0.12, duration: 0.9, ease: 'expo.out' }, C('light_strike'));
    FT('.p2f-sheen', { x: -1500 }, { x: 2300, duration: 1.4, ease: 'power1.inOut' }, C('cell_glint') - 0.5);
    FT('.p2f-cell-dark', { opacity: 0.12 }, { opacity: 0, duration: 0.8, ease: 'sine.inOut' }, C('pullback'));
    FT('.p2f-beamrot', { opacity: 1 }, { opacity: 0, duration: 1, ease: 'sine.inOut' }, C('pullback') + 0.2);
    FT('.p2f-bloom', { opacity: 1 }, { opacity: 0, duration: 1.2, ease: 'sine.inOut' }, C('pullback') + 0.4);
    FT('.p2f-strike', { opacity: 0.35 }, { opacity: 0, duration: 0.8, ease: 'sine.inOut' }, C('pullback'));
    FT('.p2f-sky-day', { opacity: 0 }, { opacity: 1, duration: 2, ease: 'sine.inOut' }, C('level_panel'));

    // panels catch the light
    const gx = (i, el) => (+el.getAttribute('data-x') - 300) / 1400 * 0.6;
    const glare = $$('.p2f-glare');
    FT(glare, { opacity: 0 }, { opacity: 0.5, duration: 0.14, ease: 'power1.out', stagger: gx }, C('panel_glint'));
    FT(glare, { opacity: 0.5 }, { opacity: 0, duration: 0.35, ease: 'power1.in', stagger: gx }, C('panel_glint') + 0.14);

    // Storage and window cues continue over the bright daytime scene.
    const draw = (ids, at, dur) => {
      tl.set(ids.map(i => '#p2f-' + i).join(','), { autoAlpha: 1 }, at);
      ids.forEach(i => FT('#p2f-' + i, { attr: { 'stroke-dashoffset': 1 } }, { attr: { 'stroke-dashoffset': 0 }, duration: dur, ease: 'power2.inOut' }, at));
    };
    const pulse = (id, at, dur) => {
      tl.set('#p2f-' + id, { autoAlpha: 1 }, at);
      FT('#p2f-' + id, { attr: { 'stroke-dashoffset': 0.08 } }, { attr: { 'stroke-dashoffset': -1 }, duration: dur, ease: 'none' }, at);
      tl.set('#p2f-' + id, { autoAlpha: 0 }, at + dur);
    };
    draw(['t1g', 't1', 't2g', 't2'], C('trace_charge'), 0.6);
    pulse('p1', C('trace_charge') + 0.45, 0.9); pulse('p2', C('trace_charge') + 0.55, 0.9);
    [1, 2, 3, 4].forEach(i => FT('#p2f-seg' + i, { opacity: 0 }, { opacity: 1, duration: 0.12, ease: 'power2.out' }, C('battery_' + i)));
    draw(['t3g', 't3', 't4g', 't4'], C('dusk'), 0.5);
    pulse('p3', C('dusk') + 0.4, 0.8); pulse('p4', C('dusk') + 0.6, 0.8);
    FT(['#p2f-winHome1', '#p2f-winHome2', '#p2f-haloHome', '.p2f-winmun'], { opacity: 0 }, { opacity: 1, duration: 0.5, ease: 'power2.out' }, C('window_home'));
    FT(['#p2f-winBiz', '#p2f-haloBiz', '.p2f-bizmun'], { opacity: 0 }, { opacity: 1, duration: 0.5, ease: 'power2.out' }, C('window_business'));

    // the lime trace runs along the lawn and draws the inlay; the company card wipes up inside it
    draw(['wtg', 'wt'], C('pan_follow'), C('site_reveal') - C('pan_follow'));
    FT('.p2f-inlay', { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.3, ease: 'sine.out' }, C('site_reveal') - 0.15);
    FT('.p2f-cardwrap', { clipPath: 'inset(100% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.65, ease: 'power3.inOut' }, C('site_reveal'));
    FT(['#p2f-wt', '#p2f-wtg'], { opacity: 1 }, { opacity: 0, duration: 0.45, ease: 'sine.inOut' }, C('site_reveal') + 0.15);
    // card rows (wide layout) build on the beat; opacity only, so the text stays in the accessibility tree
    const step = (name, at, dur, ease, y) => FT(`.p2f-card--film [data-p2f-step="${name}"]`, { opacity: 0, y }, { opacity: 1, y: 0, duration: dur, ease, stagger: 0.08 }, at);
    step('logo', C('logo_land'), 0.5, 'power3.out', 12);
    step('title', C('card_title'), 0.5, 'power3.out', 14);
    step('symbol', C('symbol_land'), 0.6, 'expo.out', 18);
    step('facts', C('facts_land'), 0.45, 'power3.out', 14);
    step('rep', C('reporting_land'), 0.45, 'power3.out', 12);
    step('url', C('close_url'), 0.4, 'power3.out', 12);
    step('cta', C('close_cta'), 0.4, 'power2.out', 10);
    FT('.p2f-inlay', { scale: 1, transformOrigin: '198px 604px' }, { scale: 1.045, duration: C('push_end') - C('push'), ease: 'sine.inOut' }, C('push'));

    // opening logo and masked headlines
    FT('.p2f-brand', { autoAlpha: 0, x: -14 }, { autoAlpha: 1, x: 0, duration: 0.4, ease: 'power3.out' }, C('brand_in'));
    FT('.p2f-brand', { autoAlpha: 1 }, { autoAlpha: 0, duration: 0.25, ease: 'power1.in' }, C('site_reveal') - 0.3);
    const headline = (n, inAt, outAt) => {
      tl.set('.p2f-hl--' + n, { autoAlpha: 1 }, inAt);
      FT('.p2f-hli--' + n, { yPercent: 105 }, { yPercent: 0, duration: 0.7, ease: 'power3.out' }, inAt);
      FT('.p2f-hli--' + n, { yPercent: 0 }, { yPercent: -105, duration: 0.35, ease: 'power2.in' }, outAt);
      tl.set('.p2f-hl--' + n, { autoAlpha: 0 }, outAt + 0.35);
    };
    headline(1, C('title_offer'), C('title_out'));
    headline(2, C('title_roof'), C('title_storage') - 0.4);
    headline(3, C('title_storage'), C('pan_follow') - 0.4);

    /* ---------- playback: one viewport-triggered play, pause off-screen, controls, final card holds ---------- */
    const controls = $('.p2f-controls');
    const toggle = $('.p2f-toggle');
    const status = $('.p2f-status');
    const reduce = matchMedia('(prefers-reduced-motion: reduce)');
    const sitePaused = () => document.body.classList.contains('motion-paused');
    let state = 'poster';           // poster | playing | paused | ended
    let autoplayed = false;
    let userPaused = false;          // explicit pause (button or the site's "Pause animations")
    let userOptIn = false;           // explicit Play/Replay, honoured even with reduced motion

    const LABEL = { poster: 'Play animation', playing: 'Pause', paused: 'Play', ended: 'Replay' };
    const render = () => {
      toggle.textContent = LABEL[state];
    };
    const say = text => { status.textContent = text; };
    const set = s => { state = s; render(); };
    const play = fromStart => {
      root.classList.add('is-anim');
      wake();
      if (fromStart || tl.progress() === 1) tl.restart(); else tl.play();
      set('playing');
      say('Animation playing.');
    };
    const pause = byUser => {
      tl.pause();
      idle();
      userPaused = byUser;
      set('paused');
      if (byUser) say('Animation paused.');
    };
    const finish = () => {
      root.classList.add('is-anim');
      tl.progress(1).pause();
      idle();
      set('ended');
      say('Company facts shown.');
    };
    tl.eventCallback('onComplete', () => { idle(); set('ended'); say('Animation finished. Company facts shown.'); });

    toggle.addEventListener('click', () => {
      if (state === 'playing') { pause(true); return; }
      userPaused = false;
      userOptIn = true;
      play(state === 'ended' || state === 'poster');
    });
    // keyboard focus reaching the card's links shows the finished card
    $('.p2f-card--film').addEventListener('focusin', () => { if (state === 'playing' || state === 'paused') finish(); });
    // the site's own "Pause animations" control and reduced-motion preference are respected
    new MutationObserver(() => { if (sitePaused() && state === 'playing') pause(true); })
      .observe(document.body, { attributes: true, attributeFilter: ['class'] });
    // switching to reduced motion mid-film shows the final facts and stops any automatic resume
    const onReduce = () => {
      if (!reduce.matches) return;
      userOptIn = false;
      if (state === 'playing' || state === 'paused') finish();
    };
    if (reduce.addEventListener) reduce.addEventListener('change', onReduce); else reduce.addListener(onReduce);

    const motionAllowed = () => !reduce.matches && !sitePaused();
    let inView = false;
    let autoPausedHidden = false;
    const mayRun = () => !userPaused && !sitePaused() && (motionAllowed() || userOptIn);

    toggle.disabled = false;
    controls.hidden = false;
    if (intent.play) {
      // explicit Play pressed before the film had loaded (allowed even with reduced motion)
      userOptIn = true;
      autoplayed = true;
      play(true);
    } else if (motionAllowed()) {
      // poster: the lit cell with the logo and the offer (t = 1.2 s) until the section is in view
      root.classList.add('is-anim');
      tl.time(1.2).pause();
      idle();
      set('paused');
    } else {
      set('poster');                // final frame (company card), the CSS default
    }

    new IntersectionObserver(entries => {
      const entry = entries[entries.length - 1];
      inView = entry.isIntersecting && entry.intersectionRatio >= 0.35;
      if (inView) {
        // automatic start/resume never overrides an explicit pause, reduced motion or the site-wide pause
        if (!autoplayed && state === 'paused' && mayRun() && motionAllowed()) { autoplayed = true; play(true); }
        else if (state === 'paused' && mayRun() && (autoplayed || userOptIn)) { wake(); tl.play(); set('playing'); }
      } else if (state === 'playing') {
        pause(false);
      }
    }, { threshold: [0, 0.35] }).observe(stage);

    document.addEventListener('visibilitychange', () => {
      if (document.hidden && state === 'playing') { pause(false); autoPausedHidden = true; }
      else if (!document.hidden && autoPausedHidden) {
        autoPausedHidden = false;
        if (inView && state === 'paused' && mayRun()) { wake(); tl.play(); set('playing'); }
      }
    });
  },
};
