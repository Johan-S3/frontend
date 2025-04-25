//Importacions
import { validarFormulario } from "./module.js";
// Variables
const formulario = document.querySelector("form");
const nombre = document.querySelector('[name="nombre"]');
const apellido = document.querySelector('[name="apellido"]');
const telefono = document.querySelector('[name="telefono"]');
const documento = document.querySelector('[name="documento"]');
const usuario = document.querySelector('[name="usuario"]');
const constrasena = document.querySelector('[name="constrasena"]');
const politicas = document.querySelector("#politicas")
const btn = document.querySelector("#btn_validar");

// Funciones

const validar = (event) => {
  event.preventDefault();
  if (!nombre.value) {
    if (nombre.nextElementSibling) nombre.nextElementSibling.remove();
    nombre.classList.add("form__input");
    let mensaje = document.createElement("span");
    mensaje.classList.add("form__mensaje");
    mensaje.textContent = "Debe ingresar un nombre";
    nombre.insertAdjacentElement("afterend", mensaje);
    // return;
  }
  // nombre.classList.remove("form__input");
  if (!apellido.value) {
    if (apellido.nextElementSibling) apellido.nextElementSibling.remove();
    apellido.classList.add("form__input");
    let mensaje = document.createElement("span");
    mensaje.classList.add("form__mensaje");
    mensaje.textContent = "Debe ingresar un apellido";
    apellido.insertAdjacentElement("afterend", mensaje);
    // return;
  }
  // apellido.classList.remove("form__input");
  if (!telefono.value) {
    if (telefono.nextElementSibling) telefono.nextElementSibling.remove();
    telefono.classList.add("form__input");
    let mensaje = document.createElement("span");
    mensaje.classList.add("form__mensaje");
    mensaje.textContent = "Debe ingresar un número telefono";
    telefono.insertAdjacentElement("afterend", mensaje);
    // return;
  }
  // telefono.classList.remove("form__input");
  if (!documento.value) {
    if (documento.nextElementSibling) documento.nextElementSibling.remove();
    documento.classList.add("form__input");
    let mensaje = document.createElement("span");
    mensaje.classList.add("form__mensaje");
    mensaje.textContent = "Debe ingresar un número de documento";
    documento.insertAdjacentElement("afterend", mensaje);
    // return;
  }
  // documento.classList.remove("form__input");
  if (!usuario.value) {
    if (usuario.nextElementSibling) usuario.nextElementSibling.remove();
    usuario.classList.add("form__input");
    let mensaje = document.createElement("span");
    mensaje.classList.add("form__mensaje");
    mensaje.textContent = "Debe ingresar un nombre de usuario";
    usuario.insertAdjacentElement("afterend", mensaje);
    // return;
  }
  // usuario.classList.remove("form__input");
  if (!constrasena.value) {
    if (constrasena.nextElementSibling) constrasena.nextElementSibling.remove();
    constrasena.classList.add("form__input");
    let mensaje = document.createElement("span");
    mensaje.classList.add("form__mensaje");
    mensaje.textContent = "Debe ingresar una contraseña";
    constrasena.insertAdjacentElement("afterend", mensaje);
    // return;
  }
  // constrasena.classList.remove("form__input");
}

const outFocus = (event) => {
  if (event.target.value) {
    event.target.nextSibling.remove();
    event.target.classList.remove("form__input");
  }
}

const validarCheck = (event) => {
  if (!politicas.checked) btn.setAttribute("disabled", "");
  else btn.removeAttribute("disabled");
}

const limitar = (event) => {
  if (event.target.value.length  == 10) {
    event.preventDefault();
  }
}
// Eventos
addEventListener("DOMContentLoaded", validarCheck);
politicas.addEventListener("change", validarCheck);

nombre.addEventListener("keypress", limitar)

formulario.addEventListener("submit", validarFormulario)

/* 
formulario.addEventListener("submit", validar);
nombre.addEventListener("blur", outFocus);
apellido.addEventListener("blur", outFocus);
telefono.addEventListener("blur", outFocus);
documento.addEventListener("blur", outFocus);
usuario.addEventListener("blur", outFocus);
constrasena.addEventListener("blur", outFocus);

const teclasEspeciales = ["Backspace", "Delete", "Tab", "Enter", "Home", "End", "Shift"];
const regexLetras = /^[a-záéíóú ]$/i;
const regexNumeros = /^[0-9]$/;
const regexCaracteres = /^[a-záéíóú0-9\-._&# ]$/i;

nombre.addEventListener("keydown", (event) => {
  if(!regexLetras.test(event.key) && !teclasEspeciales.includes(event.key)) event.preventDefault();
});

apellido.addEventListener("keydown", (event) => {
  if(!regexLetras.test(event.key) && !teclasEspeciales.includes(event.key)) event.preventDefault();
});

telefono.addEventListener("keydown", (event) => {
  if(!regexNumeros.test(event.key) && !teclasEspeciales.includes(event.key)) event.preventDefault();
});

documento.addEventListener("keydown", (event) => {
  if(!regexNumeros.test(event.key) && !teclasEspeciales.includes(event.key)) event.preventDefault();
});

usuario.addEventListener("keydown", (event) => {
  if(!regexCaracteres.test(event.key) && !teclasEspeciales.includes(event.key)) event.preventDefault();
});

constrasena.addEventListener("keydown", (event) => {
  if(!regexCaracteres.test(event.key) && !teclasEspeciales.includes(event.key)) event.preventDefault();
});
*/
