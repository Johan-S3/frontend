//Importacions

import { validarFormulario, outFocus, limitar, validarLetras, validarNumeros, validarCaracteres } from "./module.js";



// Variables

const formulario = document.querySelector("form");
const nombre = document.querySelector('[name="nombre"]');
const apellido = document.querySelector('[name="apellido"]');
const telefono = document.querySelector('[name="telefono"]');
const ciudad = document.querySelector('[name="ciudad"]');
const documento = document.querySelector('[name="documento"]');
const usuario = document.querySelector('[name="usuario"]');
const constrasena = document.querySelector('[name="constrasena"]');
const politicas = document.querySelector("#politicas")
const btn = document.querySelector("#btn_validar");


//Funciones

const validarCheck = (event) => {
  if (!politicas.checked) btn.setAttribute("disabled", "");
  else btn.removeAttribute("disabled");
}



// Eventos

addEventListener("DOMContentLoaded", validarCheck);
politicas.addEventListener("change", validarCheck);

nombre.addEventListener("keypress", limitar)

formulario.addEventListener("submit", validarFormulario)

nombre.addEventListener("keydown", validarLetras);
apellido.addEventListener("keydown", validarLetras);
telefono.addEventListener("keydown", validarNumeros);
documento.addEventListener("keydown", validarNumeros);
usuario.addEventListener("keydown", validarCaracteres);
constrasena.addEventListener("keydown", validarCaracteres);

nombre.addEventListener("blur", outFocus);
apellido.addEventListener("blur", outFocus);
telefono.addEventListener("blur", outFocus);
ciudad.addEventListener("blur", outFocus)
documento.addEventListener("blur", outFocus);
usuario.addEventListener("blur", outFocus);
constrasena.addEventListener("blur", outFocus);

