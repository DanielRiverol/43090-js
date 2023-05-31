const btnSearch = document.querySelector("#btnSearch"),
  inputIngreso = document.querySelector("#ingreso");
const contenedor = document.querySelector("#contenedor");
const carrito = [];
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

//Funciones de búsqueda
function buscarServicio(arr, filtro) {
  const encontrado = arr.find((el) => {
    return el.nombre.includes(filtro);
  });
  return encontrado;
}
function filtrarServicio(arr, filtro) {
  const filtrado = arr.filter((el) => {
    return el.nombre.includes(filtro);
  });
  return filtrado;
}
function crearHtml(el) {
  //llamo al elemento contenedor
  contenedor.innerHTML = "";
  //creo una variable con un estructura html
  let html = `<div class="card">
                <img src=" ./img/${el.img}" alt="${el.nombre}">
                <hr>
                <h3>${el.nombre}</h3>
                <p>Precio: $${el.precio} </p>
                  <div class="card-action">
                    <button id="${el.id}">Comprar</button>
                  </div>
              </div>`;
  //se la agrego al contenedor
  contenedor.innerHTML = html;
}

btnSearch.addEventListener("click", () => {
  const encontrado = buscarServicio(servicios, inputIngreso.value);
  console.log(encontrado);
  crearHtml(encontrado);
});
//evento submit
const formulario = document.querySelector("#form-login");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  /* console.log(e.target);
  const inputUser = e.target[0];
  const inputPass = e.target[1];
  console.log(`USER : ${inputUser.value} PASS: ${inputPass.value}`); */
});

//localstorage
localStorage.setItem("saludo", "Hola desde el ls");
localStorage.setItem("darkmode", true);
localStorage.setItem("darkmode", false);
localStorage.setItem("edad", 40);

let saludo = localStorage.getItem("saludo");
let darkMode = localStorage.getItem("darkmode") == "true";
let edad = parseInt(localStorage.getItem("edad"));
console.log(typeof saludo);
console.log(darkMode);
console.log(edad);

//sessionStorage
sessionStorage.setItem("seleccion", [1, 2, 3, 4, 5, 6]);

const numeros = sessionStorage.getItem("seleccion").split(",");
console.log(numeros); /*convertir cada uno delos valores a numeros */

//remover Items

/* localStorage.removeItem('saludo')
localStorage.removeItem('edad')

localStorage.clear() */

//
const usuario = { nickname: "Flanders", pass: 1234567 };
const usuarioJson = JSON.stringify(usuario);

//localStorage.setItem('usuario',usuarioJson )
localStorage.setItem(
  "usuario",
  JSON.stringify({ nickname: "Flanders", pass: 1234567 })
);

const usuarioDesdeJson= JSON.parse(localStorage.getItem('usuario'))
//console.log(typeof localStorage.getItem('usuario'));
console.log(usuarioDesdeJson);
const produ = [];

produ.push(servicios[2])
localStorage.setItem('products',JSON.stringify(produ) )




const btn=document.querySelector('button.btn.btn-buscar')
console.log(btn);
btn.addEventListener('click', ()=>{
  const arrProd= JSON.parse(localStorage.getItem('products')) 
  console.log(arrProd);
  let obj= arrProd[0]
  crearHtml(obj)
})