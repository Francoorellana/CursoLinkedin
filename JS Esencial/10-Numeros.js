"use strict"

//Propiedades numericas

console.log("Max Value: ", Number.MAX_VALUE) //Maximo numero positivo que puede manejar js

console.log("Min Value: ", Number.MIN_VALUE ) //Minimo numero positivo que puede manejar js

console.log("Negative Infinity: ", Number.NEGATIVE_INFINITY) //Infinito negativo, nunca termina

console.log("Positive Infinity: ", Number.POSITIVE_INFINITY) //Infinito positivo, nunca termina

console.log("NaN: ", Number.NaN) //NOT A NUMBER, para hacer comparaciones

//Metodos numericos

var numero = "10.50";

console.log("Number: ", Number(numero))//convierte un string en un numero
console.log("ParseInt: ", parseInt(numero))//convierte un numero en un entero
console.log("ParseFloat: ", parseFloat(numero))//muestra el numero con decimales
console.log("isNan: ", isNaN(numero))//verifica si es o no un numero
console.log("isInteger: ", Number.isInteger(numero))//verifica si es entero

//Metodo numerico de las instancias

var numero2 = 2.5;

console.log("toExponential: ", numero2.toExponential(2)) //devuelve un numero exponencial
console.log("toFixed: ", numero2.toFixed(2)) //ajusta el numero para manejar los decimales que necesitemos 
console.log("toPrecision: ", numero2.toPrecision(6)) //da una precision del numero agregando decimales
console.log("toString: ", numero2.toString()) //convierte el numero en un string
