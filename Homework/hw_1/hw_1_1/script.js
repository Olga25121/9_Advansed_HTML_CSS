const menuActive = document.querySelector('.menu_list');
const burger = document.querySelector('.burger');
const menuClose = document.querySelector('.menu_close');

function toggleMenu(){
    menuActive.classList.toggle('hidden');
}

burger.addEventListener('click',toggleMenu);
menuClose.addEventListener('click',toggleMenu);