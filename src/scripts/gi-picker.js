// Growth Index: the CEO picks five before leaving the page; ranking happens in the app.
// Ported from the concept's script. Continue opens the live Growth Index app with the five keys.
const gs = document.getElementById('start');
if (gs) {
  let picks = [];
  const pris = gs.querySelectorAll('.pri');
  const grid = gs.querySelector('.gs-grid');
  const gsCount = document.getElementById('gs-count');
  const gsGo = document.getElementById('gs-go');
  const gsClear = document.getElementById('gs-clear');
  const gsBase = gsGo.getAttribute('href');
  function gsRender() {
    const full = picks.length === 5;
    pris.forEach((b) => {
      const on = picks.indexOf(b.dataset.key) > -1;
      b.setAttribute('aria-pressed', String(on));
      b.setAttribute('aria-disabled', String(full && !on));
    });
    grid.classList.toggle('full', full);
    gsCount.textContent = full ? 'Five chosen' : picks.length + ' of 5 chosen';
    gsCount.classList.toggle('done', full);
    gsGo.classList.toggle('is-off', !full);
    gsGo.setAttribute('aria-disabled', String(!full));
    gsGo.setAttribute('href', full ? gsBase + '?priorities=' + picks.join(',') : gsBase);
    gsClear.hidden = picks.length === 0;
  }
  pris.forEach((b) => {
    b.addEventListener('click', () => {
      const k = b.dataset.key, i = picks.indexOf(k);
      if (i > -1) picks.splice(i, 1);
      else if (picks.length < 5) picks.push(k);
      else return;
      gsRender();
    });
  });
  gsGo.addEventListener('click', (e) => {
    if (gsGo.getAttribute('aria-disabled') === 'true') {
      e.preventDefault();
      gsCount.textContent = 'Pick ' + (5 - picks.length) + ' more to continue';
    }
  });
  gsClear.addEventListener('click', () => { picks = []; gsRender(); pris[0].focus(); });
  gsRender();
}
