"use strict";

document.addEventListener("DOMContentLoaded", function () {
 
  // icono menu
  const menuIcono = document.querySelector(".menuIcono");

  //mostrar/ocultar menu desplegable
  function desplegar() {
    document.querySelector(".menuDesplegable").classList.toggle("oculto");
    menuIcono.classList.toggle("bi-list"); //ícono "hamburguesa"
    menuIcono.classList.toggle("bi-x"); //ícono "x"
  }
  menuIcono.addEventListener("click", desplegar);

  //ocultar menú desplegable al seleccionar opción
  document
    .querySelectorAll(".menuDesplegable li a")
    .forEach((e) => e.addEventListener("click", desplegar));

  //mostrar texto y cambiar "+" por "x" en preguntas frecuentes
  document.querySelectorAll(".pregFrec").forEach(e => {
    e.addEventListener("click", ()=> {
      e.nextElementSibling.classList.toggle("oculto");
      e.lastElementChild.classList.toggle("bi-plus");
      e.lastElementChild.classList.toggle("bi-x");
    })
  });
});

