window.onload = () => {
  const toggleBtn = document.getElementById("main-nav__btn-toggle");
  const nainNavList = document.getElementById("main-nav__list");
  const mainNavLink = document.querySelectorAll(".main-nav__link");

  toggleBtn.addEventListener("click", showMenu);

  [...mainNavLink].forEach(el => {
    el.addEventListener("click", showMenu);
  });

  function showMenu() {
    toggleBtn.classList.toggle("main-nav__btn--open");
    nainNavList.classList.toggle("main-nav__list--open");
  }
};
