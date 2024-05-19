"use strict";

document.addEventListener("DOMContentLoaded", function () {

  //capturo pelis de la lista para cambiar img
  document.querySelectorAll(".lista ul li").forEach((e) => 
    e.addEventListener("mouseover", () => 
      document.querySelector(".imgFav img").src = e.id
    )
  );

  // capturo "x" de la lista para borrar película
  document.querySelectorAll(".bi-x").forEach((e)=>
    e.addEventListener("click", ()=>
      e.parentElement.remove()    
    )
  )
});
