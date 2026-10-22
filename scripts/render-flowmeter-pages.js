// Flowmeter detail pages reuse the approved probe detail components and styles.
// Shared model records and publication decisions are documented in docs/flowmeters-content.md.
const fs = require('node:fs');
const path = require('node:path');
const { meters, updated } = require('../content/flowmeters.json');
const sources = require('../docs/sources/flowmeters/pdf-manifest.json');
const shared = require('../assets/shared-ui.js');
const root = path.resolve(__dirname, '..');
const origin = 'https://www.vepolink.com';
const category = '/products/flowmeters/';
const version = '20261004flow4';
const esc = value => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const arrow = '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3 10h13M11 5l5 5-5 5"/></svg>';
const enquiry = (meter, purpose = 'configuration enquiry') => {
  const body = `Hello Vepolink,\n\nI would like information for ${meter.name} — ${meter.type}.\n\nApplication and liquid:\nRequired minimum / normal / maximum flow:\nPipe size, material and wall thickness (or flume / weir type and dimensions):\nLiquid conductivity, solids and aeration:\nProcess pressure and temperature:\nRequired output and receiving system:\nPower supply and cable run:\nInstallation / shutdown constraints:\nQuantity and location:\n\nPlease confirm the suitable configuration and provide its current technical datasheet.`;
  return `mailto:sales@vepolink.com?subject=${encodeURIComponent(`Vepolink ${meter.name} — ${purpose}`)}&body=${encodeURIComponent(body)}`;
};
const rows = entries => entries.map(([label, value]) => `<div><dt>${esc(label)}</dt><dd>${esc(value)}</dd></div>`).join('');
const download = '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 3v10m-4-4 4 4 4-4M3 13v4h14v-4"/></svg>';
const byId = new Map(meters.map(m => [m.id, m]));
function makePage(m) {
  const url = origin + m.url;
  const title = `${m.name} ${m.type} — Vepolink`;
  const imageURL = `${origin}/assets/products/flowmeters/${m.image}`;
  const { width, height } = sources.find(s => s.id === m.sourceId).image;
  const schema = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'WebPage', '@id': url, url, name: title, description: m.description, isPartOf: { '@id': origin + category }, mainEntity: { '@id': `${url}#product` } },
    { '@type': 'Product', '@id': `${url}#product`, name: `${m.name} — ${m.type}`, description: `${m.description} ${m.confirmation}`, url, category: 'Flowmeters', image: imageURL, additionalProperty: m.specGroups.flatMap(g => g.rows).map(([name, value]) => ({ '@type': 'PropertyValue', name, value })) },
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: origin + '/' },
      { '@type': 'ListItem', position: 2, name: 'Flowmeters', item: origin + category },
      { '@type': 'ListItem', position: 3, name: m.name, item: url }
    ] }
  ] };
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="referrer" content="strict-origin-when-cross-origin">
  <meta name="theme-color" content="#fafaf7">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(m.description)} Explore ${esc(m.name)} specifications, installation and configuration options from Vepolink.">
  <meta name="robots" content="index, follow, max-image-preview:large">
  <link rel="canonical" href="${url}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Vepolink">
  <meta property="og:locale" content="en_IN">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(m.description)}">
  <meta property="og:url" content="${url}">
  <meta property="og:image" content="${imageURL}">
  <meta property="og:image:width" content="${width}">
  <meta property="og:image:height" content="${height}">
  <meta property="og:image:alt" content="${esc(m.imageAlt)}">
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="${esc(title)}">
  <meta name="twitter:description" content="${esc(m.description)}">
  <meta name="twitter:image" content="${imageURL}">
  <link rel="icon" href="/assets/vepolink-favicon.png">
  <link rel="stylesheet" href="/assets/site.css?v=${version}">
  <link rel="stylesheet" href="/assets/water-probe-detail.css?v=20260923photos2">
  <link rel="stylesheet" href="/assets/flowmeter-detail.css?v=${version}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&amp;family=Geist+Mono:wght@400;500;600&amp;family=Instrument+Serif:ital@0;1&amp;display=swap" rel="stylesheet">
  <script defer src="/assets/shared-ui.js?v=${version}"></script>
  <script defer src="/assets/site.js?v=${version}"></script>
  <script defer src="/assets/water-probe-detail.js?v=20260923photos2"></script>
  <script type="application/ld+json">${JSON.stringify(schema, null, 2)}</script>
</head>
<body><div id="root">
  <a class="skip-link" href="#multi-parameter-product-main">Skip to content</a>
  <site-header>${shared.renderHeader()}</site-header>
  <main id="multi-parameter-product-main" class="water-sensor-page flowmeter-detail-page" data-flowmeter="${m.id}">
    <section class="wpd-hero" aria-labelledby="flowmeter-title"><div class="mp-shell">
      <nav class="wpd-breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><a href="${category}">Flowmeters</a><span aria-hidden="true">/</span><span aria-current="page">${esc(m.name)}</span></nav>
      <div class="wpd-hero-grid"><div class="wpd-hero-copy">
        <h1 id="flowmeter-title">${esc(m.name)}<br><span>${esc(m.headline)}</span></h1>
        <p class="wpd-lead">${esc(m.description)}</p>
        <div class="mp-actions"><a class="button button-dark" href="${esc(enquiry(m))}">Request configuration ${arrow}</a><a class="button button-light" href="${esc(m.brochure)}" download>Download brochure ${download}</a></div>
        <dl class="wpd-key-facts">${rows(m.keyFacts)}</dl>
      </div><figure class="wpd-product-figure"><div class="wpd-product-photo"><img src="/assets/products/flowmeters/${esc(m.image)}" alt="${esc(m.imageAlt)}" width="${width}" height="${height}" fetchpriority="high" decoding="async" data-sensor-image><span class="wpd-symbol" data-sensor-fallback hidden aria-hidden="true">${esc(m.name)}</span></div><figcaption><strong>${esc(m.name)}</strong><span>Brochure illustration; supplied configuration may vary.</span></figcaption></figure></div>
    </div></section>
    <nav class="wpd-section-nav" aria-label="On this page"><div class="mp-shell"><a href="#measurement">Measurement</a><a href="#specifications">Specifications</a><a href="#installation">Installation &amp; care</a><a href="#related">Related flowmeters</a><a href="${category}#meter-${m.id}">All flowmeters ${arrow}</a></div></nav>
    <section class="mp-section" id="measurement" aria-labelledby="measurement-title"><div class="mp-shell wpd-overview">
      <div><h2 id="measurement-title">The measurement.<br><span>The method.</span></h2><h3>${esc(m.method)}</h3><p>${esc(m.principle)}</p></div>
      <div class="wpd-feature-list">${m.features.map(f => `<p>${esc(f)}</p>`).join('')}<div class="wpd-applications"><h3>Typical applications</h3><ul>${m.apps.map(a => `<li>${esc(a)}</li>`).join('')}</ul></div></div>
    </div></section>
    <section class="mp-section wpd-specifications" id="specifications" aria-labelledby="specifications-title"><div class="mp-shell">
      <div class="wpd-section-heading"><h2 id="specifications-title">Technical <span>specifications.</span></h2><p>${esc(m.confirmation)}</p></div>
      <div class="wpd-spec-grid">${m.specGroups.map(g => `<div class="mp-spec-table"><h3>${esc(g.name)}</h3><dl>${rows(g.rows)}</dl></div>`).join('')}</div>
      <div class="wpd-reference"><div><strong>${esc(m.name)} product brochure</strong><p>PDF · Specifications are indicative; confirm the selected configuration with Vepolink.</p></div><a href="${esc(m.brochure)}" download>Download brochure ${download}</a></div>
    </div></section>
    <section class="mp-section" id="installation" aria-labelledby="installation-title"><div class="mp-shell">
      <div class="wpd-section-heading"><h2 id="installation-title">Plan the installation.<br><span>Keep the reading dependable.</span></h2><p>${esc(m.fit)}</p></div>
      <div class="wpd-install-grid"><article><h3>Mounting and integration</h3><p>${esc(m.installation)}</p></article><article><h3>Inspection and verification</h3><p>${esc(m.care)}</p></article></div>
      <div class="wpd-system-links"><p>Connect the selected output to compatible receiving hardware, with the correct power, scaling and protocol configuration.</p><a href="/products/iot-data-logger/">IoT data logger ${arrow}</a><a href="${category}#integration">Flow monitoring integration ${arrow}</a><a href="/products/water-monitoring-probes/">Water quality probes ${arrow}</a></div>
    </div></section>
    <section class="mp-section wpd-related" id="related" aria-labelledby="related-title"><div class="mp-shell">
      <div class="wpd-section-heading"><h2 id="related-title">Explore related <span>flowmeters.</span></h2><a href="${category}">Browse all flowmeters ${arrow}</a></div>
      <div class="wpd-related-list">${m.related.map(id => { const r = byId.get(id); return `<a href="${r.url}"><div><strong>${esc(r.name)}</strong><span>${esc(r.type)}</span></div>${arrow}</a>`; }).join('')}</div>
    </div></section>
    <section class="mp-section mp-cta" aria-labelledby="enquiry-title"><div class="mp-shell"><div class="mp-cta-panel"><h2 id="enquiry-title">Configure your<br><span>${esc(m.name)}.</span></h2><p>Share your liquid, flow range, pipe or channel dimensions and receiving system. We’ll help confirm the sizing, materials and installation details.</p><div class="mp-cta-actions"><a class="button button-dark" href="${esc(enquiry(m))}">Talk to our engineers ${arrow}</a><a class="button button-light" href="${category}">Explore all flowmeters</a></div></div></div></section>
  </main>
  <site-footer>${shared.renderFooter()}</site-footer>
</div></body>
</html>
`;
}
for (const m of meters) {
  const file = path.join(root, m.url, 'index.html');
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, makePage(m).replace(/[ \t]+$/gm, ''));
}
const sitemapFile = path.join(root, 'products-sitemap.xml');
let sitemap = fs.readFileSync(sitemapFile, 'utf8').replace(/\s*<url>\s*<loc>https:\/\/www\.vepolink\.com\/products\/flowmeters\/[^<]+<\/loc>[\s\S]*?<\/url>/g, '');
const entries = meters.map(m => `  <url>\n    <loc>${origin + m.url}</loc>\n    <lastmod>${updated}</lastmod>\n  </url>`).join('\n');
sitemap = sitemap.replace('</urlset>', `${entries}\n</urlset>`);
fs.writeFileSync(sitemapFile, sitemap);
console.log(`Rendered ${meters.length} flowmeter product pages and updated sitemap.`);
