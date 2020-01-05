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

// if (window.innerWidth <= 770) {
//   var navbar = document.querySelector('.navbar');
//   navbar.classList.add('swiper-container');
//   var navbarWrapper = document.querySelector('.navbar__nav');
//   navbarWrapper.classList.add('swiper-wrapper');
//   var itemSlides = document.querySelectorAll('.navbar__item');
//   for (var i = 0; i < itemSlides.length; i++){
//     itemSlides[i].classList.add('swiper-slide');
//   }
// }else{
//   navbar.classList.remove('swiper-container');
//   navbarWrapper.classList.remove('swiper-wrapper');
//   for (var i = 0; i < itemSlides.length; i++){
//     itemSlides[i].classList.remove('swiper-slide');
//   }
// }

// var swiper = new Swiper('.swiper-container', {
//   slidesPerView: '2',
//   spaceBetween: 30,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   breakpoints: {
//     // when window width is >= 320px
//     320: {
//       slidesPerView: 2,
//       spaceBetween: 20
//     },
//     // when window width is >= 480px
//     480: {
//       slidesPerView: 2,
//       spaceBetween: 30
//     },
//     // when window width is >= 640px
//     640: {
//       slidesPerView: 2,
//       spaceBetween: 40
//     }
//   }
// });

// var swiper = new Swiper('.mobile-block-repair-swiper', {
//   slidesPerView: 1,
//   spaceBetween: 10,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
// });


var swiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
});

if (window.innerWidth <= 760) {
  var blockRepairContainer = document.querySelector('.slide-brand');
  blockRepairContainer.classList.remove('swiper-container');
  var blockRepairWrapper = document.querySelector('.block-repair-brand__cards');
  blockRepairWrapper.classList.add('swiper-wrapper');
  var blockCardsSlides = document.querySelectorAll('.card__list');
  for (var i = 0; i < blockCardsSlides.length; i++) {
    blockCardsSlides[i].classList.add('swiper-slide');
  }
} else {
  blockRepairContainer.classList.remove('swiper-container');
  blockRepairWrapper.classList.remove('swiper-wrapper');
  for (var i = 0; i < blockCardsSlides.length; i++) {
    blockCardsSlides[i].classList.remove('swiper-slide');
  }
}
// var swiper = new Swiper('.block-swiper-container', {
//   slidesPerView: '1',
//   centeredSlides: true,
//   spaceBetween: 30,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   breakpoints: {
//     // when window width is >= 320px
//     320: {
//       slidesPerView: 2,
//       spaceBetween: 20
//     },
//     // when window width is >= 480px
//     480: {
//       slidesPerView: 2,
//       spaceBetween: 30
//     },
//     // when window width is >= 640px
//     640: {
//       slidesPerView: 2,
//       spaceBetween: 40
//     }
//   }
// });

// if (window.innerWidth < 760) {
//   var blockRepairTechContainer = document.querySelector('.block-tech');
//   blockRepairTechContainer.classList.add('block-tech-swiper-container');
//   var blockRepairTechWrapper = document.querySelector('.block-repair-tech__cards');
//   blockRepairTechWrapper.classList.add('swiper-wrapper');
//   var blockCardsTechSlides = document.querySelectorAll('.tech__card__list');
//   for (var i = 0; i < blockCardsTechSlides.length; i++) {
//     blockCardsTechSlides[i].classList.add('swiper-slide');
//   }
// } else {
//   blockRepairTechContainer.classList.remove('block-tech-swiper-container');
//   blockRepairTechWrapper.classList.remove('swiper-wrapper');
//   for (var i = 0; i < blockCardsTechSlides.length; i++) {
//     blockCardsTechSlides[i].classList.remove('swiper-slide');
//   }
// }
// var swiper = new Swiper('.block-tech-swiper-container', {
//   slidesPerView: 'auto',
//   spaceBetween: 30,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
// });
