(function () {
  if (document.querySelector('link[data-site-favicon]')) return;
  var link = document.createElement("link");
  link.rel = "icon";
  link.type = "image/png";
  link.href = new URL("favicon.png", document.currentScript.src).href;
  link.setAttribute("data-site-favicon", "");
  document.head.appendChild(link);
})();
