(function () {
  var leaf = (location.pathname.replace(/\/+$/, '').split('/').pop() || '');
  var isPrototypeHtml =
    /\.html$/i.test(leaf) &&
    leaf.toLowerCase() !== 'index.html' &&
    leaf.toLowerCase() !== 'viewer.html';

  if (isPrototypeHtml && window.top === window.self && !sessionStorage.getItem('pim-viewer')) {
    var root = location.pathname.replace(/\/[^\/]+\.html$/i, '/');
    if (!/\/$/.test(root)) root += '/';
    location.replace(root);
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