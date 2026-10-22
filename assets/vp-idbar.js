/* Vepolink — Independence Day top bar expiry.
   The client clock can be wrong; use a server-side date check as well when available. */
(function () {
  var hideFrom = new Date('2026-08-17T00:00:00+05:30').getTime();
  if (Date.now() >= hideFrom) {
    var bar = document.querySelector('.vp-idbar');
    if (bar) bar.remove();
  }
})();
