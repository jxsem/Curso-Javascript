// Objetos -> todo lo que no es un dato primitivo es un objeto; es una coleccion de propiedades y se estructura de una manera parecida a los mapas

// Sintaxis

let persona = {
    nombre: "Jose",
    edad: 24,
    alias: "Soldado"
}

// Acceso a propiedades

// Notacion punto
console.log(persona.nombre) // Recomendada esta forma
console.log(persona.edad)

// Notacion de corchetes
console.log(persona["nombre"]) 

// Modificacion de valores

persona.alias = "Programador"
console.log(persona.alias)

// Eliminacion de propiedades 
delete persona.edad 
console.log(persona)

// Nueva propiedad

persona.email = "soldadojimenezj@gmail.com"
console.log(persona)
persona.edad = 24
console.log(persona)

// Metodos (funciones)
let persona2 = {
    nombre: "Jose",
    edad: 24,
    alias: "Soldado",
    caminar: function(){
        console.log("Está caminando")
    }
}

persona2.caminar()

// Anidacion de objetos

let persona3 = {
    nombre: "Jose",
    edad: 24,
    alias: "Soldado",
    caminar: function(){
        console.log(`${this.nombre} está caminando`)
    },
    job: {
        name: "programador",
        exp: 0
    },
    work: function(){
        console.log(`${this.name} está trabajando`) // This, hace referencia a los metodos. 
    },
}

console.log(persona3)

console.log(persona3.job.name) // programador

// Igualdad de objetos
let persona4 = {
    nombre: "Jose",
    edad: 24,
    alias: "Soldado"
}

console.log(persona == persona4) // False -> se compara la direccion de memoria. llegamos a su referencia en memoria
console.log(persona.name == persona4.name) // True -> si queremos comparar ambos objetos tenemos que accede a su propiedad

// iteracion

for(let key in persona4){ // Cuando iteramos accedemos a las claves
    console.log(key + ": " + persona4[key]) // Ahora accedemos a la clave y al valor.
}

// Buenas practicas
const persona5 = {
  nombre: "Ana",
  saludar() {
    console.log(this.nombre); // this es una palabra clave especial que hace referencia a un objeto, pero el objeto al que apunta depende de dónde y cómo se use.
  }
};
persona5.saludar(); // "Ana"


// funciones como objetos

// Definición de una función constructora
function Person(name, age){
    this.name = name; // 'this' se refiere al objeto que se va a crear
    this.age = age;   // se asigna la propiedad 'age'
}

// Creación de un objeto usando 'new'
let persona6 = new Person("Jose", 24);

console.log(persona6);
