// Booking: a time first, then who you are; the required topic keeps the calendar for buyers.
// Ported from the concept's booking dialog, shown inline on the page. This is a stand-in:
// nothing is sent anywhere until the partners' real calendars are connected.
const bkForm = document.getElementById('book-form');
if (bkForm) {
  const steps = bkForm.querySelectorAll('.bk-step');
  const bkProg = document.getElementById('bk-progress');
  const bkWhy = document.getElementById('bk-why');
  const bkTopic = document.getElementById('bk-topic');
  const bkDays = document.getElementById('bk-days');
  const bkTimes = document.getElementById('bk-times');
  const TIMES = ['1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'];
  let step = 1;

  function showStep(s) {
    step = s;
    steps.forEach((el) => { el.hidden = +el.dataset.step !== s; });
    bkProg.textContent = s === 1 ? 'Step 1 of 2: Pick a time' : s === 2 ? 'Step 2 of 2: Your details' : 'Your pick';
  }
  function buildDays() {
    const out = [], d = new Date();
    d.setHours(12, 0, 0, 0);
    d.setDate(d.getDate() + 2);
    while (out.length < 4) { const wd = d.getDay(); if (wd === 2 || wd === 4) out.push(new Date(d)); d.setDate(d.getDate() + 1); }
    bkDays.innerHTML = out.map((x, i) => {
      const label = x.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
      return '<label class="day"><input type="radio" name="day" value="' + label + '"' + (i === 0 ? ' checked' : '') + '><span><b>' +
        x.toLocaleDateString('en-US', { weekday: 'short' }) + '</b><em>' + x.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) + '</em></span></label>';
    }).join('');
    bkTimes.innerHTML = TIMES.map((t) => '<label class="slot"><input type="radio" name="time" value="' + t + '"><span>' + t + '</span></label>').join('');
  }

  // Prefill from the estimator or another page: /book-a-call?topic=team&why=...
  const params = new URLSearchParams(location.search);
  const topic = params.get('topic');
  const why = params.get('why');
  if (topic && [...bkTopic.options].some((o) => o.value === topic)) bkTopic.value = topic;
  if (why) bkWhy.value = why.slice(0, 400);

  buildDays();
  showStep(1);

  bkForm.addEventListener('click', (e) => {
    if (e.target.closest('[data-back]')) showStep(1);
    if (e.target.closest('[data-restart]')) { bkForm.reset(); buildDays(); showStep(1); }
  });
  bkForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const day = bkForm.elements.day && bkForm.elements.day.value;
    const time = bkForm.elements.time && bkForm.elements.time.value;
    if (step === 1) {
      document.getElementById('bk-err1').textContent = time ? '' : 'Pick a time to continue.';
      if (!time) { bkTimes.querySelector('input').focus(); return; }
      document.getElementById('bk-picked').textContent = day + ' at ' + time + ' Eastern';
      showStep(2);
      document.getElementById('bk-name').focus();
    } else if (step === 2) {
      let bad = null;
      ['bk-name', 'bk-email', 'bk-co', 'bk-role', 'bk-topic'].forEach((id) => {
        const el = document.getElementById(id), ok = el.value.trim() !== '' && el.checkValidity();
        el.setAttribute('aria-invalid', String(!ok));
        if (!ok && !bad) bad = el;
      });
      document.getElementById('bk-err2').textContent = bad
        ? (bad.id === 'bk-email' && bad.value.trim() ? 'Enter a work email, like name@company.com.' : bad.id === 'bk-topic' ? 'Choose what the call is about.' : 'Please fill in every field.')
        : '';
      if (bad) { bad.focus(); return; }
      document.getElementById('bk-summary').textContent = 'You picked ' + day + ' at ' + time + ' Eastern.';
      showStep(3);
      bkForm.querySelector('[data-step="3"] [data-restart]').focus();
    }
  });
}
