//Trabajando con promesas para recibir datos de diferentes fuentes

var boton = document.getElementById("boton");
var contBanderas = document.getElementById("banderas");
var contenedor = document.getElementById("contenedor");
var mensajes = document.getElementById("mensajes");


boton.addEventListener("click", function () {  
    getPosts() 
        .then(data => data.json())
        .then(posts => {
            mostrarDatos(posts);
            return getCountries();
        })
        .then(data => data.json())
        .then(countries => {
            mostrarBanderas(countries);
        })
        .catch(error => { //catch captura los errores
            mensajes.classList.toggle("hide"); //el metodo classList.toggle desasigna la clase "ocultar"
            mensajes.innerHTML = error;
            setTimeout(() => mensajes.classList.toggle("hide"), 3000) //muestra el mensaje y lo oculta luego de 3 segundos
        })        
})

function getPosts() { 
    return fetch("https://jsonplaceholder.typicode.com/posts"); //asigna el fetch a una funcion para reutilizarlo
}

function getCountries() { 
    return fetch("https://restcountries.eu/rest/v2/all"); 
}


function mostrarBanderas(countries) {
    contBanderas.innerHTML = "";
    countries.map((country, i) => { //el metodo .map() llama a la funcion callback por cada elemento del arreglo y construye un arreglo con cada elemento
        let bandera = document.createElement("img");
        bandera.src = country.flag;
        bandera.width = "20";
        bandera.height = "20";
        contBanderas.appendChild(bandera);
    })
}


function mostrarDatos(posts) {
    posts.map((post, i) => { //el metodo .map() llama a la funcion callback por cada elemento del arreglo y construye un arreglo con cada elemento
        let titulo = document.createElement("h1");
        let contenido = document.createElement("p");

        titulo.innerHTML = (i + 1) + "-" + post.title;
        contenido.innerHTML = post.body;

        contenedor.appendChild(titulo);
        contenedor.appendChild(contenido);
    })
}

//manejo de errores

