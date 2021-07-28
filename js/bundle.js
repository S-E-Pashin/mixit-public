/******/ (function() { // webpackBootstrap
!function() {
"use strict";
/*!*********************************!*\
  !*** ./source/js/input-mask.js ***!
  \*********************************/


$(document).ready(function () {
  $('#popup-id-tel').mask('+7 (999) 999 99 99');
});

}();
!function() {
"use strict";
/*!***************************************!*\
  !*** ./source/js/popup-open-close.js ***!
  \***************************************/


$(document).ready(function () {
  $('.catalog__link-popup').click(function () {
    if ($('.popup').hasClass('popup')) {
      $('.popup').removeClass('popup--close').addClass('popup--open');
      $('.body').addClass('body--restricted-travel');

      $('.popup__button-close').click(function () {
        $('.popup').removeClass('popup--open').addClass('popup--close');
        $('.body').removeClass('body--restricted-travel');
      });

      closingClickOverlay();

      $(document).keydown(function (e) {
        if (e.key === 'Escape') {
          $('.popup').removeClass('popup--open').addClass('popup--close');
          $('.body').removeClass('body--restricted-travel');
        }
      });
    }
  });

  var closingClickOverlay = function () {
    $(document).mousedown(function (e) {
      if ($('.popup').hasClass('popup--open')) {
        var popup = $('.popup__wrapper');
        if (!popup.is(e.target) && popup.has(e.target).length === 0) {
          $('.popup').removeClass('popup--open').addClass('popup--close');
          $('.body').removeClass('body--restricted-travel');
        }
      }
    });
  };
});

}();
!function() {
/*!******************************!*\
  !*** ./source/js/scripts.js ***!
  \******************************/
//

}();
/******/ })()
;