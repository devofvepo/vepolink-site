// Generate a crawlable, no-JavaScript catalog from the reviewed source records.
// Run: node scripts/render-water-probes.js
const fs = require("node:fs");
const path = require("node:path");
const { groups, probes } = require("../content/water-probes.json");
const { sensors } = require("../content/water-probe-details.json");
const shared = require("../assets/shared-ui.js");
const root = path.resolve(__dirname, "..");
const url = "https://www.vepolink.com/products/water-monitoring-probes/";
const version = "20260923photos2";
const entries = probes.flatMap(p => p.variants);
const escape = (text) => String(text).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
const imageRoot = "/assets/products/water-probes/";
const plus = '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h12M10 4v12" /></svg>';
const arrow = '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3 10h13M11 5l5 5-5 5" /></svg>';
const enquiry = (name = "Water monitoring probes") => `mailto:sales@vepolink.com?subject=${encodeURIComponent(`${name} — configuration enquiry`)}&body=${encodeURIComponent(`Hello Vepolink,\n\nI would like to configure ${name}.\n\nApplication / water conditions:\nParameters and required ranges:\nReceiving analyzer, controller or logger:\nRequired output:\nCable length and mounting:\n\nThank you.`)}`;
const image = (probe, hero = false) => probe.image
  ? `<img src="${imageRoot}${probe.image}" width="400" height="300" alt="${escape(probe.name)} probe" ${hero ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async" data-probe-image><span class="probe-photo-fallback" data-image-fallback hidden aria-hidden="true">${escape(probe.symbol)}</span>`
  : `<span class="probe-photo-fallback" aria-hidden="true">${escape(probe.symbol)}</span>`;
const byId = new Map(sensors.map(sensor => [sensor.id, sensor]));
const option = (p, v) => {
  const sensor = byId.get(v.id);
  const search = [p.name, ...p.aliases.filter(alias => !/digital|analog/i.test(alias)), v.name, v.output].join(" ");
  return `<a class="probe-option" href="${v.url}" data-probe-entry="${v.id}" data-search="${escape(search)}" data-outputs="${sensor.outputs.join(" ")}"${v.id !== p.id ? ` id="probe-${v.id}"` : ""}>
    <span class="probe-option-info"><strong>${escape(v.name)}</strong><span class="probe-option-output">${escape(v.output)}</span><span class="probe-option-range">${escape(sensor.range)}</span></span>
    <span class="probe-option-action">View probe ${arrow}</span>
  </a>`;
};
const card = (p) => `<article class="probe-card" id="probe-${p.id}" data-probe data-search="${escape([p.name, ...p.aliases].join(" "))}" data-outputs="${p.outputs.join(" ")}" aria-labelledby="title-${p.id}">
  <div class="probe-card-intro">
    <div><h4 id="title-${p.id}">${escape(p.name)}</h4><p>${escape(p.description)}</p></div>
    <div class="probe-card-image${p.thumbnailFit === 'cover' ? ' probe-card-image--cover' : ''}"><div class="probe-photo${p.image ? "" : " probe-photo--label"}">${image(p)}</div></div>
  </div>
  <nav class="probe-options" aria-label="${escape(p.name)} probes">${p.variants.map(v => option(p, v)).join("")}</nav>
</article>`;
const catalog = groups.map((g) => `<section class="probe-group" id="${g.id}" data-probe-group aria-labelledby="heading-${g.id}"><div class="probe-group-heading"><h3 id="heading-${g.id}">${g.name}</h3><p>${g.description}</p></div><div class="probe-grid${probes.filter(p => p.group === g.id).length === 2 ? " probe-grid--two" : ""}">${probes.filter(p => p.group === g.id).map(card).join("\n")}</div></section>`).join("\n");
const applications = ["ETP / STP & effluent plants", "Drinking water treatment", "Rivers & surface water", "Aquaculture", "Desalination & RO pretreatment", "Industrial process water", "Stormwater & CSO", "Environmental research", "Reservoir & lake profiling"];
const faqs = [
  ["Can a probe work with my existing analyzer or PLC?", "Compatibility depends on more than the connector. We check the parameter, output, protocol and register mapping, power supply and wiring against your receiving instrument. Send the analyzer or PLC model with your enquiry."],
  ["Can I mix digital and analog probes in one installation?", "Yes, when the receiving system provides the appropriate digital interfaces and analog inputs. Each selected probe must be checked against those inputs and its power requirements."],
  ["How deep can the probes be installed?", "Immersion depth and pressure depend on the model. IP68 alone does not give a universal depth limit, and some assemblies are designed for flow-through indoor use. Tell us the installation depth or sample-flow arrangement when requesting a configuration."],
  ["Which cable lengths and mounting options are available?", "Cable lengths differ by sensor: the technical pages list the standard cable and any stated extension options. Mounting may use an electrode holder, immersion bracket or flow cell. Confirm the cable run, receiver and mounting together."],
  ["How often do probes need cleaning or calibration?", "The interval depends on the sensing method and water quality. Plan access for cleaning and verification against suitable standards. An automatic wiper is an option on selected probes, not a feature of every model."],
  ["Does a probe only send a raw signal?", "The probe senses the water and sends an electrical or digital output. Some digital probes also condition signals and process measurements internally. An analyzer, controller or logger provides the receiving interface and the display, logging or control functions your system needs."],
  ["What should I confirm before ordering?", "Confirm the range, reporting units, accuracy conditions, output, supply and mounting for the supplied configuration. Where source documentation differs between versions, the current model datasheet should settle the final specification."]
];
const schema = { "@context": "https://schema.org", "@graph": [
  { "@type": "CollectionPage", "@id": url, "url": url, "name": "Water Quality Monitoring Probes", "description": "Select water monitoring probes by measurement and output, with technical details and configuration guidance.", "isPartOf": { "@type": "WebSite", "url": "https://www.vepolink.com/", "name": "Vepolink" }, "mainEntity": { "@type": "ItemList", "numberOfItems": entries.length, "itemListElement": entries.map((v, i) => ({ "@type": "ListItem", "position": i + 1, "name": v.name, "url": `https://www.vepolink.com${v.url}` })) } },
  { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.vepolink.com/" }, { "@type": "ListItem", "position": 2, "name": "Water quality monitoring", "item": "https://www.vepolink.com/water-quality-monitoring/" }, { "@type": "ListItem", "position": 3, "name": "Water monitoring probes", "item": url }] }
] };
const page = `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="google-site-verification" content="X0h5XHx26-EWVg8KaFcj9au2VLUj5USVeGJmH7JD-JA">
  <meta name="referrer" content="strict-origin-when-cross-origin">
  <meta name="theme-color" content="#fafaf7">
  <meta name="description" content="Explore Vepolink water quality probes for pH, conductivity, dissolved oxygen, turbidity, nutrients and more. Find digital and analog options for your system.">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <link rel="canonical" href="${url}">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="en_IN">
  <meta property="og:site_name" content="Vepolink">
  <meta property="og:title" content="Water Quality Monitoring Probes — Vepolink">
  <meta property="og:description" content="Find the right measurement, check your connection, and configure water monitoring probes for your site.">
  <meta property="og:url" content="${url}">
  <meta property="og:image" content="https://www.vepolink.com/assets/social/water-monitoring-probes.jpg">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="Vepolink water quality monitoring probes">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Water Quality Monitoring Probes — Vepolink">
  <meta name="twitter:description" content="Select water monitoring probes by measurement and output.">
  <meta name="twitter:image" content="https://www.vepolink.com/assets/social/water-monitoring-probes.jpg">
  <meta name="twitter:image:alt" content="Vepolink water quality monitoring probes">
  <title>Water Quality Monitoring Probes — Vepolink</title>
  <link rel="icon" href="/assets/vepolink-favicon.png">
  <link rel="stylesheet" href="/assets/site.css?v=${version}">
  <link rel="stylesheet" href="/assets/water-probes.css?v=${version}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&amp;family=Geist+Mono:wght@400;500;600&amp;family=Instrument+Serif:ital@0;1&amp;display=swap" rel="stylesheet">
  <script defer src="/assets/shared-ui.js?v=${version}"></script>
  <script defer src="/assets/site.js?v=${version}"></script>
  <script defer src="/assets/water-probes.js?v=${version}"></script>
  <script type="application/ld+json">${JSON.stringify(schema, null, 2)}</script>
</head>
<body>
  <div id="root">
    <a class="skip-link" href="#multi-parameter-product-main">Skip to content</a>
    <site-header>${shared.renderHeader()}</site-header>
    <main id="multi-parameter-product-main" class="probes-page">
      <section class="probe-hero" aria-labelledby="probe-hero-title">
        <div class="mp-shell">
          <nav class="probe-breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><a href="/water-quality-monitoring/">Water quality</a><span aria-hidden="true">/</span><span aria-current="page">Probes</span></nav>
          <div class="probe-hero-grid">
            <div><h1 id="probe-hero-title">Water Quality<br><span>Monitoring Probes.</span></h1><p class="probe-hero-copy">Start with what you need to measure. Explore digital and analog probes for continuous water monitoring, configured for your site and receiving system.</p><div class="mp-actions"><a class="button button-dark" href="#catalog">Explore probes ${arrow}</a><a class="button button-light" href="${escape(enquiry())}">Request configuration</a></div></div>
            <div class="probe-specimens" aria-label="Selected probes from the lineup">${["odo", "ss", "nh4n"].map((id) => { const p = probes.find(p => p.id === id); return `<a class="probe-specimen" href="#probe-${id}"><div class="probe-specimen-photo">${image(p, true)}</div><span>${id === "odo" ? "Dissolved oxygen" : id === "ss" ? "Suspended solids" : "Ammonia nitrogen"}</span>${arrow}</a>`; }).join("")}<p>Selected probes from the lineup</p></div>
          </div>
          <div class="probe-hero-foot"><p><strong>${entries.length} sensor options.</strong> Organized around ${probes.length} measurements.</p><a href="#connection">Adding probes to an existing system? ${arrow}</a></div>
        </div>
      </section>
      <section class="mp-section probe-catalog" id="catalog" aria-labelledby="catalog-title">
        <div class="mp-shell">
          <div class="probe-section-head"><div><h2 id="catalog-title">What do you need <span>to measure?</span></h2><p>Choose a measurement, then select a probe to see its specifications and configuration options.</p></div></div>
          <form class="probe-controls" data-probe-controls role="search" aria-label="Find a water probe" hidden>
            <label class="probe-search"><span>Search measurements</span><div><svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="8.5" cy="8.5" r="5.5"/><path d="m13 13 4 4"/></svg><input id="probe-search" type="search" placeholder="Try pH, dissolved oxygen, nitrate…" autocomplete="off" aria-controls="probe-results"></div></label>
            <fieldset class="probe-output-filter"><legend>Output</legend><div>${[["any", "Any"], ["digital", "Digital"], ["analog", "Analog"]].map(([value, label]) => `<label><input type="radio" name="output" value="${value}"${value === "any" ? " checked" : ""}><span>${label}</span></label>`).join("")}</div></fieldset>
            <button type="reset" class="probe-reset">Clear filters</button>
          </form>
          <div class="probe-catalog-meta"><nav class="probe-group-links" aria-label="Measurement groups">${groups.map(g => `<a href="#${g.id}">${g.name}</a>`).join("")}</nav><p id="probe-result-count" role="status" aria-live="polite" aria-atomic="true">${probes.length} measurements · ${entries.length} probe options</p></div>
          <p class="probe-filter-note" data-output-note hidden></p>
          <noscript><p class="probe-filter-note">All probes are shown below. Select a probe to view its specifications.</p></noscript>
          <div id="probe-results">${catalog}</div>
          <div class="probe-empty" data-probe-empty hidden><h3>No measurements match these filters.</h3><p>Try a parameter such as pH or nitrate, or clear the output filter.</p><button class="button button-light" type="button" data-clear-filters>Show all probes</button></div>
          <p class="probe-catalog-note">pH, conductivity and turbidity include distinct sensor options. Each has its own technical page; confirm the selected model and configuration before ordering.</p>
          <div class="probe-related"><p>Need to monitor the height of the water instead?</p><a href="/products/radar-level-sensors/">Explore radar water level sensors ${arrow}</a></div>
        </div>
      </section>
      <section class="mp-section probe-connection" id="connection" aria-labelledby="connection-title">
        <div class="mp-shell">
          <div class="probe-section-head"><h2 id="connection-title">The probe senses.<br><span>Your system puts it to work.</span></h2><p>A probe measures in the water. The receiving instrument supplies the interface for display, logging or control. Some digital probes also process measurements internally.</p></div>
          <ol class="probe-system-diagram"><li><span class="probe-system-symbol" aria-hidden="true"><svg viewBox="0 0 64 64"><path d="M32 5v11m-8 0h16v30a8 8 0 0 1-16 0V16Zm0 25h16M9 47c4-5 7-5 11 0m24 0c4-5 7-5 11 0"/></svg></span><div><h3>Probe in the water</h3><p>Senses the selected parameter</p></div></li><li><span class="probe-system-symbol" aria-hidden="true"><svg viewBox="0 0 64 64"><rect x="10" y="10" width="44" height="44" rx="4"/><path d="M18 18h28v18H18Zm0 27h8m7 0h3m7 0h3M5 32h5m44 0h5"/></svg></span><div><h3>Analyzer, controller or logger</h3><p>Receives and manages the signal</p></div></li><li><span class="probe-system-symbol" aria-hidden="true"><svg viewBox="0 0 64 64"><rect x="6" y="10" width="52" height="36" rx="3"/><path d="M24 56h16m-8-10v10M16 35l8-9 8 5 15-11"/></svg></span><div><h3>Monitoring and control</h3><p>Displays, records or acts on the result</p></div></li></ol>
          <div class="probe-interface-grid"><article><h3>Digital connections</h3><p>RS-485 Modbus is specified for many sensors in the lineup. Check the selected sensor’s protocol, supply voltage and register mapping against the receiver. Confirm any interface that is not specified on its technical page.</p></article><article><h3>Analog connections</h3><p>Analog pH, ORP, EC and TDS electrodes need a suitable measuring input. A transmitter can provide a 4–20 mA plant signal when specified. Match the electrode, transmitter and receiver rather than assuming every analog probe supplies a current loop.</p></article></div>
          <div class="probe-related"><p>Explore Vepolink water monitoring systems</p><a href="/products/multi-paramater-online-water-analyzer/">Extractive water analyzer ${arrow}</a><a href="/products/multi-parameter-online-water-analyzer-in-situ/">In-situ water analyzer ${arrow}</a></div>
        </div>
      </section>
      <section class="mp-section" id="measurement-methods" aria-labelledby="methods-title"><div class="mp-shell">
        <div class="probe-section-head"><h2 id="methods-title">Different measurements.<br><span>Different sensing methods.</span></h2><p>The sensing approach follows the parameter and the water conditions. These methods describe the lineup; individual configurations are confirmed by model.</p></div>
        <div class="probe-methods">
          <article><svg viewBox="0 0 240 100" aria-hidden="true"><path d="M65 12v52m22-52v52M38 52h76m-70-9v42h64V43M65 30h22m0 0h37v-8h28"/><circle cx="173" cy="22" r="18"/><path class="probe-svg-accent" d="m164 28 14-13M59 74h12m-6-6v12M82 74h10"/></svg><h3>Electrochemical</h3><p>Electrodes measure potential or conductance. pH, ORP and conductivity use different arrangements; chlorine and ozone use electrochemical configurations.</p><span>pH · ORP · EC · Chlorine · Ozone</span></article>
          <article><svg viewBox="0 0 240 100" aria-hidden="true"><rect x="24" y="37" width="24" height="28" rx="3"/><path class="probe-svg-accent" d="M49 51h64m6 0 48-27m-48 27 48 25"/><circle cx="118" cy="51" r="6"/><path d="M94 23v56m47-56v56"/><rect x="171" y="11" width="30" height="23" rx="3"/><rect x="171" y="66" width="30" height="23" rx="3"/></svg><h3>Optical</h3><p>Scattering, absorption or fluorescence reveals a property of the sample. Dissolved oxygen uses luminescence quenching.</p><span>Turbidity · DO · COD · Oil · Algae</span></article>
          <article><svg viewBox="0 0 240 100" aria-hidden="true"><path d="M98 12v43a22 22 0 0 0 44 0V12m-44 0h44m-22 0v-8"/><path class="probe-svg-accent" d="M99 56h42m-40 7h38"/><circle cx="84" cy="77" r="4"/><circle cx="155" cy="71" r="4"/><circle cx="120" cy="88" r="4"/><path d="m65 55 6 6m0-6-6 6m108 28h8m-4-4v8"/></svg><h3>Compensated nutrients</h3><p>Ammonia and nitrate measurements include pH and temperature compensation. Confirm the sensing configuration, calibration and water chemistry for the selected model.</p><span>Ammonia nitrogen · Nitrate nitrogen</span></article>

        </div>
      </div></section>
      <section class="mp-section probe-installation" id="installation" aria-labelledby="installation-title"><div class="mp-shell">
        <div class="probe-section-head"><h2 id="installation-title">Made for the water.<br><span>Planned for the site.</span></h2><p>Choose the probe together with its mounting, cable run and maintenance access. Final requirements follow the selected model and installation conditions.</p></div>
        <div class="probe-install-grid"><figure class="probe-anatomy"><svg viewBox="0 0 480 330" role="img" aria-labelledby="anatomy-title anatomy-desc"><title id="anatomy-title">Generalized probe anatomy</title><desc id="anatomy-desc">A cable connects to a sealed housing containing sensing electronics. The electrode, membrane or optical tip meets the water. This schematic is not a model drawing.</desc><path d="M144 30V8m0 0c0-8 32-8 32 4"/><rect x="126" y="30" width="36" height="22" rx="4"/><rect x="112" y="52" width="64" height="209" rx="18" class="probe-svg-body"/><rect x="121" y="83" width="46" height="60" rx="4" class="probe-svg-electronics"/><path d="M112 240h64m-50-10h36"/><path class="probe-svg-accent" d="M132 261v18m24-18v18m-28 0h32"/><path class="probe-svg-guide" d="M166 41h66m-63 69h63m-55 78h55m-62 52h62m-72 43h72"/><text x="246" y="45">Cable connection</text><text x="246" y="114">Sensing electronics</text><text x="246" y="192">Submersible housing</text><text x="246" y="244">Sealed interface</text><text x="246" y="287">Sensing tip</text></svg><figcaption>Generalized anatomy · illustrative, not to scale</figcaption></figure>
        <div class="probe-install-notes"><article><h3>Mounting and cabling</h3><p>Fixed brackets, retrieval chains or flow cells suit different sites. Allow strain relief and safe retrieval. Cable lengths and connector arrangements are selected for the probe and receiver.</p></article><article><h3>Power and interfaces</h3><p>Check supply voltage, wiring and input compatibility. Housing material, immersion depth, operating temperature and pressure must be confirmed for the chosen model.</p></article><article><h3>Cleaning and calibration</h3><p>Plan access for cleaning and verification before installation. Selected models offer automatic wipers; the interval and method depend on fouling, the sensing principle and your water matrix.</p></article></div></div>
        <div class="probe-platform-note"><strong>Choose the installation by sensor</strong><p>Many immersion probes have IP68 housings. The low-range turbidity assembly is IP65 for indoor use. Confirm enclosure rating, material, pressure and permissible depth for the selected model.</p></div>
      </div></section>
      <section class="mp-section probe-applications" aria-labelledby="applications-title"><div class="mp-shell"><div class="probe-section-head"><h2 id="applications-title">Across treatment plants<br><span>and open water.</span></h2><p>The site determines the parameters, range and maintenance plan.</p></div><ul class="probe-application-list">${applications.map(a => `<li>${escape(a)}</li>`).join("")}</ul></div></section>
      <section class="mp-section probe-faq" aria-labelledby="faq-title"><div class="mp-shell probe-faq-layout"><h2 id="faq-title">Before you<br><span>specify a probe.</span></h2><div>${faqs.map(([q, a]) => `<details><summary><span>${escape(q)}</span>${plus}</summary><p>${escape(a)}</p></details>`).join("")}</div></div></section>
      <section class="mp-section mp-cta" aria-labelledby="configuration-title"><div class="mp-shell"><div class="mp-cta-panel"><h2 id="configuration-title">Request a<br><span>probe configuration.</span></h2><p>Tell us what you need to measure, the water conditions and the system the probes will connect to. We’ll help select the output, range, cable and mounting.</p><div class="mp-cta-actions"><a class="button button-dark" href="${escape(enquiry())}">Talk to our engineers ${arrow}</a><a class="button button-light" href="#catalog">Back to the catalog</a></div></div></div></section>
    </main>
    <site-footer>${shared.renderFooter()}</site-footer>
  </div>
</body>
</html>
`;
const destination = path.join(root, "products/water-monitoring-probes/index.html");
fs.mkdirSync(path.dirname(destination), { recursive: true });
fs.writeFileSync(destination, page.replace(/[ \t]+$/gm, ""));
console.log(`Rendered ${probes.length} measurements / ${probes.flatMap(p => p.variants).length} probe entries.`);
