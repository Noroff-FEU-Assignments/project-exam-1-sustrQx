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



const url = "https://www.orchidnlog.eu/wp-json/wp/v2/posts?_embed";
const container = document.querySelector(".blogposts");
const blogpostsX = document.querySelector(".seemore")


//test

async function fetchPosts() {
  try {
    const response = await fetch(url);
    const details = await response.json();
    console.log(details);

    container.innerHTML = "";
    blogpostsX.innerHTML = "";

    for (let i = 0; i < details.length; i++) {
      if (i === 10) {
        break;
      }
      console.log(details[i]);
      container.innerHTML += `<div class="card">
      <a href="specificblog.html?id=${details[i].id}">
      <img src="${details[i]._embedded["wp:featuredmedia"]["0"].source_url}">
      <div class="textbox">
      <h2>${details[i].title.rendered}</h2>
      <p>${details[i].excerpt.rendered}</p>
      <p class="textboxlink">Read more...</p> 
      </div>
      </a>
    </div>`
    
    blogpostsX.innerHTML += `<div class="card">
      <a href="specificblog.html?id=${details[i].id}">
      <img src="${details[i]._embedded["wp:featuredmedia"]["0"].source_url}">
      <div class="textbox">
      <h2>${details[i].title.rendered}</h2>
      <p>${details[i].excerpt.rendered}</p>
      <p class="textboxlink">Read more...</p> 
      </div></a>
    </div>`
    ;
    
    }
  } catch (error) {
    console.log(error);
  }
}

fetchPosts();
