// document.querySelector('.header nav').style.transform = "translateX(0%)";

const response = window.matchMedia('screen and (max-width: 768px)');
const menu = document.querySelector('.menu');
const boton = document.querySelector('.boton');


response.addListener(validation);

function validation(event) {
  if (event.matches) {
    boton.addEventListener('click', hideShow);
  } else {
    boton.removeEventListener('click', hideShow);
  }
}

function hideShow() {
   if(menu.classList.contains('menuactive')) {
    menu.classList.remove('menuactive');
   } else {
    menu.classList.add('menuactive');
   }
   
}