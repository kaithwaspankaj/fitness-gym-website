document.addEventListener("DOMContentLoaded", () => {

  /* HAMBURGER MENU */
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  /* HEADER SCROLL EFFECT */
  const header = document.querySelector(".header");

  if (header) {
    window.addEventListener("scroll", () => {
      header.classList.toggle("scrolled", window.scrollY > 50);
    });
  }

});
