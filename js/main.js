/* MAIN SCRIPT — mobile menu, header, bubbles, scroll reveal, before/after sliders. No dependencies. */
const $ = (s, c = document) => c.querySelector(s), $$ = (s, c = document) => [...c.querySelectorAll(s)];

// Mobile menu
const menu = $('#menu'), btn = $('#menu-btn');
btn.addEventListener('click', () => { const open = menu.classList.toggle('hidden') === false; btn.setAttribute('aria-expanded', open); });
$$('#menu a').forEach(a => a.addEventListener('click', () => menu.classList.add('hidden')));

// Header turns solid after scrolling
const header = $('#header');
const onScroll = () => header.classList.toggle('bg-ink/80', scrollY > 24);
addEventListener('scroll', onScroll, { passive: true }); onScroll();

// Hero bubbles (decorative). Change 12 for more/fewer.
const bub = $('#bubbles');
for (let i = 0; i < 12; i++) {
  const b = document.createElement('span'), s = 8 + Math.random() * 40;
  b.className = 'bubble';
  b.style.cssText = `left:${Math.random() * 100}%;width:${s}px;height:${s}px;animation-duration:${9 + Math.random() * 10}s;animation-delay:${-Math.random() * 14}s;--x:${(Math.random() - .5) * 80}px`;
  bub.appendChild(b);
}

// Scroll reveal
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12 });
$$('[data-reveal]').forEach(el => io.observe(el));

// Before/after sliders: the range input drives a CSS variable
$$('.ba').forEach(ba => $('input', ba).addEventListener('input', e => ba.style.setProperty('--pos', e.target.value + '%')));

// Contact form: send visitors back to THIS site's thanks page, and stop double-clicks sending twice
const form = $('#quote-form');
if (location.protocol.startsWith('http')) $('[name=_next]', form).value = new URL('thanks.html', location.href).href;
form.addEventListener('submit', () => { const b = $('button[type=submit]', form); b.disabled = true; b.textContent = 'Sending...'; });

$('#year').textContent = new Date().getFullYear();
