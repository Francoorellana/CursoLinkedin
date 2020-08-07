//Obteniendo datos con Fetch que recibe como parametro la URL de donde se sacan los datos y trabaja con promesas de recibir la info

var boton = document.getElementById("boton");
var contenedor = document.getElementById("contenedor");
var posts = null

boton.addEventListener("click", function() {

    fetch("https://jsonplaceholder.typicode.com/posts") //formate json
    .then(data => data.json()) //promesa 1: recibe la data y la convierte a un objeto json
    .then(data => {
        posts = data;
        mostrarDatos(posts)
    })
})

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