const servicios = [
  { id: 1, nombre: "limpieza de cutis", precio: 1200, img: "limpieza.jpg" },
  { id: 2, nombre: "masajes", precio: 1800, img: "masajes.jpg" },
  { id: 3, nombre: "electrodos", precio: 2800, img: "electrodos.jpg" },
  { id: 4, nombre: "manicura", precio: 1500, img: "manicuria.webp" },
  { id: 5, nombre: "uñas", precio: 1100, img: "esculpidas.webp" },
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

function Servicio(nombre, precio, img) {
  this.id = servicios.length + 1;
  this.nombre = nombre;
  this.precio = parseFloat(precio);
  //valido si recibo imagen
  if (!img) {
    this.img = "https://via.placeholder.com/300";
  } else {
    this.img = img;
  }
}

/* const servicio_10 = new Servicio("depilacion", "5300.99", "img.png"); */
function crearServicio() {
  let nombre = prompt("Ingresa el nombre del servicio");
  let precio = prompt("Ingresa el precio del servicio");
  let img = prompt("Ingresa la url del servicio");

  const nuevoServicio = new Servicio(nombre, precio, img);

  return nuevoServicio;
}

/* 
const servicio_11= crearServicio()
console.log(servicio_11);
servicios.push(servicio_10, servicio_11)

console.log(servicios); */
//funciones de filtrado

/* const encontrado=servicios.find((el)=>  el.precio < 10 )//return
console.log(encontrado); */
function buscar(arr, filtro) {
  const servicio = arr.find((el) => el.precio < filtro);

  return servicio;
}
function buscarPorNombre(arr, filtro) {
  const servicio = arr.find((el) => el.nombre.includes(filtro));

  return servicio;
}

//filtrar
function filtrarPorPrecio(arr, filtro) {
  const servicio = arr.filter((el) => el.precio < filtro);

  return servicio;
}
let param = prompt("Ingresa criterio");
let ingreso = prompt("Ingresa filtro");

const menorPrecio = filtrarPorPrecio(servicios, ingreso);
//console.log(menorPrecio);
/* const nombreEncontrado= buscarPorNombre(servicios,ingreso) */

/* console.log(nombreEncontrado); */
/* const encontrado = buscar(servicios,ingreso)
console.log(encontrado); */

function filtrar(arr, filtro, param) {
  return arr.filter((el) => {
    if (param === "id") {
      return el.id == filtro;
    } else if (param === "precio") {
      return el.precio <= filtro;
    } else {
      return el[param].includes(filtro);
    }
  });
}


console.log(filtrar(servicios, ingreso, param));