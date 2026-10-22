const fs = require("fs");
const path = require("path");
const shared = require("../assets/shared-ui.js");

const root = path.resolve(__dirname, "..");
const ignoredDirectories = new Set([".agents", ".codex", ".git", ".impeccable", "_preserved", "node_modules"]);
const sharedAssetVersion = "20261004footer4";

const findSharedPages = (directory, relativeDirectory = "") =>
  fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const relativePath = path.join(relativeDirectory, entry.name);
    const absolutePath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      return ignoredDirectories.has(entry.name)
        ? []
        : findSharedPages(absolutePath, relativePath);
    }

    if (!entry.isFile() || path.extname(entry.name) !== ".html") {
      return [];
    }

    const html = fs.readFileSync(absolutePath, "utf8");
    return html.includes("<site-header") && html.includes("<site-footer")
      ? [relativePath]
      : [];
  });

const normalizeSharedMarkup = (markup) => markup.replace(/[ \t]+$/gm, "");
const header = `<site-header>${normalizeSharedMarkup(shared.renderHeader())}</site-header>`;
const footer = `<site-footer>${normalizeSharedMarkup(shared.renderFooter())}</site-footer>`;

const replaceBlock = (html, tagName, replacement) => {
  const pattern = new RegExp(`<${tagName}[^>]*>[\\s\\S]*?<\\/${tagName}>`, "i");
  if (!pattern.test(html)) {
    throw new Error(`Missing <${tagName}> block`);
  }
  return html.replace(pattern, replacement);
};

const replaceSharedAssetVersions = (html) =>
  html.replace(
    /(\/assets\/(?:shared-ui\.js|site\.(?:css|js)))(?:\?v=[^"']*)?/g,
    `$1?v=${sharedAssetVersion}`,
  );

// Existing OEM partner wordmarks from sections.jsx, rendered at build time.
// These solution-page lists must not depend on client-side hydration.
const partnerNames = [
  "Anodyne", "Advance Analytik", "Hemera Analysers", "Process Instruments",
  "Horiba", "Vasthi Instruments", "Adept", "OTT Hydromet", "Siemens",
];
const partnerList = `<ul class="partner-list">${partnerNames.map(name => `<li>${name}</li>`).join("")}</ul>`;
const renderPartnerLists = (html) => html.replace(
  /<div data-partner-marquee(?:="")?>[\s\S]*?<\/div>/g,
  `<div data-partner-marquee>${partnerList}</div>`,
);

const renderSharedPage = (source) => {
  let html = source;
  html = replaceBlock(html, "site-header", header);
  html = replaceBlock(html, "site-footer", footer);
  return replaceSharedAssetVersions(renderPartnerLists(html));
};

if (require.main === module) {
  for (const page of findSharedPages(root)) {
    const filePath = path.join(root, page);
    fs.writeFileSync(filePath, renderSharedPage(fs.readFileSync(filePath, "utf8")));
  }
}

module.exports = { renderSharedPage };
