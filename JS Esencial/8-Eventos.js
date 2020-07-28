"use strict"

//Eventos del mouse

const boton = document.querySelector(".boton"); //relacion con el archivo HTML

boton.addEventListener("click", function (){
    console.log("El boton fue clickeado")
})


boton.addEventListener("mouseover", function (){
    console.log("El mouse esta sobre el boton")
})


boton.addEventListener("mouseout", function (){
    console.log("El mouse esta fuera del boton")
})

/*Eventos del teclado
keydown: tecla apretada
keypress: tecla presionada
keyup: tecla liberada
el metodo .keycode nos entrega el numero de tecla, pero para saber la tecla hay que asignarlo un objeto
string con el metodo fromCharCode*/

window.addEventListener("keydown", function (event) { //se asigna a window porque aplica a toda la ventana
    console.log("Tecla apretada")
    console.log(String.fromCharCode(event.keyCode))
})

window.addEventListener("keypress", function (event) {
    console.log("Tecla pulsada")
})

window.addEventListener("keyup", function (event) {
    console.log("Tecla liberada")
})

//carga de documento: cuando todos los elementos se terminaron de cargar

window.addEventListener("load", function () {
    console.log("Todo el contenido fue cargado")
})

//Eventos multimedia: conocer eventos de audios y videos:

const video = document.querySelector(".perritoVideo");

video.addEventListener("play", function () {
    console.log("Video iniciado")
})

video.addEventListener("seeking", function () {
    console.log("Buscando en el video", this.currentTime) //el metodo currentTime especifica el minuto del video en el que se esta buscando
})

video.addEventListener("ended", function () {
    console.log("Video finalizado")
})

/*Uso de timer o temporizadores, se utilizan dos metodos setInterval para acciones repetitivas y 
setTimeOut para timer de una vez*/


/*var Temporizador = setInterval(function () {
    setColor()
}, 2000)*/

setTimeout(function () {
    setColor()
}, 3000) // se ejecuta solo una vez cada 3 segundos definidos en milisegundos (3000)

function setColor() {
    var pagina = document.body;
    pagina.style.backgroundColor = pagina.style.backgroundColor == "blue" ? "green" : "blue"
}

function stopChangeColor() {
    clearInterval(Temporizador)
} //esta funcion para la ejecucion del intervalo










