// script.js
document.addEventListener("DOMContentLoaded", function () {
  const emptyLinks = document.querySelectorAll('a[href="#"]');
  const custom404Link = "/pages/error/404-error.html"; // Replace with your actual 404 page link

  emptyLinks.forEach(function (link) {
    link.href = custom404Link;
  });
});
