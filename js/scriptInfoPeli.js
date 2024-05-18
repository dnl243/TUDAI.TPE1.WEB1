"use strict"

document.addEventListener("DOMContentLoaded", function () {
  
  //mostrar contenido Detalles/Quzas tambien te guste
  const btnDetalles = document.querySelector(".detalles");
  const btnQuizasGuste = document.querySelector(".quizasGuste");
  const contenidoDetalles = document.querySelector(".contenidoDetalles");
  const contenidoQuizasGuste = document.querySelector(".contenidoQuizasGuste");

  function selecContenido(btn1, btn2, cont1, cont2){
    btn1.addEventListener("click", ()=>{
      btn1.classList.toggle("seleccionado");
      btn2.classList.toggle("seleccionado");
      cont1.classList.toggle("opcVista");
      cont1.classList.toggle("oculto");
      cont2.classList.toggle("opcVista");
      cont2.classList.toggle("oculto");
    })
  }

  selecContenido(btnDetalles, btnQuizasGuste, contenidoDetalles, contenidoQuizasGuste);
  selecContenido(btnQuizasGuste, btnDetalles, contenidoQuizasGuste, contenidoDetalles);

});