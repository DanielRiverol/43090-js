//bucle for
/* for (let i = 10; i < 10; i++) {
  console.log(i);
} */
//Ya llegamos a la india
/* for (let i = 1; i <= 3; i++) {
  alert("Ya llegamos a la India?");
  alert("NO");
}

alert("A ver... YA!!!"); */
//

/* alert("Podeis hacerme 3 preguntas");
alert("Que bueno porque solo necesito una");
for (let i = 1; i <= 3; i++) {
  let pregunta = prompt("");
  let respuesta;
  if (pregunta != "usted?") {
    respuesta = "Si";
    alert(respuesta);
  } else {
    respuesta = "Así es... espero que los haya iluminado... ";
    alert(respuesta);
  }
}
alert("Gracias vuelva pronto"); */

/* let ingreso = parseInt(prompt("Ingresa un numero para multiplicar"));
let limite = parseInt(prompt("Ingresa hasta que numero quieres multiplicar"));

for (let i = 0; i <= limite; i++) {
  let resultado = ingreso * i;
  console.log(
    "El resultado de " + ingreso + " x " + i + " es igual a: " + resultado
  );
} */
//break
/* let palabraClave = "menta";

for (let i = 1; i <= 3; i++) {
  let ingreso = prompt("Ingresa la palabra clave");
  if (ingreso == palabraClave) {
    console.log("Adivinaste");
    break;
  }else{
    imprimir el valor de i
    queda de tarea
  }
}
console.log("Siguiente"); */

//continue

//modulo devuelve el resto de una division
/* for (let i = 0; i <= 10; i++) {
  if (i % 2 != 0) {
    console.log("impar");
    continue;
  }
  console.log(i);
}
 */

//While
/* let i = 0;

while (i < 10) {
  console.log(i);

  //condicion de salida
  i++;
} */
/* 
let pregunta = prompt("Ya llegamos a la India?");

while (pregunta != "si") {
  //condicion de salida
  pregunta = prompt("Ya llegamos a la India?");
}
console.log("Llegamos!!!"); */

/* let ingresoProducto = prompt("Ingresa un producto. Para salir ingresa 0");

while (ingresoProducto != "0") {
  console.log("Ingresaste el producto: " + ingresoProducto);

  //condicion de salida
  ingresoProducto = prompt("Ingresa otro producto. Para salir ingresa 0");
}
console.log("Termina el proceso"); */

// do while
/* while (false) {
  console.log("Me vas ver igual aunque la condicion es false");
} */
let ingresoProducto = prompt("Ingresa un producto. Para salir ingresa 0");

do {
  //codigo a ejecutar
  alert("Ingresaste el producto: " + ingresoProducto);

  //condicion de salida
  ingresoProducto = prompt("Ingresa otro producto. Para salir ingresa 0");
} while (ingresoProducto != "0");

alert("Gracias vuelva pronto");
