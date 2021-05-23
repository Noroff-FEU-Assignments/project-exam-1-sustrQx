const form = document.querySelector("#form");

const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");

const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");


const text = document.querySelector("#textarea");
const textError = document.querySelector("#textError");


function validate(event) {
  event.preventDefault();

  if (checklength(name.value, 0) === true) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }

  if (checklength(subject.value, 9) === true) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  if (checkEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }
 
  if (checklength(text.value, 24) === true) {
    textError.style.display = "none";
  } else {
    textError.style.display = "block";
  }
}

form.addEventListener("submit", validate);

function checklength(value, length) {
  if (value.trim().length > length) {
    return true;
  } else {
    return false;
  }
}

function checkEmail(email) {
  const regEx = /\S+@\S+\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}





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



