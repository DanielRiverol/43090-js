const anio = new Date().getFullYear();

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

const info = document.querySelector("#info");
const inputs = document.querySelectorAll("input");
const btnSearch = document.querySelector("#btnSearch");

//asignar un evento OPCION 1
/* btnSearch.addEventListener('click', function(){
  console.log("Hiciste clic");
}) */
//OPCION 2 prefijo on
btnSearch.onclick = () => console.log("Hiciste clic");
//eventos del mouse

const caja = document.querySelector(".caja"),
  pais = document.querySelector("#pais");
/* 
  caja.addEventListener('mouseover',()=>{
    caja.style.backgroundImage= 'url("./img/estados.jpg")'
    pais.innerHTML='<h3>Estados</h3>'
    
  })
  caja.addEventListener('mouseleave',()=>{
    caja.style.backgroundImage= 'url("./img/australia.jpg")'
    pais.innerHTML='<h3>Australia</h3>'
    
  })
  caja.addEventListener('click',()=>{
    caja.style.backgroundImage= 'url("./img/pum.png")'
    pais.innerHTML='<h3>PUM</h3>'
    
  })
 */

const inputSearch = inputs[0];

/* inputSearch.onkeyup= ()=>{
    console.log(inputSearch.value);
  } */

inputSearch.addEventListener("keyup", () => {
  //console.log(inputSearch.value);
  pais.innerHTML = `<h1>${inputSearch.value}</h1>`;
});

let contador = 0;
function sumar() {
  pais.innerHTML = contador++;
}
btnSearch.addEventListener("click", () => {
  //pais.innerHTML += `<h1>${inputSearch.value}</h1>`
  //sumar()
});
const nombre = inputs[1];
const edad = inputs[2];

nombre.addEventListener("change", () => {
  console.log("Cambiaste de campo");
});
edad.addEventListener("change", () => {
  console.log("Cambiaste de campo");
});

const paises = [
  "Argentina",
  "Colombia",
  "Brasil",
  "México",
  "Uruguay",
  "Venezuela",
  "Perú",
  "Chile",
  "Polonia",
];
const select = document.querySelector("select");
paises.forEach((pais) => {
  let option = document.createElement("option");

  option.value = pais;
  option.innerText = pais;

  select.appendChild(option);
});

select.addEventListener("change", () => {
  let option = select.options[select.selectedIndex].value;
  document.querySelector("#info").innerText = option;
});
//let evento= 'click'

function crearHTML(el){
caja.innerHTML=` <div class="card">
<img src="./img/${el.img}" alt="" class='card-img'>
<h2>${el.nombre}</h2>
<p>$${el.precio}</p>
</div>`
}


btnSearch.addEventListener('click', () => {
  const serv = buscarServicio(servicios, inputSearch.value);
  console.log(serv);
  crearHTML(serv)
});
