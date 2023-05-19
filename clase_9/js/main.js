
const productos = [
  { id: 1, nombre: "arroz integral", precio: 89 },
  { id: 2, nombre: "papa", precio: 90 },
  { id: 3, nombre: "tomate", precio: 204 },
  { id: 4, nombre: "morrón", precio: 870 },
  { id: 5, nombre: "pan", precio: 240 },
  { id: 6, nombre: "fideos", precio: 124 },
  { id: 7, nombre: "fideos", precio: 160 },
  { id: 8, nombre: "arroz", precio: 500 },
];
const personas = [
  "Pedro",
  "Jose",
  "Juan",
  "Lucia",
  "Emiliano",
  "Belén",
  "Pia",
  "Jimena",
  "Pablo",
  "Julian",
  "Juan", "Keila"
];

//acceso al DOM por ID
const tituloPrincipal= document.getElementById('titulo');
const tituloSec= document.getElementById('secundario')

console.log(tituloPrincipal.innerHTML);
console.log(tituloSec.innerHTML);

//acceso al DOM por Clase
const lista = document.getElementsByClassName('lista')
//console.log(lista);
/* console.log(lista[0]);
console.log(lista[1]);
console.log(lista[2]); */
const paises= document.getElementsByClassName('pais')
//recorriendo un array de elementos
for (const pais of paises) {
 // console.log(pais.innerHTML);
}

/* for (let i = 0; i < paises.length; i++) {
  const pais = paises[i];
  console.log(pais.innerHTML);
} */
//acceso al DOM por TagName

const divs = document.getElementsByTagName('div')
paises[0].innerText='ARGENTINA';
paises[1].innerText="URUGUAY"
paises[2].innerHTML="CHILE"
console.log(paises[0].innerText);
console.log();
//console.log(divs);
/* lista[0].className='box';

paises[0].style.color="blue"; */

//crear elementos
const parrafo= document.createElement('p')

parrafo.innerText= "Soy un parrafo creado desde js";
const contenedor= document.getElementById('contenedor')
contenedor.appendChild(parrafo)
//document.body.append(parrafo)
const inputN= document.getElementsByTagName('input')
inputN[0].value = "Dante"
//console.log(inputN[0]);

//parrafo.remove()
inputN[0].remove()

//
const nombres= document.getElementById('nombres')

//template literals ``
let producto= {
  nombre:"Papas",
  precio: 230
}

let concatenado= "nombre de prodcuto:" + producto.nombre + ", precio: " + producto.precio;

console.log(concatenado);

let plantilla= `Nombre producto ${producto.nombre}, 
precio: $ ${producto.precio}`;//interpolacion

console.log(plantilla);
personas.push(plantilla)

for (const nombre of personas) {
  const li = document.createElement('li')

  li.innerText= nombre
nombres.appendChild(li)
}