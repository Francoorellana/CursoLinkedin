"use strict"

//alertas: Se utilizan para alertar al usuario de algo grave en la pagina, no se debe abusar de ellas.

/*const video = document.querySelector(".perritoVideo")

video.addEventListener("ended", function () {
    alert("MENSAJE \n El video ha finalizado"); // con \n se realiza salto de linea
})*/

//ventanas de confirmacion: hacer una pregunta al usuario y tomar una decision en funcion a su resp.

/*const video = document.querySelector(".perritoVideo")

video.addEventListener("ended", function () {
    let resultado = confirm("Deseas ver el video nuevamente"); //el metodo confirm da la opcion de aceptar (true) o cancelar (false)
    if(resultado){
        video.play() //el metodo play inicia el contenido multimedia
    }else{
        window.location = "http://www.youtube.com.ar";
    }
})*/

//ventana para ingreso de datos

const video = document.querySelector(".perritoVideo")

video.addEventListener("ended", function () {
    let email = prompt("Escribe tu correo para mas videos"); //el metodo prompt genera un campo para un string
    
    if(email == null || email == ""){
    console.log("Sin datos")
    }else{
    console.log(email)
    }
})
