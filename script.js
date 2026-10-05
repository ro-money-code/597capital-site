// 597 Capital — minimal progressive enhancement. Site works fully without JS.
(function () {
  var y = document.getElementById('year');
  if (y) {
    var now = new Date().getFullYear();
    if (now > 2026) y.textContent = '2026–' + now;
  }

  var header = document.querySelector('.site-header');
  if (header) {
    var onScroll = function () { header.classList.toggle('scrolled', window.scrollY > 8); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduce && 'IntersectionObserver' in window) {
    var els = document.querySelectorAll('.reveal');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    document.documentElement.classList.add('js-reveal');
    els.forEach(function (el) { io.observe(el); });
  }
})();
