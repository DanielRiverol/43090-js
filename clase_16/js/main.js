document.title = "Clase 16 | Comisión 43090";
const titulo = document.querySelector("h1 span"),
  tituloSecundario = document.querySelector("h2"),
  card = document.querySelector(".card");
const btn = document.querySelector("#btn"),
  contenedor = document.querySelector(".contenedor");

titulo.innerText = "Clase 16";
tituloSecundario.innerText = "AJAX y Fetch";
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

/* Funciones */
const renderServicios = (arr) => {
  contenedor.innerHTML = "";
  // función que genere la vista de los servicios
  let html;
  for (const item of arr) {
    const { id, nombre, img, precio } = item;

    html = `
        <div class="card">
      		<div class="card-image">
        	<img src="../img/${img}">
        	<span class="card-title">${nombre.toUpperCase()}</span>
       </div>
     	 <div class="card-content"> 
     		<p>$${precio}</p>
      </div>
      <div class="card-action">
        <button class="btn" id="${id}">Comprar</button>
      </div>
     </div>
     `;

    contenedor.innerHTML += html;
  }
};

//Promesas

let eventoFuturo = (response) => {
  return new Promise((resolve, reject) => {
    //cuerpo de la promesa
    if (response) {
      resolve("Promesa resuelta");
    } else {
      reject("Promesa rechazada");
    }
  });
};

/* console.log(eventoFuturo(true));
console.log(eventoFuturo(false)); */

const pedirHamburguesa = (pedido) => {
  return new Promise((resolve, reject) => {
    //cuerpo de la promesa
    setTimeout(() => {
      if (pedido) {
        resolve("Veni a retirar tu pedido");
      } else {
        reject("No hay papas");
      }
    }, 1500);
  });
};

/* console.log(pedirHamburguesa(false)); */
/* pedirHamburguesa(false)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  }).finally(()=>{
    console.log("Gracias vuelva pronto");
  }); */

/* PedirServicios */
function pedirServicios(arr) {
  return new Promise((resolve, reject) => {
    //cuerpo de la promesa
    contenedor.innerHTML='CARGANDO...⏱️ '
    setTimeout(() => {
      if (arr) {
        resolve(arr);
      } else {
        reject("Error de conexion");
      }
    }, 3000);
  });
}

let productos = [];
/* 
pedirServicios(servicios)
  .then((response) => {
    productos = response;
    renderServicios(productos)
  })
  .catch((err) => {
    console.log(err);
  }); */
const lista= document.querySelector('.lista')
  //fetch
/*   fetch('https://jsonplaceholder.typicode.com/posts/')
      .then(response => response.json())
      .then(data=> {
        console.log(data);
        data.forEach(post=>{
          console.log(post);
          console.log(post.title);
          const li= document.createElement('li')
          li.className='card'
          li.innerHTML=`
          <h2>${post.title}</h2>
          <p>${post.body}</p>`

          lista.appendChild(li)
        })
        
      }) */
/* datos locales */
      fetch('./data/db.json')
      .then(response=>response.json())
      .then(data=>{
        console.log(data);
        //renderServicios(data)
      })
      console.log("Hola tarola");

      //ASYNC Y AWAIT

      const fetchApi= async ()=>{
        const response= await fetch('./data/db.json');
        const data= await response.json()
        console.log(data);
        renderServicios(data)
      }
fetchApi()