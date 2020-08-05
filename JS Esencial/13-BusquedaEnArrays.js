//iterando con for..in repite el proceso por la cantidad de elementos que tenga el arreglo
var platillos = ["ceviche", "tacos", "pasta"]

//for(let i in platillos){
    //console.log(platillos[i])
//} 

//forEach, recibe una funcion
//platillos.forEach(platillo => console.log(platillo)) //se envia un parametro para acceder a los elementos
//platillos.forEach((platillo,i) => console.log(i,platillo)) //tambien se puede acceder al elemento y su indice

//buscar en un arreglo
var deportes = ["fulbol","voley","handball"]
var dElegido = deportes.find( deporte => deporte == "voley") //busca el valor y lo asigna a la variable


var menu = [
    {nombre: "Pasta", precio: 20, pais: "Italia"},
    {nombre: "Tacos", precio: 50, pais: "Mexico"},
    {nombre: "Torta", precio: 20, pais: "Mexico"},
]

var pElegido = menu.find( platillo => platillo.nombre == "Pasta") //devuelve el objeto completo 

//Busqueda de indices, para devolver el indice del elemento

var numPlatillo = platillos.findIndex( platillo => platillo == "pasta") //sensible a mayusculas y minusculas

var numPlatillo = menu.findIndex( platillo => platillo.nombre == "Pasta") //sensible a mayusculas y minusculas


//Filtrar arreglos: El metodo find retorna el primer valor

var resultado = null
var resultado = menu.filter( platillo => platillo.pais == "Mexico") //devuelve todos los resultados

//Validar eleementos dentro de un arreglo: posibles if

//resultado = menu.some( platillo => platillo.precio > 10) //devuelve un true si la condicion se cumple

resultado = menu.every( platillo => platillo.precio > 60) //evalua si se cumple la condicion para todos los elementos

console.log(resultado) 


