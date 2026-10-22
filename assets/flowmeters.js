(function () {
  "use strict";
  const page = document.querySelector(".flow-page");
  if (!page) return;
  const form = page.querySelector("[data-flow-controls]");
  const cards = Array.from(page.querySelectorAll("[data-flow-meter]"));
  const groups = Array.from(page.querySelectorAll("[data-flow-group]"));
  const count = page.querySelector("#flow-result-count");
  const empty = page.querySelector("[data-flow-empty]");
  const reset = form.querySelector('[type="reset"]');
  const technology = Array.from(form.querySelectorAll('[name="technology"]'));
  const installation = form.querySelector('[name="installation"]');

  function apply() {
    const selected = technology.find(input => input.checked).value;
    cards.forEach(card => {
      card.hidden = !((selected === "all" || card.dataset.technology === selected) &&
        (installation.value === "all" || card.dataset.installation === installation.value));
    });
    groups.forEach(group => {
      group.hidden = !cards.some(card => !card.hidden && card.dataset.installation === group.id);
    });
    const visible = cards.filter(card => !card.hidden).length;
    const installations = groups.filter(group => !group.hidden).length;
    count.textContent = `${visible} ${visible === 1 ? "model" : "models"} · ${installations} installation ${installations === 1 ? "type" : "types"}`;
    empty.hidden = visible > 0;
    reset.disabled = selected === "all" && installation.value === "all";
  }

  function showAll() {
    technology.forEach(input => { input.checked = input.value === "all"; });
    installation.value = "all";
    apply();
  }

  function revealTarget(hash) {
    let id;
    try { id = decodeURIComponent(hash.slice(1)); } catch (_) { return; }
    const target = document.getElementById(id);
    if (!target || !page.contains(target)) return;
    const card = target.closest("[data-flow-meter]");
    const group = target.closest("[data-flow-group]");
    if ((card && card.hidden) || (group && group.hidden)) showAll();
  }

  form.hidden = false;
  form.addEventListener("submit", event => event.preventDefault());
  form.addEventListener("change", apply);
  form.addEventListener("reset", event => { event.preventDefault(); showAll(); });
  page.querySelector("[data-flow-clear]").addEventListener("click", () => {
    showAll();
    technology[0].focus();
  });
  page.addEventListener("click", event => {
    const link = event.target.closest('a[href^="#"]');
    if (link) revealTarget(link.getAttribute("href"));
  });
  window.addEventListener("hashchange", () => {
    revealTarget(window.location.hash);
    const id = window.location.hash.slice(1);
    const target = document.getElementById(id);
    if (target && page.contains(target)) target.scrollIntoView({ block: "start" });
  });
  // Keep reserved image space and use the adjacent model name if an asset fails.
  page.querySelectorAll(".flow-card-visual img, .flow-nav-image img").forEach(img => {
    const fallback = () => { img.hidden = true; };
    img.addEventListener("error", fallback);
    if (img.complete && !img.naturalWidth) fallback();
  });
  apply();
  revealTarget(window.location.hash);
})();
