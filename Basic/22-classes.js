// ==========================
// CLASES BÁSICAS
// ==========================

class Persona {
    constructor(nombre, edad, alias){
        this.nombre = nombre
        this.edad = edad
        this.alias = alias
    }
}

// Crear instancia
let persona = new Persona("Jose", 24, "Soldado")
console.log(persona)
console.log(typeof persona) // "object"

// ==========================
// VALORES POR DEFECTO
// ==========================

class DefectoPersona {
    constructor(nombre = "Por defecto", edad = 0, alias = "Sin alias"){
        this.nombre = nombre
        this.edad = edad
        this.alias = alias
    }
}

let persona2 = new DefectoPersona("Jose Manuel")
console.log(persona2)

// Acceso y modificación de propiedades
console.log(persona2.alias)
console.log(persona2["alias"])

persona2.alias = "Jose Manuel Soldado"
console.log(persona2.alias)

// ==========================
// MÉTODOS EN CLASES
// ==========================

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

// ==========================
// PROPIEDADES PRIVADAS
// ==========================

class PersonaPrivada {
    #bank

    constructor(nombre, edad, profesion, bank){
        this.nombre = nombre
        this.edad = edad
        this.profesion = profesion
        this.#bank = bank
    }
}

let persona5 = new PersonaPrivada("Mario", 45, "Contable")
// console.log(persona5.bank) // ❌ No se puede acceder, es privada

// ==========================
// GETTERS Y SETTERS
// ==========================

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

    get bank(){
        return this.#bank
    }

    set bank(newBank){
        if(newBank.startsWith("IBANES")) {
            this.#bank = newBank
        } else {
            console.log("Cuenta invalida")
        }
    }
}

let persona8 = new GetSetPersona("Segismundo", 50, "Segis")
console.log(persona8.nombre)
persona8.bank = "IBANES348957239804570982375"
console.log(persona8.bank)

// ==========================
// HERENCIA Y SOBRESCRITURA
// ==========================

class Animal { // Clase padre
    constructor(name){
        this.name = name
    }
    sound(){
        console.log("Sonido genérico")
    }
}

class Dog extends Animal { // Clase hija
    constructor(name, breed){
        super(name)
        this.breed = breed
    }

    run(){
        console.log(`${this.name} corre rápido`)
    }

    sound(){ // Sobrescritura del método
        console.log("Guau guau! 🐶")
    }
}

let miPerro = new Dog("Oddie", "Beagle")
miPerro.run()   // "Oddie corre rápido"
miPerro.sound() // "Guau guau! 🐶"





