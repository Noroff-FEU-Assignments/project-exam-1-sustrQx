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




const slider = document.querySelector(".slider");

const leftArrow = document.querySelector(".leftarrow");
const rightArrow = document.querySelector(".rightarrow");

var sectionIndex = 0;

rightArrow.addEventListener("click", function (event) {
  sectionIndex = sectionIndex < 3 ? sectionIndex + 1 : 3;
  slider.style.transform = "translate(" + sectionIndex * -25 + "%)";
});

leftArrow.addEventListener("click", function (event) {
  sectionIndex = sectionIndex > 0 ? sectionIndex - 1 : 0;
  slider.style.transform = "translate(" + sectionIndex * -25 + "%)";
});







const url = "https://www.orchidnlog.eu/wp-json/wp/v2/posts?_embed";
const container = document.querySelector(".slider");


//test

async function fetchPosts() {
  try {
    const response = await fetch(url);
    const details = await response.json();
    console.log(details);

    container.innerHTML = "";

    for (let i = 0; i < details.length; i++) {
      if (i === 12) {
        break;
      }
      console.log(details[i]);
      container.innerHTML += `
      <section>
      <a href="specificblog.html?id=${details[i].id}">
      <div class="slidercards">
      <img src="${details[i]._embedded["wp:featuredmedia"]["0"].source_url}">
      <p>${details[i].title.rendered}</p>
      </div>
      </a>
       </section>`
    ;
    
    }
  } catch (error) {
    console.log(error);
  }
}

fetchPosts();
