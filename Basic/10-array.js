// Array -> Coleccion de elementos.

// ¿Como se declara?
let mi_array = [] // Esta es la sintaxis mas recomendada
let mi_array2 = new Array()

console.log(mi_array)
console.log(mi_array2)

mi_array = [1, 2, 3, 4]
mi_array2 = new Array(3) // Se ha creado una lista con 3 huecos a ser rellenados

console.log(mi_array)
console.log(mi_array2)

mi_array = ["Jose", "Perro", 4, true] // Se puede mezclar cualquier tipo de dato
console.log(mi_array)

mi_array[0] = "Irene"
mi_array[1] = "Gato"
console.log(mi_array)

// Metodos comunes -> push y pop

// Metodo push.
mi_array.push("Pedro") // Añade elementos al final del array
mi_array.push(24)
mi_array.push("Granada")
mi_array.push("Desarrollo web")
console.log(mi_array)

//Metodo pop
mi_array.pop() // Elimina el ultimo elemento del array.
console.log(mi_array) // Deberia de borrar desarrollo web

console.log(mi_array.pop()) //Elmina el elemento y lo imprime

 // shift y unshift
mi_array.shift(); // Borra el primer elemento del array
console.log(mi_array); // Borraría irene.

mi_array.unshift("Desarrollo"); // Añade elemento al incio del array
console.log(mi_array) // Aparece al inicio Desarrolo

// Lenght
console.log(mi_array.length) // Longitud del array

// clear
mi_array = []
mi_array.length = 0
console.log(mi_array)

// slice
let nuevoArray = ["Nuevo", "Array", 24, "Granada"]
nuevoArray.splice(0, 2) // Imprime caracteres desde el indice X hasta el Y
console.log(nuevoArray)

nuevoArray.splice(1, 2, 3) // Añade el numero 3 desde la posición 2
console.log(nuevoArray)