const HEADER_BUTTON_SELECTOR = '.header__hamburger';
const HEADER_MENU_SELECTOR = '.header__menu__links';

export default function headerMenu() {
  const headerButton = document.querySelector(HEADER_BUTTON_SELECTOR);
  const headerMenu = document.querySelector(HEADER_MENU_SELECTOR);
  const bodyElement = document.querySelector('.body');

  headerButton.addEventListener('click', onHeaderButtonClick)

  function onHeaderButtonClick() {
    headerButton.classList.toggle("header__hamburger--active");
    headerMenu.classList.toggle("header__menu__links--active");
    bodyElement.classList.toggle("body__overflow--none");
  }
}