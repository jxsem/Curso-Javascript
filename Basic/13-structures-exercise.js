// 1. Crea un array que almacene cinco animales.
let animales = ["Perro", "Gato", "Elefante", "Serpiente", "Araña"]
// 2. Añade dos más. Uno al principio y otro al final.
animales.unshift("Gusano")
animales.push("saltamontes")
console.log(animales)
// 3. Elimina el que se encuentra en tercera posición.
animales.splice(2, 1)  // 2 es el índice de inicio (tercer elemento, porque los índices empiezan en 0). 1 es la cantidad de elementos a eliminar desde ese índice
console.log(animales)
// 4. Crea un set que almacene cinco libros.
let set = new Set(["Cien años de soledad", "1984", "El principito", "Don Quijote de la Mancha","La sombra del viento"])
// 5. Añade dos más. Uno de ellos repetido.
set.add("Clean Code")
set.add("La sombra del viento")
console.log(set)
// 6. Elimina uno concreto a tu elección.
set.delete("Don Quijote de la Mancha")
console.log(set)
// 7. Crea un mapa que asocie el número del mes a su nombre.
let mapa = new Map([
    ["Enero", 1]
    ["Febrero", 2]
    ["Marzo", 3]
    ["Abril", 4]
    ["Mayo", 5]])
// 8. Comprueba si el mes número 5 existe en el map e imprime su valor.
if (mapa.has(5)) {
    console.log(mapa.get(5)); // Mayo
}
// 9. Añade al mapa una clave con un array que almacene los meses de verano.
mapa.set("Verano", ["Junio", "Julio", "Agosto"]);
console.log(mapa);
// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map.
let numerosArray = [1, 2, 2, 3, 4, 4, 5];
let numerosSet = new Set(numerosArray);
let mapFinal = new Map();
mapFinal.set("NumerosUnicos", numerosSet);
console.log(mapFinal);
