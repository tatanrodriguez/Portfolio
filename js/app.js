// document.querySelector('.header nav').style.transform = "translateX(0%)";

const menu = document.querySelector('.menu');

const boton = document.querySelector('.boton');


boton.addEventListener('click', hideShow);


function hideShow() {
   console.log('hola');
   if(menu.classList.contains('menuactive')) {
    menu.classList.remove('menuactive');
   } else {
    menu.classList.add('menuactive');
   }
   
}