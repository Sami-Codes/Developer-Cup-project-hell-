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

$(".statics .items-slider").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  speed: 800,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 2000,
  centerMode: true,
  centerPadding: "45px",
  responsive: [
    {
      breakpoint: 480,
      settings: {
        centerMode: true,
        centerPadding: "50px",
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        centerMode: true,
        centerPadding: "75px",
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 992,
      settings: {
        centerMode: false,
        centerPadding: "0px",
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1199,
      settings: {
        centerPadding: "0px",
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
});

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
