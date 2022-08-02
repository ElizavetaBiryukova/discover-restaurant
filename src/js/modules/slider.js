const searchImages = document.querySelector('.search-restaurant__images');
const btnControl = document.querySelector('.search-restaurant__btn-control');
const searchPicture = document.querySelector('.search-restaurant__picture');
const searchPictureActive = document.querySelector('.search-restaurant__picture--active');
const btnNext = document.querySelector('.search-restaurant__btn-control--next');
const btnBack = document.querySelector('.search-restaurant__btn-control--back');

let index = 0;

// btnControl.addEventListener('click', )

const activeSlide = n => {
    console.log(n);
    for (slide of searchImages) {
        slide.classList.remove('search-restaurant__picture--active');
    }
    searchImages[n].classList.add('search-restaurant__picture--active');
};

const nextSlide = () => {
    if (index == searchImages.length - 1) {
        index = 0;
        activeSlide(index);
    } else {
        index++;
    }
};

btnNext.addEventListener('click', nextSlide);