"use strict"

document.addEventListener("DOMContentLoaded", function () {
  
  //mostrar contenido Detalles/Quzas tambien te guste
  const btnDetalles = document.querySelector(".detalles");
  const btnQuizasGuste = document.querySelector(".quizasGuste");
  const contenidoDetalles = document.querySelector(".contenidoDetalles");
  const contenidoQuizasGuste = document.querySelector(".contenidoQuizasGuste");

  btnQuizasGuste.addEventListener("click", ()=> {
    btnQuizasGuste.className = "seleccionado quizasGuste";
    contenidoQuizasGuste.className = "contenidoOpcion";
    btnDetalles.className = "opcion detalles";
    contenidoDetalles.className = "oculto";
  });
  btnDetalles.addEventListener("click", ()=> {
    btnDetalles.className = "seleccionado detalles";
    contenidoDetalles.className = "contenidoOpcion";
    btnQuizasGuste.className = "opcion quizasGuste";
    contenidoQuizasGuste.className = "oculto";
  });

})