window.onload = () => {
  const toggleBtn = document.getElementById("main-nav__btn-toggle");

  toggleBtn.addEventListener("click", showMenu);

  function showMenu() {
    toggleBtn.classList.toggle("main-nav__btn--open");
  }
};
