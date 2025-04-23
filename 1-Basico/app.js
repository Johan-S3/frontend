// let win = window;

let dom = document;

let parrafos = document.querySelectorAll("main p")

let imagenes = dom.images;
let hojasStyle = dom.styleSheets;
let scripts = dom.scripts;

let lista = dom.querySelectorAll("ul.list > li.item");

let cards = dom.querySelectorAll("div.cards > div.card");
// console.log(cards);

console.clear();

let elemento = dom.querySelector("#elementos2");

elemento.textContent = "Nuevo Texto";
elemento.innerHTML = "<p> textos </p> <p> texto </p>"

let body = dom.querySelector("body");
setTimeout(() => {
  body.classList.add("bg-red")
}, 6000);


// console.log(imagenes);
// console.log(hojasStyle);
// console.log(scripts);
