/* eslint-disable no-new */
import Swiper from '../vendor/swiper'
const buttonNext = document.querySelector('.coaches__button--next');
const buttonPrev = document.querySelector('.coaches__button--prev');

const sliderCoaches = document.querySelector('.coaches__swiper');

const initCoachesSlider = () => {
  if (sliderCoaches) {
    new Swiper(sliderCoaches, {

      navigation: {
        nextEl: buttonNext,
        prevEl: buttonPrev,
      },

      loop: true,
      breakpoints: {
        1366: {
          slidesPerView: 4,
          spaceBetween: 40,
        },

        1200: {
          slidesPerView: 3,
          spaceBetween: 40,
        },

        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },

        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
      },
    });
  }
};

const sliderReviews = document.querySelector('.reviews__swiper');
const reviewsButtonNext = document.querySelector('.reviews__button--next');
const reviewsButtonPrev = document.querySelector('.reviews__button--prev');

const initSliderReviews = () => {
  if (sliderReviews) {
    new Swiper(sliderReviews, {

      navigation: {
        nextEl: reviewsButtonNext,
        prevEl: reviewsButtonPrev,
      },

      slidesPerView: 1,
      spaceBetween: 30,
    });
  }
};

export {initCoachesSlider, initSliderReviews};
