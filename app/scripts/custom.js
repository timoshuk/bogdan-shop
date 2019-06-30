window.onload = () => {
  const toggleBtn = document.getElementById("main-nav__btn-toggle");
  const nainNavList = document.getElementById("main-nav__list");
  const mainNavLink = document.querySelectorAll(".main-nav__link");
  const imagesLazy = document.querySelectorAll("img[data-src]");
  const header = document.getElementById("header");
  let headerHeight = header.offsetHeight;
  imgLazy(imagesLazy);
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

  // Lazy load img
  function imgLazy(imgs) {
    [...imgs].forEach(itemImg => {
      itemImg.setAttribute("src", itemImg.getAttribute("data-src"));
    });
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
};
