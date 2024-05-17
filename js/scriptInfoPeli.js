"use strict"

document.addEventListener("DOMContentLoaded", function () {
  
  //mostrar contenido Detalles/Quzas tambien te guste
  const btnDetalles = document.querySelector(".detalles");
  const btnQuizasGuste = document.querySelector(".quizasGuste");
  const contenidoDetalles = document.querySelector(".contenidoDetalles");
  const contenidoQuizasGuste = document.querySelector(".contenidoQuizasGuste");

  btnQuizasGuste.addEventListener("click", ()=> {
    btnQuizasGuste.classList.add("seleccionado");
    btnDetalles.classList.remove("seleccionado");
    contenidoQuizasGuste.className = "opcVista";
    contenidoDetalles.className = "oculto";
  });
  btnDetalles.addEventListener("click", ()=> {
    btnDetalles.classList.add("seleccionado");
    btnQuizasGuste.classList.remove("seleccionado");
    contenidoQuizasGuste.className = "oculto";
    contenidoDetalles.className = "opcVista";
  });
});