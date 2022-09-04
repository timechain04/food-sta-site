(() => {
  const refs = {
    openMenuBtn: document.querySelector('.header__button-open'),
    closeMenuBtn: document.querySelector('.header__button-close'),
    menu: document.querySelector('.header__mob-menu'),
    body: document.querySelector('body'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();
