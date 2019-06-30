"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

window.onload = function () {
  var toggleBtn = document.getElementById("main-nav__btn-toggle");
  var nainNavList = document.getElementById("main-nav__list");
  var mainNavLink = document.querySelectorAll(".main-nav__link");
  var imagesLazy = document.querySelectorAll("img[data-src]");
  var map = document.querySelector(".map");
  var header = document.getElementById("header");
  var headerHeight = header.offsetHeight;
  imgLazy(imagesLazy);
  toggleBtn.addEventListener("click", showMenu);

  _toConsumableArray(mainNavLink).forEach(function (el) {
    el.addEventListener("click", function (event) {
      event.preventDefault();
      scrollToEl(this);
      showMenu();
    });
  }); // Scroll to block #id


  function scrollToEl(el) {
    var attr = el.getAttribute("href");
    var scr = document.querySelector(attr).offsetTop - headerHeight;
    scr > 0 ? window.scrollTo(0, scr) : window.scrollTo(0, 0);
  } // Show hide main-naw. Change view main-nav__btn


  function showMenu() {
    toggleBtn.classList.toggle("main-nav__btn--open");
    nainNavList.classList.toggle("main-nav__list--open");
  } // Lazy load img


  function imgLazy(imgs) {
    _toConsumableArray(imgs).forEach(function (itemImg) {
      itemImg.setAttribute("src", itemImg.getAttribute("data-src"));
    });
  } //get header heit on resize window


  window.onresize = function () {
    headerHeight = header.offsetHeight;
  };

  window.onscroll = function () {
    winScrollChange();
  }; // add class heder--scroll to header


  function winScrollChange() {
    if (window.scrollY > headerHeight) {
      header.classList.add("header--scroll");
    } else {
      header.classList.remove("header--scroll");
    }
  } //show footerMap


  map.classList.add("map--show");
};