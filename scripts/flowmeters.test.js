const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const { renderSharedPage } = require("./render-shared");
const { groups, meters } = require("../content/flowmeters.json");
const sources = require("../docs/sources/flowmeters/pdf-manifest.json");
const root = path.resolve(__dirname, "..");
const html = fs.readFileSync(path.join(root, "products/flowmeters/index.html"), "utf8");
const main = html.match(/<main\b[\s\S]*?<\/main>/)[0];
const script = fs.readFileSync(path.join(root, "assets/flowmeters.js"), "utf8");
const decode = text => text.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">");

test("five source-backed models each appear once with a prominent child-page link", () => {
  assert.deepEqual(meters.map(m => m.id), ["emf", "ecoflow", "sonicline", "clampwave", "echoflow"]);
  assert.deepEqual(groups.map(g => meters.filter(m => m.group === g.id).length), [3, 1, 1]);
  assert.equal((main.match(/data-flow-meter\b/g) || []).length, 5);
  assert.doesNotMatch(main, /class="flow-specs"|class="flow-facts"/);
  for (const meter of meters) {
    assert.ok(sources.some(source => source.id === meter.sourceId && source.sha256.length === 64));
    const article = main.match(new RegExp(`<article class="flow-card" id="meter-${meter.id}"[\\s\\S]*?</article>`))[0];
    assert.ok(article.includes(`href="${meter.url}"`));
    assert.match(article, /View flowmeter/);
    assert.doesNotMatch(article, /<details|<dl|mailto:|±|DN\d|m³|µS|kg\/cm/);
    assert.ok(fs.existsSync(path.join(root, meter.url, 'index.html')));

  }
});

test("source qualifications survive and contradictory or supplier claims stay unpublished", () => {
  const cards = Object.fromEntries(meters.map(m => [m.id, decode(fs.readFileSync(path.join(root, m.url, "index.html"), "utf8"))]));
  assert.match(cards.clampwave, /1% of flow rate at velocity ≥0\.3 m\/s/);
  assert.match(cards.clampwave, /12\.7 mm–10 m, sensor-dependent/);
  assert.match(cards.emf, /above 20 µS\/cm/);
  assert.match(cards.emf, /±0\.2% of measured value on request/);
  assert.match(cards.emf, /Sensor IP65; IP67\/IP68 optional/);
  assert.match(cards.ecoflow, /HDPE.*SS316L/);
  assert.match(cards.ecoflow, /confirm the minimum conductivity/);
  assert.doesNotMatch(cards.ecoflow, /20 µS/);
  assert.match(cards.sonicline, /Qn 10–4200 m³\/h, size-dependent/);
  assert.doesNotMatch(cards.sonicline, /3 mm|430 bar|250 °C|−200 °C/);
  assert.match(cards.sonicline, /initial installation separately from transducer servicing/);
  assert.match(cards.echoflow, /Level accuracy/);
  assert.match(cards.echoflow, /level range is not a flow range/);
  assert.doesNotMatch(html, /Sonic Intelligence|Advance Analytik|viz-sens|no metal wetted|virtually all|custody-grade|zero energy loss/i);
  assert.doesNotMatch(main, /href="[^"]*\.pdf|href="#"|onerror=|onclick=/);
});

test("native content, model anchors, images and local links work without a JS dependency", () => {
  assert.match(main, /data-flow-controls hidden/);
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
  assert.equal(new Set(ids).size, ids.length);
  for (const [, fragment] of html.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.includes(fragment), fragment);
  for (const [, ref] of html.matchAll(/(?:href|src)="(\/[^"?#]*)(?:\?[^"#]*)?(?:#[^"]*)?"/g)) {
    assert.ok(fs.existsSync(path.join(root, ref, ref.endsWith("/") ? "index.html" : "")), ref);
  }
  for (const source of sources) {
    assert.ok(fs.existsSync(path.join(root, source.image.asset)));
    assert.equal(source.image.sourcePage, 1);
    assert.equal(source.image.kind, "Brochure illustration, not a product photograph");
  }
  for (const [, image] of main.matchAll(/(<img\b[^>]+>)/g)) {
    assert.match(image, /alt="Illustration/);
    assert.match(image, /width="\d+" height="\d+"/);
  }
  assert.doesNotMatch(main, /style="display:\s*none|aria-hidden="true"[^>]*>[^<]*specifications/i);
});

test("collection schema, sitemap and header navigation expose real category and model URLs", () => {
  const schema = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
  const collection = schema["@graph"][0];
  assert.equal(collection["@type"], "CollectionPage");
  assert.equal(collection.mainEntity.numberOfItems, 5);
  assert.deepEqual(collection.mainEntity.itemListElement.map(x => new URL(x.url).pathname), meters.map(m => m.url));
  assert.equal(schema["@graph"][1]["@type"], "BreadcrumbList");
  const route = "https://www.vepolink.com/products/flowmeters/";
  const sitemap = fs.readFileSync(path.join(root, "products-sitemap.xml"), "utf8");
  assert.equal(sitemap.split(`<loc>${route}</loc>`).length - 1, 1);
  const shared = require("../assets/shared-ui.js");
  assert.ok(shared.renderHeader().includes('/products/flowmeters/'));
  assert.match(html, /class="mobile-nav-subitem" href="\/products\/flowmeters\/"/);
});

// Minimal event-driven DOM fixture for the production filter script. The model
// attributes come from rendered HTML; expected result sets are independently specified.
function fixture(hash = "") {
  const node = (props = {}) => Object.assign({ hidden: false, events: {}, addEventListener(name, fn) { this.events[name] = fn; }, focus() { this.focused = true; }, scrollIntoView() { this.scrolled = true; } }, props);
  const cards = [...main.matchAll(/id="meter-([^"]+)" data-flow-meter data-technology="([^"]+)" data-installation="([^"]+)"/g)].map(([, id, technology, installation]) => node({ id: `meter-${id}`, dataset: { technology, installation } }));
  const groupNodes = groups.map(g => node({ id: g.id }));
  const radios = ["all", "electromagnetic", "ultrasonic"].map(value => node({ value, checked: value === "all" }));
  const installation = node({ value: "all" });
  const reset = node({ disabled: true });
  const count = node();
  const empty = node({ hidden: true });
  const clear = node();
  const images = [node({ complete: true, naturalWidth: 0 }), node({ complete: true, naturalWidth: 800 })];
  const form = node({ hidden: true, querySelector: selector => ({ '[type="reset"]': reset, '[name="installation"]': installation })[selector], querySelectorAll: () => radios });
  const nodes = [...cards, ...groupNodes];
  for (const n of nodes) {
    n.matches = selector => selector === "details" && n.id.startsWith("specs-");
    n.closest = selector => {
      const modelId = n.id.replace(/^(meter|specs)-/, "");
      if (selector === "[data-flow-meter]") return cards.find(c => c.id === `meter-${modelId}`) || null;
      if (selector === "[data-flow-group]") return groupNodes.find(g => g.id === n.id || meters.some(m => m.id === modelId && m.group === g.id)) || null;
      return null;
    };
  }
  const page = node({ contains: target => nodes.includes(target), querySelector: selector => ({ "[data-flow-controls]": form, "#flow-result-count": count, "[data-flow-empty]": empty, "[data-flow-clear]": clear })[selector], querySelectorAll: selector => selector === "[data-flow-meter]" ? cards : selector === "[data-flow-group]" ? groupNodes : images });
  const window = node({ location: { hash } });
  const document = { querySelector: () => page, getElementById: id => nodes.find(n => n.id === id) || null };
  vm.runInNewContext(script, { document, window });
  const visible = () => cards.filter(c => !c.hidden).map(c => c.id.replace("meter-", ""));
  const select = (tech, install) => { radios.forEach(r => { r.checked = r.value === tech; }); installation.value = install; form.events.change(); };
  return { cards, groups: groupNodes, radios, reset, count, empty, clear, form, images, window, page, select, visible };
}

test("all twelve combined technology and installation selections return the right models", () => {
  const f = fixture();
  assert.equal(f.form.hidden, false);
  const cases = [
    ["all", "all", ["emf", "ecoflow", "sonicline", "clampwave", "echoflow"]],
    ["all", "inline", ["emf", "ecoflow", "sonicline"]], ["all", "clamp-on", ["clampwave"]], ["all", "open-channel", ["echoflow"]],
    ["electromagnetic", "all", ["emf", "ecoflow"]], ["electromagnetic", "inline", ["emf", "ecoflow"]], ["electromagnetic", "clamp-on", []], ["electromagnetic", "open-channel", []],
    ["ultrasonic", "all", ["sonicline", "clampwave", "echoflow"]], ["ultrasonic", "inline", ["sonicline"]], ["ultrasonic", "clamp-on", ["clampwave"]], ["ultrasonic", "open-channel", ["echoflow"]]
  ];
  for (const [tech, install, expected] of cases) {
    f.select(tech, install);
    assert.deepEqual(f.visible(), expected, `${tech}/${install}`);
    assert.equal(f.empty.hidden, expected.length > 0);
    assert.ok(f.count.textContent.startsWith(`${expected.length} `));
    assert.equal(f.reset.disabled, tech === "all" && install === "all");
  }
  assert.equal(f.count.textContent, "1 model · 1 installation type");
});

test("reset, empty recovery, fragments and image failures retain usable controls and content", () => {
  const f = fixture();
  f.select("electromagnetic", "clamp-on");
  f.clear.events.click();
  assert.equal(f.visible().length, 5);
  assert.equal(f.radios[0].focused, true);
  f.select("ultrasonic", "all");
  f.form.events.reset({ preventDefault() { } });
  assert.equal(f.visible().length, 5);
  assert.equal(f.reset.disabled, true);
  f.select("electromagnetic", "all");
  f.window.location.hash = "#meter-clampwave";
  f.window.events.hashchange();
  assert.equal(f.cards.find(s => s.id === "meter-clampwave").scrolled, true);
  assert.ok(f.visible().includes("clampwave"));
  f.select("ultrasonic", "all");
  f.page.events.click({ target: { closest: () => ({ getAttribute: () => "#meter-emf" }) } });
  assert.ok(f.visible().includes("emf"));
  assert.equal(f.images[0].hidden, true);
  assert.equal(f.images[1].hidden, false);
  f.images[1].events.error();
  assert.equal(f.images[1].hidden, true);
  assert.ok(fixture("#meter-echoflow").visible().includes("echoflow"));
  assert.doesNotThrow(() => fixture("#%malformed"));
});

test("shared navigation regeneration preserves page bodies", () => {
  for (const file of ["products/flowmeters/index.html", "products/ambient-so2-gas-analyzer/index.html", "water-quality-monitoring/index.html"]) {
    const source = fs.readFileSync(path.join(root, file), "utf8");
    const body = text => text.match(/<main\b[\s\S]*?<\/main>/)?.[0];
    assert.ok(body(source), file);
    assert.equal(body(renderSharedPage(source)), body(source), file);
  }
});
