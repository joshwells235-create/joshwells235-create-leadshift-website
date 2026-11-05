// Shared behavior, ported from the concept's script: header state, phone menu,
// scroll reveal and the Leadership Lens form. Page tools live in their own files.

const reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

/* header turns solid once the page moves (or stays solid on light-topped pages) */
const top = document.getElementById('top');
const alwaysSolid = top && top.dataset.solid === 'always';
let ticking = false;
function onScroll() {
  if (!top || ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    top.classList.toggle('solid', alwaysSolid || window.scrollY > 24 || document.body.classList.contains('menu-open'));
    ticking = false;
  });
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* phone menu */
const btn = document.querySelector('.menu-btn');
const sheet = document.getElementById('sheet');
if (btn && sheet) {
  const setMenu = (open) => {
    btn.setAttribute('aria-expanded', String(open));
    btn.textContent = open ? 'Close' : 'Menu';
    sheet.classList.toggle('open', open);
    document.body.classList.toggle('menu-open', open);
    onScroll();
  };
  btn.addEventListener('click', () => setMenu(btn.getAttribute('aria-expanded') !== 'true'));
  sheet.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') { setMenu(false); btn.focus(); }
  });
}

/* entrances: everything is visible at rest; each part rises once as it arrives */
if (!reduce && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      const el = en.target;
      io.unobserve(el);
      el.classList.add('pre');
      void el.offsetWidth;
      el.classList.remove('pre');
    });
  }, { rootMargin: '0px 0px -6% 0px' });
  requestAnimationFrame(() => {
    document.querySelectorAll('[data-reveal]').forEach((el) => {
      if (el.getBoundingClientRect().top > window.innerHeight * 0.9) io.observe(el);
    });
  });
}

/* The Leadership Lens: no list behind it in the preview, so say so plainly (concept copy) */
document.querySelectorAll('form[data-lens]').forEach((form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.querySelector('input[type="email"]');
    const out = form.querySelector('[role="status"]');
    const ok = input.value.trim() !== '' && input.checkValidity();
    input.setAttribute('aria-invalid', String(!ok));
    out.textContent = ok ? 'Subscriptions open when the new site launches.' : 'Enter a work email, like name@company.com.';
    if (!ok) input.focus();
  });
});

/* simple filters: buttons with data-filter="key" show items whose data-topic matches */
document.querySelectorAll('[data-filters]').forEach((group) => {
  const scope = document.querySelector(group.dataset.filters);
  if (!scope) return;
  group.addEventListener('click', (e) => {
    const b = e.target.closest('button[data-filter]');
    if (!b) return;
    group.querySelectorAll('button[data-filter]').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
    const key = b.dataset.filter;
    scope.querySelectorAll('[data-filter-item]').forEach((it) => { it.hidden = !(key === 'all' || it.dataset.topic === key); });
  });
});
