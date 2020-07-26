const boton = document.querySelector(".boton");

/*boton.addEventListener("click", function () {
    console.log(this); //se accede a toda la etiqueta completa
    console.log(this.innerHTML) //se accede al texto de la etiqueta
})*/

boton.addEventListener("click", () => {
    console.log(this)
}) //con una arrow function se accede al elemento completo con todas sus propiedades