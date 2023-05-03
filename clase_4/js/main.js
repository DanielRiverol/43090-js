/* if (opcion == "1"||opcion ==='cafe') {
  console.log("Seleccionaste Café");
} else if (opcion == "2") {
  console.log("Seleccionaste Té");
} else if (opcion == "3") {
  console.log("Seleccionaste Chocolate");
} else if (opcion == "4") {
  console.log("Seleccionaste Agua caliente");
} else {
  console.log("Opción no válida");
} */
//switch
/* let opcion = prompt(
  "Ingrese una opción\n1-Café\n2-Té\n3-Chocolate\n4-Agua caliente"
);
switch (opcion) {
  case "1":
  case "cafe": //||
    console.log("Seleccionaste Café");
    break;
  case "2":
    console.log("Seleccionaste Té");
    break;
  case "3":
    console.log("Seleccionaste Chocolate");
    break;
  case "4":
    console.log("Seleccionaste Agua caliente");
    break;

  default:
    console.log("Opción no válida");
    break;
} */

//funciones
//decalracion
function saludar() {
  console.log("Hola bienvenido/a al sitio");
}
//llamado o invocacion
/* for (let i = 0; i < 10; i++) {
  saludar()
  
} */

//parametros
function saludarConParametros(nombre) {
  //parametro
  console.log("Hola " + nombre + " Bienvenido/a al sitio");
}
/* let usuario= prompt("Ingresa tu nombre");

saludarConParametros("Keila")//argumento
saludarConParametros("Ricardo")//argumento
saludarConParametros(usuario)//argumento
*/
/* let usuario = prompt("Ingresa tu nombre");
let momento = prompt("Ingresa el momento del dia"); */

function saludarNombreYMomento(nombre, momento) {
  console.log("Hola," + nombre + " bueno/as " + momento + "s"); //'Hola, Ricardo bueno/as dias'
  ///'Hola, Dani bueno/as tardes'
}
/* 
saludarNombreYMomento("Ricardo", "dia");
saludarNombreYMomento(usuario, momento);
saludarNombreYMomento(momento, usuario);
 */

/* let resultado = 0;

function sumar(n1, n2) {
  resultado = n1 + n2;
}

function mostrar(mensaje){
  console.log(mensaje);//resultado=18
}

sumar(12, 6)
mostrar(resultado) */

function sumar(n1, n2) {
  return n1 + n2;
  console.log("NO me vas a ver");
}

let resultado = sumar(12, 6);
let resultado1 = sumar(45, 22);

/* console.log(resultado);
console.log(resultado1); */

let resultado2 = sumar(resultado, resultado1);

/* console.log(resultado2); */

function calcular(n1, n2, op) {
  switch (op) {
    case "+":
      return n1 + n2;
    case "-":
      return n1 - n2;
    case "*":
      return n1 * n2;
    case "/":
      return n1 / n2;
    //que pasa con la division por 0?

    default:
      return "opcion no válida";
  }
}

/* let suma= calcular(33,29, "+")
console.log(suma);
let resta= calcular(33,29, "-")
console.log(resta);
let multi= calcular(33,29, "*")
console.log(multi);
let divi= calcular(33,29, "/")
console.log(divi);
let error = calcular(22, 44, "o")
console.log(error); */

//scope o ambito
let nombre = "Dani"; //ambito global

console.log(nombre);

if (true) {
  let nombre = "Juan"; //ambito o scope local
  console.log(nombre);
}

console.log(nombre);
function cambiarNombre(param) {
  let nombre = param;
  return nombre;
}

console.log(cambiarNombre("Seba"));
console.log(cambiarNombre("Keila"));
