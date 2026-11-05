// Browser-tab icon: the LeadShift mark from the approved logo (navy and blue).
import logo from '../../assets/logos/leadshift-logo-color.svg?raw';

export function GET() {
  const mark = logo.match(/<svg x="0" y="0" width="80" height="64" viewBox="0 0 80 64">(.*?)<\/svg>/s)[1];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -10 84 84">${mark}</svg>`;
  return new Response(svg, { headers: { 'Content-Type': 'image/svg+xml' } });
}
