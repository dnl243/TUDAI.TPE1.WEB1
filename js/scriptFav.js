"use strict";

document.addEventListener("DOMContentLoaded", function () {
  
  //capturo img
  let imgFav = document.querySelector(".imgFav img");

  //capturo pelis de la lista
  document.querySelectorAll(".lista ul li").forEach((e) => 
    e.addEventListener("mouseover", () => 
      imgFav.src = e.id
    )
  );

  // capturo "x" de la lista
  document.querySelectorAll(".bi-x").forEach((e)=>
    e.addEventListener("click", ()=>
      e.parentElement.remove()    
    )
  )
});
