//Clases: Son "moldes" de los datos con los que vamos a trabajar y para declararlos se debe anticipar un "new"
//propiedades: caracteristicas del objeto
//metodos: capacidades/atributos, cosas que puede hacer

//Herencia de metodos y propiedades: Asignar una clase generica a otras mas pequeñas, padres e hijos

class Producto{
    constructor(numSerie){
        this.numSerie = numSerie;
        this.tiempoGarantia = 100;
    }
    static get infoTienda(){ //el metodo static hace que se acceda a pesar de que no haya una instancia declarada
        console.log(`Producto de la tienda Patito Inc`)
    }
    set garantia(value){
        this.tiempoGarantia -= value;
    }
    get garantia(){
        return this.tiempoGarantia;
    }
}

class Pantalla extends Producto { //estructura base de una clase. La palabra extends indica que Pantalla hereda los metodos de Producto y todos sus atributos
    constructor(numSerie,marca, modelo, pulgadas){ //las propiedades se indican dentro del constructor
        super(numSerie); //pantalla no tiene como propiedad el numero de serie, si lo tiene el padre y por eso se puede acceder a el
        this.marca = marca,        //se utiliza el metodo this para inicializar la propiedad
        this.modelo = modelo,
        this.pulgadas = pulgadas
    }

    encendido(){   //se definen los metodos como una funcion sin necesidad de poner la palabra function
        this.garantia = 1; //se accede a garantia porque es un metodo del padre
        console.log(`La pantalla ${this.marca} se ha encendido`)
    }

    volumen(){ //entre llaves se indica lo que realiza
        console.log(`El volumen se ha modificado`)
    }

    info(){
        console.log(`La pantalla ${this.marca} de modelos ${this.modelo} es de ${this.marca}`)
    }
    //para agregar propiedades se utiliza el metodo set y get
    set peso (value){
        this.kgs = value.trim();
    }

    get peso (){
        return this.kgs;
    }
}

const tvSala = new Pantalla("12345","Master", "Oasis", 55); //instancia
const tvHabitacion = new Pantalla("4556","Origin", "Artemis", 80);









