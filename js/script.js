"use strict";

const menuIcono = document.querySelector("#menuIcono");
menuIcono.addEventListener("click", desplegarMenu);

const menuDesplegable = document.querySelector(".menuDesplegable");

function desplegarMenu(){
  menuDesplegable.classList.toggle("oculto")
  menuIcono.classList.toggle("bi-list");
  menuIcono.classList.toggle("bi-x");
}