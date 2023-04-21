//Variable
//declaracion ES5
/* var nombre;
var nombre;  
NO LO USAMOS MÁS*/
//Declaracion ES6
let apellido;
let apellido1;
let edad;
let direccion;

//asignacion de valores o datos
// Operador de asiganacion =
apellido = "Perez"; //String
apellido1 = "Gutierrez"; //String
direccion = "Calle falsa 123"; //String
edad = 40; //Number

console.log(apellido);

let dia = "Lunes";
let nombre = "Juan";

//reasignar un val;or a una variable
apellido = "Lucero";

console.log(apellido);
//const
const PI = 3.14159;
const IVA = 21;
const GRAVEDAD = 9.8;

let resultado = PI + 4; //7.14159 Suma
let gravedadPorIva = GRAVEDAD * IVA; //multiplicacion
let nombreCompleto = nombre + " " + apellido; //JuanPerez CONCATENACION de Variables

//metodo de salida
/* console.log(PI);
console.log(IVA);
console.log(resultado);
console.log(gravedadPorIva);
console.log(nombreCompleto);
 */
//PI=4 NO VALIDO EN JS (POR AHORA)

console.log(
  "El resultado de la suma entre " + PI + " y " + 4 + " es " + resultado
);
//alert()

//alert("El resultado de la suma entre " + PI + " y " + 4 + " es " + resultado )

//prompt('mensaje')
/* 
let nombre1 = prompt("Escribe tu nombre");
alert("Hola "+ nombre1 + " Bienvenido/a al Sitio"); */

let num1 = prompt("Ingresa un número");
let num2 = parseFloat(prompt("Ingresa un número"));

num1= Number(num1);


let suma = num1 + num2;

console.log("El resultado de la suma es: " + suma);
