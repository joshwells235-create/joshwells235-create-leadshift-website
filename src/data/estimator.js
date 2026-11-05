// "Find your likely starting point": the concept's `P` object, with the demo's option labels
// and calls to action. Ranges match docs/03-facts.md. A string in brackets is a placeholder;
// the tool shows it as a placeholder chip.
export const options = [
  ['align', 'My leadership team, as a team'],
  ['academy', 'Leaders and high-potential managers'],
  ['ascend', 'Frontline managers'],
  ['coaching', 'One leader'],
  ['sales', 'My sales team'],
  ['unsure', 'Not sure yet'],
];

export const P = {
  align: {
    name: 'ALIGN', topic: 'team', desc: 'For your leadership team, working as a team.',
    inc: ['A behavioral assessment for each leader', 'Team assessment at the start and the end', 'Team workshops and coaching for the team leader', 'Six months'],
    q: [], price: 'Range', amount: '$50,000 to $75,000',
    note: 'Where you land depends on how long the program runs and how much one-on-one coaching the team needs.',
    cta: 'Talk to a partner about ALIGN', more: ['How ALIGN works', '/teams'],
    prefill: 'Exploring ALIGN for our leadership team.',
  },
  academy: {
    name: 'The Leadership Academy', topic: 'bench',
    desc: 'A cohort program that takes leaders from leading themselves, to leading others, to leading the organization, with a capstone at the end.',
    inc: ['Nine months, in an open or a private cohort', 'Behavioral and emotional intelligence assessments, plus a 360'],
    q: ['n', 'cohort'], nLabel: 'How many leaders?', n: [1, 30, 6], unit: 'leaders',
    price: 'Per seat', amount: '$15,000 to $18,000', per: [15000, 18000],
    cta: 'Talk to a partner about the Academy', more: ['How the Academy works', '/leaders'],
    prefill: 'Exploring the Leadership Academy for {n} leaders, {cohort} cohort.',
  },
  ascend: {
    name: 'ASCEND', topic: 'frontline', desc: 'Practical management training for frontline managers.',
    inc: ['Self-Aware Leader, People-Smart Leader and Elite5', 'Behavioral and emotional intelligence assessments', 'Hybrid, in person and virtual', 'Four months'],
    q: ['n'], nLabel: 'How many managers?', n: [4, 40, 12], unit: 'managers',
    price: 'Per manager', amount: '$4,000 to $6,000', per: [4000, 6000],
    note: 'Where you land depends on how many coaching hours each manager gets.',
    cta: 'Talk to a partner about ASCEND', more: ['How ASCEND works', '/managers'],
    prefill: 'Exploring ASCEND for {n} managers.',
  },
  coaching: {
    name: 'Executive coaching', topic: 'bench', desc: 'Six months of intensive coaching for one leader, across the whole role.',
    inc: ['A 360', 'A debrief', 'Twelve sessions over six months'], q: [], price: 'Price', amount: '$18,000',
    note: 'If the leader has one clear goal, performance coaching focuses on it for $5,000 per sprint.',
    cta: 'Talk to a partner about coaching', more: ['How coaching works', '/coaching'],
    prefill: 'Exploring executive coaching for one leader.',
  },
  sales: {
    name: 'Sales coaching', topic: 'sales', desc: 'Coaching for sales leaders and their teams.',
    inc: ['[Program details to come]'], q: [], price: 'Price', amount: '$5,000 per sprint',
    cta: 'Talk to a partner about sales coaching', more: ['How coaching works', '/coaching'],
    prefill: 'Exploring sales coaching.',
  },
  unsure: {
    name: 'Start with the Growth Index', topic: 'gi',
    desc: 'It is complimentary, and it shows whether your gap is how the team works together, how your leaders are growing, or both.',
    inc: ['About twenty minutes for you', 'A short assessment for each leader', 'A partner walks you through the report'], q: [], none: true,
    cta: 'Take the Growth Index', ctaHref: '/growth-index#start', more: ['Talk to a partner', '/book-a-call'],
  },
};
