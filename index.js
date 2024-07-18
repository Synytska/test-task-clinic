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

//..........Swiper initialization............//
// document.addEventListener("DOMContentLoaded", () => {
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
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
// });
