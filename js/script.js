"use strict";
// icono menu
const menuIcono = document.querySelector(".menuIcono");
const menuDesplegable = document.querySelector(".menuDesplegable");


function desplegar(){
  menuDesplegable.classList.toggle("oculto")
  menuIcono.classList.toggle("bi-list");//ícono "hamburguesa"
  menuIcono.classList.toggle("bi-x");//ícono "x"
};
menuIcono.addEventListener("click", desplegar);

//ocultar desplegable al seleccionar opción
document.querySelectorAll(".menuDesplegable li a").forEach(e =>
  e.addEventListener("click", desplegar)
);

//mostrar texto preguntas fracuentes
function mostrar(txt){
  document.querySelector(txt).classList.toggle("oculto");
};

document.querySelector(".btnPregFrec1").addEventListener("click", function() {
  mostrar(".txtOculto1");
  this.classList.toggle("bi-plus");
  this.classList.toggle("bi-x");
});
document.querySelector(".btnPregFrec2").addEventListener("click", function() {
  mostrar(".txtOculto2");
  this.classList.toggle("bi-plus");
  this.classList.toggle("bi-x");
});
