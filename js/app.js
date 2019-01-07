
//--------inicio del codigo del menu-------------

// variables 
const response = window.matchMedia('screen and (max-width: 768px)');
const menu = document.querySelector('.menu');
const boton = document.querySelector('.boton');
const itemsMenu = document.querySelectorAll('.items_menu');
const btnMenu = document.querySelector('#btn');

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
      itemsMenu[i].addEventListener('click', checkBtn);

    }
  } else {
    for (let i = 0; i < itemsMenu.length; i++) {
      itemsMenu[i].removeEventListener('click', hideShow);
    }
  }
}

validationItems(response);

//funcion de interactividad del menu
function hideShow() {
   if(menu.classList.contains('menuactive')) {
    menu.classList.remove('menuactive');
   } else {
    menu.classList.add('menuactive');
   }  
}

//funcion de interactividad de los items y del boton del menu
function checkBtn() {
  if (btnMenu.checked == true) {
    btnMenu.checked = false;
  } else {
    btnMenu.checked = true;
  }
}



//---------------cierre del menu------------

//--------inicio del codigo del boton back to top--------

// boton top 0
const btnTop = document.querySelector('#btnt');

btnTop.addEventListener('click', backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// animacion boton opacity
const scrollVentana = window.onscroll = () => topScroll();

function topScroll() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.querySelector('#btnt').classList.add('topnone');
  } else {
    document.querySelector('#btnt').classList.remove('topnone');
  }
}
//-------cierre del codigo del boton back to top--------

//------------ventana modal------------
const portfolio = document.getElementById('portafolio');
const skills = document.getElementById('skills');
const contacto = document.getElementById('contacto'); 

const linkContacto = document.querySelector('#linkcontacto');
const linkskills = document.querySelector('#linkskills');
const linkporafolio = document.querySelector('#linkporafolio');

const medskills = skills.offsetTop;
const medcont = contacto.offsetTop;
const medport = portafolio.offsetTop;

linkContacto.addEventListener('click', desplazarc);
linkskills.addEventListener('click', desplazark);
linkportafolio.addEventListener('click', desplazarp);



function desplazarc() {
  window.scrollTo(0,medcont);
  // contacto.scrollIntoView({behavior: "instant", block: "start", inline: "nearest"});
}

function desplazark() {
  window.scrollTo(0,medskills - 50);
   // skills.scrollIntoView(true);
}

function desplazarp() {
  window.scrollTo(0,medport - 50);
  // portfolio.scrollIntoView({behavior: "instant", block: "start", inline: "nearest"});
}