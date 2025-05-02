let persona = {};

export const validarFormulario = (e) => {
  e.preventDefault();
  // console.log(e.target.children);

  const campos = [...e.target].filter((elemento) => {
    if(elemento.hasAttribute("required")) return elemento;
  });

  campos.forEach((campo) => {
    let nameCampo = campo.getAttribute("name");
    switch (campo.tagName) {
      case "INPUT":
        if (!campo.value) {
          if (campo.nextElementSibling) campo.nextElementSibling.remove();
          campo.classList.add("form__input");
          let mensaje = document.createElement("span");
          mensaje.classList.add("form__mensaje");
          mensaje.textContent =  `Debe ingresar su ${nameCampo}`;
          campo.insertAdjacentElement("afterend", mensaje);
        }
        break;
      case "SELECT":
        if (!campo.selectedIndex) {
          if (campo.nextElementSibling) campo.nextElementSibling.remove();
          campo.classList.add("form__input");
          let mensaje = document.createElement("span");
          mensaje.classList.add("form__mensaje");
          mensaje.textContent = `Debe seleccionar una opción de ${nameCampo}`;
          campo.insertAdjacentElement("afterend", mensaje);
        }
        break;
      default:
        break;
    }

    //Valido si el campo tiene informacion le agrego al objeto persona la propiedad con su name y su valor.
    if((campo.tagName == "INPUT" && campo.value) || (campo.tagName == "SELECT" && campo.selectedIndex != 0)){
      persona[nameCampo] = campo.value;
    }
  })

  if(Object.keys(persona).length > 0) console.log(persona);
      
}

export const outFocus = (event) => {
  if (event.target.value) {
    event.target.nextSibling.remove();
    event.target.classList.remove("form__input");
  }
}

export const limitar = (event) => {
  if (event.target.value.length  == 10) {
    event.preventDefault();
  }
}

const teclasEspeciales = ["Backspace", "Delete", "Tab", "Enter", "Home", "End", "Shift"];
const regexLetras = /^[a-záéíóú ]$/i;
const regexNumeros = /^[0-9]$/;
const regexCaracteres = /^[a-záéíóú0-9\-._&# ]$/i;

export const validarLetras = (event) => {
  if(!regexLetras.test(event.key) && !teclasEspeciales.includes(event.key)) event.preventDefault();
}

export const validarNumeros = (event) => {
  if(!regexNumeros.test(event.key) && !teclasEspeciales.includes(event.key)) event.preventDefault();
}

export const validarCaracteres = (event) => {
  if(!regexCaracteres.test(event.key) && !teclasEspeciales.includes(event.key)) event.preventDefault();
}