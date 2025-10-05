// CHAT GBT HAR HJULPET; KOMPETENCER, UDDANNELSE & ERFARING
// Find alle links og tab-indhold
const links = document.querySelectorAll("#menu1 a");
const tabs = document.querySelectorAll(".tab-content");

// Tilføj klik-hændelse til hvert link
links.forEach((link, index) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // Forhindrer scroll

    // Fjern underscore efter klik
    links.forEach((link) => link.classList.remove("active"));

    // Tilføj underscore til det link, der blev klikket
    link.classList.add("active");

    // Fjern tekst fra alle tabs
    tabs.forEach((tab) => tab.classList.remove("active"));

    // Tilføj "active" til det korrekte tab-indhold
    tabs[index].classList.add("active");
  });
});

// BURGER MENU
// Henter bruger
const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");

// Klik
burger.addEventListener("click", burgerClick);
function burgerClick() {
  // Tilføj/fjern avtive burger = streger
  burger.classList.toggle("active");

  // Tilføj/fjern active nav = menu
  nav.classList.toggle("active");
}

// klik på menuen
menu.addEventListener("click", menuClick);
function menuClick() {
  // Lukker burger-ikon
  burger.classList.remove("active");

  // Skjuler menu
  nav.classList.remove("active");
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".slideshow, .slideshow-reverse").forEach(initSlideshow);
});

function initSlideshow(root) {
  const slides = root.querySelectorAll(".mySlides");
  const dots = root.querySelectorAll(".dot");
  const prevBtn = root.querySelector(".prev");
  const nextBtn = root.querySelector(".next");

  let index = 1;
  show(index);

  prevBtn?.addEventListener("click", () => show((index -= 1)));
  nextBtn?.addEventListener("click", () => show((index += 1)));
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const n = parseInt(dot.dataset.slide, 10);
      if (!isNaN(n)) show((index = n));
    });
  });

  function show(n) {
    if (n > slides.length) index = 1;
    if (n < 1) index = slides.length;

    slides.forEach((s) => (s.style.display = "none"));
    dots.forEach((d) => d.classList.remove("active"));

    slides[index - 1].style.display = "block";
    dots[index - 1]?.classList.add("active");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".slideshow2").forEach(initSlideshow2);
});

function initSlideshow2(root) {
  const slides = root.querySelectorAll(".mySlides");
  const dots = root.querySelectorAll(".dot");
  const prevBtn = root.querySelector(".prev");
  const nextBtn = root.querySelector(".next");

  let index = 1;
  show(index);

  prevBtn?.addEventListener("click", () => show((index -= 1)));
  nextBtn?.addEventListener("click", () => show((index += 1)));
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => show((index = i + 1)));
  });

  function show(n) {
    if (n > slides.length) index = 1;
    if (n < 1) index = slides.length;

    slides.forEach((s) => (s.style.display = "none"));
    dots.forEach((d) => d.classList.remove("active"));

    slides[index - 1].style.display = "block";
    dots[index - 1]?.classList.add("active");
  }
}

// BACK TO TOP KNAP MED W3 SCHOOLS
// Knappen hentes
let mybutton = document.getElementById("myBtn");

// Hvorår knap hentes
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Skroller til top v klik
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

document.querySelectorAll("a").forEach((link) => {
  // Hent URL’en fra linket
  const href = link.getAttribute("href");

  // Hvis linket starter med "http" og IKKE indeholder dit eget domæne eller en "#", så er det eksternt
  if (href && href.startsWith("http") && !href.includes(window.location.hostname)) {
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  }
  // Ellers gør den ingenting = forbliver på siden
});
