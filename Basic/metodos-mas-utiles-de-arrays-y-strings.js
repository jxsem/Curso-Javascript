// 📌 RESUMEN DE MÉTODOS DE ARRAYS Y STRINGS EN JAVASCRIPT
// =======================================================

// ===============================
// 🔹 MÉTODOS DE ARRAYS
// ===============================

// forEach → recorre cada elemento (no devuelve nada)
[1, 2, 3].forEach(num => console.log(num)); // 1 2 3

// map → crea un nuevo array transformando cada elemento
let cuadrados = [1, 2, 3].map(num => num ** 2);
console.log(cuadrados); // [1, 4, 9]

// filter → devuelve los elementos que cumplen una condición
let pares = [1, 2, 3, 4].filter(num => num % 2 === 0);
console.log(pares); // [2, 4]

// reduce → reduce el array a un único valor
let suma = [1, 2, 3, 4].reduce((acum, num) => acum + num, 0);
console.log(suma); // 10

// find → devuelve el primer elemento que cumple la condición
let encontrado = [10, 20, 30].find(num => num > 15);
console.log(encontrado); // 20

// findIndex → devuelve el índice del primer elemento que cumple
let indice = [10, 20, 30].findIndex(num => num > 15);
console.log(indice); // 1

// includes → true/false si contiene el valor
console.log(["rojo", "azul"].includes("rojo")); // true

// some → true si ALGUNO cumple la condición
console.log([1, 2, 3].some(num => num > 2)); // true

// every → true si TODOS cumplen la condición
console.log([2, 4, 6].every(num => num % 2 === 0)); // true

// sort → ordena (por defecto como strings)
let ordenados = [3, 1, 2].sort((a, b) => a - b);
console.log(ordenados); // [1, 2, 3]

// reverse → invierte el orden
let invertidos = [1, 2, 3].reverse();
console.log(invertidos); // [3, 2, 1]

// slice → copia una parte (no modifica el original)
let parte = [1, 2, 3, 4].slice(1, 3);
console.log(parte); // [2, 3]

// splice → añade/elimina elementos (sí modifica)
let arr = [1, 2, 3];
arr.splice(1, 1, 99); // desde índice 1, elimina 1, inserta 99
console.log(arr); // [1, 99, 3]

// concat → une arrays sin modificar
let unido = [1, 2].concat([3, 4]);
console.log(unido); // [1, 2, 3, 4]

// join → convierte en string
let textoArray = ["Hola", "Mundo"].join(" ");
console.log(textoArray); // "Hola Mundo"

// flat → aplana arrays anidados
let plano = [1, [2, 3], [4, [5]]].flat(2);
console.log(plano); // [1, 2, 3, 4, 5]



// ===============================
// 🔹 MÉTODOS DE STRINGS
// ===============================

// length → devuelve la longitud del string
let saludo = "Hola Mundo";
console.log(saludo.length); // 10

// toUpperCase → convierte a mayúsculas
console.log(saludo.toUpperCase()); // "HOLA MUNDO"

// toLowerCase → convierte a minúsculas
console.log(saludo.toLowerCase()); // "hola mundo"

// trim → elimina espacios al inicio y al final
let texto = "   Hola   ";
console.log(texto.trim()); // "Hola"

// split → convierte el string en array según un separador
let palabras = saludo.split(" ");
console.log(palabras); // ["Hola", "Mundo"]

// join → para arrays, ya visto arriba, se usa para unir en string
console.log(palabras.join("-")); // "Hola-Mundo"

// includes → true/false si contiene substring
console.log(saludo.includes("Mundo")); // true

// startsWith → true si empieza con substring
console.log(saludo.startsWith("Hola")); // true

// endsWith → true si termina con substring
console.log(saludo.endsWith("Mundo")); // true

// indexOf → posición de la primera aparición, -1 si no existe
console.log(saludo.indexOf("Mundo")); // 5

// lastIndexOf → posición de la última aparición
console.log("abcabc".lastIndexOf("a")); // 3

// replace → reemplaza substring por otro (solo la primera)
console.log(saludo.replace("Mundo", "JS")); // "Hola JS"

// replaceAll → reemplaza todas las coincidencias
console.log("abc abc abc".replaceAll("abc", "123")); // "123 123 123"

// slice → extrae parte del string
console.log(saludo.slice(0, 4)); // "Hola"

// substring → similar a slice
console.log(saludo.substring(0, 4)); // "Hola"

// charAt → devuelve carácter en posición
console.log(saludo.charAt(1)); // "o"

// split + reverse + join → invertir palabras
console.log(saludo.split(" ").reverse().join(" ")); // "Mundo Hola"
