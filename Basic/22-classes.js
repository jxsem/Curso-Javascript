// clases -> son una forma de crear objetos y trabajar con ellos de manera más organizada

class Persona {
    constructor(nombre, edad, alias){
        this.nombre = nombre
        this.edad = edad
        this.alias = alias
    }
}

// Sintaxis

let persona = new Persona("Jose", 24, "Soldado")
console.log(persona)

console.log(typeof persona) // objeto


// Valores por defecto
class DefectoPersona {
    constructor(nombre = "Por defecto", edad = 0, alias = "Sin alias"){
        this.nombre = nombre
        this.edad = edad
        this.alias = alias
    }
}

let persona2 = new DefectoPersona("Jose Manuel")
console.log(persona2)

// Acceso a propiedades

console.log(persona2.alias)
console.log(persona2["alias"])

// Modificación de propiedades
persona2.alias = "Jose Manuel Soldado" 
console.log(persona2.alias)


// Funciones en clases

class OtraPersona {
    constructor(nombre, edad, profesion){
        this.nombre = nombre
        this.edad = edad
        this.profesion = profesion
    }
    walk(){
        console.log("Está caminando")
    }
}

let personaNueva = new OtraPersona("Pedro", 31, "Analista de datos")
personaNueva.walk()

// Acceso privado a las clases
class PersonaPrivada{

    #bank // Sintaxis de la propiedad privada

    constructor(nombre, edad, profesion, bank){
        this.nombre = nombre
        this.edad = edad
        this.profesion = profesion
        this.#bank = bank
    }

}

let persona5 = new PersonaPrivada ("Mario", 45, "Contable")

console.log(persona5.bank) // No se puede acceder a la propiedad bank

// Getter: permite acceder a un valor privado de forma controlada.
// Setter: permite modificar un valor privado validando o encapsulando la lógica.
class GetSetPersona {
    #nombre
    #age
    #alias
    #bank

    constructor(nombre, age, alias, bank){
        this.#nombre = nombre
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    }

    get nombre(){
        return this.#nombre
    }
    get bank (){ // Sirve para leer una propiedad privada
        return this.#bank
    }
    set bank(newBank) { // Sirve para modificar una propiedad privada pero con control
        if(newBank.startsWith("IBAN")) {
            this.#bank = newBank;
        } else {
            console.log("Cuenta invalida")
        }
    }
}

persona8 = new GetSetPersona("Segismundo", 50, "Segis")
console.log(persona8.nombre)
persona8.bank = "IBAN348957239804570982375"
console.log(persona8.bank)