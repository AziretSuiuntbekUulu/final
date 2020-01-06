import '../scss/style.scss';

var showButton = document.querySelector('.btn-cards');
var cards = document.querySelectorAll('.card__list');

showButton.addEventListener('click', function () {
  if (showButton.classList.contains('btn__close')) {
    for (var i = 1; i < cards.length; i++) {
      cards[i].classList.remove('hidden');
    }
    showButton.classList.add('btn__show');
    showButton.classList.remove('btn__close');
    showButton.innerHTML = 'Скрыть';
  } else {
    for (var i = 1; i < cards.length; i++) {
      cards[i].classList.add('hidden');
    }
    showButton.classList.add('btn__close');
    showButton.classList.remove('btn__show');
    showButton.innerHTML = 'Показать все [9]';
  }
});

var showButtonText = document.querySelector('.section-about__btn');
var hiddenText = document.querySelector('.section-about__text__more');

showButtonText.addEventListener('click', function () {
  if (showButtonText.classList.contains('btn__close_text')) {
    hiddenText.classList.remove('hidden');
    showButtonText.classList.add('btn__show_text');
    showButtonText.classList.remove('btn__close_text');
    showButtonText.innerHTML = 'Скрыть';
  } else {
    hiddenText.classList.add('hidden');
    showButtonText.classList.add('btn__close_text');
    showButtonText.classList.remove('btn__show_text');
    showButtonText.innerHTML = 'Читать далее';
  }

});

var showButtonCards = document.querySelector('.tech-btn-cards');
var techCards = document.querySelectorAll('.tech__card__list');

showButtonCards.addEventListener('click', function () {
  if (showButtonCards.classList.contains('tech-btn__close')) {
    for (var i = 0; i < techCards.length; i++) {
      techCards[i].classList.remove('tech__hidden');
    }
    showButtonCards.classList.add('tech-btn__show');
    showButtonCards.classList.remove('tech-btn__close');
    showButtonCards.innerHTML = 'Скрыть';
  } else {
    for (var i = 0; i < techCards.length; i++) {
      techCards[i].classList.add('tech__hidden');
    }
    showButtonCards.classList.add('tech-btn__close');
    showButtonCards.classList.remove('tech-btn__show');
    showButtonCards.innerHTML = 'Показать все [9]';
  }
});

// Modal
var containerBackground = document.querySelector('.container-wrapper');
var popup = document.querySelector('.modal');
var openPopupButton = document.querySelector('.phone-icon');
var closePopupButton = popup.querySelector('.button-close');
var container = document.querySelector('.container');

openPopupButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('modal--show');
  containerBackground.classList.add('container-bg');
  openButtonFeedback.classList.remove('modal--show');
});

closePopupButton.addEventListener('click', function () {
  popup.classList.remove('modal--show');
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    popup.classList.remove('modal--show');

    openButtonFeedback.classList.remove('modal--show');
  }
});

var feedback = document.querySelector('.modal-feedback');
var openButtonFeedback = document.querySelector('.chat-icon');
var closeFeedbackButton = feedback.querySelector('.button-close');

openButtonFeedback.addEventListener('click', function (evt) {
  evt.preventDefault();
  feedback.classList.add('modal--show');
  openPopupButton.classList.remove('modal--show');
});

closeFeedbackButton.addEventListener('click', function () {
  feedback.classList.remove('modal--show');
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    feedback.classList.remove('modal--show');
  }
});


// MODAL FOR TOP HORIZONTAL MENU
var popup = document.querySelector('.modal');
var openPopupButton = document.querySelector('.upper__phone-icon');
var closePopupButton = popup.querySelector('.button-close');

openPopupButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('modal--show');
});

closePopupButton.addEventListener('click', function () {
  popup.classList.remove('modal--show');
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    popup.classList.remove('modal--show');
  }
});

var feedback = document.querySelector('.modal-feedback');
var openButtonFeedback = document.querySelector('.upper__chat-icon');
var closeFeedbackButton = feedback.querySelector('.button-close');

openButtonFeedback.addEventListener('click', function (evt) {
  evt.preventDefault();
  feedback.classList.add('modal--show');
});

closeFeedbackButton.addEventListener('click', function () {
  feedback.classList.remove('modal--show');
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    feedback.classList.remove('modal--show');
  }
});


// OPEN MENU 768px
var openMenuButton = document.querySelector('.upper-menu__icon');
var menu = document.querySelector('.mobile-menu');
var closeMenuButton = document.querySelector('.close-icon');

openMenuButton.addEventListener('click', function (e) {
  e.preventDefault();
  menu.classList.add('menu_active');
});

closeMenuButton.addEventListener('click', function () {
  menu.classList.remove('menu_active');
})

let swiperBrands;
let swiperRepair;
let swiperTable;

let swiperSettings = {
  slidesPerView: 'auto',
  spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {

    360: {
      spaceBetween: 24,
    },
  }
};

if (!window.matchMedia('(min-width: 426px)').matches) {
  swiperBrands = new Swiper('.js-brands-swiper', swiperSettings);
  swiperRepair = new Swiper('.js-repair-swiper', swiperSettings);
  swiperTable = new Swiper('.js-table-swiper', swiperSettings);
}

window.addEventListener('resize', function (evt) {
  if (window.matchMedia('(min-width: 426px)').matches) {
    if (swiperBrands) swiperBrands.destroy();
    if (swiperRepair) swiperRepair.destroy();
    if (swiperTable) swiperTable.destroy();
    console.log('swiper destroy');
  } else {
    if (swiperBrands.destroyed) swiperBrands = new Swiper('.js-brands-swiper', swiperSettings);
    if (swiperRepair.destroyed) swiperRepair = new Swiper('.js-repair-swiper', swiperSettings);
    if (swiperTable.destroyed) swiperTable = new Swiper('.js-table-swiper', swiperSettings);
    console.log('swiper init');
  }
});