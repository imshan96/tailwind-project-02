const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const nav = document.querySelector("nav");

menu.addEventListener("click", function () {
  nav.classList.add("-right-0");
});

close.addEventListener("click", function () {
  nav.classList.remove("-right-0");
});
