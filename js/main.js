// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  // Mark the current page's nav link as active
  var links = document.querySelectorAll('.main-nav a');
  var here = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(function (link) {
    var target = link.getAttribute('href');
    if (target === here) {
      link.classList.add('active');
    }
  });
});
