"use strict";

document.addEventListener("DOMContentLoaded", function () {

  //capturo pelis de la lista
  document.querySelectorAll(".lista ul li").forEach((e) => 
    e.addEventListener("mouseover", () => 
      document.querySelector(".imgFav img").src = e.id
    )
  );

  // capturo "x" de la lista
  document.querySelectorAll(".bi-x").forEach((e)=>
    e.addEventListener("click", ()=>
      e.parentElement.remove()    
    )
  )
});
