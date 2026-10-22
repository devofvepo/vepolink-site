(() => {
  document.querySelectorAll("[data-sensor-image]").forEach(image => {
    const showFallback = () => {
      image.hidden = true;
      image.parentElement.querySelector("[data-sensor-fallback]").hidden = false;
    };
    image.addEventListener("error", showFallback);
    if (image.complete && !image.naturalWidth) showFallback();
  });
})();
