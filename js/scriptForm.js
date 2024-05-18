"use strict";

document.addEventListener("DOMContentLoaded", function () {
  function generateCaptcha() {
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

  function initCaptcha() {
    const captchaElement = document.getElementById("captcha");
    captchaElement.textContent = generateCaptcha();
  }

  document
    .getElementById("miForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const captchaElement = document.getElementById("captcha").textContent;
      const captchaInput = document.getElementById("captchaInput").value;

      if (captchaInput === captchaElement) {
        alert("CAPTCHA correcto. Formulario enviado.");
      } else {
        alert("CAPTCHA incorrecto. Inténtalo de nuevo.");
        initCaptcha();
      }
    });

  initCaptcha;
});
