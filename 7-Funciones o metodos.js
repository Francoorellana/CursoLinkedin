"use strict"

//Estructura basica de una funcion

function saludar(){
    var saludo = "hola mundo";
    return saludo //todas las funciones deben retornar un valor
}
saludar()

//Parametros de una funcion

function saludar(nombre, edad) { //los parametros pueden ser N cantidad 
    console.log("Hola", nombre);
    console.log("Edad", edad);
    var resultado = nombre + " tiene " + edad + " años ";
    return resultado;
}

var mensaje = saludar("Franco", 28);
console.log(mensaje)

//inicializacion de parametros
function contar(cantidad=20){ //valor por defecto
    console.log("Cantidad: ", cantidad);
}
contar(100) //reemplaza al valor por defecto

//parametros de tipo REST: se utilizan cuando no sabemos la cantidad total de parametros y se definen con tres puntos suspensivos precedentes

/*function cocinar(Ingrediente1, Ingrediente2, ...masIngredientes){
    console.log("Ingrediente 1: ", Ingrediente1);
    console.log("Ingrediente 2: ", Ingrediente2);
    console.log("mas Ingredientes: ", masIngredientes);
}
cocinar("Pollo", "arroz", "pimienta", "sal")
*/
//parametros de tipo SPREAD: se utilizan para "esparcir" los parametros y se definen con puntos suspensivos antes del primer parametro

function cocinar(Ingrediente1, Ingrediente2, Ingrediente3){
    console.log("Ingrediente 1: ", Ingrediente1);
    console.log("Ingrediente 2: ", Ingrediente2);
    console.log("Ingrediente 3: ", Ingrediente3);
}

var IngredienteBase = ["Pollo", "Arroz"];

cocinar(...IngredienteBase, "papa");

//funciones anonimas: no se les pasa un parametros

var saludar = function(){
    var mensaje = "hola de nuevo";
    return mensaje;
}

//Callbacks=funciones que reciben como parametros otras funciones

function calcular(datoA, datoB, sumarCB, restarCB){
    var suma = datoA + datoB;
    var restar = datoA - datoB;
    sumarCB(suma);
    restarCB(restar);
}

calcular(10, 5, function(resultado){
    console.log("Suma: ", resultado)
}, function(resultado){
    console.log("Resta: ", resultado)
})

//funcion arrow / fat arrow / lambda / funcion flecha: mas simples en su estructura

var saludar = nombre => "Hola " + nombre;

console.log(saludar("Susana"))

var sumar = cantidad => cantidad+10
console.log(sumar(10))

var calcular = (datoA, datoB) => datoA + datoB
console.log(calcular(10, 15))

var generar = (datoA, datoB) => {
    var datoC = 5;
    return datoA+datoB+datoC
}
console.log(generar(10,15));

var validar = () => {
    return "Validacion correcta";
}
console.log(validar())































