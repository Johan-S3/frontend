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