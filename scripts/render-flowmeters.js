const fs = require("node:fs");
const path = require("node:path");
const shared = require("../assets/shared-ui.js");
const { groups, meters, updated } = require("../content/flowmeters.json");
const imageSources = require("../docs/sources/flowmeters/pdf-manifest.json");
const root = path.resolve(__dirname, "..");
const url = "https://www.vepolink.com/products/flowmeters/";
const version = "20261004flow2";
const esc = value => String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const arrow = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6"/></svg>';
const plus = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M12 5v14"/></svg>';
const family = id => id === "electromagnetic" ? "Electromagnetic" : "Ultrasonic";
const enquiry = meter => {
  const name = meter ? `${meter.name} — ${meter.type}` : "Flowmeter selection";
  const body = `I would like a Vepolink configuration for: ${name}\n\nApplication and liquid:\nRequired minimum / normal / maximum flow:\nPipe size, material and wall thickness (or flume / weir type and dimensions):\nLiquid conductivity, solids and aeration:\nProcess pressure and temperature:\nRequired output and receiving system:\nPower supply and cable run:\nInstallation / shutdown constraints:\nQuantity and location:\n\nPlease confirm the suitable model, sizing and current datasheet.`;
  return `mailto:sales@vepolink.com?subject=${encodeURIComponent(`Vepolink ${name} enquiry`)}&body=${encodeURIComponent(body)}`;
};
const image = (meter, eager = false) => {
  const { width, height } = imageSources.find(source => source.id === meter.id).image;
  return `<img src="/assets/products/flowmeters/${esc(meter.image)}" alt="${esc(meter.imageAlt)}" width="${width}" height="${height}" loading="${eager ? "eager" : "lazy"}" decoding="async">`;
};
const card = meter => `<article class="flow-card" id="meter-${meter.id}" data-flow-meter data-technology="${meter.technology}" data-installation="${meter.group}" aria-labelledby="${meter.id}-title">
  <div class="flow-card-main">
    <div class="flow-card-copy"><h4 id="${meter.id}-title">${esc(meter.name)}</h4><p class="flow-type">${esc(meter.type)}</p><p class="flow-description">${esc(meter.description)}</p></div>
    <div class="flow-card-visual">${image(meter)}</div>
  </div>
  <a class="flow-product-link" href="${meter.url}" aria-label="View ${esc(meter.name)} flowmeter"><span><strong>${esc(meter.name)}</strong><span class="flow-family">${family(meter.technology)}</span></span><span class="flow-product-action">View flowmeter ${arrow}</span></a>
</article>`;
const faqs = [
  ["Electromagnetic or ultrasonic: where should I start?", "Start with the liquid and installation. Electromagnetic meters need a conductive liquid and a full measuring tube. Transit-time ultrasonic meters can suit conductive or non-conductive liquids when the acoustic path is suitable. For an open channel, EchoFlow measures level at a flume or weir and derives flow from its geometry."],
  ["Can I add measurement without cutting the pipe?", "ClampWave uses transducers on the outside of the existing pipe. Confirm the material, dimensions, lining, temperature and signal quality before selection. SonicLine is an inline meter: under-pressure transducer servicing does not mean every initial installation can be completed without a shutdown."],
  ["Does EchoFlow’s accuracy describe the final flow reading?", "No. EchoFlow measures level and derives flow from a flume or weir’s head–discharge relationship. Flow accuracy also depends on the primary device, its dimensions and condition, the head-measurement location and the configured level-to-flow relationship."],
  ["Is EcoFlow suitable for every corrosive liquid?", "Compatibility must be checked against the actual liquid, concentration, pressure and temperature. Check all wetted materials against the selected liquid. The plastic body alone does not establish compatibility; the product page identifies the standard body and electrode materials."],
  ["Can these meters connect to a PLC, SCADA or Vepolink monitoring?", "Select the meter’s output and match it to the receiving hardware. The lineup includes 4–20 mA and, depending on the model, pulse/frequency, Modbus RTU, HART or PROFIBUS PA. Vepolink can configure logging and cloud reporting through a suitable integration; confirm interfaces, power, scaling and register or protocol support together."],
  ["What information is needed to size a flowmeter?", "Send the liquid, minimum/normal/maximum flow, conductivity, pipe dimensions or channel geometry, pressure, temperature and required outputs. Include solids or aeration, available straight runs, power, access and shutdown constraints. The selected configuration determines the final limits and installation requirements."]
];
const schema = { "@context": "https://schema.org", "@graph": [
  { "@type": "CollectionPage", "@id": url, "url": url, "name": "Electromagnetic and Ultrasonic Flowmeters", "description": "Select inline, clamp-on and open-channel flow measurement for your liquid and installation.", "isPartOf": { "@type": "WebSite", "name": "Vepolink", "url": "https://www.vepolink.com/" }, "mainEntity": { "@type": "ItemList", "numberOfItems": meters.length, "itemListElement": meters.map((meter, i) => ({ "@type": "ListItem", "position": i + 1, "name": `${meter.name} — ${meter.type}`, "url": `https://www.vepolink.com${meter.url}` })) } },
  { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.vepolink.com/" }, { "@type": "ListItem", "position": 2, "name": "Flowmeters", "item": url }] }
] };
const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="referrer" content="strict-origin-when-cross-origin">
  <meta name="theme-color" content="#fafaf7">
  <title>Electromagnetic &amp; Ultrasonic Flowmeters — Vepolink</title>
  <meta name="description" content="Explore Vepolink electromagnetic and ultrasonic flowmeters: inline, clamp-on and open-channel options. Find your model and request a configuration.">
  <meta name="robots" content="index, follow, max-image-preview:large">
  <link rel="canonical" href="${url}">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="en_IN">
  <meta property="og:site_name" content="Vepolink">
  <meta property="og:title" content="Electromagnetic &amp; Ultrasonic Flowmeters — Vepolink">
  <meta property="og:description" content="Find flow measurement for a full pipe, an existing pipe or an open channel. Five models, selected around your process.">
  <meta property="og:url" content="${url}">
  <meta property="og:image" content="https://www.vepolink.com/assets/products/flowmeters/emf.webp">
  <meta property="og:image:alt" content="Illustration of a Vepolink EMF inline electromagnetic flowmeter">
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="Electromagnetic &amp; Ultrasonic Flowmeters — Vepolink">
  <meta name="twitter:description" content="Inline, clamp-on and open-channel flow measurement. Select by installation and liquid conditions.">
  <meta name="twitter:image" content="https://www.vepolink.com/assets/products/flowmeters/emf.webp">
  <link rel="icon" href="/assets/vepolink-favicon.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&amp;family=Geist+Mono:wght@400;500;600&amp;family=Instrument+Serif:ital@0;1&amp;display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/assets/site.css?v=${version}">
  <link rel="stylesheet" href="/assets/flowmeters.css?v=${version}">
  <script defer src="/assets/shared-ui.js?v=${version}"></script>
  <script defer src="/assets/site.js?v=${version}"></script>
  <script defer src="/assets/flowmeters.js?v=${version}"></script>
  <script type="application/ld+json">${JSON.stringify(schema, null, 2)}</script>
</head>
<body><div id="root">
  <a class="skip-link" href="#multi-parameter-product-main">Skip to content</a>
  <site-header>${shared.renderHeader()}</site-header>
  <main id="multi-parameter-product-main" class="flow-page">
    <section class="flow-hero" aria-labelledby="flow-title"><div class="mp-shell">
      <nav class="flow-breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><span aria-current="page">Flowmeters</span></nav>
      <div class="flow-hero-grid"><div><h1 id="flow-title">Flowmeters.<br><span>Electromagnetic<br>&amp; ultrasonic.</span></h1><p class="flow-hero-copy">Measure flow in a full pipe, from outside an existing line, or above an open channel. Find the right installation, then match the meter to your liquid and operating conditions.</p><div class="mp-actions"><a class="button button-dark" href="#catalog">Explore flowmeters ${arrow}</a><a class="button button-light" href="${esc(enquiry())}">Request configuration</a></div></div>
      <nav class="flow-installation-nav" aria-label="Choose a flowmeter installation">${groups.map(group => { const meter = meters.find(m => m.id === group.image); return `<a href="#${group.id}" data-flow-jump><div class="flow-nav-image">${image(meter, true)}</div><div><strong>${esc(group.shortName)}</strong><span>${esc(group.hint)}</span></div>${arrow}</a>`; }).join("")}</nav></div>
      <div class="flow-hero-foot"><p><strong>Five models. Three installation types.</strong> Sized and configured for your process.</p><a href="#selection">Help me choose a technology ${arrow}</a></div>
    </div></section>
    <section class="mp-section flow-catalog" id="catalog" aria-labelledby="catalog-title"><div class="mp-shell">
      <div class="flow-section-head"><h2 id="catalog-title">Start with <span>the installation.</span></h2><p>Choose a model for your liquid and installation. Open its product page for specifications, configuration options and installation guidance.</p></div>
      <form class="flow-controls" data-flow-controls hidden aria-label="Filter flowmeters">
        <fieldset><legend>Measurement technology</legend><div class="flow-family-options">${[["all", "All technologies"], ["electromagnetic", "Electromagnetic"], ["ultrasonic", "Ultrasonic"]].map(([value, label]) => `<label><input type="radio" name="technology" value="${value}"${value === "all" ? " checked" : ""} aria-controls="flow-results"><span>${label}</span></label>`).join("")}</div></fieldset>
        <label class="flow-select"><span>Installation</span><select name="installation" aria-controls="flow-results"><option value="all">All installations</option>${groups.map(g => `<option value="${g.id}">${esc(g.shortName)}</option>`).join("")}</select></label>
        <button type="reset" class="flow-reset" disabled>Clear filters</button>
      </form>
      <div class="flow-catalog-meta"><p id="flow-result-count" role="status" aria-live="polite" aria-atomic="true">5 models · 3 installation types</p><p>Illustrations show the installation type; supplied assemblies vary.</p></div>
      <div id="flow-results">${groups.map(group => `<section class="flow-group" id="${group.id}" data-flow-group aria-labelledby="${group.id}-title"><div class="flow-group-heading"><h3 id="${group.id}-title">${esc(group.name)}</h3><p>${esc(group.description)}</p></div><div class="flow-grid">${meters.filter(m => m.group === group.id).map(card).join("")}</div></section>`).join("")}</div>
      <div class="flow-empty" data-flow-empty hidden><h3>No models match this combination.</h3><p>The electromagnetic options are inline meters. Clamp-on and open-channel measurement use ultrasonic technology.</p><button class="button button-light" type="button" data-flow-clear>Show all flowmeters ${arrow}</button></div>
      <p class="flow-catalog-note">Need help choosing? Share your liquid, pipe or channel details and receiving system. We’ll help confirm the model and configuration.</p>
    </div></section>
    <section class="mp-section flow-selection" id="selection" aria-labelledby="selection-title"><div class="mp-shell">
      <div class="flow-section-head"><h2 id="selection-title">The liquid decides.<br><span>The installation narrows it down.</span></h2><p>Start with conductivity and how the liquid moves. Pipe and process conditions determine which meter can produce a reliable reading.</p></div>
      <div class="flow-methods"><article><h3>Electromagnetic</h3><p>A conductive liquid moving through a magnetic field produces a voltage proportional to velocity. EMF and EcoFlow measure this signal through electrodes in a full flow tube.</p><ul><li><strong>Liquid:</strong> conductive water, wastewater or compatible process liquids.</li><li><strong>Selection:</strong> check conductivity, liner or body, electrodes and process ratings.</li><li><strong>Installation:</strong> full pipe, correct grounding and suitable straight runs.</li></ul><a class="flow-text-link" href="#meter-emf">Explore EMF ${arrow}</a><a class="flow-text-link" href="#meter-ecoflow">Explore EcoFlow ${arrow}</a></article>
      <article><h3>Ultrasonic</h3><p>In pipes, SonicLine and ClampWave compare upstream and downstream sound travel times. Above an open channel, EchoFlow times an echo to measure level and then calculate flow.</p><ul><li><strong>Inline:</strong> a dedicated flow tube for suitable conductive or non-conductive liquids.</li><li><strong>Clamp-on:</strong> external sensors; verify the pipe wall and acoustic signal.</li><li><strong>Open channel:</strong> a known flume or weir and the correct head–discharge curve.</li></ul><a class="flow-text-link" href="#meter-sonicline">Explore SonicLine ${arrow}</a><a class="flow-text-link" href="#meter-clampwave">Explore ClampWave ${arrow}</a><a class="flow-text-link" href="#meter-echoflow">Explore EchoFlow ${arrow}</a></article></div>
    </div></section>
    <section class="mp-section" id="integration" aria-labelledby="integration-title"><div class="mp-shell">
      <div class="flow-section-head"><h2 id="integration-title">From flow reading<br><span>to a connected record.</span></h2><p>Pair the selected output with your plant controls or a suitable Vepolink logging and cloud configuration.</p></div>
      <ol class="flow-system"><li><strong>Flowmeter or transmitter</strong><span>Flow rate, totals and model-specific diagnostics</span></li><li><strong>PLC, SCADA or data logger</strong><span>Matching signal input, power and scaling</span></li><li><strong>Vepolink monitoring</strong><span>Configured logging, reporting and remote access</span></li></ol>
      <div class="flow-integration-note"><p>4–20 mA, pulse/frequency, Modbus RTU, HART and PROFIBUS PA are model-specific choices. Confirm the meter, receiver and integration together.</p><a class="flow-text-link" href="/products/iot-data-logger/">Explore the IoT data logger ${arrow}</a></div>
    </div></section>
    <section class="mp-section flow-planning" aria-labelledby="planning-title"><div class="mp-shell">
      <div class="flow-section-head"><h2 id="planning-title">Specify the meter.<br><span>Plan the measurement.</span></h2><p>Reliable flow data starts with the installation and a commissioning check against the real process.</p></div>
      <div class="flow-planning-list"><article><h3>Liquid and operating envelope</h3><p>Confirm the flow range, conductivity, solids, aeration, pressure and temperature. Check every process-contact material, including electrodes and seals.</p></article><article><h3>Mounting and access</h3><p>Keep pipe meters full and follow the required straight-run guidance. Check clamp-on surface condition or open-channel beam clearance, and plan access for inspection.</p></article><article><h3>Commissioning and upkeep</h3><p>Verify grounding or signal quality, the zero or level reference, totalisers and output scaling. Set a verification schedule that suits the process and reporting requirements.</p></article></div>
      <div class="flow-applications"><h3>Typical duties</h3><ul><li>Water and wastewater</li><li>Chemical and effluent lines</li><li>District heating and cooling</li><li>Industrial process utilities</li><li>Irrigation and stormwater channels</li></ul><a class="flow-text-link" href="/products/water-monitoring-probes/">Add water-quality measurements ${arrow}</a></div>
    </div></section>
    <section class="mp-section flow-faq" aria-labelledby="faq-title"><div class="mp-shell flow-faq-grid"><h2 id="faq-title">Before you<br><span>specify a meter.</span></h2><div>${faqs.map(([q, a]) => `<details><summary><span>${esc(q)}</span>${plus}</summary><p>${esc(a)}</p></details>`).join("")}</div></div></section>
    <section class="mp-section mp-cta" aria-labelledby="configuration-title"><div class="mp-shell"><div class="mp-cta-panel"><h2 id="configuration-title">Find the right meter<br><span>for your flow.</span></h2><p>Send the liquid, flow range, pipe or channel dimensions, pressure, temperature and required outputs. We’ll help size the meter and configure the receiving system.</p><div class="mp-cta-actions"><a class="button button-dark" href="${esc(enquiry())}">Request a flowmeter configuration ${arrow}</a><a class="button button-light" href="#catalog">Back to the catalog</a></div></div></div></section>
  </main>
  <site-footer>${shared.renderFooter()}</site-footer>
</div></body>
</html>
`;
fs.mkdirSync(path.join(root, "products/flowmeters"), { recursive: true });
fs.writeFileSync(path.join(root, "products/flowmeters/index.html"), html.replace(/[ \t]+$/gm, ""));
const sitemapPath = path.join(root, "products-sitemap.xml");
let sitemap = fs.readFileSync(sitemapPath, "utf8");
const entry = `  <url>\n    <loc>${url}</loc>\n    <lastmod>${updated}</lastmod>\n  </url>`;
if (sitemap.includes(`<loc>${url}</loc>`)) {
  sitemap = sitemap.replace(/  <url>\s*<loc>https:\/\/www\.vepolink\.com\/products\/flowmeters\/<\/loc>[\s\S]*?<\/url>/, entry);
} else {
  sitemap = sitemap.replace("</urlset>", `${entry}\n</urlset>`);
}
fs.writeFileSync(sitemapPath, sitemap);
console.log(`Rendered ${meters.length} flowmeters in ${groups.length} installation groups.`);
