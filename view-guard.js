(function () {
  var path = location.pathname.split('/').pop() || 'index.html';
  var isShell = path === 'index.html' || path === '' || path === 'viewer.html';
  if (!isShell && window.top === window.self && !sessionStorage.getItem('pim-viewer')) {
    location.replace('index.html');
    return;
  }
  document.addEventListener('contextmenu', function (e) { e.preventDefault(); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'F12') { e.preventDefault(); return; }
    if (e.ctrlKey && /[sup]/i.test(e.key)) e.preventDefault();
    if (e.ctrlKey && e.shiftKey && /[ijc]/i.test(e.key)) e.preventDefault();
  });
  document.addEventListener('dragstart', function (e) { e.preventDefault(); });
})();
