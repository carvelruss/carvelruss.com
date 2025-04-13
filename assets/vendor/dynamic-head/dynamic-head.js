function includeHeadContent() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "/head/headContent.html", true);

  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      var headContent = document.createElement("script");
      headContent.innerHTML = xhr.responseText;

      document.head.appendChild(headContent);
    }
  };

  xhr.send();
}

includeHeadContent();
