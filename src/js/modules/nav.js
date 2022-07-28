const mainNav = document.querySelector(".main-nav");
const mainNavToggle = document.querySelector(".main-nav__toggle");

mainNavToggle.addEventListener("click", () => {
    mainNavToggle.classList.toggle('main-nav__toggle--active');
    mainNav.classList.toggle('main-nav--open');

});