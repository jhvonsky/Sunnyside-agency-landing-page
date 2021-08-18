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
