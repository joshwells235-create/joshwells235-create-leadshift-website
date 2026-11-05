// One source for the facts every page, the structured data and the tools read.
// Every value here comes from docs/03-facts.md, the homepage concept or the demo canvas.
// If a fact is not on record, it does not belong here: use <Ph> on the page instead.

export const firm = {
  name: 'LeadShift',
  url: 'https://leadshift.com/',
  descriptor:
    'LeadShift is a business performance coaching firm based in Worcester, Massachusetts, helping CEOs develop their leaders, align their leadership teams and build stronger frontline managers.',
  heroLead:
    'LeadShift is a business performance coaching firm based in Worcester, Massachusetts. We help you build the managers, leaders and leadership teams a growing company needs, so the business performs without you carrying it.',
  tagline: 'Business performance coaching, Worcester, Massachusetts',
  founded: '1997',
  phone: '(508) 778-1300',
  phoneHref: 'tel:+15087781300',
  phoneIntl: '+1-508-778-1300',
  address: {
    street: '100 Front Street, Suite 400',
    city: 'Worcester',
    region: 'MA',
    postal: '01608',
    country: 'US',
  },
  industries: 'financial services, insurance, life sciences and manufacturing',
  areaServed: 'United States',
};

// Main navigation (demo SiteHeader) and the two calls to action.
export const nav = [
  { key: 'leaders', label: 'Leaders', href: '/leaders' },
  { key: 'teams', label: 'Teams', href: '/teams' },
  { key: 'managers', label: 'Managers', href: '/managers' },
  { key: 'coaching', label: 'Coaching', href: '/coaching' },
  { key: 'pricing', label: 'Pricing', href: '/pricing' },
  { key: 'results', label: 'Results', href: '/results' },
  { key: 'learn', label: 'Learn', href: '/learn' },
  { key: 'about', label: 'About', href: '/about' },
];
export const cta = {
  gi: { label: 'Take the Growth Index', href: '/growth-index' },
  call: { label: 'Talk to a partner', href: '/book-a-call' },
};

// Footer link columns (demo SiteFooter).
export const footerCols = [
  {
    title: 'How we help',
    links: [
      ['Leadership bench', '/leaders'],
      ['Team performance: ALIGN', '/teams'],
      ['Frontline managers: ASCEND', '/managers'],
      ['Coaching', '/coaching'],
      ['Open workshops', '/workshops'],
      ['The Growth Index', '/growth-index'],
    ],
  },
  {
    title: 'Learn',
    links: [
      ['Learning Center', '/learn'],
      ['Pricing', '/pricing'],
      ['What leadership development costs', '/learn/how-much-does-leadership-development-cost'],
      ['Client stories and reviews', '/results'],
    ],
  },
  {
    title: 'Company',
    links: [
      ['About LeadShift', '/about'],
      ['Is LeadShift right for you?', '/fit'],
      ['Book a time', '/book-a-call'],
      ['For AI agents', '/for-ai-agents'],
    ],
  },
];

// People. Titles confirmed by Josh 2026-11-05. Partner credentials stay off the site (Josh 2026-11-02).
export const partners = [
  { name: 'Joe Cundall', title: 'Chief Executive Officer', initials: 'JC' },
  { name: 'Kailyn Graham', title: 'Chief Operating Officer', initials: 'KG' },
  { name: 'Josh Wells', title: 'President', initials: 'JW' },
];
export const staff = [
  { name: 'Brian Burlas', title: 'Senior Consultant and Account Manager', initials: 'BB' },
  { name: 'Rosemary Manu', title: 'Program Manager', initials: 'RM' },
];
// Shown under the plain heading "Coaches and facilitators" (Josh 2026-11-05).
export const coaches = [
  { name: 'Celia Chase', title: 'Executive Leadership Coach', initials: 'CC' },
  { name: 'Sydney Labadie', title: 'Executive Leadership Coach', initials: 'SL' },
  { name: 'Melissa Sherry', title: 'Leadership Strategist and Training Facilitator', initials: 'MS' },
  { name: 'Nora Elder', title: 'Leadership Strategist and Training Facilitator', initials: 'NE' },
];

// Programs and published prices (Josh 2026-11-02; concept).
// `schema` holds the exact JSON-LD wording from the concept.
export const programs = [
  {
    key: 'align',
    name: 'ALIGN',
    href: '/teams',
    who: 'Your leadership team',
    length: 'six months',
    amount: '$50,000 to $75,000',
    schema: {
      name: 'ALIGN',
      description: 'A six-month program for a leadership team: trust, healthy conflict, commitment, accountability and results.',
      price: { minPrice: 50000, maxPrice: 75000 },
    },
  },
  {
    key: 'academy',
    name: 'The Leadership Academy',
    href: '/leaders',
    who: 'Leaders and high-potential managers',
    length: 'nine months',
    amount: '$15,000 to $18,000',
    unit: 'per seat',
    schema: {
      name: 'The Leadership Academy',
      description: 'A nine-month cohort program for leaders and high-potential managers.',
      price: { minPrice: 15000, maxPrice: 18000, unitText: 'per participant' },
    },
  },
  {
    key: 'ascend',
    name: 'ASCEND',
    href: '/managers',
    who: 'Frontline managers',
    length: 'four months',
    amount: '$4,000 to $6,000',
    unit: 'per manager',
    schema: {
      name: 'ASCEND',
      description: 'A four-month hybrid program for frontline managers.',
      price: { minPrice: 4000, maxPrice: 6000, unitText: 'per manager' },
    },
  },
  {
    key: 'executive',
    name: 'Executive coaching',
    href: '/coaching',
    who: 'One leader, the whole role',
    length: 'six months',
    amount: '$18,000',
    schema: {
      name: 'Executive coaching',
      description: 'Six months of intensive coaching for one leader, across the whole role: a 360, a debrief and twelve sessions.',
      price: { price: 18000 },
    },
  },
  {
    key: 'performance',
    name: 'Performance coaching',
    href: '/coaching',
    who: 'One leader, one goal',
    amount: '$5,000',
    unit: 'per sprint',
    schema: {
      name: 'Performance coaching',
      description: 'Focused coaching for a leader working toward one clear goal, delivered in sprints.',
      price: { price: 5000, unitText: 'per sprint' },
    },
  },
  {
    key: 'sales',
    name: 'Sales coaching',
    href: '/coaching',
    who: 'Sales leaders and their teams',
    amount: '$5,000',
    unit: 'per sprint',
    schema: {
      name: 'Sales coaching',
      description: 'Coaching for sales leaders and their teams, delivered in sprints.',
      price: { price: 5000, unitText: 'per sprint' },
    },
  },
];

// The twelve Growth Index priorities, keys and one-line descriptions from the concept.
export const giApp = 'https://leadshift-cci.vercel.app/start';
export const priorities = [
  ['c_drive_ownership', 'Drive and Ownership', 'Owns the initiative without being chased.'],
  ['c_delegates_authority', 'Delegates Authority', 'Gives their people real decisions to make, not just more work to do.'],
  ['c_exec_discipline', 'Executional Discipline', "Sets their team up to know what to do and keep performing when they're not there."],
  ['c_personal_adaptability', 'Personal Adaptability', 'Adjusts their own approach quickly when the situation changes, without losing effectiveness.'],
  ['c_decision_making', 'Decision Making', "Makes sound, timely decisions without waiting for information they're not going to get."],
  ['c_communicates', 'Communicates Effectively', 'Says the clear, direct version (up, down, and sideways) so people always know where they stand.'],
  ['c_strategic_thinking', 'Strategic Focus', 'Stays focused on what matters most to the bigger goal.'],
  ['c_self_awareness', 'Self-Awareness', 'Knows their own strengths and blind spots, and manages them instead of being managed by them.'],
  ['c_change_leadership', 'Change Leadership', 'Brings their team along the change curve and keeps them moving.'],
  ['c_right_people_seats', 'Right People, Right Seats', "Knows what good looks like for the job, holds to that standard when hiring, and acts quickly when someone isn't right."],
  ['c_develops_people', 'Develops People', 'Builds the skill and confidence of the people under them, so the bench gets stronger every year.'],
  ['c_works_across', 'Works Across the Business', "Supports the other leaders and the goals of the whole company ahead of their own department's."],
].map(([key, title, desc]) => ({ key, title, desc }));

// Proof (concept).
export const testimonials = {
  main: {
    quote:
      "Our partnership with LeadShift has been instrumental in helping us to develop strong portfolio leadership. With stronger leadership we've lowered execution risks and driven higher returns.",
    name: 'David Dullum',
    role: 'President, Gladstone Investment Corporation',
  },
  side: {
    quote: 'LeadShift has been a great leadership development partner to Centreville Bank.',
    name: 'Hal Horvat',
    role: 'CEO, Centreville Bank',
  },
};
export const facts = [
  ['Building leaders since', '1997'],
  ['Organizations served', '200+'],
  ['How long many clients stay', '10+ yrs'],
];

// Client logos in the concept's marquee order, with their intrinsic sizes.
export const logos = [
  ['arena-mail-digital', 'Arena Mail + Digital', 210, 73],
  ['centreville-bank', 'Centreville Bank', 172, 129],
  ['brunswick', 'Brunswick', 232, 40],
  ['digital-fuel-capital', 'Digital Fuel Capital', 240, 47],
  ['optima-overnight', 'Optima Overnight', 235, 81],
  ['elevation-3d', 'Elevation 3D', 229, 40],
  ['frontier-packaging', 'Frontier Packaging', 241, 52],
  ['interstate-specialty-products', 'Interstate Specialty Products', 237, 50],
  ['nocturne-luxury-villas', 'Nocturne Luxury Villas', 232, 49],
  ['educators-resource', 'Educators Resource', 246, 85],
  ['port', 'PORT', 239, 110],
  ['the-hunley-group', 'The Hunley Group', 238, 34],
  ['specialized-fabrication-equipment-group', 'Specialized Fabrication Equipment Group', 240, 92],
  ['stackry', 'Stackry', 239, 68],
  ['wellist', 'Wellist', 235, 60],
  ['driv-lok', 'Driv-Lok', 231, 50],
  ['worthen', 'Worthen', 228, 116],
  ['edge-adhesives', 'Edge Adhesives', 236, 111],
  ['lock-n-lube', 'Lock N Lube', 231, 52],
  ['msm', 'MSM', 209, 63],
  ['teamworks', 'Teamworks', 235, 65],
  ['union-street-media', 'Union Street Media', 231, 105],
  ['pioneer-square-brands', 'Pioneer Square Brands', 156, 112],
  ['wcs-industries', 'WCS Industries', 237, 52],
].map(([file, name, w, h]) => ({ src: `/client-logos/${file}.png`, name, w, h }));
// Alphabetical list used in the sentence under the marquee (concept copy).
export const clientNamesSentence =
  'LeadShift clients include Arena Mail + Digital, Brunswick, Centreville Bank, Digital Fuel Capital, Driv-Lok, Edge Adhesives, Educators Resource, Elevation 3D, Frontier Packaging, The Hunley Group, Interstate Specialty Products, Lock N Lube, MSM, Nocturne Luxury Villas, Optima Overnight, Pioneer Square Brands, PORT, Specialized Fabrication Equipment Group, Stackry, Teamworks, Union Street Media, WCS Industries, Wellist and Worthen.';

// The Leadership Lens (concept copy; cadence still to confirm, open decision #10).
export const lens = {
  name: 'The Leadership Lens',
  blurb:
    'A letter from LeadShift every other week on leading a growing company: three observations, two coaching questions and one action.',
};

// Sample report images (fictional company) and the caption that must stay with them.
export const sampleReport = {
  cover: '/images/growth-index-sample-cover.webp',
  pages: [
    '/images/growth-index-sample-page-1.webp',
    '/images/growth-index-sample-page-2.webp',
    '/images/growth-index-sample-page-3.webp',
    '/images/growth-index-sample-page-4.webp',
  ],
  leaderPage: '/images/growth-index-sample-leader-page.webp',
  caption:
    "Pages from a sample report for a fictional company. Yours is built from your strategy, your ratings and your leaders' assessments.",
};

// Learning Center slugs used across pages.
export const articles = {
  cost: '/learn/how-much-does-leadership-development-cost',
};
// Client story template (the slug becomes the client's name once a story is approved).
export const storyTemplate = '/results/client-name';
