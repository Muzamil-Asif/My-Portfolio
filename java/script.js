document.addEventListener("DOMContentLoaded", function () {
  let menuIcon = document.querySelector('#menu-icon');
  let nave = document.querySelector('.nave');
  let sections = document.querySelectorAll('section');
  let navlinks = document.querySelectorAll('nav a');
  let header = document.querySelector('header');

  menuIcon.addEventListener("click", function () {
    menuIcon.classList.toggle('bx-x');
    nave.classList.toggle('active');
  });

  function handleScroll() {
    let top = window.scrollY;

    sections.forEach(sec => {
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if (top >= offset && top < offset + height) {
        navlinks.forEach(link => {
          link.classList.remove('active');
        });

        document.querySelector('a[href="#' + id + '"]').classList.add('active');
      }
    });

    header.classList.toggle('sticky', top > 100);
    menuIcon.classList.remove('bx-x');
    nave.classList.remove('active');
  }

  window.addEventListener("scroll", () => {
    requestAnimationFrame(handleScroll);
  });
});
