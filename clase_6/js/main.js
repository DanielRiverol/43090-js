//funcion constructora
/* function Producto(nombre, marca, precio, stock) {
  this.nombre = nombre;
  this.marca = marca;
  this.precio = precio;
  this.stock = stock;
  //methods
  this.vender = (cant) => {
    //validar cuando cantidad sea mayor que el stock
    this.stock = this.stock - cant;
  };
  this.mostrar = () => "Producto: " + this.nombre + " Marca: " + this.marca;
}
 */
//clase constructora
class Producto {
  constructor(nombre, marca, precio, stock) {
    this.nombre = nombre;
    this.marca = marca;
    this.precio = precio;
    this.stock = stock;
  }
  //metodos
  vender = (cant) => {
    //validar cuando cantidad sea mayor que el stock
    this.stock = this.stock - cant;
  };
  mostrar = () => "Producto: " + this.nombre + " Marca: " + this.marca;
}

let marcaArroz = "gallo";

const producto1 = new Producto("Arroz", marcaArroz, 230, 20); //instanciar
const producto2 = new Producto("Fideos", "Don Vicente", 380, 35); //instanciar

//operador in
/*  
 console.log(producto1.nombre);
 console.log(producto2.nombre);
 console.log(producto1.mostrar()); */

// bucle for in
/* console.log(producto1['nombre']);
for(const prop in producto2){
  console.log(prop + ": " + producto2[prop]);
}
 */

//Array
const numeros = [1, 2, 3, 4, 5, 6, 7, 78];
const nombres = ["Juan", "Seba", "Iara", "German", "Maria"];
const booleanos = [true, false, false, true];
const mixtos = [-1, "Perro", true, "20", [0]];
const cajonDeCubiertos = ["cuchara", "tenedor", "cuchillo", "cucharita"];
/* console.log(cajonDeCubiertos[1]);
console.log(cajonDeCubiertos[0]);
console.log(cajonDeCubiertos[3]);
console.log(cajonDeCubiertos[4]);

cajonDeCubiertos[4]="cuchilla"
console.log(cajonDeCubiertos);
console.log(cajonDeCubiertos.length); */
//recorrer arrays
/* for (let i = 0; i < cajonDeCubiertos.length; i++) {
  console.log(cajonDeCubiertos[i]);
} */

//metodos
//agregar elementos los agrega al final del array
//console.log(nombres);
nombres.push("Juan Esteban", "Carlos");

//console.log(nombres);
/* 
//unshift agregar elementos al array al principio

nombres.unshift('Noelia')

console.log(nombres);
//quitar elementos pop
nombres.pop()
console.log(nombres);
//quitar del principio shift
nombres.shift();
console.log(nombres);

//splice
nombres.splice(2,2)//valor desde / cuantos
console.log(nombres);
//unir arrays concat()
const conjunto= numeros.concat(mixtos)
console.log(conjunto); */

//slice copia una porcion del array
const tajada = nombres.slice(1, 3);

//console.log(tajada);
//indexOf()
/* console.log(nombres.indexOf('Iara'));
console.log(nombres.indexOf('Maria'));
console.log(nombres.indexOf('Mario')); */

//includes
/* console.log(nombres.includes('Iara'));
console.log(nombres.indexOf('Iara'));
console.log(nombres.includes('Mario')); */

//arrays objetos

const libro = {
  nombre: "Cuentos completos",
  autor: "Edgard Alan Poe",
  precio: 12500,
  stock: 10,
};

function Libro(nombre, autor, precio, stock) {
  this.nombre = nombre;
  this.autor = autor;
  this.precio = precio;
  this.stock = stock;
}
const libro1 = new Libro(
  "Harry Potter y la camara delos secretos",
  "JK Rowling",
  5800,
  3
);

const libreria = [
  libro,
  {
    nombre: "Steve Jobs",
    autor: "Walter Isaacson",
    precio: 14500,
    stock: 8,
  },
];

libreria.push(libro1)
//console.log(libreria);
//recorrer array de objetos forof
/* for (const libro of libreria) {
  //console.log(libro);
  console.log(libro.nombre);
  console.log(libro.autor);
  console.log(libro.precio);
  console.log(libro.stock);
} */

const listaDeDeseos= [];

console.log(listaDeDeseos);

let limite = 2;

//pasra el dowhile a una funcion y que reciba parametro
do{
let nombre= prompt('INgresa nombre de libro')
let autor= prompt('INgresa autor de libro')
let precio= prompt('INgresa precio de libro')
let cant= prompt('INgresa cantida de libros')


//condicion de salida es el tamaño del array 
listaDeDeseos.push(new Libro(nombre, autor, precio, cant))

}while(listaDeDeseos.length != limite)
console.log(listaDeDeseos);

  for (const libro of listaDeDeseos) {
    console.log(libro.nombre);
    console.log(libro.autor);
    console.log(libro.precio);
    console.log(libro.stock);
  }
