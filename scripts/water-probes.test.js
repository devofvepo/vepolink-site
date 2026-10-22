const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { groups, probes } = require("../content/water-probes.json");
const { sensors } = require("../content/water-probe-details.json");
const { sources } = require("../docs/sources/water-probes/advance-analytik.json");
const root = path.resolve(__dirname, "..");
const html = fs.readFileSync(path.join(root, "products/water-monitoring-probes/index.html"), "utf8");
const main = html.match(/<main\b[\s\S]*?<\/main>/)[0];
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);

test("source coverage: 15 measurements, 18 unique entries, four groups", () => {
  assert.equal(probes.length, 15);
  const entries = probes.flatMap(p => p.variants.map(v => v.id));
  assert.equal(entries.length, 18);
  assert.equal(new Set(entries).size, 18);
  assert.deepEqual([...html.matchAll(/data-probe-entry="([^"]+)"/g)].map(m => m[1]), entries);
  assert.equal((html.match(/data-probe data-search=/g) || []).length, 15);
  assert.equal(groups.length, 4);
  assert.ok(probes.every(p => groups.some(g => g.id === p.group)));
  assert.deepEqual(probes.find(p => p.id === "conductivity").variants.map(v => v.id), ["ec-digital", "ec-analog"]);
});

test("specification qualifications and supplier image assignments are preserved", () => {
  for (const p of probes) {
    const article = main.match(new RegExp(`<article class="probe-card" id="probe-${p.id}"[\\s\\S]*?</article>`))[0];
    if (p.rangeStatus === "source-conflict") assert.equal(p.range, "Range depends on model");
    if (p.imageSource.status === "source-page-assignment") {
      const source = sources.find(source => source.source.url === p.imageSource.sourcePage);
      assert.ok(source?.webImages.some(image => image.src === p.imageSource.source), p.id);
    } else if (p.imageSource.status !== "unambiguous") {
      assert.equal(p.image, null);
      assert.ok(!article.includes("<img"));
    }
  }
  assert.deepEqual(probes.filter(p => !p.outputs.length).map(p => p.id), ["ozone", "uv-cod"]);
  assert.doesNotMatch(main, /Illustrative photo|Representative probe|alt="Representative/);
  assert.doesNotMatch(main, /SDI-12|Ultrasonic|85-500VAC|3-way 4-20mA/);
  assert.match(main, /COD/);
  assert.match(main, /COD-equivalent/);
  assert.equal((main.match(/class="probe-application-list"[\s\S]*?<\/ul>/)[0].match(/<li>/g) || []).length, 9);
});

test("static probe links, fragment targets and local assets are valid", () => {
  assert.equal(new Set(ids).size, ids.length, "IDs must be unique");
  assert.doesNotMatch(main, /class="probe-details"|Probe details|Care and verification/);
  assert.equal((main.match(/<a class="probe-option"/g) || []).length, 18);
  for (const sensor of sensors) {
    const link = main.match(new RegExp(`<a class="probe-option"[^>]*data-probe-entry="${sensor.id}"[\\s\\S]*?</a>`))?.[0];
    assert.ok(link, sensor.id);
    assert.ok(link.includes(`href="${sensor.url}"`), sensor.id);
    assert.ok(link.includes(`<strong>${sensor.name}</strong>`), sensor.id);
    assert.ok(link.includes(sensor.range), `${sensor.id}: range belongs to this variant`);
    assert.ok(link.includes(`data-outputs="${sensor.outputs.join(" ")}"`), sensor.id);
    assert.ok(link.includes("View probe"), sensor.id);
  }
  assert.match(main, /data-probe-controls[^>]*hidden/);
  for (const [, target] of main.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.includes(target), target);
  assert.doesNotMatch(main, /href="#"|probe\.html|onerror=|onclick=/);
  for (const [, ref] of html.matchAll(/(?:href|src)="(\/[^"?#]*)(?:\?[^"#]*)?(?:#[^"]*)?"/g)) {
    const local = path.join(root, ref, ref.endsWith("/") ? "index.html" : "");
    assert.ok(fs.existsSync(local), `Missing local link or asset: ${ref}`);
  }
  assert.equal(probes.filter(p => p.image).length, 15);
  for (const p of probes.filter(p => p.image)) assert.ok(fs.existsSync(path.join(root, "assets/products/water-probes", p.image + ".json")));
});

test("category enquiries request configuration context; probe enquiries live on child pages", () => {
  for (const [, href] of main.matchAll(/href="(mailto:[^"]+)"/g)) {
    const link = new URL(href.replace(/&amp;/g, "&"));
    assert.equal(link.pathname, "sales@vepolink.com");
    assert.ok(link.searchParams.get("subject").includes("configuration enquiry"));
    const body = link.searchParams.get("body");
    for (const field of ["Application", "required ranges", "Receiving analyzer", "Required output", "Cable length"]) assert.ok(body.includes(field));
  }
  assert.doesNotMatch(main.match(/<div id="probe-results">[\s\S]*?<div class="probe-empty"/)[0], /mailto:/);
});

test("collection metadata, sitemap and header navigation expose the category", () => {
  const schema = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
  assert.equal(schema["@graph"][0]["@type"], "CollectionPage");
  assert.equal(schema["@graph"][0].mainEntity.numberOfItems, 18);
  assert.equal(schema["@graph"][1]["@type"], "BreadcrumbList");
  const route = "/products/water-monitoring-probes/";
  assert.ok(fs.readFileSync(path.join(root, "products-sitemap.xml"), "utf8").includes(route));
  const shared = require("../assets/shared-ui.js");
  assert.ok(shared.renderHeader().includes(route));
});
