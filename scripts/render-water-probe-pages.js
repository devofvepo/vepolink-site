// Static sensor detail pages. Content and source decisions live in the JSON records.
const fs = require("node:fs");
const path = require("node:path");
const { sensors } = require("../content/water-probe-details.json");
const { probes } = require("../content/water-probes.json");
const shared = require("../assets/shared-ui.js");
const root = path.resolve(__dirname, "..");
const origin = "https://www.vepolink.com";
const category = "/products/water-monitoring-probes/";
const version = "20260923photos2";
const escape = value => String(value).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const arrow = '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3 10h13M11 5l5 5-5 5"/></svg>';
const enquiry = (name, purpose = "configuration enquiry") => `mailto:sales@vepolink.com?subject=${encodeURIComponent(`${name} — ${purpose}`)}&body=${encodeURIComponent(`Hello Vepolink,\n\nI would like to configure ${name}.\n\nApplication / water conditions:\nRequired measurement range:\nReceiving analyzer, controller or logger:\nRequired output:\nCable length and mounting:\n\nPlease confirm the model and provide its current technical datasheet.\n\nThank you.`)}`;
const byId = new Map(sensors.map(s => [s.id, s]));
const technicalGroup = label => /material|shell|body|cover|cable|dimension|weight|size|mount|assembly|installation|thread|pipe|power|protect|pressure|flow rate|sample flow|communication|protocol|output|interface|storage|operating|measuring temperature|electrode temperature|temperature range|enclosure|water conditions|requirement/i.test(label) ? "installation" : "measurement";
const specs = (sensor, group) => sensor.specs.filter(([label]) => technicalGroup(label) === group).map(([label, value]) => `<div><dt>${escape(label)}</dt><dd>${escape(value)}</dd></div>`).join("");
const confirmation = s => s.confirmation;
const photo = s => s.image
  ? `<img src="/assets/products/water-probes/${escape(s.image)}" alt="${escape(s.name)}${s.id === "rcl" ? " with flow cell" : ""}" width="600" height="450" fetchpriority="high" decoding="async" data-sensor-image><span class="wpd-symbol" data-sensor-fallback hidden aria-hidden="true">${escape(s.symbol)}</span>`
  : `<span class="wpd-symbol" aria-hidden="true">${escape(s.symbol)}</span>`;
const makePage = s => {
  const parent = probes.find(p => p.variants.some(v => v.id === s.id));
  const url = origin + s.url;
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "WebPage", "@id": url, url, name: `${s.name} — Vepolink`, description: s.lead, isPartOf: { "@id": origin + category }, mainEntity: { "@id": `${url}#product` } },
    { "@type": "Product", "@id": `${url}#product`, name: s.name, description: s.lead, url, category: "Water quality monitoring probes", ...(s.image ? { image: origin + "/assets/products/water-probes/" + s.image } : {}), additionalProperty: s.specs.map(([name, value]) => ({ "@type": "PropertyValue", name, value })) },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: origin + "/" },
      { "@type": "ListItem", position: 2, name: "Water monitoring probes", item: origin + category },
      { "@type": "ListItem", position: 3, name: s.name, item: url }
    ] }
  ] };
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="google-site-verification" content="X0h5XHx26-EWVg8KaFcj9au2VLUj5USVeGJmH7JD-JA">
  <meta name="referrer" content="strict-origin-when-cross-origin">
  <meta name="theme-color" content="#fafaf7">
  <title>${escape(s.name)} — Vepolink</title>
  <meta name="description" content="${escape(s.lead)} Check specifications, installation and configuration options with Vepolink.">
  <meta name="robots" content="index, follow, max-image-preview:large">
  <link rel="canonical" href="${url}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Vepolink">
  <meta property="og:locale" content="en_IN">
  <meta property="og:title" content="${escape(s.name)} — Vepolink">
  <meta property="og:description" content="${escape(s.lead)}">
  <meta property="og:url" content="${url}">
  <meta property="og:image" content="${origin}/assets/social/water-monitoring-probes.jpg">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="Vepolink water monitoring probe lineup">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escape(s.name)} — Vepolink">
  <meta name="twitter:description" content="${escape(s.lead)}">
  <meta name="twitter:image" content="${origin}/assets/social/water-monitoring-probes.jpg">
  <link rel="icon" href="/assets/vepolink-favicon.png">
  <link rel="stylesheet" href="/assets/site.css?v=20260923brand1">
  <link rel="stylesheet" href="/assets/water-probe-detail.css?v=${version}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&amp;family=Geist+Mono:wght@400;500;600&amp;family=Instrument+Serif:ital@0;1&amp;display=swap" rel="stylesheet">
  <script defer src="/assets/shared-ui.js?v=20260923brand1"></script>
  <script defer src="/assets/site.js?v=20260923brand1"></script>
  <script defer src="/assets/water-probe-detail.js?v=${version}"></script>
  <script type="application/ld+json">${JSON.stringify(schema, null, 2)}</script>
</head>
<body>
  <div id="root">
    <a class="skip-link" href="#multi-parameter-product-main">Skip to content</a>
    <site-header>${shared.renderHeader()}</site-header>
    <main id="multi-parameter-product-main" class="water-sensor-page" data-sensor="${s.id}">
      <section class="wpd-hero" aria-labelledby="sensor-title">
        <div class="mp-shell">
          <nav class="wpd-breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><a href="${category}">Water monitoring probes</a><span aria-hidden="true">/</span><span aria-current="page">${escape(s.name)}</span></nav>
          <div class="wpd-hero-grid">
            <div class="wpd-hero-copy">
              <h1 id="sensor-title">${escape(s.name.replace(/ (Probe|Sensor)$/, ""))}<br><span>${s.name.endsWith("Sensor") ? "Water quality sensor." : "Water quality probe."}</span></h1>
              <p class="wpd-lead">${escape(s.lead)}</p>
              <div class="mp-actions"><a class="button button-dark" href="${escape(enquiry(s.name))}">Request configuration ${arrow}</a><a class="button button-light" href="#specifications">View specifications</a></div>
              <dl class="wpd-key-facts"><div><dt>Measurement range</dt><dd>${escape(s.range)}</dd></div><div><dt>Connection</dt><dd>${escape(s.connection)}</dd></div></dl>
            </div>
            <figure class="wpd-product-figure${s.image ? "" : " wpd-product-figure--label"}"><div class="wpd-product-photo">${photo(s)}</div><figcaption><strong>${escape(s.measurement)}</strong><span>${escape(s.id === "rcl" ? "Electrode shown with flow cell" : s.id === "turbidity-low" ? "Flow-through assembly · indoor installation" : s.outputLabel)}</span></figcaption></figure>
          </div>
        </div>
      </section>
      <nav class="wpd-section-nav" aria-label="On this page"><div class="mp-shell"><a href="#measurement">Measurement</a><a href="#specifications">Specifications</a><a href="#installation">Installation &amp; care</a><a href="#related">Related probes</a><a href="${category}#probe-${parent.id}">All probes ${arrow}</a></div></nav>
      <section class="mp-section" id="measurement" aria-labelledby="measurement-title"><div class="mp-shell wpd-overview">
        <div><h2 id="measurement-title">The measurement.<br><span>The method.</span></h2><h3>${escape(s.method)}</h3><p>${escape(s.principle)}</p></div>
        <div class="wpd-feature-list">${s.features.map(f => `<p>${escape(f)}</p>`).join("")}<div class="wpd-applications"><h3>Typical applications</h3><ul>${s.apps.map(a => `<li>${escape(a)}</li>`).join("")}</ul></div></div>
      </div></section>
      <section class="mp-section wpd-specifications" id="specifications" aria-labelledby="specifications-title"><div class="mp-shell">
        <div class="wpd-section-heading"><h2 id="specifications-title">Technical <span>specifications.</span></h2><p>${escape(confirmation(s))}</p></div>
        <div class="wpd-spec-grid"><div class="mp-spec-table"><h3>Measurement &amp; performance</h3><dl>${specs(s, "measurement")}</dl></div><div class="mp-spec-table"><h3>Installation &amp; connection</h3><dl>${specs(s, "installation")}</dl></div></div>
        <div class="wpd-reference"><div><strong>Technical datasheet</strong><p>Request the current datasheet for your selected probe configuration from Vepolink.</p></div><a href="${escape(enquiry(s.name, "datasheet request"))}">Request datasheet ${arrow}</a></div>
      </div></section>
      <section class="mp-section" id="installation" aria-labelledby="installation-title"><div class="mp-shell">
        <div class="wpd-section-heading"><h2 id="installation-title">Plan the installation.<br><span>Keep the reading dependable.</span></h2><p>Specify the probe together with the receiving instrument, sample conditions and maintenance access.</p></div>
        <div class="wpd-install-grid"><article><h3>Mounting and integration</h3><p>${escape(s.install)}</p></article><article><h3>Cleaning and verification</h3><p>${escape(s.care)}</p></article></div>
        <div class="wpd-system-links"><p>Building a complete water monitoring system?</p><a href="/products/multi-parameter-online-water-analyzer-in-situ/">In-situ water analyzer ${arrow}</a><a href="/products/multi-paramater-online-water-analyzer/">Extractive water analyzer ${arrow}</a><a href="${category}#connection">Check probe compatibility ${arrow}</a></div>
      </div></section>
      <section class="mp-section wpd-related" id="related" aria-labelledby="related-title"><div class="mp-shell"><div class="wpd-section-heading"><h2 id="related-title">Explore related <span>measurements.</span></h2><a href="${category}">Browse all probes ${arrow}</a></div><div class="wpd-related-list">${s.related.map(id => { const r = byId.get(id); return `<a href="${r.url}"><div><strong>${escape(r.name)}</strong><span>${escape(r.method)}</span></div>${arrow}</a>`; }).join("")}</div></div></section>
      <section class="mp-section mp-cta" aria-labelledby="enquiry-title"><div class="mp-shell"><div class="mp-cta-panel"><h2 id="enquiry-title">Configure your<br><span>${escape(s.name.toLowerCase())}.</span></h2><p>Share the application, required range and receiving system. We’ll help confirm the probe, cable and installation details.</p><div class="mp-cta-actions"><a class="button button-dark" href="${escape(enquiry(s.name))}">Talk to our engineers ${arrow}</a><a class="button button-light" href="${category}">Explore all probes</a></div></div></div></section>
    </main>
    <site-footer>${shared.renderFooter()}</site-footer>
  </div>
</body>
</html>
`;
};
for (const sensor of sensors) {
  const file = path.join(root, sensor.url, "index.html");
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, makePage(sensor).replace(/[ \t]+$/gm, ""));
}
// Replace this route family's children as a group, leaving other sitemap entries intact.
const sitemapFile = path.join(root, "products-sitemap.xml");
let sitemap = fs.readFileSync(sitemapFile, "utf8").replace(/\s*<url>\s*<loc>https:\/\/www\.vepolink\.com\/products\/water-monitoring-probes\/[^<]+<\/loc>[\s\S]*?<\/url>/g, "");
const entries = sensors.map(s => `  <url>\n    <loc>${origin + s.url}</loc>\n    <lastmod>2026-09-23</lastmod>\n  </url>`).join("\n");
sitemap = sitemap.replace("</urlset>", `${entries}\n</urlset>`);
fs.writeFileSync(sitemapFile, sitemap);
console.log(`Rendered ${sensors.length} sensor detail pages and updated sitemap.`);
