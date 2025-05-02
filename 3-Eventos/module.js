

export const validarFormulario = (e) => {
  let persona = {};
  e.preventDefault();
  // console.log(e.target.children);
  
  // Capturo todos los campos requeridos
  const campos = [...e.target].filter((elemento) => {
    if(elemento.hasAttribute("required")) return elemento;
  });

  // Capturo todos los campos de tipo radio
  const radios = [...campos].filter((elemento) => {
    return elemento.type == "radio";
  }) 
  // Capturo todos los radios que están checkeados
  const isChecked = radios.find((radio) => radio.checked) || [];
  if (isChecked.length === 0) {
    persona[radios[0].name] = "";
  } else {
    persona[isChecked.name] = isChecked.value;
  }
  
  // Capturo todos los campos de tupo checkbox
  const checks = [...campos].filter((elemento) => {
    return elemento.type == "checkbox";
  })
  
  const checkBoxSelected = checks.filter((check) => check.checked) || [];
  if (checkBoxSelected.length < 3) {
    alert("Debe seleccionar 3 o más habilidades");
    
  } else {
    persona.lenguaje = checkBoxSelected.map((elemento) => {
      return elemento.value;
    })
  }


  let isFull = true;
  campos.forEach((campo) => {
    let nameCampo = campo.getAttribute("name");
    switch (campo.tagName) {
      case "INPUT":
        if(campo.type == "text" || campo.type == "number" || campo.type == "tel" || campo.type == "password"){
          if (!campo.value) {
            if (campo.nextElementSibling) campo.nextElementSibling.remove();
            campo.classList.add("form__input");
            let mensaje = document.createElement("span");
            mensaje.classList.add("form__mensaje");
            mensaje.textContent =  `Debe ingresar su ${nameCampo}`;
            campo.insertAdjacentElement("afterend", mensaje);
          }
        }
        if (campo.type == "radio") {
          if (isChecked == 0) {
            let contenedor = document.querySelector(".radios")
            if (contenedor.nextElementSibling) contenedor.nextElementSibling.remove();
            contenedor.classList.add("form__radios");
            let mensaje = document.createElement("span");
            mensaje.classList.add("form__mensaje");
            mensaje.textContent = `Debe seleccionar su ${nameCampo}`;
            contenedor.insertAdjacentElement("afterEnd", mensaje);
          }
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
    if (campo.type != "radio" && campo.type != "checkbox") {
      if((campo.tagName == "INPUT" && campo.value) || (campo.tagName == "SELECT" && campo.selectedIndex != 0)){
        persona[nameCampo] = campo.value;
      } else {
        isFull = false;
      }
    }
  })

  if (Object.keys(persona).length > 0 && persona.lenguaje) {
      if (isFull) console.log(persona);
  }  
}

// export const llenarTabla = (persona) => {
//   const tabla = document.querySelector("table");
//   let fila = document.createElement("tr");
//   tabla.insertAdjacentElement("beforeend", fila);
//   for (let i = 0; i < Object.keys(persona).length; i++) {
//     let celda = document.createElement("td");
//     celda.textContent = persona[i];
//     fila.insertAdjacentElement("beforeend", celda);
//   }
// }


export const outFocus = (event) => {
  if (event.target.value) {
    event.target.classList.remove("form__input");
    if(event.target.nextElementSibling) event.target.nextSibling.remove();
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