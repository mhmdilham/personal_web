// Inisialisasi Pageclip SDK secara non-blocking saat browser idle
if ('requestIdleCallback' in window) {
  requestIdleCallback(function() {
    var s = document.createElement('script');
    s.src = '/pageclip.js';
    s.defer = true;
    document.body.appendChild(s);
  }, { timeout: 3000 });
} else {
  window.addEventListener('load', function() {
    setTimeout(function() {
      var s = document.createElement('script');
      s.src = '/pageclip.js';
      s.defer = true;
      document.body.appendChild(s);
    }, 1200);
  });
}
