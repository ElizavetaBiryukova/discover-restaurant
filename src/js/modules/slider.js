// const sliderImages = document.querySelector('.slider__images');
// const btnControl = document.querySelector('.slider__btn-control');
const sliderPictures = document.querySelectorAll('.slider__picture');
const btnNext = document.querySelector('.slider__btn-control--next');
const btnBack = document.querySelector('.slider__btn-control--back');

let index = 0;

const activeSlide = n => {
    sliderPictures.forEach(element => {
        element.classList.remove('slider__picture--active');
    });
    sliderPictures[n].classList.add('slider__picture--active');
};

const nextSlide = () => {
    if (index == sliderPictures.length - 1) {
        index = 0;
        activeSlide(index);
    } else {
        index++;
    }
};

btnNext.addEventListener('click', nextSlide);