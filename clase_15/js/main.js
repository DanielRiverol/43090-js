document.title = "Clase 15 | Comisión 43090";
const titulo = document.querySelector("h1 span"),
  tituloSecundario = document.querySelector("h2"),
  card = document.querySelector(".card");
const btn = document.querySelector("#btn"),
  contenedor = document.querySelector(".contenedor");

titulo.innerText = "Clase 15";
tituloSecundario.innerText = "Asincronía y promesas";
const servicios = [
  { id: 1, nombre: "limpieza de cutis", precio: 1200, img: "limpieza.jpg" },
  { id: 2, nombre: "masajes", precio: 1800, img: "masajes.jpg" },
  { id: 3, nombre: "electrodos", precio: 2800, img: "electrodos.jpg" },
  { id: 4, nombre: "manicura", precio: 1500, img: "manicuria.webp" },
  { id: 5, nombre: "uñas", precio: 1200, img: "esculpidas.webp" },
  { id: 6, nombre: "mascarillas", precio: 1900, img: "mascarilla.jpeg" },
  { id: 7, nombre: "microblanding", precio: 5800, img: "microblanding.png" },
  {
    id: 8,
    nombre: "radiofrecuencia",
    precio: 12800,
    img: "radiofrecuencia.png",
  },
  {
    id: 9,
    nombre: "micropigmentación",
    precio: 7800,
    img: "micropigmentacion.jpeg",
  },
];

//asincronía
function square(num) {
  return num * num;
}

function logSquare(num) {
  console.log(square(num));
}

logSquare(2);

/* console.log("Inicio del proceso");
setTimeout(() => {
  //funcionalidad
  console.log("Mitad del proceso");
}, 0);

console.log("Fin del proceso"); */

/* trabajando con el boton */
btn.addEventListener("click", () => {
  setTimeout(() => {
    card.classList.remove("active");
  }, 2000);
  card.classList.add("active");
});

/* for (const letra of "Hola") {
 setTimeout(()=>{
  console.log(letra);
 }, 1500)
}
for (const letra of "Tarola") {
  setTimeout(()=>{
    console.log(letra);
   }, 2500)
} */

/* setInterval */
let contador = 0;

/* let intervalo = setInterval(()=>{
  contador++
  console.log(contador);
  if(contador == 6){
    
    clearInterval(intervalo)
    
  }
  },1000); */

//Promesa

let eventoFuturo = (response) => {
  return new Promise((resolve, reject) => {
    //cuerpo de la promesa
    if (response) {
      resolve("Promesa resuelta");
    } else {
      reject("Promesa rechazada");
    }
  });
};
console.log(eventoFuturo(true));
console.log(eventoFuturo(false));

const pedirHamburguesa=(pedido)=>{
  return new Promise((resolve, reject) => {
    //cuerpo de la promesa
    if (pedido) {
      resolve("Veni a retirara tu pedido");
    } else {
      reject("No hay papas");
    }
  });
}


console.log(pedirHamburguesa(false));