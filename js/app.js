// variables 
const response = window.matchMedia('screen and (max-width: 768px)');
const menu = document.querySelector('.menu');
const boton = document.querySelector('.boton');
const itemsMenu = document.querySelectorAll('.items_menu');

//eventos de responsive
response.addListener(validation);
response.addListener(validationItems);

//validacion del evento del boton del menu
function validation(event) {
  if (event.matches) {
    boton.addEventListener('click', hideShow);
  } else {
    boton.removeEventListener('click', hideShow);
  }
}

validation(response);

//validacion del evento del los items del menu


function validationItems(event) {
  if (event.matches) {
    for (let i = 0; i < itemsMenu.length; i++) {
      itemsMenu[i].addEventListener('click', hideShow);
    }
  } else {
    for (let i = 0; i < itemsMenu.length; i++) {
      
      itemsMenu[i].removeEventListener('click', hideShow);
    }
  }
}

validationItems(response);

function hideShow() {
   if(menu.classList.contains('menuactive')) {
    menu.classList.remove('menuactive');
   } else {
    menu.classList.add('menuactive');
   }  
}




