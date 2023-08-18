const menu = document.querySelector(".menu");
const nav = document.querySelector(".content");
const header = document.querySelector(".headerTitle");

window.addEventListener("resize", function () {
  if (window.innerWidth <= 750) {
    nav.classList.add("hidden");
  } else {
    nav.classList.remove("hidden");
    header.classList.remove("hidden");
  }
});

if (window.innerWidth <= 750) {
  nav.classList.add("hidden");
  
}

menu.addEventListener("click", function () {
  nav.classList.toggle("nav-content");
  header.classList.toggle("hidden");
});
