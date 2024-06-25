const swiper = new Swiper(".swiper-container", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,

  breakpoints: {
    780: {
      slidesPerView: 2,
    },

    1280: {
      slidesPerView: 3,
    },
  },

  pagination: {
    el: ".pagination",
    bulletClass: "pagination__button",
    bulletActiveClass: "pagination__button--active",
  },

  navigation: {
    nextEl: ".swiper-button__next",
    prevEl: ".swiper-button__prev",
  },
});
