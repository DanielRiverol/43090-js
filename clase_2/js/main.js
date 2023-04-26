/* 
let nombre1 = prompt("Escribe tu nombre");
alert("Hola "+ nombre1 + " Bienvenido/a al Sitio"); */
const GRAVEDAD = 9.8;
/* let num1 = prompt("Ingresa un número");
let num2 = parseFloat(prompt("Ingresa un número"));

num1 = Number(num1);


let suma = num1 + num2;

console.log("El resultado de la suma es: " + suma); */
//alert(suma)
//SI condicion Entonces Algo

let arcoiris = true;
let caida = false;

if (caida) {
  console.log("Nos salvamos");
}

let numero1 = 11;

//Operador de comparacion ==  = asignacion
/* 
if (numero1 == 15) {
  console.log("es igual");
} else {
  console.log("NO es Igual");
}
 */

/* let ingreso= prompt("Ingresa tu nombre")

if(ingreso == ""){
  console.log('Los campos no pueden estar vacios');
}else{
  console.log("Hola "+ ingreso + " Bienvenido/a al Sitio");
}
 */

//if concatenados

let temp = 99;
/* 
if (temp < 20) {
  console.log("La temperatura es menor a 20 grados");
} else if (temp < 40) {
  console.log("La temperatura es menor a 40 grados");
} else if (temp < 60) {
  console.log("La temperatura es menor a 60 grados");
} else {
  console.log("La temperatura es mayor o igual a 100 grados");
}
 */
let edad = 17;
/* 
if (edad >= 18) {
  console.log("Podes entrar al casino");
} else {
  console.log("No podes entrar al casino");
} */

//variables booleanas

//console.log(temp);
let esMayor = temp >= 100;
//console.log(esMayor);

//console.log("Fin del codigo");
//== valores === valores y tipo de dato
/* if (1 === "1") {
  console.log("Cierto");
}else{
  console.log("Falso");
} */

/* 
let user = prompt("Ingresa tu usuario");
let pass = prompt("Ingresa tu password");


if (user === "Jose") {
  let pass = prompt("Ingresa tu password");
  if (pass === "tarola") {
    console.log("Bienvenido Jose");
  } else {
    console.log("Error");
  }
} else {
  console.log("Hola desconocido");
} */

/* let user = prompt("Ingresa tu usuario");
let pass = prompt("Ingresa tu password"); */

//AND devuelve TRUE cuando (comp1 ==true) && (comp2 == true)
/* 
console.log((user === "Jose" || user === "jose"));
if ((user === "Jose" || user === "jose") && pass === "12345") {
  console.log("Hola Jose");
} else {
  console.log("Hubo error");
}
 */

//OR devuelve TRUE cuando (caso 1) O (caso 2) es true

let edadObligatoria = 18;
let edadOptativa = 16;
let edadLimite = 69;
let edadUsuario = parseInt(prompt("Ingresá tu edad"));

if (edadUsuario >= edadObligatoria && edadUsuario <= edadLimite) {
  alert("Estás obligado/a a Votar");
} else if (edadUsuario >= edadOptativa || edadUsuario > edadLimite) {
  alert("Podés votar, si querés");
} else {
  alert("No podés votar todavía");
}
