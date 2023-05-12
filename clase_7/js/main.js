//arrays objetos
function Libro(nombre, autor, precio, stock) {
  this.nombre = nombre;
  this.autor = autor;
  this.precio = precio;
  this.stock = stock;
}

const listaDeDeseos = [];

let limite = 2;

//pasar el do while a una funcion y que reciba parametros
function pedirLibros(arr, limit) {
  do {
    let nombre = prompt("Ingresa nombre de libro");
    let autor = prompt("Ingresa autor de libro");
    let precio = prompt("Ingresa precio de libro");
    let cant = prompt("Ingresa cantida de libros");

    //condicion de salida es el tamaño del array
    arr.push(new Libro(nombre, autor, precio, cant));
  } while (arr.length != limit);
}

//pedirLibros(listaDeDeseos,limite)

//console.log(listaDeDeseos);

for (const libro of listaDeDeseos) {
  console.log(libro);
  console.log(libro.nombre);
  console.log(libro.autor);
  console.log(libro.precio);
  console.log(libro.stock);
}

//Método Tradicional
let total = 0;
for (let i = 1; i <= 10; i++) {
  total = total + i;
}
//console.log(total);

function sumarRango(inicio, fin) {
  let total = 0;
  for (let i = inicio; i <= fin; i++) {
    total = total + i;
  }
  return total;
}
let rango = sumarRango(1, 10); //55
/* console.log(sumarRango(1,10));
console.log(sumarRango(2,20));
console.log(sumarRango(-32,20)); */
function mayorQue(n) {
  return (m) => m > n;
}
let mayorQueDiez = mayorQue(10); // (m)=>m > 10
//console.log(mayorQueDiez(12));//(12)=>12 > 10 true
mayorQueDiez = mayorQue(10); // (m)=>m > 10
//console.log(mayorQueDiez(8));//(8)=>8 > 10 false

function asignarOperacion(op) {
  switch (op) {
    case "+":
      return (a, b) => a + b;

    case "-":
      return (a, b) => a - b;
    default:
      return () => "Operador no válido";
  }
}

let suma = asignarOperacion("+"); //(a,b)=>a+b
//console.log(suma(1,2));
//console.log(suma(3,982));

let resta = asignarOperacion("-"); //(a,b)=>a-b
//console.log(resta(1,-5));
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function porCadaUno(arr, fn) {
  for (const elemento of arr) {
    //arr= nums
    fn(elemento); //alert(elemento) - consle.log(elemento)
  }
}

//porCadaUno(nums,alert) //alert(nums[n])
//porCadaUno(nums, console.log); //alert(nums[n])

let triplicado = [];
//console.log(nums);
//console.log(triplicado);

const triplicar = function (el) {
  triplicado.push(el * 3);
};
//porCadaUno(nums, triplicar);
porCadaUno(nums, (el) => {
  triplicado.push(el * 3);
});

//console.log(triplicado);

const servicios = [
  { id: 1, nombre: "limpieza de cutis", precio: 1200, img: "limpieza.jpg" },
  { id: 2, nombre: "masajes", precio: 1800, img: "masajes.jpg" },
  { id: 3, nombre: "electrodos", precio: 2800, img: "electrodos.jpg" },
  { id: 4, nombre: "manicura", precio: 1500, img: "manicuria.webp" },
  { id: 5, nombre: "uñas", precio: 1300, img: "esculpidas.webp" },
  { id: 6, nombre: "mascarillas", precio: 1900, img: "mascarilla.jpeg" },
  { id: 7, nombre: "microblanding", precio: 5800, img: "microblanding.png" },
  { id: 8, nombre: "mascarillas", precio: 2300, img: "mascarilla.jpeg" },
];
//foreach

servicios.forEach((el) => {
  //console.log(el.nombre)
});

//find
let encontrado = servicios.find((el) => {
  return el.nombre.includes("mascarilla");
});

//console.log(encontrado);
//filter devuelve un array con las coincidencias
let baratos = servicios.filter((el) => {
  return el.precio <= 1800;
});
//console.log(baratos);
//some
let existe = servicios.some((el) => {
  return el.nombre == "uñas";
});
//console.log(existe);

//map
let nombresServicios = servicios.map((serv) => {
  return serv.nombre;
});

//console.log(nombresServicios);

const precioActualizado = servicios.map((serv) => {
  return {
    id: serv.id,
    nombre: serv.nombre,
    precio: serv.precio * 1.21,
    img: serv.img,
  };
});

//console.log(precioActualizado);

//reduce
const totalInventario= servicios.reduce((acc,el)=>{

return acc + el.precio

},0)//

console.log(totalInventario);

