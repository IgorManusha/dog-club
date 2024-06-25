const sorting = document.querySelector(".sorting-section");
const sortingBtnOpen = document.querySelector(".sorting-btn-open");
const sortingBtnClose = document.querySelector(".sorting-btn-close");

const toggleSorting = () => sorting.classList.toggle("sorting-section__hidden");

sortingBtnOpen.addEventListener("click", toggleSorting);
sortingBtnClose.addEventListener("click", toggleSorting);
