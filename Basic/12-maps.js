// Map -> Diccionario es una coleccion de elmentos que almacena pares clave-valor
// Las claves son unicas, pero los valores pueden repetirse
// Mantiene el orden de insercion de las claves.


// Declaracion.
let miMapa = new Map()

console.log(miMapa)

// Inicializacion 

miMapa = new Map([
    ["nombre", "Jose"], // clave -> valor
    ["edad", 24],
    ["email", "soldadojimenezj@gmail.com"]
])

console.log(miMapa)

// Metodos y propiedades 

// set
miMapa.set("alias", "joselito")
miMapa.set("name", "Jose Manuel") // No puede haber repetidos, la clave se actualiza
console.log(miMapa)

// get
console.log(miMapa.get("name")) // Busca por clave cual es el valor de ésta
console.log(miMapa.get("surname")) // Undefined porque está intentando acceder a la clave y no la encuentra

// has
console.log(miMapa.has("surname")) // Contiene la clave surname? -> booleano devuelve true o false

// delete
miMapa.delete("email")
console.log(miMapa) // Borra el email del mapa

// keys
console.log(miMapa.keys()) // Te dice las claves que tiene el mapa.

//values
console.log(miMapa.values()) // Te dice los valores que tiene el mapa

// size
console.log(miMapa.size) // Te dice el tamaño de elementos que hay en el mapa.

//entries
console.log(miMapa.entries()) // Recorre el mapa y te dice clave y valor

// clear
miMapa.clear() // Borra el mapa
console.log(miMapa)

