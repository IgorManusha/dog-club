const burger = document.querySelector(".burger-menu");
const burgerBtnOpen = document.querySelector(".burger-btn-open");
const burgerBtnClose = document.querySelector(".burger-btn-close");

const toggleBurger = () => burger.classList.toggle("burger-hidden");

burgerBtnOpen.addEventListener("click", toggleBurger);
burgerBtnClose.addEventListener("click", toggleBurger);
