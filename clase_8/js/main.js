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

//Metodos de busqueda y transformacion
const encontrado = servicios.find((el) => {
  return el.nombre == "mascarillas" || el.precio < 2000;
});
//console.log(encontrado);

//reduce
const totalInventario = servicios.reduce((acc, el) => acc + el.precio, 0);
//console.log(totalInventario);

//sort - destructivo
const copiaServicios = servicios;

const nums = [1, 4, 8, 2, -9, 12, 123];

/* console.log(nums.sort((a,b)=> a - b));
console.log(nums.sort((a,b)=> b - a)); */

//console.log(copiaServicios.sort((a,b)=>a.precio - b.precio));

//ordenar alfabeticamente

copiaServicios.sort((a, b) => {
  if (a.nombre < b.nombre) {
    return -1;
  }
  if (a.nombre > b.nombre) {
    return 1;
  }
  return 0;
});
//console.log(copiaServicios);

/* console.log(Math);
console.log(Math.PI); */
/* console.log(Math.max(1,4,3,5,67,99,8,7,5,Infinity));
console.log(Math.min(-11111,4,3,5,67,-99999999,8,7,5,Infinity)); */

let pi = Math.PI;
/* 
console.log(Math.ceil(pi));//redondea hacia arriba 
console.log(Math.floor(pi));//redondea hacia abajo
console.log(Math.round(pi + 0.3));
console.log(pi.toFixed(3));//redondea decimales (string) */

//console.log(Math.sqrt(-1));

function asignarOperacion(op) {
  switch (op) {
    case "+":
      return (a, b) => a + b;

    case "-":
      return (a, b) => a - b;

    case "*":
      return (a, b) => a * b;

    case "/":
      return (a, b) => a / b;
    case "raiz":
      return (a) => Math.sqrt(a);
    case "raiz3":
      return (a) => Math.cbrt(a);

    default:
      return () => "El operador no es válido";
  }
}

/* const raizCuadrada= asignarOperacion('raiz');//(a)=> Math.cbrt(a)
const raizCubica= asignarOperacion('raiz3');

console.log(raizCubica(27)); */
let random = Math.random() * 100;
//console.log(Math.floor(random));

//Tarea parametrizar la funcion
function crearToken() {
  const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let token = "";
  for (let i = 0; i < 6; i++) {
    const random = Math.floor(Math.random() * numeros.length);
    token = token + numeros[random];
  }
  return token;
}

//console.log(crearToken());
function crearColor() {
  const hexa = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "D",
    "E",
    "F",
  ];
  let color = "";

  for (let index = 0; index < 6; index++) {
    let aleatorio = Math.floor(Math.random() * hexa.length);
    color = color + hexa[aleatorio];
  }
  return "#" + color;
}

//console.log(crearColor());

//Clase DATE
const fecha = new Date('2023-02-12')
//console.log(fecha.getTime());

/* console.log(fecha);
console.log(fecha.getFullYear());
console.log(fecha.getMonth()+1);
console.log(fecha.getDate());

console.log(fecha.toDateString());
console.log(fecha.toLocaleString());
console.log(fecha.toLocaleDateString());
console.log(fecha.toTimeString()); */

function calcularEstadia(ingreso, egreso) {
  let fIngreso=new Date(ingreso).getTime() 
  let fEgreso=new Date(egreso).getTime() 

  let totalEstadia= (fEgreso - fIngreso)/86400000
  return totalEstadia
} 

let fechaIngreso = prompt("Ingresa la fecha de ingreso al Hotel", "2023-01-01");
let fechaEgreso = prompt("Ingresa la fecha de egreso al Hotel", "2023-01-01");
console.log(fechaIngreso);
console.log(fechaEgreso);
console.log(calcularEstadia(fechaIngreso, fechaEgreso));


