(() => {
  const page = document.querySelector(".probes-page");
  if (!page) return;
  const form = page.querySelector("[data-probe-controls]");
  const input = page.querySelector("#probe-search");
  const cards = [...page.querySelectorAll("[data-probe]")];
  const groups = [...page.querySelectorAll("[data-probe-group]")];
  const count = page.querySelector("#probe-result-count");
  const note = page.querySelector("[data-output-note]");
  const empty = page.querySelector("[data-probe-empty]");
  const normalize = (value) => value.toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, " ").trim();
  const index = cards.map(card => ({ card, entries: [...card.querySelectorAll("[data-probe-entry]")].map(entry => ({ entry, words: normalize(entry.dataset.search).split(/\s+/), outputs: entry.dataset.outputs.split(" ").filter(Boolean) })) }));
  const update = () => {
    const words = normalize(input.value).split(/\s+/).filter(Boolean);
    const output = form.elements.output.value;
    let matches = 0;
    let matchingEntries = 0;
    const unknown = [];
    for (const item of index) {
      let visibleEntries = 0;
      for (const option of item.entries) {
        const searchMatch = words.every(word => option.words.some(term => word.length <= 3 ? term === word : term.startsWith(word)));
        const outputMatch = output === "any" || option.outputs.includes(output);
        option.entry.hidden = !(searchMatch && outputMatch);
        if (!option.entry.hidden) visibleEntries++;
        if (searchMatch && !option.outputs.length) unknown.push(item.card.querySelector("h4").textContent);
      }
      item.card.hidden = visibleEntries === 0;
      if (!item.card.hidden) matches++;
      matchingEntries += visibleEntries;
    }
    groups.forEach(group => { group.hidden = !group.querySelector("[data-probe]:not([hidden])"); });
    count.textContent = `${matches} ${matches === 1 ? "measurement" : "measurements"} · ${matchingEntries} ${matchingEntries === 1 ? "probe option" : "probe options"}`;
    empty.hidden = matches !== 0;
    note.hidden = output === "any" || unknown.length === 0;
    note.textContent = note.hidden ? "" : `${unknown.join(" and ")} ${unknown.length === 1 ? "is" : "are"} excluded because output availability is still to be confirmed. Choose Any to include ${unknown.length === 1 ? "it" : "them"}.`;
    form.querySelector('[type="reset"]').disabled = !words.length && output === "any";
  };
  const reset = () => { input.value = ""; form.elements.output.value = "any"; update(); };
  form.addEventListener("submit", event => event.preventDefault());
  form.addEventListener("input", update);
  form.addEventListener("change", update);
  form.addEventListener("reset", event => { event.preventDefault(); reset(); });
  page.querySelector("[data-clear-filters]").addEventListener("click", () => { reset(); input.focus(); });
  form.hidden = false;
  update();
  const revealHash = () => {
    let hash;
    try { hash = decodeURIComponent(location.hash.slice(1)); } catch { return; }
    if (!hash) return;
    const target = document.getElementById(hash);
    if (!target || !page.contains(target)) return;
    const card = target.closest("[data-probe]");
    const group = target.closest("[data-probe-group]");
    if (target.hidden || card?.hidden || group?.hidden) reset();
    if (card || group) target.scrollIntoView({ block: "start", behavior: "instant" });
  };
  window.addEventListener("hashchange", revealHash);
  page.addEventListener("click", event => {
    const link = event.target.closest('a[href^="#"]');
    if (link?.getAttribute("href") === location.hash) revealHash();
  });
  revealHash();
  page.querySelectorAll("[data-probe-image]").forEach(img => {
    const fallback = () => { img.hidden = true; img.parentElement.querySelector("[data-image-fallback]").hidden = false; };
    img.addEventListener("error", fallback);
    if (img.complete && !img.naturalWidth) fallback();
  });
})();
