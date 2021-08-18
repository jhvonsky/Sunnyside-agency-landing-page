const li = document.querySelectorAll("nav li");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu-sidebar");
const rowFirst = document.querySelector("main .row:first-child");
const rowSec = document.querySelector("main .row:nth-child(2)");

menu.addEventListener("click", run);

// if the width is above phone set to block
function liWidth(queries) {
  if (queries.matches) {
    li.forEach(l => {
      l.classList.remove("none");
    });
  } else {
    li.forEach(l => {
      l.classList.add("none");
    });
    menu.classList.add("Xaxis");
  }
}

// run funtion
const x = window.matchMedia("(min-width: 600px)");
liWidth(x);
x.addListener(liWidth);

function run() {
  li.forEach(l => {
    l.classList.toggle("none");
  });
  menu.classList.toggle("Xaxis");
  nav.classList.toggle("top");
}

// function setDesign(viewport) {
//   if (viewport.matches) {
//     rowFirst.innerHTML = `
//     <div class="col egg col-md-6 col-12"></div>
//     <div class="col col-md-6 col-12">
//       <div class="container">
//         <h1>Transform your brand</h1>
//           <p>
//             We are a full-service creative agency specializing in helping brands grow fast.
//             Engage your clients through compelling visuals that do most of the marketing for you.
//           </p>
//           <a href="#">Learn More</a>
//       </div>
//     </div>
//     `;
//     rowSec.innerHTML = `
//     <div class="col col-md-6 col-12">
//       <div class="container">
//           <h1>Stand out to the right audience</h1>
//             <p>
//             Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.
//             </p>
//           <a href="#">Learn More</a>
//       </div>
//     </div>
//     <div class="col col-md-6 col-12"></div>
//     `;
//   } else {
//     rowFirst.innerHTML = `
//     <div class="col col-md-6 col-12">
//       <div class="container">
//         <h1>Transform your <br> brand</h1>
//           <p>
//             We are a full-service creative agency specializing in helping brands grow fast.
//             Engage your clients through compelling visuals that do most of the marketing for you.
//           </p>
//           <a href="#">Learn More</a>
//       </div>
//     </div>
//     <div class="col egg col-md-6 col-12"></div>
//     `;
//     rowSec.innerHTML = `
//     <div class="col col-md-6 col-12"></div>
//     <div class="col col-md-6 col-12">
//       <div class="container">
//           <h1>Stand out to the right audience</h1>
//             <p>
//             Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.
//             </p>
//           <a href="#">Learn More</a>
//       </div>
//     </div>
//     `;
//   }
// }

// const y = window.matchMedia("(max-width: 576px)");
// setDesign(y);
// y.addListener(setDesign);
