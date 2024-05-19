"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // form acceder
  function generarCaptcha() {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captcha = "";
    for (let i = 0; i < 6; i++) {
      captcha += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return captcha;
  }

  function iniciarCaptcha() {
    const captchaElement = document.getElementById("captcha");
    captchaElement.textContent = generarCaptcha();
  }

  document
    .getElementById("miForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const captchaElement = document.getElementById("captcha").textContent;
      const captchaInput = document.getElementById("captchaInput").value;

      if (captchaInput === captchaElement) {
        document.querySelector("#resultadoCaptcha").innerHTML =
          "Código correcto. Acceso concedido.";
      } else {
        document.querySelector("#resultadoCaptcha").innerHTML =
          "Código incorrecto. Inténtalo de nuevo.";
        iniciarCaptcha();
      }
    });
  iniciarCaptcha();

  const btnRecuperar = document.querySelector(".btnRecuperar");
  const btnRegistrate = document.querySelector(".btnRegistrate");
  const formAcceder = document.querySelector("#formAcceder");
  const formRecuperar = document.querySelector("#formRecuperar");
  const formRegistrar = document.querySelector("#formRegistrar");

  function cambiarForm(btn, form) {
    btn.addEventListener("click", () => {
      formAcceder.classList.add("oculto");
      form.classList.remove("oculto");
    });
  }

  cambiarForm(btnRecuperar, formRecuperar); //click en recuperar
  cambiarForm(btnRegistrate, formRegistrar); //click en registrate

  // form recuperar y registrarse
  document.querySelectorAll(".miFormRe").forEach((form) =>
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      document
        .querySelectorAll(".respForm")
        .forEach((p) => p.classList.remove("oculto"));
    })
  );
});
