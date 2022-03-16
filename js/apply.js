function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// loading Animation
window.onload = function () {
  sleep(3000).then(() => {
    let yo = document.querySelector(".loader-wrapper");
    yo.style.opacity = 0;
    sleep(500).then(() => {
      yo.parentNode.removeChild(yo);
    });
  });
};

let btt = document.querySelector("div.stt");
window.onscroll = function () {
  window.pageYOffset > 200
    ? btt.classList.add("active")
    : btt.classList.remove("active");
};

btt.onclick = function () {
  window.scrollTo(0, 0);
};

// small devices side menu
let background = document.querySelector("body > span.body");
let openButton = document.querySelector("header.nav .buttons .menu");
let closeButton = document.querySelector("aside.menu > button");
let menu = document.querySelector("aside.menu");

openButton.addEventListener("click", function () {
  background.style.display = "block";
  sleep(1).then(() => {
    background.style.opacity = 1;
  });
  menu.style.right = 0;
  menu.style.boxShadow = "0 0 20px 4px rgb(0 0 0 / 50%)";
  menu.style.transform = "scale(1)";
});
closeButton.addEventListener("click", function () {
  background.style.opacity = 0;
  sleep(750).then(() => {
    background.style.display = "none";
  });
  menu.style.right = "-250px";
  menu.style.boxShadow = "0 0 20px 4px rgb(0 0 0 / 0%)";
  menu.style.transform = "scale(0.5)";
});
background.addEventListener("click", function () {
  closeButton.click();
});

//select menu
const select = document.querySelectorAll(".selectBtn");
const option = document.querySelectorAll(".option");
const mainOption = document.querySelectorAll(".option.main");
let index = 1;

select.forEach(a => {
  a.addEventListener("click", b => {
    let icon = b.target.closest(".select").children[0];
    const next = b.target.nextElementSibling;
    next.classList.toggle("toggle");
    next.style.zIndex = index++;
    icon.classList.toggle("rotate");
  });
});
option.forEach(a => {
  a.addEventListener("click", b => {
    let icon = b.target.closest(".select").children[0];
    icon.classList.remove("rotate");
    b.target.parentElement.classList.remove("toggle");
    const parent = b.target.closest(".select").children[1];
    parent.setAttribute("data-type", b.target.getAttribute("data-type"));
    parent.innerText = b.target.innerText;
  });
});

//tags tagify

// let input = document.querySelector("input.tagify-input");
// let tagify = new Tagify(input);

// tagify.DOM.input.classList.add("tagify-outside");
// tagify.DOM.scope.parentNode.insertBefore(tagify.DOM.input, tagify.DOM.scope);

// node js button

let nodeButton = document.querySelector(".form .question button");

nodeButton.addEventListener("click", function (event) {
  event.preventDefault();
  nodeButton.classList.contains("clicked")
    ? nodeButton.classList.remove("clicked")
    : nodeButton.classList.add("clicked");
});
