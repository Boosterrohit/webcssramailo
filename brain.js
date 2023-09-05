document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const socialLink = document.querySelector(".social-media");
  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    socialLink.classList.toggle("active");
  });
});
const navbar = document.querySelector(".navbar");

function updateNavbarStyle() {
  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}

window.addEventListener("scroll", updateNavbarStyle);

updateNavbarStyle();
