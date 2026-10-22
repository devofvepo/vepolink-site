const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { sensors } = require("../content/water-probe-details.json");
const { probes } = require("../content/water-probes.json");
const root = path.resolve(__dirname, "..");
const read = url => fs.readFileSync(path.join(root, url, "index.html"), "utf8");
const category = read("/products/water-monitoring-probes/");
const source = require("../docs/sources/water-probes/advance-analytik.json").sources;

test("all 18 source sensors have one route and one category entry", () => {
  assert.equal(sensors.length, 18);
  assert.equal(new Set(sensors.map(s => s.id)).size, 18);
  assert.equal(new Set(sensors.map(s => s.url)).size, 18);
  assert.equal(new Set(sensors.map(s => s.source.url)).size, 18);
  assert.deepEqual(new Set(sensors.map(s => s.source.url)), new Set(source.map(s => s.source.url)));
  const variants = probes.flatMap(p => p.variants);
  assert.deepEqual(new Set(variants.map(v => v.id)), new Set(sensors.map(s => s.id)));
  assert.ok(variants.every(v => category.includes(`href="${v.url}"`)));
  for (const group of ["ph-digital", "conductivity", "turbidity"]) assert.equal(probes.find(p => p.id === group).variants.length, 2);
});

test("each child is a complete static page with valid links and fragment targets", () => {
  for (const s of sensors) {
    const html = read(s.url);
    assert.equal((html.match(/<h1\b/g) || []).length, 1, s.id);
    assert.ok(s.specs.length > 0, s.id);
    assert.doesNotMatch(html, /<dl><\/dl>/);
    const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
    assert.equal(new Set(ids).size, ids.length, `${s.id} duplicate IDs`);
    for (const section of ["measurement", "specifications", "installation", "related"]) assert.ok(ids.includes(section));
    assert.doesNotMatch(html, /href="#"|onclick=|onerror=|Lorem ipsum/);
    for (const [, ref] of html.matchAll(/(?:href|src)="(\/[^"?#]*)(?:\?[^"#]*)?(?:#[^"]*)?"/g)) {
      assert.ok(fs.existsSync(path.join(root, ref, ref.endsWith("/") ? "index.html" : "")), `${s.id}: ${ref}`);
    }
    for (const [, fragment] of html.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.includes(fragment), `${s.id}: ${fragment}`);
    assert.ok(!html.includes(s.source.datasheet), `${s.id}: supplier datasheet exposed`);
    const request = html.match(/href="([^"]+)">Request datasheet /);
    assert.ok(request, `${s.id}: missing datasheet enquiry`);
    const datasheet = new URL(request[1].replaceAll("&amp;", "&"));
    assert.equal(datasheet.protocol, "mailto:");
    assert.equal(datasheet.pathname, "sales@vepolink.com");
    assert.equal(datasheet.searchParams.get("subject"), `${s.name} — datasheet request`);
    assert.ok(s.related.every(id => sensors.some(other => other.id === id && other.id !== s.id)));
  }
});

test("supplier names appear only in approved homepage and solution-page partner lists", () => {
  const internal = new Set([".git", ".agents", ".codex", ".impeccable", "docs", "content", "scripts", "deploy", "_preserved", "node_modules"]);
  const publicFiles = directory => fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const file = path.join(directory, entry.name);
    return entry.isDirectory() ? (internal.has(entry.name) ? [] : publicFiles(file)) : /\.(html|js|svg|css|xml)$/.test(entry.name) ? [file] : [];
  });
  const supplier = /advance[\s-]*analytik|viz[\s-]*(?:sens|lens)|anodyne|hemera|process instruments|horiba|vasthi|\badept\b|ott hydromet|siemens/i;
  // OEM partners are explicitly listed on the homepage and four solution pages only.
  // Allow the exact text-only list; all other content and product assets stay checked.
  const partnerPages = new Set(["index.html", "water-quality-monitoring/index.html", "stack-emission-monitoring/index.html", "ambient-air-monitoring/index.html", "indoor-air-monitoring/index.html"]);
  const approvedPartners = ["Anodyne", "Advance Analytik", "Hemera Analysers", "Process Instruments", "Horiba", "Vasthi Instruments", "Adept", "OTT Hydromet", "Siemens"];
  const approvedList = `<ul class="partner-list">${approvedPartners.map(name => `<li>${name}</li>`).join("")}</ul>`;
  for (const file of publicFiles(root)) {
    const relative = path.relative(root, file);
    let html = fs.readFileSync(file, "utf8");
    if (partnerPages.has(relative)) {
      html = html.replace(/<section class="partners"[\s\S]*?<\/section>/, section => section.replace(approvedList, ""));
    }
    assert.doesNotMatch(html, supplier, relative);
  }
});

test("metadata and sitemap expose every child without fabricated commerce claims", () => {
  const sitemap = fs.readFileSync(path.join(root, "products-sitemap.xml"), "utf8");
  for (const s of sensors) {
    const html = read(s.url);
    const schema = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
    const product = schema["@graph"].find(item => item["@type"] === "Product");
    assert.equal(product.name, s.name);
    assert.equal(product.additionalProperty.length, s.specs.length);
    for (const field of ["sku", "mpn", "offers", "aggregateRating", "review", "manufacturer"]) assert.ok(!(field in product));
    assert.ok(schema["@graph"].some(item => item["@type"] === "BreadcrumbList"));
    assert.ok(html.includes(`<link rel="canonical" href="https://www.vepolink.com${s.url}">`));
    assert.equal(sitemap.split(`<loc>https://www.vepolink.com${s.url}</loc>`).length - 1, 1);
  }
});

test("specification decisions preserve units, options and unresolved source conflicts", () => {
  const find = id => sensors.find(s => s.id === id);
  for (const id of ["ec-analog", "uv-cod", "oiw", "nh4n"]) assert.equal(find(id).range, "Range depends on model");
  assert.ok(find("rcl").range.includes("optional"));
  assert.ok(find("rcl").specs.some(([k,v]) => /flow/i.test(k) && v === "30–60 L/h"));
  assert.ok(find("no3n").specs.some(([k,v]) => k === "Accuracy" && v.includes("within 6 h") && v.includes("laboratory")));
  assert.ok(find("bga").specs.some(([k,v]) => k === "Reference-dye accuracy" && v.includes("Rhodamine B")));
  assert.ok(find("bga").specs.some(([k,v]) => k === "Enclosure protection" && v.includes("Confirm")));
  assert.ok(find("turbidity-low").install.includes("not an immersion probe"));
  assert.deepEqual(find("ozone").outputs, []);
  for (const s of sensors) {
    assert.doesNotMatch(JSON.stringify(s.specs), /85-500|3-way|0\.999|SDI-12/);
    if (s.image) assert.ok(fs.existsSync(path.join(root,"assets/products/water-probes", s.image + ".json")));
    assert.ok(s.image, `${s.id}: missing product image`);
    assert.doesNotMatch(read(s.url), /Representative probe shown|alt="Representative /);
    if (s.imageSource.status === "source-page-assignment") {
      const sourceEntry = source.find(entry => entry.source.url === s.imageSource.sourcePage);
      assert.ok(sourceEntry?.webImages.some(image => image.src === s.imageSource.source), s.id);
    }
  }
});

test("enquiries identify the sensor and request the actual receiving system", () => {
  for (const s of sensors) {
    const html = read(s.url);
    const links = [...html.matchAll(/href="(mailto:[^"]+)"/g)].map(m => new URL(m[1].replace(/&amp;/g, "&")));
    const enquiry = links.find(l => l.searchParams.get("subject") === `${s.name} — configuration enquiry`);
    assert.ok(enquiry, s.id);
    assert.equal(enquiry.pathname, "sales@vepolink.com");
    for (const field of ["Application", "Required measurement range", "Receiving analyzer", "Required output", "Cable length", "current technical datasheet"]) assert.ok(enquiry.searchParams.get("body").includes(field));
  }
});
