"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

window.onload = function () {
  var toggleBtn = document.getElementById("main-nav__btn-toggle");
  var nainNavList = document.getElementById("main-nav__list");
  var mainNavLink = document.querySelectorAll(".main-nav__link");
  toggleBtn.addEventListener("click", showMenu);

  _toConsumableArray(mainNavLink).forEach(function (el) {
    el.addEventListener("click", showMenu);
  });

  function showMenu() {
    toggleBtn.classList.toggle("main-nav__btn--open");
    nainNavList.classList.toggle("main-nav__list--open");
  }
};