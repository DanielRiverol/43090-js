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
const btnSearch = document.querySelector("#btnSearch"),
  inputIngreso = document.querySelector("#ingreso");
let contenedor = document.querySelector("#contenedor");

btnSearch.addEventListener("click", () => {
  const encontrado = buscarServicio(servicios, inputIngreso.value);
});

/* Ejemplo de registro  */
const inputUser = document.querySelector("#user"),
  inputPass = document.querySelector("#pass"),
  check = document.querySelector("#check"),
  formulario = document.querySelector("#form-login"),
  message = document.querySelector("#message");

function guardar(valor) {
  const user = { usuario: inputUser.value, pass: inputPass.value };
  //validar si los campos estan vacios
  /* if (valor === "sessionStorage") {
    sessionStorage.setItem("user", JSON.stringify(user));
  }
  if (valor === "localStorage") {
    localStorage.setItem("user", JSON.stringify(user));
  } */
  valor === "sessionStorage" &&
    sessionStorage.setItem("user", JSON.stringify(user));
  valor === "localStorage" &&
    localStorage.setItem("user", JSON.stringify(user));

  //return user;
}

function recuperarDatos(datos) {
  /*  if (datos) {
    inputUser.value = datos.usuario;
    inputPass.value = datos.pass;
  } */

  datos && ((inputUser.value = datos.usuario), (inputPass.value = datos.pass));
}

recuperarDatos(JSON.parse(localStorage.getItem("user")));

//
//Evento
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  /*  if (check.checked) {
    guardar("localStorage");
  } else {
    guardar("sessionStorage");
  }
 */
  //op ternario
  check.checked ? guardar("localStorage") : guardar("sessionStorage");
});

//Op ternario  condicion ? true : false;
let temp = 30;
/*  if(temp > 29){
  console.log('Dia caluroso');
}else{
   console.log('Dia agradable');
 } */

temp > 29 ? console.log("Dia caluroso") : console.log("Dia agradable");

const usuario = {
  nombre: "Juanito",
  apellido: "Arcoiris",
  edad: 15,
};

/* let permiso;
if (usuario.edad >= 18) {
  permiso = true;
} else {
  permiso = false;
}
if (permiso) {
  console.log("Podes entrar al casino");
} else {
  console.log("NO Podes entrar al casino");
} */

let permiso = usuario.edad >= 18 ? true : false;

permiso
  ? console.log("Podes entrar al casino")
  : console.log("NO Podes entrar al casino");

// AND &&
const carrito = [1];

/* if(carrito.length===0){
  console.log('El carrito esta vacio');
}
 */
carrito.length === 0 && console.log("El carrito esta vacio");

//Op OR ||

const usuario1 = {
  nombre: "Juanito",
  apellido: "Arcoiris",
  edad: 15,
};
const usuario3 = {
  nombre: "Lisa",
  apellido: "Mary",
  edad: 8,
  direccion_casa: "calle falsa 123",
};

const usuario2 = null;

console.log(usuario1 || "Usuario NO encontrado");
console.log(usuario2 || "Usuario NO encontrado");

/* let carrito1;
let carritoLS= JSON.parse(localStorage.getItem('carrito'));
if(carritoLS){
  carrito1 = carritoLS
}else{
  carrito1 = [];
}  */
let carrito1 = JSON.parse(localStorage.getItem("carrito")) || [];
console.log(carrito1);

//acceso condicional
console.log(usuario1?.nombre || "El usuario no existe");
console.log(usuario2?.nombre || "El usuario no existe");

//DESTRUCTURING
const { nombre, apellido, telefono } = usuario1;
//Alias
const {
  nombre: Nombre,
  apellido: Apellido,
  edad: Edad,
  direccion_casa: address,
} = usuario3;

/* console.log(nombre);
console.log(apellido); */
/* console.log(edad) */ //console.log(telefono);
/* console.log(Nombre);
console.log(Apellido);
console.log(Edad);

console.log(address); */

const desestructurar = (obj) => {
  const { nombre, apellido } = obj;
  console.log(`Hola ${nombre} ${apellido}, como estás?`);
};

/* desestructurar(usuario3);
desestructurar(usuario1); */

const desestructurar2 = ({ nombre, apellido }) => {
  console.log(`Hola ${nombre} ${apellido}, como estás?`);
};

//desestructurar2(usuario1);
//desestructurar2(usuario3);

//destructuring de arrays
const nums = [1, 2, 3, 4, 5, -98, 34, -8];

const [, a, , b, c, , d, e] = nums;
/* console.log(nums);
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

console.log(nums[1]); */
const grupo1 = ["Denise", "Juan", "Gaston", "Keila"];
const grupo2 = ["Pablo", "Pamela", "Dani", "Rodrigo"];

//spread operator ...
/* console.log(nums);
console.log(...nums);
console.log(nombres);
console.log(...nombres); */

//const grupo3= grupo1.concat(grupo2)
const grupo3 = [...grupo1, ...grupo2];

/* console.log(Math.min(...nums));
console.log(Math.max(...nums)); */
console.log(grupo3);

const persona = {
  nombre: "Pedro",
  apellido: "Lopez",
  nickname: "Pedrito",
};

const persona2={
  ...persona, 
  nickname:"Pedro",
  edad:14
}

console.log(persona);
console.log(persona2);
//Rest Params
const calcular=(...arr)=>{
  console.log(arr);
  return arr.reduce((acc, el)=>{
    return acc + el
  },0)
}

console.log(calcular());
console.log(calcular(2));
console.log(calcular(2,3));
console.log(calcular(2,3,5,2,45,7,4,3,6));

