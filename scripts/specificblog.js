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


///// content

const title = document.querySelector("title");
const firstContainer = document.querySelector(".first");
const textbox = document.querySelector(".textbox")

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);

const url = "https://www.orchidnlog.eu/wp-json/wp/v2/posts/" + id + "/?_embed";
console.log(url);


async function specific() {
  try {
    const response = await fetch(url);
    const details = await response.json();
    console.log(details);

      firstContainer.innerHTML = `<div class="welcometext">
              <h1>${details.title.rendered}</h1>
              </div>
              <div class="img">
              <img src="${details._embedded["wp:featuredmedia"]["0"].source_url}">
              </div>
              </div>`;

              title.innerHTML =`Orchids | ${details.title.rendered}`
    
  } catch (error) {
    console.log(error);
  }
}

specific();



// MODAL POPUP

const previewImg = document.querySelectorAll('.img-wrapper img');
const modalImg = document.querySelector('.modal-img img');
const modal = document.querySelector('.modal');
const caption = document.querySelector(".caption");

previewImg.forEach((s) => {
  s.addEventListener('click', () => {
    modal.classList.add('open');
    let imgSrc = s.src;
    modalImg.src = imgSrc;
  });
});

modal.addEventListener('click', e => {
  if (e.target.classList.contains('modal')) {
    modal.classList.remove('open');
  }
});
