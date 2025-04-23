let padre = document.querySelector(".container");
let node = document.createElement("h2")
node.textContent = "Titulo de segundo nivel"
padre.appendChild(node);

let texto = document.createTextNode("Palabra para el nodo de texto");
padre.appendChild(texto);

let lista = document.querySelector("#list");

let html = document.createElement("li");
let css = document.createElement("li");
let js = document.createElement("li");

html.classList.add("item");
css.classList.add("item");
js.classList.add("item");

html.textContent = "HTML";
css.textContent = "CSS";
js.textContent = "JavaScript";

lista.append(html, css, js);



let card = document.querySelector(".card");
let lista_card = document.querySelector("#list");
let titulo = document.createElement("h2");
titulo.textContent = "Titulo de la card";
card.insertBefore(titulo, lista_card);

let beforeBegin = document.createElement("li");
beforeBegin.classList.add("item", "before");
beforeBegin.textContent = "Nuevo contenido ubicado antes de la lista desordenada";

let afterBegin = document.createElement("li");
afterBegin.classList.add("item")
afterBegin.textContent = "Nuevo contenido ubicado al inicio de la lista desordenada";

let beforeEnd = document.createElement("li");
beforeEnd.classList.add("item")
beforeEnd.textContent = "Nuevo contenido ubicado al final de la lista desordenada";

let afterEnd = document.createElement("li");
afterEnd.classList.add("item")
afterEnd.textContent = "Nuevo contenido ubicado despiues de la lista desordenada";


lista_card.insertAdjacentElement("beforebegin", beforeBegin)
lista_card.insertAdjacentElement("beforeend", beforeEnd)
lista_card.insertAdjacentElement("afterbegin", afterBegin);
lista_card.insertAdjacentElement("afterend", afterEnd);


/*------------------------------------------------------------------------------ */
/*                          CREAR DIAS DE LA SEMANA                              */

let cardDias = document.querySelector("#dias");

const dias = [{
  id: 1,
  nombre: "Lunes",
  img: "https://picsum.photos/640/360",
  parrafo: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, officiis?"
},
{
  id: 2,
  nombre: "Martes",
  img: "https://picsum.photos/640/360",
  parrafo: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, officiis?"
},
{
  id: 3,
  nombre: "Miercoles",
  img: "https://picsum.photos/640/360",
  parrafo: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, officiis?"
},
{
  id: 4,
  nombre: "Jueves",
  img: "https://picsum.photos/640/360",
  parrafo: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, officiis?"
},
{
  id: 5,
  nombre: "Viernes",
  img: "https://picsum.photos/640/360",
  parrafo: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, officiis?"
},
{
  id: 6,
  nombre: "Sabado",
  img: "https://picsum.photos/640/360",
  parrafo: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, officiis?"
},
{
  id: 7,
  nombre: "Domingo",
  img: "https://picsum.photos/640/360",
  parrafo: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, officiis?"
}
]

console.log(dias);

dias.forEach(dia => {
  // Crear card
  let card = document.createElement("div");
  card.classList.add("card")

  // Crear el header de la card
  let card__header = document.createElement("div");
  card__header.classList.add("card__header")

  // Crear el titulo de la card
  let card__title = document.createElement("h2");
  card__title.classList.add("card__title")
  card__title.textContent = dia.nombre;

  // Crear el cuerpo de la card
  let card__body = document.createElement("div");
  card__body.classList.add("card__body")

  // Crear la imagen de la card
  let card__img = document.createElement("img");
  card__img.classList.add("card__img");
  card__img.setAttribute("src", dia.img);

  // Crear el parrafo de la card
  let card__paragraph = document.createElement("p");
  card__paragraph.classList.add("card__paragraph");
  card__paragraph.textContent = dia.parrafo;

  // Agregao al header de la card el titulo
  card__header.append(card__title);

  // Agrego al cuerpo de la card la imagen y el parrafo
  card__body.append(card__img);
  card__body.append(card__paragraph);

  // Agrego a la card el header y el body
  card.append(card__header, card__body);

  // Agrego a la cardDias la card.
  cardDias.append(card);
});