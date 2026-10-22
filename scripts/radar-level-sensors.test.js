const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { createHash } = require('node:crypto');
const { sensors } = require('../content/radar-level-sensors.json');
const sources = require('../docs/sources/radar-level-sensors/pdf-manifest.json');
const shared = require('../assets/shared-ui.js');

const root = path.resolve(__dirname, '..');
const hubRoute = '/products/radar-level-sensors/';
const hub = fs.readFileSync(path.join(root, hubRoute, 'index.html'), 'utf8');
const probeHub = fs.readFileSync(path.join(root, 'products/water-monitoring-probes/index.html'), 'utf8');
const sitemap = fs.readFileSync(path.join(root, 'products-sitemap.xml'), 'utf8');
const hash = file => createHash('sha256').update(fs.readFileSync(file)).digest('hex');
const localFile = route => path.join(root, route, route.endsWith('/') ? 'index.html' : '');
const escapeHtml = value => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

test('selection hub uses the probe catalog pattern and links to three real sensor pages', () => {
  assert.equal(sensors.length, 3);
  assert.equal(new Set(sensors.map(sensor => sensor.id)).size, 3);
  assert.match(hub, /class="probes-page flow-page level-page"/);
  assert.match(hub, /class="probe-hero"/);
  assert.match(hub, /class="mp-section probe-catalog" id="catalog"/);
  assert.equal((hub.match(/class="probe-card level-card"/g) || []).length, 3);
  assert.doesNotMatch(hub, /<div class="mp-spec-table"|id="specifications"/);
  for (const sensor of sensors) {
    const route = `${hubRoute}${sensor.id}/`;
    assert.ok(hub.includes(`id="sensor-${sensor.id}"`));
    assert.ok(hub.includes(`href="${route}"`));
    assert.ok(fs.existsSync(localFile(route)));
    assert.equal(sitemap.split(`<loc>https://www.vepolink.com${route}</loc>`).length - 1, 1);
  }
  assert.ok(hub.includes('href="/products/water-monitoring-probes/"'));
  assert.ok(probeHub.includes(`href="${hubRoute}"`));
  assert.ok(shared.renderHeader().includes(`href="${hubRoute}"`));
  assert.equal(sitemap.split(`<loc>https://www.vepolink.com${hubRoute}</loc>`).length - 1, 1);
});

test('child pages publish their own specifications, brochure and qualified claims', () => {
  for (const sensor of sensors) {
    const route = `${hubRoute}${sensor.id}/`;
    const html = fs.readFileSync(localFile(route), 'utf8');
    const main = html.match(/<main\b[\s\S]*?<\/main>/)?.[0];
    assert.ok(main, sensor.id);
    for (const section of ['measurement', 'specifications', 'installation', 'related']) assert.ok(main.includes(`id="${section}"`));
    assert.equal((main.match(/Download brochure/g) || []).length, 2);
    assert.equal((main.match(/ download>/g) || []).length, 2);
    assert.ok(main.includes(`href="${sensor.brochure}"`));
    assert.ok(main.includes('Brochure illustration; supplied configuration may vary.'));
    assert.ok(main.includes(escapeHtml(sensor.confirmation)));
    for (const group of sensor.specGroups) for (const [label, value] of group.rows) {
      assert.ok(main.includes(`<dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd>`), `${sensor.id}: ${label}`);
    }
    const schema = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
    assert.equal(schema['@graph'].find(node => node['@type'] === 'Product').url, `https://www.vepolink.com${route}`);
    assert.ok(html.includes(`<link rel="canonical" href="https://www.vepolink.com${route}">`));
    assert.match(main, /mailto:sales@vepolink.com/);
    for (const [, ref] of html.matchAll(/(?:href|src)="(\/[^"?#]*)(?:\?[^"#]*)?(?:#[^"]*)?"/g)) assert.ok(fs.existsSync(localFile(ref)), `${sensor.id}: ${ref}`);
    const source = sources.find(record => record.id === sensor.id);
    assert.ok(source);
    assert.equal(hash(localFile(sensor.brochure)), source.brochureSha256);
    assert.equal(hash(localFile(source.image.path)), source.image.sha256);
    assert.ok(fs.readFileSync(localFile(sensor.brochure)).subarray(0, 5).equals(Buffer.from('%PDF-')));
    assert.ok(fs.existsSync(`${localFile(source.image.path)}.json`));
    assert.doesNotMatch(html, /OTT Hydromet|advanceanalytik|viz.sens|Sutron/i);
  }
});

test('critical distinctions stay on the correct model', () => {
  const pages = Object.fromEntries(sensors.map(sensor => [sensor.id, fs.readFileSync(localFile(`${hubRoute}${sensor.id}/`), 'utf8')]));
  assert.match(pages.pulseradar, /Accuracy, 0.4–2 m/);
  assert.match(pages.pulseradar, /Accuracy, 2–30 m/);
  assert.match(pages.pulseradar, /Accuracy, 30–35 m/);
  assert.match(pages.pulseradar, /RS-485 using SDI-12 commands \(not Modbus RTU\)/);
  assert.match(pages['radarsense-smart'], /Internal humidity and X\/Y sensor orientation/);
  assert.match(pages['radarsense-hf'], /1, 2, 4 or 8 scans\/s/);
  assert.match(pages['radarsense-hf'], /active current varies with scan rate/);
  assert.doesNotMatch(pages['radarsense-hf'], /<dt>Current<\/dt><dd>4 mA active/);
  for (const id of ['radarsense-smart', 'radarsense-hf']) assert.match(pages[id], /not (?:a )?permanent (?:immersion|submersion)|does not establish permanent immersion/);
  assert.match(hub, /Level is not automatically flow/);
  assert.doesNotMatch(hub, /OTT Hydromet|advanceanalytik|viz.sens|Sutron/i);
});
