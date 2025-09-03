// 1. Crea un array que almacene cinco animales.
let animales = ["Perro", "Gato", "Elefante", "Serpiente", "Araña"]
// 2. Añade dos más. Uno al principio y otro al final.
animales.unshift("Gusano")
animales.push("saltamontes")
console.log(animales)
// 3. Elimina el que se encuentra en tercera posición.
animales.splice(2, 1) 
console.log(animales)
// 4. Crea un set que almacene cinco libros.
let set = new Set(["Cien años de soledad", "1984", "El principito", "Don Quijote de la Mancha","La sombra del viento"])
// 5. Añade dos más. Uno de ellos repetido.
set.add(["Clean Code"])
set.add(["La sombra del viento"])
// 6. Elimina uno concreto a tu elección.
set.delete("Don Quijote de la Mancha")
// 7. Crea un mapa que asocie el número del mes a su nombre.
let mapa = new Map([
    ["Enero", 1]
    ["Febrero", 2]
    ["Marzo", 3]
    ["Abril", 4]
    ["Mayo", 5]
    ["Junio", 6]])
// 8. Comprueba si el mes número 5 existe en el map e imprime su valor.
mapa.has(5)
// 9. Añade al mapa una clave con un array que almacene los meses de verano.

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map.
