// Variables
const formulario = document.querySelector("form");
const nombre = document.querySelector('[name="nombre"]');
const apellido = document.querySelector('[name="apellido"]');
const telefono = document.querySelector('[name="telefono"]');
const documento = document.querySelector('[name="documento"]');
const usuario = document.querySelector('[name="usuario"]');
const constrasena = document.querySelector('[name="constrasena"]');
// const btn = document.querySelector("#btn_validar");

// Funciones
const validar = (event) => {
  event.preventDefault();
  if (!nombre.validar) {
    alert("Debe ingresar el nombre");
    nombre.focus();
  } 
}
// Eventos
formulario.addEventListener("submit", validar);

const teclasEspeciales = ["Backspace", "Delete", "Tab", "Enter", "Home", "End", "Shift"];
const regexLetras = /^[a-záéíóú ]$/i;
const regexNumeros = /^[1-9]$/;
const regexCaracteres = /^[a-záéíóú1-9\-._&# ]$/;

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
