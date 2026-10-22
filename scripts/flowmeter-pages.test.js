const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { createHash } = require('node:crypto');
const sources = require('../docs/sources/flowmeters/pdf-manifest.json');
const { meters } = require('../content/flowmeters.json');
const root = path.resolve(__dirname, '..');
const decode = text => text.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const pages = Object.fromEntries(meters.map(m => [m.id, fs.readFileSync(path.join(root, m.url, 'index.html'), 'utf8')]));

test('all five product pages expose specifications, installation and model enquiries in static HTML', () => {
  for (const m of meters) {
    const html = pages[m.id], main = html.match(/<main\b[\s\S]*?<\/main>/)[0];
    assert.equal((main.match(/<h1\b/g) || []).length, 1);
    for (const section of ['measurement', 'specifications', 'installation', 'related']) assert.ok(main.includes(`id="${section}"`));
    for (const group of m.specGroups) for (const [label, value] of group.rows) {
      assert.ok(decode(main).includes(`<dt>${label}</dt><dd>${value}</dd>`), `${m.id}: ${label}`);
    }
    const links = [...main.matchAll(/href="(mailto:[^"]+)"/g)].map(([, href]) => new URL(decode(href)));
    assert.equal(links.length, 2);
    assert.equal((main.match(/>Download brochure /g) || []).length, 2);
    assert.equal((main.match(/ download>/g) || []).length, 2);
    assert.ok(main.includes(`href="${m.brochure}"`));
    const brochure = fs.readFileSync(path.join(root, m.brochure));
    const source = sources.find(s => s.id === m.sourceId);
    assert.equal(m.brochure, source.brochure.asset);
    assert.equal(createHash('sha256').update(brochure).digest('hex'), source.brochure.sha256);
    assert.ok(brochure.subarray(0,5).equals(Buffer.from('%PDF-')));
    for (const link of links) {
      assert.equal(link.pathname, 'sales@vepolink.com');
      assert.ok(link.searchParams.get('subject').includes(m.name));
      for (const field of [m.name, 'Application', 'flow', 'Pipe size', 'pressure', 'temperature', 'receiving system', 'shutdown']) assert.ok(link.searchParams.get('body').includes(field), `${m.id}: ${field}`);
    }
    assert.doesNotMatch(main, /<details|href="#"|onclick=|onerror=/);
    assert.doesNotMatch(html, /Advance Analytik|viz-sens|Sonic Intelligence|custody-grade|zero energy loss|no metal wetted/i);
  }
});

test('child metadata, breadcrumb, related links, images and sitemap point to real destinations', () => {
  const sitemap = fs.readFileSync(path.join(root, 'products-sitemap.xml'), 'utf8');
  for (const m of meters) {
    const html = pages[m.id], url = `https://www.vepolink.com${m.url}`;
    const schema = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
    const product = schema['@graph'].find(x => x['@type'] === 'Product');
    assert.equal(product.url, url);
    assert.equal(product.additionalProperty.length, m.specGroups.flatMap(g => g.rows).length);
    assert.ok(product.description.includes(m.confirmation));
    assert.equal(schema['@graph'].find(x => x['@type'] === 'BreadcrumbList').itemListElement[2].item, url);
    assert.match(html, new RegExp(`<link rel="canonical" href="${url}">`));
    assert.equal(sitemap.split(`<loc>${url}</loc>`).length - 1, 1);
    const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(x => x[1]);
    assert.equal(new Set(ids).size, ids.length);
    for (const [, fragment] of html.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.includes(fragment), fragment);
    for (const [, ref, fragment] of html.matchAll(/(?:href|src)="(\/[^"?#]*)(?:\?[^"#]*)?(?:#([^"#]+))?"/g)) {
      const file = path.join(root, ref, ref.endsWith('/') ? 'index.html' : '');
      assert.ok(fs.existsSync(file), ref);
      if (fragment) assert.ok(fs.readFileSync(file, 'utf8').includes(`id="${fragment}"`), `${ref}#${fragment}`);
    }
    const image = html.match(/<img[^>]+data-sensor-image>/)[0];
    assert.ok(image.includes(m.image));
    assert.match(image, /width="\d+" height="\d+"/);
    assert.match(image, /alt="Illustration/);
    assert.match(html, /data-sensor-fallback hidden/);
    for (const id of m.related) {
      assert.notEqual(id, m.id);
      assert.ok(html.includes(`href="/products/flowmeters/${id}/"`));
    }
  }
});

test('critical measurement limits and installation qualifications remain specific to each model', () => {
  const p = Object.fromEntries(Object.entries(pages).map(([id, html]) => [id, decode(html)]));
  for (const phrase of ['DN10–3000', '0.2–12 m/s', '10 / 16 / 25 / 40 kg/cm²', '120 °C integral or 180 °C remote']) assert.ok(p.emf.includes(phrase));
  for (const phrase of ['DN10–200', '5 kg/cm²', '55 °C', 'HDPE', 'SS316L']) assert.ok(p.ecoflow.includes(phrase));
  for (const phrase of ['DN50–1200', 'Qn 10–4200 m³/h, size-dependent', 'Up to 350 cSt', '40 bar', 'retractable fitting']) assert.ok(p.sonicline.includes(phrase));
  for (const phrase of ['1% of flow rate at velocity ≥0.3 m/s', '12.7 mm–10 m, sensor-dependent', 'Transmitter temperature', 'process-temperature rating']) assert.ok(p.clampwave.includes(phrase));
  for (const phrase of ['Level range', '0.25–12 m', 'Level accuracy', '± the greater of 0.15% of range or 6 mm', 'head-measurement point', 'Flow range and accuracy depend']) assert.ok(p.echoflow.includes(phrase));
  assert.doesNotMatch(p.sonicline, /3 mm|430 bar|−200 °C|250 °C/);
  assert.doesNotMatch(p.ecoflow, /20 µS/);
});
