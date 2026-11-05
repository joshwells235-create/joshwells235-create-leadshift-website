// The preview tells every crawler to stay out. The launch build (PUBLIC_PREVIEW=false) opens the site.
export function GET() {
  const preview = import.meta.env.PUBLIC_PREVIEW !== 'false';
  const body = preview
    ? 'User-agent: *\nDisallow: /\n'
    : 'User-agent: *\nAllow: /\n\nSitemap: https://leadshift.com/sitemap.xml\n';
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
