// ЗАКРЫВАЕМ МЕНЮ ПРИ ЗАГРУЗКЕ СТРАНИЦЫ, ЕСЛИ JS РАБОТАЕТ
document.addEventListener("DOMContentLoaded", ready);

function ready() {
    Menu.classList.toggle('main-navigation__hide');
}

// МАНИПУЛЯЦИИ С МЕНЮ
let Menu = document.querySelector('.main-navigation__wrapper');
let ButtonMenu = document.querySelector('.main-navigation__toggle');

ButtonMenu.onclick = function() {
    Menu.classList.toggle('main-navigation__hide');
    ButtonMenu.classList.toggle('main-navigation__toggle-open');
    Menu.classList.toggle('main-navigation__open');
    ButtonMenu.classList.toggle('main-navigation__toggle-close');
};

// МАНИПУЛЯЦИИ С МОДАЛЬНЫМ ОКНОМ
let Modal = document.querySelector('.page-modal');
let ProductWeek = document.querySelector('.product-week__link');
let BasketCatalog = document.querySelector('.site-list__button-catalog');

if (ProductWeek) {
    ProductWeek.onclick = function() {
        Modal.classList.toggle('page-modal__hide');
        Modal.classList.toggle('page-modal__open');
    };
}

if (BasketCatalog) {
    BasketCatalog.onclick = function() {
        Modal.classList.toggle('page-modal__hide');
        Modal.classList.toggle('page-modal__open');
    };
}