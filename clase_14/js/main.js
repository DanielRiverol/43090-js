document.title = "Clase 14 | Comisión 43090";
const titulo = document.querySelector("h1 span"),
  tituloSecundario = document.querySelector("h2#secundario");

titulo.innerText = "Clase 14";
tituloSecundario.innerText = "Librerías";

const btnSwal = document.getElementById("botonSwal"),
  btnToast = document.getElementById("botonToast"),
  horaActual = document.querySelector("#horaActual");

const creditCard = document.querySelector("#credit-card"),
  icons = document.querySelectorAll(".fa-brands");

btnSwal.addEventListener("click", () => {
  Swal.fire({
    title: 'Seguro quieres finalizar la compra?',
    showDenyButton: true,
    showCancelButton: false,
    confirmButtonText: 'Confirmar',
    denyButtonText: `Seguir comprando`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire('Serás redirigido a la pasarela de pagos!', '', 'success')
      /* funcion que redirija */
    } else if (result.isDenied) {
      Swal.fire('Serás redirigido nuevamente al store!', '', 'warning')
/* redirigir al store */
      
    }
  })
});
/* Toastify */
btnToast.addEventListener("click", () => {
  Toastify({
    text: "Producto agregado",
    duration: 3000,
    gravity: "bottom", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "blue",
    },
    onClick: function(){Swal.fire("Hola")} // Callback after click
  }).showToast();
 
});

/* LUXON */
const DateTime= luxon.DateTime

const dt= DateTime.now()
/* 
console.log(dt.toString());

console.log(dt.toLocaleString());
console.log(dt.toLocaleString({ month: 'short', day: 'numeric' }));
console.log(dt.toLocaleString(DateTime.DATE_FULL));
console.log(dt.toLocaleString(DateTime.TIME_SIMPLE));
console.log(dt.setLocale("fr").toFormat("MMMM dd, yyyy")); 
console.log(dt.setLocale("es").toFormat("MMMM dd, yyyy")); 
console.log(dt.setLocale("en").toFormat("MMMM dd, yyyy")); 
console.log(dt.setLocale("ru").toFormat("MMMM dd, yyyy"));  */






const btnCalcular = document.querySelector("#calcular");
let dates = document.querySelectorAll('input[type="date"]');


let inicio= DateTime.now().toFormat('yyyy-MM-dd')
let fin= DateTime.now().plus({months:2}).toFormat('yyyy-MM-dd')
 dates.forEach(element=>{
  element.setAttribute('min', inicio)
  element.setAttribute('max', fin)
 })

 function calcularEstadia(checkin, chekout){
  return chekout.diff(checkin).as('days')
 }

 function calcularPrecioTotal(estadia, precio){
  return estadia * precio
 }
btnCalcular.addEventListener("click", () => {
  let checkIn = DateTime.fromISO(document.getElementById("checkIn").value);
  let checkOut = DateTime.fromISO(document.getElementById("checkOut").value);

  let estadia= calcularEstadia(checkIn, checkOut)
  let precioTotal= calcularPrecioTotal(estadia, 3000)
  console.log(estadia);
console.log(precioTotal);

Swal.fire({
  title: "Resultado",
  text: `Tu estadía de ${estadia} días tiene un precio total de $${precioTotal}`,
  icon: "info",
  iconColor: "#00ff00",
  showCancelButton: true,
  confirmButtonText: "Confirmar",
  cancelButtonText: "Cancelar",
  position: "top-center",
  backdrop: "#445566aa",
});

});




