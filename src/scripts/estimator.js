// Likely starting point: each program asks its own questions and prices the way it is sold.
// Ported from the concept's script. The call to action opens the booking page with the
// topic and a note already filled in.
import { P } from '../data/estimator.js';

const fitForm = document.getElementById('fit-form');
if (fitForm) {
  const $ = (id) => document.getElementById(id);
  const fitN = $('fit-n'), fitOut = $('fit-n-out'), fitSw = $('fit-sw'), fitName = $('fit-name'), fitDesc = $('fit-desc'), fitInc = $('fit-inc');
  const fitRange = $('fit-range'), fitPriceL = $('fit-price-l'), fitPh = $('fit-ph'), totalRow = $('fit-total-row'), totalL = $('fit-total-l'), fitTotal = $('fit-total');
  const fitNote = $('fit-note'), fitCta = $('fit-cta'), fitNL = $('fit-n-label');
  let lastWho = null;
  const money = (v) => '$' + Math.round(v).toLocaleString('en-US');
  const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const withPh = (s) => (s.charAt(0) === '[' ? `<span class="ph" data-ph="">${esc(s)}</span>` : esc(s));
  const arrow = '<svg aria-hidden="true"><use href="#arrow"/></svg>';

  function fitUpdate() {
    const who = fitForm.elements.who.value, p = P[who], changed = who !== lastWho;
    if (changed && p.n) { fitN.min = p.n[0]; fitN.max = p.n[1]; fitN.value = p.n[2]; }
    const n = +fitN.value, cohort = fitForm.elements.cohort.value;
    const nTxt = p.n && n >= p.n[1] ? p.n[1] + '+' : String(n);
    fitForm.querySelectorAll('[data-q]').forEach((fs) => { fs.hidden = p.q.indexOf(fs.dataset.q) < 0; });
    if (p.nLabel) fitNL.textContent = p.nLabel;
    fitOut.textContent = nTxt;
    if (p.n) fitN.style.setProperty('--fill', ((n - p.n[0]) / (p.n[1] - p.n[0])) * 100 + '%');
    if (changed) {
      fitName.textContent = p.name;
      fitDesc.textContent = p.desc;
      fitInc.innerHTML = p.inc.map((i) => '<li>' + withPh(i) + '</li>').join('');
      fitSw.classList.remove('swap'); void fitSw.offsetWidth; fitSw.classList.add('swap');
    }
    fitRange.hidden = !!p.none;
    fitPriceL.textContent = p.price || '';
    fitPh.textContent = p.amount || '';
    totalRow.hidden = !p.per;
    if (p.per) {
      totalL.textContent = 'Total for ' + nTxt + ' ' + p.unit;
      fitTotal.textContent = n >= p.n[1] ? 'From ' + money(p.per[0] * n) : money(p.per[0] * n) + ' to ' + money(p.per[1] * n);
    }
    const note = who === 'academy'
      ? (cohort === 'open' ? 'In an open cohort, your leaders learn alongside leaders from other companies.' : 'A private cohort is built for your company alone.')
      : (p.note || '');
    fitNote.hidden = !note;
    fitNote.textContent = note;
    let href = p.ctaHref;
    if (!href) {
      const why = (p.prefill || '').replace('{n}', nTxt).replace('{cohort}', cohort);
      href = '/book-a-call?' + new URLSearchParams({ topic: p.topic, why }).toString();
    }
    fitCta.innerHTML =
      `<a class="btn btn-light" href="${esc(href)}">${esc(p.cta)}${arrow}</a>` +
      `<a class="textlink" href="${esc(p.more[1])}">${esc(p.more[0])}${arrow}</a>`;
    lastWho = who;
  }
  fitForm.addEventListener('input', fitUpdate);
  fitForm.addEventListener('submit', (e) => e.preventDefault());
  fitUpdate();
}
