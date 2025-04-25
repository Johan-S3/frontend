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
  if (!nombre.value) {
    alert("Debe ingresar un nombre");
    nombre.focus();
    return;
  } 
  if(!apellido.value){
    alert("Debe ingresar un apellido");
    apellido.focus();
    return;
  }
  if(!telefono.value){
    alert("Debe ingresar un número telefono");
    telefono.focus();
    return;
  }
  if(!documento.value){
    alert("Debe ingresar un número documento");
    documento.focus();
    return;
  }
  if(!usuario.value){
    alert("Debe ingresar un nombre de usuario");
    usuario.focus();
    return;
  }
  if(!constrasena.value){
    alert("Debe ingresar una contraseña");
    constrasena.focus();
    return;
  }
}
// Eventos
formulario.addEventListener("submit", validar);

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
