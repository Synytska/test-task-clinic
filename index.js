//.........Open menu when click on burger............//
const burger = document.querySelector(".header-burger");

const openMenu = () => {
  document.querySelector(".header-nav").classList.toggle("display-block");
  document.querySelector(".head-ul").classList.toggle("header-sidebar");
  document.querySelector("main").classList.toggle("display-none");

  document.getElementById("bar1").classList.toggle("sidebar-dekstop_bar1");
  document.getElementById("bar2").classList.toggle("sidebar-dekstop_bar2");
  document.getElementById("bar3").classList.toggle("sidebar-dekstop_bar3");
};
burger.addEventListener("click", openMenu);

//........go to another page......................//
const buttons = document.querySelectorAll(".packages-info_block_button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    window.location.href = "example.html";
  });
});

//.......form button..........//
const button = document.querySelector(".button2-style");
const input = document.getElementById("name-surname");
button.addEventListener("click", () => {
  if (input.value) {
    alert("Form Accepted");
  }
});

//..........Swiper initialization............//
const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 30,
  direction: "horizontal",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiperVertical = new Swiper(".swiper-container-vertical", {
  direction: "vertical",
  slidesPerView: 1,
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  mousewheel: true,
});
