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
function esPrimo(numero){
    if (numero <= 1) {
        return false; // los primos empiezan en 2
    }
    for (let i = 2; i < numero; i++){
        if (numero % i === 0){
            return false
        }else{
            return true
        }
    }    
}
console.log(esPrimo(7))
// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos.
function similitudArray(listaUno, listaDos) {
    // filter recorre cada elemento de listaUno
    return listaUno.filter(elemento => 
        // includes revisa si ese elemento está dentro de listaDos
        listaDos.includes(elemento)
    );
}

let array1 = ["Azul", "Verde", "Naranja", "Rosa"];
let array2 = ["Azul", "Violeta", "Amarillo", "Marron"];

// Paso a paso de filter + includes:
// 1. Toma "Azul" → ¿array2 incluye "Azul"? → true → lo guarda
// 2. Toma "Verde" → ¿array2 incluye "Verde"? → false → lo descarta
// 3. Toma "Naranja" → ¿array2 incluye "Naranja"? → false → lo descarta
// 4. Toma "Rosa" → ¿array2 incluye "Rosa"? → false → lo descarta

console.log(similitudArray(array1, array2)); // ["Azul"]

// 7. Sumar todos los números pares de un array
function sumaPares(numeros) {
    return numeros
        .filter(num => num % 2 === 0) // me quedo solo con los pares
        .reduce((acum, num) => acum + num, 0); // los sumo
}

console.log(sumaPares([1, 2, 3, 4, 5, 6])); // 12



// 8. Elevar al cuadrado cada número de un array
function cuadrados(numeros) {
    return numeros.map(num => num ** 2);
}

console.log(cuadrados([1, 2, 3, 4])); // [1, 4, 9, 16]



// 9. Invertir el orden de las palabras de una cadena
function invertirPalabras(texto) {
    return texto.split(" ").reverse().join(" ");
}

console.log(invertirPalabras("Hola mundo desde JavaScript"));
// "JavaScript desde mundo Hola"

// 10. Calcular el factorial de un número
function factorial(n) {
    if (n < 0) return "No existe factorial de negativos";
    if (n === 0) return 1;
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

console.log(factorial(5)); // 120

