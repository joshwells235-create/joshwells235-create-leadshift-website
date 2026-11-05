// The Learning Center's question list (demo LearningCenter.dc.html, plus A7 from the Home teaser).
// `href` only where a page exists. `todo` names the article in docs/07-content-tracker.md.
import { articles, storyTemplate } from './site.js';

export const topics = [
  ['all', 'All'],
  ['cost', 'Cost and pricing'],
  ['problems', 'Problems'],
  ['compare', 'Comparisons'],
  ['results', 'Results'],
  ['best', 'Best of'],
];
export const topicName = Object.fromEntries(topics);

export const questions = [
  { topic: 'cost', title: 'How much does leadership development cost?', sum: 'What moves the price, our ranges, and how to compare quotes.', href: articles.cost },
  { topic: 'cost', title: 'What does executive coaching cost?', todo: 'A2' },
  { topic: 'cost', title: 'Open cohort or private cohort: what changes in the price', todo: 'A3' },
  { topic: 'problems', title: 'Why every decision still ends up on your desk', sum: 'Leaders without clear ownership, a team that avoids hard debate, or managers who were never taught to manage. Each has a different fix.', todo: 'A4' },
  { topic: 'problems', title: 'Your best performer got promoted and is struggling as a manager', sum: 'Being great at the work does not teach anyone to run a team.', todo: 'A5' },
  { topic: 'problems', title: 'Should you develop the leaders you have or replace them?', sum: 'Start by checking whether they have had a fair shot.', todo: 'A6' },
  { topic: 'problems', title: "Signs your leadership team isn't a team", todo: 'A7' },
  { topic: 'compare', title: 'Executive coaching or performance coaching?', sum: 'The whole role, or one clear goal.', href: '/coaching' },
  { topic: 'compare', title: 'ALIGN or an off-site retreat?', todo: 'A9' },
  { topic: 'compare', title: 'Is the problem my leadership team, or the leaders on it?', sum: 'Look at where things break.', todo: 'A10' },
  { topic: 'results', title: 'What a team assessment retest shows', todo: 'A11' },
  { topic: 'results', title: '[Client story]', titlePh: true, todo: 'P1', href: storyTemplate },
  { topic: 'best', title: '[Best books for new managers]', titlePh: true, todo: 'A12' },
  { topic: 'best', title: '[The leadership assessments worth using, and when]', titlePh: true, todo: 'A13, open decision #15' },
];
