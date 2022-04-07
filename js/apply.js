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
  menu.style.display = "block";
  sleep(1).then(() => {
    menu.style.right = 0;
    menu.style.boxShadow = "0 0 20px 4px rgb(0 0 0 / 50%)";
    menu.style.transform = "scale(1)";
  });
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
const selectOne = document.querySelector(".selectBtn.one");
const selectTwo = document.querySelector(".selectBtn.two");
const select = document.querySelectorAll(".selectBtn");
const option = document.querySelectorAll(".option");
const secondaryOptions = document.querySelectorAll(".option.secondary");
const mainOption = document.querySelectorAll(".option.main");
let index = 1;
function LOL(SSS) {
  let icon = SSS.closest(".select").children[0];
  const next = SSS.nextElementSibling;
  next.classList.toggle("toggle");
  next.style.zIndex = index++;
  icon.classList.toggle("rotate");
}
mainOption.forEach(options => {
  options.addEventListener("click", option => {
    secondaryOptions.forEach(secondaryOption => {
      secondaryOption.style.display = "block";
      if (
        secondaryOption.getAttribute("data-field") !==
        option.target.getAttribute("data-type")
      ) {
        secondaryOption.style.display = "none";
      }
    });
  });
});

selectOne.addEventListener("click", b => {
  LOL(b.target);
});

selectTwo.addEventListener("click", b => {
  if (b.target == selectTwo && selectOne.getAttribute("data-type") === "None") {
    b.target.classList.add("none");
  } else {
    b.target.classList.remove("nono");
    LOL(b.target);
  }
});

option.forEach(a => {
  a.addEventListener("click", b => {
    let nodeQuestion = document.querySelector(".form .question");
    if (
      b.target.getAttribute("data-type") === "fullStack" ||
      b.target.getAttribute("data-type") === "backEnd"
    ) {
      nodeQuestion.classList.add("active");
    } else {
      nodeQuestion.classList.remove("active");
    }
    let icon = b.target.closest(".select").children[0];
    icon.classList.remove("rotate");
    b.target.parentElement.classList.remove("toggle");
    const parent = b.target.closest(".select").children[1];
    parent.setAttribute("data-type", b.target.getAttribute("data-type"));
    parent.innerText = b.target.innerText;
  });
});

// node js button
let nodeButton = document.querySelector(".form .question button");

nodeButton.addEventListener("click", function (event) {
  event.preventDefault();
  nodeButton.classList.contains("clicked")
    ? nodeButton.classList.remove("clicked")
    : nodeButton.classList.add("clicked");
});

//tags tagify

var input = document.querySelector("textarea[name=tags2]");
let tagify = new Tagify(input, {
  dropdown: {
    enabled: 0,
    maxItems: 20,
    classname: "tags-look",
    closeOnSelect: true,
  },
  maxTags: 10,
  enforceWhitelist: true,
  delimiters: null,
  whitelist: [
    "8½",
    "The Terminator",
    "The Wizard of Oz",
    "Catch Me If You Can",
    "Groundhog Day",
    "Twelve Monkeys",
    "Zootopia",
    "La Haine",
    "Barry Lyndon",
    "Jaws",
    "The Best Years of Our Lives",
    "Infernal Affairs",
    "Udaan",
    "The Battle of Algiers",
    "Strangers on a Train",
    "Dog Day Afternoon",
    "Sin City",
    "Kind Hearts and Coronets",
    "Gangs of Wasseypur",
    "The Help",
  ],
});

let submit = document.querySelector(".form .submit-button input");
let message = document.querySelector(".form div.message");
let line = document.querySelector(".form div.message span");
let form = document.querySelector(".form form");

console.log();

function messageAnimation() {
  message.style.animation = "5s message forwards";
  line.style.animation = "5s underline forwards";
  sleep(5000).then(() => {
    line.style.left = "calc(-100% - 45px);";
    message.style.animation = "";
    line.style.animation = "";
  });
}

submit.addEventListener("click", e => {
  e.preventDefault();
  const selectOne = document.querySelector(".selectBtn.one");
  const selectTwo = document.querySelector(".selectBtn.two");
  let aboutArray = document
    .querySelector(".form .tags .here")
    .value.split(" ").length;
  let tagsArray = document.querySelectorAll(".form .tagify__tag").length;

  if (
    selectOne.getAttribute("data-type") === "None" ||
    selectTwo.getAttribute("data-type") === "firstOption" ||
    aboutArray < 10 ||
    tagsArray < 1
  ) {
    messageAnimation();
  } else {
    form.submit();
  }
});
