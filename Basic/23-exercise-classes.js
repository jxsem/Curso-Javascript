// 1. Crea una clase que reciba dos propiedades.
// 2. Añade un método a la clase que utilice las propiedades.
// 3. Muestra los valores de las propiedades e invoca a la función.
// 4. Añade un método estático a la primera clase.
// 5. Haz uso del método estático.
// 6. Crea una clase que haga uso de herencia.
// 7. Crea una clase que haga uso de getters y setters
// 8. Modifica la clase con getters y setters para que use propiedades privadas.
// 9. Utiliza los get y set y muestra sus valores.
// 10. Sobrescribe un método de una clase que utilice herencia.

class Ordenador {
    constructor (model, cpu){
        this.model = model
        this.cpu = cpu
    }
    turnOn(){
        console.log("Se está encendiendo.")
    }
    static compareCPU(ordenador1, ordenador2){ // Método estatico: sirve para crear funcionalidades que están ligadas a la clase, pero no a un objeto concreto.
        if (ordenador1.cpu == ordenador2.cpu){
            return("Los ordenadores tienen la misma cpu")
        } else{
            return("Tienen diferente CPU")
        }
    }
}
let ordenador1 = new Ordenador("MacBook", "M4");
let ordenador2 = new Ordenador("Dell XPS", "i7");

class Server extends Ordenador{
    #serialNumber
    #adminUser
    constructor(model, cpu, serialNumber, adminUser){
        super(model, cpu) // Llamada a la propiedad de Ordenador model y cpu
        this.#adminUser = adminUser
        this.#serialNumber = serialNumber
    }
    get serialNumber(){
        return this.#serialNumber
    }
    get adminUser(){
        return this.#adminUser
    }
    set serialNumber(serialNumber){ // Modificacion de la propiedad privada con control
        if(isNaN(serialNumber) || serialNumber.toString().length != 10){ 
            console.log("El serialNumber debe ser un número y debe contener");
        }else{
            this.#serialNumber = serialNumber 
        }
    }
    set adminUser(adminUser){
        if(adminUser == "Usuario-Superpoderes"){
            console.log("Usuario de administrador correcto")
        }else{
            console.log("Usuario de administrador incorrecto")
        }
    }
    turnOn(){
        console.log("Iniciando servidor")
    }
}

let server = new Server("Dell", "Xenon", 12930814,"Usuario-Superpoderes")
console.log(server)
server.adminUser = "Pacofiestas" // Admin Incorrecto
server.serialNumber = 12345 // Incorrecto

