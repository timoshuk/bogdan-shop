"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

window.onload = function () {
  var toggleBtn = document.getElementById("main-nav__btn-toggle");
  var nainNavList = document.getElementById("main-nav__list");
  var mainNavLink = document.querySelectorAll(".main-nav__link");
  var images = document.querySelectorAll("img[data-src]");
  var map = document.querySelector(".map");
  var header = document.getElementById("header");
  var headerHeight = header.offsetHeight;
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
  } // Lazy load IMG


  var options = {
    // If the image gets within 50px in the Y axis, start the download.
    root: null,
    // Page as root
    rootMargin: "0px",
    threshold: 0.25
  };

  var fetchImage = function fetchImage(url) {
    return new Promise(function (resolve, reject) {
      var image = new Image();
      image.src = url;
      image.onload = resolve;
      image.onerror = reject;
    });
  };

  var loadImage = function loadImage(image) {
    var src = image.dataset.src;
    fetchImage(src).then(function () {
      image.src = src;
    });
  };

  var handleIntersection = function handleIntersection(entries, observer) {
    entries.forEach(function (entry) {
      if (entry.intersectionRatio > 0) {
        loadImage(entry.target);
      }
    });
  };

  function imgLazy(imgs) {
    _toConsumableArray(imgs).forEach(function (itemImg) {
      itemImg.setAttribute("src", itemImg.getAttribute("data-src"));
    });
  }

  if (!("IntersectionObserver" in window)) {
    imgLazy(images);
  } else {
    // The observer for the images on the page
    var observer = new IntersectionObserver(handleIntersection, options);
    images.forEach(function (img) {
      observer.observe(img);
    });
  } // End lazy load IMG
  //show footerMap


  map.classList.add("map--show");
};