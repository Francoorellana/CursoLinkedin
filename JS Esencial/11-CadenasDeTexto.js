"use strict"

//Crear cadenas de texto

var pais = "Argentina"; //forma mas facil y recomendada
var comida = String("Ensalada")

//Medir una cadena de texto: propiedad .lenght

var mensaje = "Hola Don pepito"

console.log(mensaje.length)

//Metodos de de busqueda
var mensaje1 = "Estoy aprendiendo JS y estoy aprendiendo mucho"
var resultado

//indexOf: indica a partir de que caracter empieza la palabra que buscamos
resultado = mensaje1.indexOf("aprendiendo")
//lastIndexOf: indica a partir de que caracter es la ultima vez que aparece la palabra

resultado = mensaje1.lastIndexOf("aprendiendo")

//Search: similar a indexOf
resultado = mensaje1.search("aprendiendo")

//search || Expresion regular: busca una union de caracteres y arroja la ubicacion

resultado = mensaje.search(/ja/i) //la propiedad i no distingue entre mayusculas y minusculas

//match: devuelve la palabra que buscamos en forma de arreglo

resultado = mensaje1.match(/aprendiendo/gi) //la propiedad g busca en todo el texto (globalmente)

//substr: recibe dos parametros, el principio de donde queremos buscar y el final, devuelve pedazos de texto
resultado = mensaje1.substr(6,11)
//substring: recibe dos parametros, el primero cuenta desde donde queremos empezar y el ultimo se cuenta a partir del primer caracter del mensaje

resultado = mensaje1.substring(6,17)

//charAt: Devuelve un caracter que se busque
resultado = mensaje1.charAt(3) //se cuenta desde 0

console.log(resultado)


var mensaje2 = "            Estoy aprendiendo Javascript             "
var resultado1

//startsWith: verifica si "empieza con", es sensible a mayusculas y minusculas
resultado1 = mensaje2.startsWith("Estoy") //puede recibir un segundo argumento desde donde quiere buscar

//endWith: verifica si "finaliza con"
resultado1 = mensaje2.endsWith("sCript")

//includes: varifica si una cadena de texto esta incluida en el mensaje
resultado1 = mensaje2.includes("apren")

//Metodos de generacion, reemplazo y separacion

//repeat: repite el texto infinitas veces
resultado1 = mensaje2.repeat("N VECES")

//replace: reemplaza
resultado1 = mensaje2.replace("aprendiendo","estudiando")

//slice: corta el texto desde, recibe dos argumentos
resultado1 = mensaje2.slice(0,6)

//split: convierte la cadena de texto en un arreglo
resultado1 = mensaje2.split(" ")

//trim: elimina los espacios antes y despues de una cadena de texto
resultado1 = mensaje2.trim()


console.log(resultado1)

//Metodo de transformacion
var mensaje3 = "Estoy aprendiendo Javascript";
var mensaje4 = "y programacion";
var total = 1234

var resultado2

//convertir un numero en un texto
resultado2 = total.toString()
//tranformar todo el texto en minuscula
resultado2 = mensaje3.toLowerCase()
//transformar todo el texto a mayuscula
resultado2 = mensaje3.toUpperCase()
//concatenar texto
resultado2 = mensaje3.concat(mensaje4) //se pueden agregar la cantidad de argumentos que se necesiten

console.log(resultado2)

//*******Plantillas y literales *************//

var lenguaje = "Javascript";
var lenguaje2 = "HTML";
var mensaje5 = `Me gusta ${lenguaje} y ${lenguaje2}` //se utilizan las `` y el signo ${} para concatenar 

console.log(mensaje5)

//Mensaje multilinea
var mensajeMultilinea = `
    Hola Mundo
    Estoy aprendiendo ${lenguaje}
    y me gusta su integracion con ${lenguaje2}` //respeto la literalidad, espacios y saltos de linea

console.log(mensajeMultilinea)

















