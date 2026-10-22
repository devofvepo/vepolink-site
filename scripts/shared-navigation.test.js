const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { renderHeader, renderFooter, navGroups } = require('../assets/shared-ui.js');
const header = renderHeader();
const footer = renderFooter();
const decode = text => text.replace(/&amp;/g, '&');
const links = html => [...html.matchAll(/<a\b[^>]*href="([^"]+)"/g)].map(m => m[1]);

test('mobile product sections match desktop names, order and every destination exactly once', () => {
  const desktop = navGroups.find(group => group.label === 'Products').megaGroups;
  const mobile = [...header.matchAll(/<section class="mobile-nav-category" aria-labelledby="([^"]+)">([\s\S]*?)<\/section>/g)];
  assert.deepEqual(mobile.map(([, , html]) => decode(html.match(/<h3[^>]*>([^<]+)<\/h3>/)[1])), ['Water monitoring', 'Ambient air', 'Process & emissions', 'Gas safety']);
  assert.deepEqual(mobile.map(([, , html]) => links(html).length), [5, 8, 5, 3]);
  mobile.forEach(([, headingId, html], i) => {
    assert.ok(html.includes(`id="${headingId}"`));
    assert.deepEqual(links(html), desktop[i].items.map(item => item.href));
    for (const href of links(html)) assert.ok(fs.existsSync(path.join(__dirname, '..', href, 'index.html')), href);
    assert.equal((html.match(/class="mobile-nav-icon"/g) || []).length, desktop[i].items.length);
  });
  const destinations = mobile.flatMap(([, , html]) => links(html));
  assert.equal(new Set(destinations).size, 21);
  assert.ok(destinations.includes('/products/in-situ-tdlas-gas-analyzer/'));
});

test('grouped navigation preserves unique IDs and valid disclosure targets', () => {
  const ids = [...header.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
  assert.equal(new Set(ids).size, ids.length);
  for (const [, id] of header.matchAll(/aria-(?:controls|labelledby)="([^"]+)"/g)) assert.ok(ids.includes(id), id);
  assert.equal((header.match(/data-mobile-nav-disclosure/g) || []).length, 3);
  for (const id of ['mobile-nav-solutions', 'mobile-nav-company']) {
    const submenu = header.match(new RegExp(`<div class="mobile-nav-submenu" id="${id}"[\\s\\S]*?</div>`))[0];
    assert.doesNotMatch(submenu, /mobile-nav-category/);
  }
});

test('footer keeps platform and company links with the same policy row', () => {
  const groups = [...footer.matchAll(/<nav class="footer-group [^"]+" aria-label="[^"]+">([\s\S]*?)<\/nav>/g)];
  assert.deepEqual(groups.map(([, html]) => decode(html.match(/<h2>([^<]+)<\/h2>/)[1])), [
    'Platform', 'Company',
  ]);
  assert.deepEqual(groups.map(([, html]) => links(html).length), [5, 5]);
  assert.doesNotMatch(footer, /<h2>Products<\/h2>|class="footer-products"/);
  const destinations = groups.flatMap(([, html]) => links(html));
  const pageDestinations = destinations.filter(href => href.startsWith('/'));
  assert.equal(new Set(pageDestinations).size, pageDestinations.length);
  for (const href of pageDestinations.filter(href => href !== '/#platform')) {
    assert.ok(fs.existsSync(path.join(__dirname, '..', href, 'index.html')), href);
  }
  assert.ok(footer.includes('href="/#platform"'));
  assert.ok(fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8').includes('id="platform"'));
  const legal = footer.match(/<nav aria-label="Legal links">([\s\S]*?)<\/nav>/)[1];
  assert.deepEqual([...legal.matchAll(/<a[^>]+>([^<]+)<\/a>/g)].map(match => match[1]),
    ['Privacy', 'Terms', 'Security', 'SLA', 'Data residency']);
  assert.deepEqual(links(legal), Array(5).fill('mailto:techsupport@vepolink.com'));
});

test('every static page carries the same shared footer', () => {
  const root = path.join(__dirname, '..');
  const expected = footer.replace(/[ \t]+$/gm, '').trim();
  const ignored = new Set(['.agents', '.codex', '.git', '.impeccable', '_preserved', 'node_modules']);
  const walk = directory => fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) return ignored.has(entry.name) ? [] : walk(file);
    return entry.isFile() && entry.name.endsWith('.html') ? [file] : [];
  });
  let pageCount = 0;
  for (const file of walk(root)) {
    const html = fs.readFileSync(file, 'utf8');
    if (!html.includes('<site-footer')) continue;
    const match = html.match(/<site-footer[^>]*>([\s\S]*?)<\/site-footer>/);
    assert.ok(match, file);
    assert.equal(match[1].trim(), expected, file);
    pageCount++;
  }
  assert.ok(pageCount > 40);
});


test('homepage and every solution page publish all nine partner names without JavaScript', () => {
  const expected = [
    'Anodyne', 'Advance Analytik', 'Hemera Analysers', 'Process Instruments',
    'Horiba', 'Vasthi Instruments', 'Adept', 'OTT Hydromet', 'Siemens',
  ];
  const { renderSharedPage } = require('./render-shared.js');
  for (const route of ['', 'water-quality-monitoring', 'stack-emission-monitoring', 'indoor-air-monitoring', 'ambient-air-monitoring']) {
    const html = fs.readFileSync(path.join(__dirname, '..', route, 'index.html'), 'utf8');
    const sections = [...html.matchAll(/<section class="partners"[\s\S]*?<\/section>/g)];
    assert.equal(sections.length, 1, `${route || '/'}: one partner section`);
    const partnerSection = sections[0][0];
    assert.ok(partnerSection.includes('id="oem-partners"'));
    assert.ok(html.indexOf(partnerSection) < html.indexOf('<section class="cta"'));
    const headingId = partnerSection.match(/aria-labelledby="([^"]+)"/)[1];
    assert.ok(partnerSection.includes(`<h2 id="${headingId}"`));
    assert.deepEqual([...partnerSection.matchAll(/<li>([^<]+)<\/li>/g)].map(match => match[1]), expected);
    assert.doesNotMatch(partnerSection, /<div data-partner-marquee><\/div>/);
    const empty = html.replace(/<div data-partner-marquee>[\s\S]*?<\/div>/, '<div data-partner-marquee></div>');
    assert.equal(renderSharedPage(empty), renderSharedPage(html));
  }
});
