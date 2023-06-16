document.addEventListener("DOMContentLoaded", function () {
  const elems = document.querySelectorAll("select");
  const instances = M.FormSelect.init(elems);
});

const options = [
  {
    value: "book_author",
    option: "Autor",
  },
  {
    value: "book_title",
    option: "Título",
  },
  {
    value: "category",
    option: "Categoría",
  },
  {
    value: "keyword",
    option: "Palabra clave",
  },
  {
    value: "publisher_date",
    option: "Año",
  },
  {
    value: "publisher",
    option: "Editorial",
  },
  {
    value: "lang",
    option: "Idioma",
  },
];



//Selectores
const contenedor = document.querySelector("#contenedor"),
  input_search = document.querySelector("#input_text"),
  selectOption = document.querySelector(".select-option"),
  btnSearch = document.querySelector("button.btn");

const crearHTML = (arr) => {
  let html;
  contenedor.innerHTML = "";
  if (arr.length != 0) {
    //arr.forEach(item=>{})
    for (const item of arr) {
      //desetructurar item
      html = `
      <div class="col s12 m4">
      <div class="card medium">
        <div class="card-image">
          <img src="${item.cover}" alt="" />
        </div>
        <div class="card-content">
          <span class="card-title activator grey-text text-darken-4 truncate"
            >${item.title}<i class="material-icons right">more_vert</i></span
          >
          <div class="card-action">
            <a href="${item.url_download}" target="_blank">Descargar</a>
          </div>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4"
            >${item.title}<i class="material-icons right">close</i></span
          >
          <ul class="collapsible">
            <li>
              <div class="collapsible-header">
                <i class="material-icons">chevron_right</i>Autor
              </div>
              <div class="collapsible-body"><span>${item.author}</span></div>
            </li>
            <li>
              <div class="collapsible-header">
                <i class="material-icons">chevron_right</i>Descripción
              </div>
              <div class="collapsible-body"><span>${item.content_short}</span></div>
            </li>
            <li>
              <div class="collapsible-header">
                <i class="material-icons">chevron_right</i>Editorial
              </div>
              <div class="collapsible-body"><span>${item.publisher}</span></div>
            </li>
            <li>
              <div class="collapsible-header">
                <i class="material-icons">chevron_right</i>Año
              </div>
              <div class="collapsible-body">
                <span>${item.publisher_date}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    
       `;

      contenedor.innerHTML += html;
    }
    //necesario para el desplagable libreria de matetialize
    let elems1 = document.querySelectorAll(".collapsible");
    let instances1 = M.Collapsible.init(elems1);
  } else {
    contenedor.innerHTML =
      "No hay resultados, modifique los criterios de búsqueda.";
  }
};

//Funciones

/* console.log(fetch("https://www.etnassoft.com/api/v1/get/?id=589"));

fetch("https://www.etnassoft.com/api/v1/get/?id=589")
.then(res => res.json())
.then(libro=>{
console.log(libro[0]);
console.log(libro[0].title);
}) */

function fetchAPI(param, filtro) {
  let URL = `https://www.etnassoft.com/api/v1/get/?${param}=${filtro}`;

  fetch(URL)
    .then((res) => res.json())
    .then((libros) => {
      crearHTML(libros);
    });
}
/* 
fetchAPI('id', '589')
fetchAPI('author', 'javascript') */

//listeners
btnSearch.addEventListener("click", () => {
  contenedor.innerHTML = `<div class="progress">
                            <div class="indeterminate"></div>
                          </div> `;
  fetchAPI(selectOption.value, input_search.value);
});
