export const validarFormulario = (e) => {
  e.preventDefault();
  console.log(e.target.children);
  // Todos los required

  const campos = [...e.target].filter((elemento) => {
    if(elemento.hasAttribute("required")) return elemento
  });

  console.log(campos);

  campos.forEach((campo) => {
    switch (campo.tagName) {
      case "INPUT":
        if (!campo.value) {
          if (campo.nextElementSibling) campo.nextElementSibling.remove();
          campo.classList.add("form__input");
          let mensaje = document.createElement("span");
          mensaje.classList.add("form__mensaje");
          mensaje.textContent = "Debe ingresar un nombre";
          campo.insertAdjacentElement("afterend", mensaje);
        }
        break;
      case "SELECT":
        if (!campo.selectedIndex) {
          campo.classList.add("form__input");
          let mensaje = document.createElement("span");
          mensaje.classList.add("form__mensaje");
          mensaje.textContent = "Debe ingresar un nombre";
          campo.insertAdjacentElement("afterend", mensaje);
        }
        break;
      default:
        break;
    }
  })
}