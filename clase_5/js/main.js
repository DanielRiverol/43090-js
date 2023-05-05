const calcular = (n1, n2, op) => {
  switch (op) {
    case "+":
      return n1 + n2;
    case "-":
      return n1 - n2;
    case "*":
      return n1 * n2;
    case "/":
      if (n2 != 0) {
        return n1 / n2;
      } else {
        return "NO es posible la division por 0";
      }

    default:
      return "Opción no válida";
  }
};

/* let suma = calcular(33, 29, "+");
console.log(suma);
let resta = calcular(33, 29, "-");
console.log(resta);
let multi = calcular(33, 29, "*");
console.log(multi);
let divi = calcular(33, 12, "/");
console.log(divi);
let error = calcular(22, 44, "o");
console.log(error); */

/* function cambiarNombre(param) {
  let nombre = param;
  return nombre;
} */
//funcion anonima
/* const cambiarNombre = function (param) {
  let nombre = param;
  return nombre;
};
 */
//funcion flecha

/* const cambiarNombre = (param) => param; //return implicito

console.log(cambiarNombre("Seba"));
console.log(cambiarNombre("Keila")); */
//objeto literal
const contacto = {
  nombre: "Carlota", //atributo: valor
  tel: "8763876487652743",
  direccion: "Calle falssa 123",
  edad: 65,
  hobby: "Tejer",
};

const contacto1 = {
  nombre: "Julian", //atributo: valor
  tel: "09886757654",
  direccion: "Calle Tinogasta 232",
  email: "juli@mail.com",
};

/* console.table(contacto); */
/* console.log(contacto["nombre"]);
console.log(contacto["email"]);
console.log(contacto.tel);
console.log(contacto1);
console.log(contacto1["nombre"]);//corchetes
console.log(contacto1["email"]);
console.log(contacto1.nombre);//notacion punto */
/* contacto["email"]="carlota@mail";
contacto.tel1="989899789867";
console.table(contacto); */

//funcion constructora
function Producto(nombre, marca, precio = 0, stock) {
  this.nombre_producto = nombre;
  this.marca = marca;
  this.precio = precio;
  this.stock = stock;
  //methods
  this.vender = (cant) => {
    //validar cuando cantidad sea mayor que el stock
    this.stock = this.stock - cant;
  };
  this.mostrar = () =>
    "Producto: " + this.nombre_producto + " Marca: " + this.marca;
}

let marcaArroz = "gallo";

const producto1 = new Producto("arroz", marcaArroz, undefined, 20); //instanciar
const producto2 = new Producto("fideos", "Don Vicente", 380, 35); //instanciar

/* console.log(producto1.nombre_producto);
console.log(producto1.precio);
console.log(producto1.marca);
console.log(producto2.nombre_producto);
console.log(producto2.precio); */

console.log(producto1.stock);
producto1.vender(5);
producto1.vender(5);
producto1.vender(5);
producto1.vender(5);
producto1.vender(5);
console.log(producto1.stock);
console.log(producto1.mostrar());
console.log(producto2.stock);
console.log(producto2.mostrar());
producto2.vender(5)
console.log(producto2.stock);