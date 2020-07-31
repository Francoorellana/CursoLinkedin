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
//resultado = mensaje1.indexOf("aprendiendo")
//lastIndexOf: indica a partir de que caracter es la ultima vez que aparece la palabra

//resultado = mensaje1.lastIndexOf("aprendiendo")

//Search: similar a indexOf
//resultado = mensaje1.search("aprendiendo")

//search || Expresion regular: busca una union de caracteres y arroja la ubicacion

//resultado = mensaje.search(/ja/i) //la propiedad i no distingue entre mayusculas y minusculas

//match: devuelve la palabra que buscamos en forma de arreglo

//resultado = mensaje1.match(/aprendiendo/gi) //la propiedad g busca en todo el texto (globalmente)

//substr: recibe dos parametros, el principio de donde queremos buscar y el final, devuelve pedazos de texto
//resultado = mensaje1.substr(6,11)
//substring: recibe dos parametros, el primero cuenta desde donde queremos empezar y el ultimo se cuenta a partir del primer caracter del mensaje

//resultado = mensaje1.substring(6,17)

//charAt: Devuelve un caracter que se busque
resultado = mensaje1.charAt(3) //se cuenta desde 0




console.log(resultado)