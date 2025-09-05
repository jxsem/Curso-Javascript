// 1. Imprimir los números del 1 al 20
for (let i = 1; i <= 20; i++){
    console.log(i)
}

// 2. Sumar todos los números del 1 al 100 y mostrar el resultado
let suma = 0 // Inicio porque si no nunca iteraría
for (let i = 1; i <= 100; i++){
    suma += i
}
console.log(suma) // Fuera del bucle para que cuando termine salte a la siguiente orden

// 3. Imprimir todos los números pares entre 1 y 50
for (let i = 1; i <= 50; i++){
    if (i % 2 == 0){
        console.log(i)
    }
}
// 4. Imprimir cada nombre de un array de nombres
let miArray = ["Jose", "Pablo", "Irene", "Rosa", "Juan", "Laura"]
for (let miValor of miArray){
    console.log(miValor)
}
// 5. Contar el número de vocales en una cadena de texto
let cadenaTexto = "Hipopótamo";
let contadorVocales = 0;

for (let i = 0; i < cadenaTexto.length; i++) {
  let letra = cadenaTexto[i].toLowerCase(); // pasamos a minúscula
  if ("aeiouáéíóú".includes(letra)) { // includes sirve para comprobar si una cadena contiene otra cadena, o si un array contiene un valor.
    contadorVocales++;
  }
}
console.log("Vocales de la cadena de texto: " + contadorVocales);

// 6. Multiplicar todos los números de un array y mostrar el producto
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let multiplicacion = 1

for (let valorArray of numeros){
    multiplicacion *= valorArray
}
console.log("Producto: " + multiplicacion)
// 7. Imprimir la tabla de multiplicar del 5
let number = 5

for (let i = 1; i <= 10; i++){
    console.log("5 * 1 = " + i * 5)
}
// 8. Invertir una cadena de texto
let texto = "Hipopotamo";   // la cadena original
let invertido = "";         // empezamos con una cadena vacía

for (let i = texto.length - 1; i >= 0; i--) { // texto.lenght -1 da el índice del último carácter, porque los índices empiezan en 0, luego i-- significa “resta 1 a i” → vamos hacia atrás en la cadena.
  invertido += texto[i];   // Este código se ejecuta en cada vuelta del bucle. Toma la letra en la posición i y la añade a la variable invertido.
}

console.log(invertido);     // "omatpopiH"


// 9. Generar los primeros 10 números de la secuencia de Fibonacci
let fibonacci = [0, 1]; // primeros dos números La secuencia de Fibonacci empieza con 0 y 1, y cada número siguiente es la suma de los dos anteriores.

for (let i = 2; i < 10; i++) { // i = 2 porque los dos primeros ya están en el array.
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]; //fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2] → suma los dos anteriores.
}

console.log(fibonacci); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// 10. Crear un nuevo array con los números mayores a 10 de un array dado
let arrayNumeros = [5, 12, 8, 20, 3, 15];
let mayoresDe10 = [];

for (let i = 0; i < arrayNumeros.length; i++) {
  if (arrayNumeros[i] > 10) { // si el indice del array[i] es menor que 10 -> Arraynumeros[i] significa: “toma el valor del array en la posición i”.
    mayoresDe10.push(arrayNumeros[i]); // Añade el numero mayor que diez al array mayores que 10
  }
}

console.log(mayoresDe10); // [12, 20, 15]

