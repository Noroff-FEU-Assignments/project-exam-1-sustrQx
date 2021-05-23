const nav = document.querySelector(".navdesktop");
const logo = document.querySelector(".logo");
const rightnav = document.querySelector(".Drightnav");
const leftnav = document.querySelector(".Dleftnav");

function handleScroll() {
  const scrolledY = window.scrollY;

  if (scrolledY > 10) {
    nav.classList.add("scrolled");
    logo.classList.add("cs");
    rightnav.classList.add("scrollright");
    leftnav.classList.add("scrollleft");
  } else {
    nav.classList.remove("scrolled");
    logo.classList.remove("cs");
    rightnav.classList.remove("scrollright");
    leftnav.classList.remove("scrollleft");
  }
}

window.addEventListener("scroll", handleScroll);
