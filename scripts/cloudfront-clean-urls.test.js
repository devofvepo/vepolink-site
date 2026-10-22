const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const { execFileSync } = require("node:child_process");
const root = path.resolve(__dirname, "..");
const source = fs.readFileSync(path.join(root, "deploy/cloudfront-clean-urls.js"), "utf8");
const context = vm.createContext({});
vm.runInContext(source, context);

function route(uri, querystring = {}, host = "www.vepolink.com") {
  return context.handler({ request: {
    method: "GET", uri, querystring, headers: { host: { value: host } }, cookies: {}
  } });
}

test("every published directory page redirects without a slash and rewrites with one", () => {
  const files = execFileSync("git", ["ls-files", "*index.html"], { cwd: root, encoding: "utf8" }).trim().split("\n");
  const pages = files.filter(file => file !== "index.html" && !file.startsWith("_preserved/") && file !== "wqms/index.html");
  assert.ok(pages.includes("products/water-monitoring-probes/index.html"));
  assert.equal(pages.filter(file => /^products\/water-monitoring-probes\/[^/]+\/index.html$/.test(file)).length, 18);
  for (const file of pages) {
    const url = "/" + file.replace(/index\.html$/, "");
    const redirect = route(url.slice(0, -1));
    assert.equal(redirect.statusCode, 301, url);
    assert.equal(redirect.headers.location.value, url);
    assert.equal(route(url).uri, "/" + file);
  }
  assert.equal(route("/").uri, "/index.html");
});

test("redirects preserve encoded, repeated and empty query parameters", () => {
  const query = {
    q: { value: "pH%20%26%20EC" },
    output: { value: "digital", multiValue: [{ value: "digital" }, { value: "analog" }] },
    "campaign%20name": { value: "a%2Fb+test" },
    preview: { value: "" }
  };
  const suffix = "?q=pH%20%26%20EC&output=digital&output=analog&campaign%20name=a%2Fb+test&preview";
  assert.equal(route("/products/water-monitoring-probes", query).headers.location.value, "/products/water-monitoring-probes/" + suffix);
  assert.equal(route("/about", query).headers.location.value, "/about/" + suffix);
  assert.equal(route("/wqms", query).headers.location.value, "/water-quality-monitoring/" + suffix);
  assert.equal(route("/about/", query, "vepolink.com").headers.location.value, "https://www.vepolink.com/about/" + suffix);
  assert.equal(route("/about/", query).querystring, query);
});

test("asset, sitemap and explicit HTML URLs pass through", () => {
  for (const url of ["/assets/water-probes.js", "/assets/styles.css", "/assets/products/water-probes/odo.webp", "/products-sitemap.xml", "/robots.txt", "/404.html", "/products/water-monitoring-probes/index.html", "/downloads/probe.pdf", "/.well-known/security.txt"]) {
    assert.equal(route(url).uri, url);
    assert.equal(route(url).statusCode, undefined);
  }
});

test("deferred routes keep their direct uncacheable 404 response", () => {
  for (const url of ["/login", "/login/", "/login/account", "/support", "/support/ticket.html", "/ops/support", "/ops/support/ticket"]) {
    const response = route(url);
    assert.equal(response.statusCode, 404, url);
    assert.equal(response.headers["cache-control"].value, "no-store");
    assert.equal(response.headers["x-robots-tag"].value, "noindex, nofollow");
    assert.equal(response.headers.location, undefined);
  }
});

test("legacy alias and apex host redirects still resolve to the canonical page", () => {
  for (const url of ["/wqms", "/wqms/"]) {
    assert.equal(route(url).headers.location.value, "/water-quality-monitoring/");
  }
  const response = route("/products/water-monitoring-probes", {}, "vepolink.com");
  assert.equal(response.statusCode, 301);
  assert.equal(response.headers.location.value, "https://www.vepolink.com/products/water-monitoring-probes");
});

test("extensionless redirect cannot become a protocol-relative external URL", () => {
  assert.equal(route("//example.com/probe").headers.location.value, "/example.com/probe/");
});

test("both deployment templates carry the same tested function", () => {
  for (const name of ["cloudformation-static-site.yml", "cloudformation-preview-static-site.yml"]) {
    const template = fs.readFileSync(path.join(root, "deploy", name), "utf8");
    const inline = template.split("      FunctionCode: |\n")[1].split("\n  ResponseHeadersPolicy:")[0];
    assert.equal(inline.split("\n").map(line => line.replace(/^ {8}/, "")).join("\n").trim(), source.trim(), name);
  }
});
