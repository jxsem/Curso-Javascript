// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios.

// 1. Crea una función que reciba dos números y devuelva su suma.
function suma(a, b){
    return a + b 
}
const resultado = suma(5, 2)
console.log(resultado)

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos.
let arrayNumeros = [34, 65, 23, 67, 89, 139, 4, 76];

function mayorQue(numeros) { // este parametro es como una variable interna de la funcion 
    let mayor = numeros[0]; // arrancamos con el primero
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i]; // actualizamos el mayor
        }
    }
    return mayor;
}

console.log(mayorQue(arrayNumeros)); // 139

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene.
let nombre = "Hipopotamo";

function contarVocales(texto) {
    texto = texto.toLowerCase(); // pasamos todo a minúsculas
    let contadorVocales = 0;

    for (let i = 0; i < texto.length; i++) {
        if ("aeiouáéíóú".includes(texto[i])) { // carácter del texto
            contadorVocales++; // el contador itera y se almacena
        }
    }

    return contadorVocales;
}

console.log(contarVocales(nombre)); // 5

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas.
let arrayString = ["gta v", "bo3", "rdd2", "zero horizon", "forza horizon"];

function mayusculas(arrayMayusculas){
    let nuevoArray = []; // 1️⃣ Creamos un array vacío
    arrayMayusculas.forEach((valor) => {
        nuevoArray.push(valor.toUpperCase()); // 2️⃣ Recorres el array y vinculas el nuevo array añadiendo los valores pero en mayuscula
    });
    return nuevoArray; // 3️⃣ Devolvemos el nuevo array
}

console.log(mayusculas(arrayString))

// ["GTA V", "BO3", "RDD2", "ZERO HORIZON", "FORZA HORIZON"]


// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario.

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos.

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares.

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado.

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso.

// 10. Crea una función que calcule el factorial de un número dado.
