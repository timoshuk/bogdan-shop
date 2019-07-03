window.onload = () => {
  const toggleBtn = document.getElementById("main-nav__btn-toggle");
  const nainNavList = document.getElementById("main-nav__list");
  const mainNavLink = document.querySelectorAll(".main-nav__link");
  const images = document.querySelectorAll("img[data-src]");
  const map = document.querySelector(".map");
  const header = document.getElementById("header");
  let headerHeight = header.offsetHeight;

  toggleBtn.addEventListener("click", showMenu);

  [...mainNavLink].forEach(el => {
    el.addEventListener("click", function(event) {
      event.preventDefault();
      scrollToEl(this);
      showMenu();
    });
  });

  // Scroll to block #id
  function scrollToEl(el) {
    const attr = el.getAttribute("href");
    let scr = document.querySelector(attr).offsetTop - headerHeight;
    scr > 0 ? window.scrollTo(0, scr) : window.scrollTo(0, 0);
  }

  // Show hide main-naw. Change view main-nav__btn
  function showMenu() {
    toggleBtn.classList.toggle("main-nav__btn--open");
    nainNavList.classList.toggle("main-nav__list--open");
  }

  //get header heit on resize window
  window.onresize = function() {
    headerHeight = header.offsetHeight;
  };
  window.onscroll = function() {
    winScrollChange();
  };

  // add class heder--scroll to header
  function winScrollChange() {
    if (window.scrollY > headerHeight) {
      header.classList.add("header--scroll");
    } else {
      header.classList.remove("header--scroll");
    }
  }

  // Lazy load IMG
  const options = {
    // If the image gets within 50px in the Y axis, start the download.
    root: null, // Page as root
    rootMargin: "50px 0px",
    threshold: 0.25
  };

  const fetchImage = url => {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = url;
      image.onload = resolve;
      image.onerror = reject;
    });
  };

  const loadImage = image => {
    const src = image.dataset.src;
    fetchImage(src).then(() => {
      image.src = src;
    });
  };

  const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        loadImage(entry.target);
      }
    });
  };

  function imgLazy(imgs) {
    [...imgs].forEach(itemImg => {
      itemImg.setAttribute("src", itemImg.getAttribute("data-src"));
    });
  }

  if (!("IntersectionObserver" in window)) {
    imgLazy(images);
  } else {
    // The observer for the images on the page
    const observer = new IntersectionObserver(handleIntersection, options);

    images.forEach(img => {
      observer.observe(img);
    });
  }
  // End lazy load IMG
  //show footerMap
  map.classList.add("map--show");
};
