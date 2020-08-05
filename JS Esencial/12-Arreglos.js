//Creando el primer arreglo, 2 maneras distintas de definirlos
var platillos = ["ceviche","tacos","pasta"];

var bebidas = new Array("Jamaica", "Chicha", "Cerveza")

//Medir y acceder a un arreglo, el contenido del arreglo comienza a contarse desde 0 al primer elemento

platillos.length //mide la cantidad de elementos del arreglo
platillos[0] //se accede al elemento del arreglo
console.log(platillos.length)
console.log(platillos[1])


//Arreglos multidimensionales: arreglos dentro de otros arreglos, como acceder al contenido

var menu = [ platillos, bebidas]

console.log(menu[0][0]) //entre corchetes se nombra indica el arreglo y luego el indice del "hijo"

//Operaciones de un arreglo: agregar, eliminar, pasar a string
platillos.push("Tostadas") //agregar
console.log(platillos)
platillos.pop("Tostadas") //eliminar
console.log(platillos)
var mensaje = platillos.join(); //pasar a string
console.log(mensaje)

//Generacion de arreglos: split, from, of

var mensaje1 = "ceviche, tacos, pasta";

var platos = mensaje1.split(", ") //convierte el string en un array
console.log(platos)

var platillosHTML = Array.from(document.querySelectorAll(".platillos p")) //se accede al parrafo pero no a su contenido
var platillos1 = platillosHTML.map( platillo => platillo.textContent )

var platillos2 = Array.of("Pan", "tacos", "carne") //convierte todo lo que se indique entre comillas en un arreglo

console.log(platillos2)

//Ordenando un arreglo: orden alfabetico .sort(), dando vuelta los elementos .reverse()


platillos.sort()
console.log(platillos)
platillos.reverse()
console.log(platillos) //modifica el orden como un espejo

//Desestructuracion de arreglos: Asignacion de elementos a un arreglo, a la inversa

var deportes = ["correr", "bicicleta", "futbol", "natacion"]

var [deporte1,deporte2,deporte3,deporte4] = deportes

console.log(deportes)





















