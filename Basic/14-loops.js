// loops o bucles

// for -> Se usa para realizar loops donde sepamos la cantidad de veces que se va a repetir
for (i = 1; i < 5; i++){ // Por ejemplo contar del 1 al 5
    console.log(i)
}

for (i = 0; i <= 5; i++){
    console.log("hola") // 5 veces hola
}

// Recorrer un array de frutas
const frutas = ["Manzana", "Banana", "Naranja"];

for (i = 0; i < frutas.length; i++) {
  console.log("Fruta:", frutas[i]); // frutas[i] = un elemento concreto.
}

// while -> Evalua antes de la condicion e itera
let numeros = 0

while (numeros < 10){
console.log(numeros)
numeros++

}
console.log("#######")

// do while -> Primero hace X funcion mientras que se cumpla la condicion. Minimo se ejecuta una vez
let u = 0
do {
    console.log(u++)
} while(u > 6)
console.log("#######")

// for of es un bucle que itera sobre valores iterables como arrays, strings, maps, sets, etc. A diferencia de for...in, que itera sobre propiedades/índices, for...of da directamente los valores.
miSet = new Set(["Jose", "Manuel", 23, "Soldadojimenezj@gmail.com"])

for (let valor of miSet){
    console.log(valor)
}

miCadena = "Hola Javascript"

for(let valor of miCadena){
    console.log(valor)
}

// Buenas practicas -> Break y continue
for (i = 1; i < 5; i++){ 
    if (i == 5){
        continue // Se salta el numero y sigue iterando hasta que se cumpla la condicion
    } else if (i == 6){
        break // Se para cuando llega al 6
    }
    console.log(i)
}