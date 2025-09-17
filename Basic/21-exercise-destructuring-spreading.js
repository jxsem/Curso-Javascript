// 1. Usa desestructuración para extraer los dos primeros elementos de un array.
let array1 = [1,2,3,4,5]
let [valor1, valor2] = array1
console.log(valor1)
console.log(valor2)
// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable.
let [valor3, valor4, valor5, valor6, valor7, valor8 = 0] = array1
console.log(valor1)
console.log(valor2)
console.log(valor3)
console.log(valor4)
console.log(valor5)
console.log(valor6)
// 3. Usa desestructuración para extraer dos propiedades de un objeto.
let cuentaBancaria = {
    entidadBancaria: "Santander",
    usuario: 78108393,
    cantidadBanco: 4039,
    cuentaAhorros: false,
}

let {entidadBancaria, cantidadBanco} = cuentaBancaria
console.log(entidadBancaria)
console.log(cantidadBanco)
// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas a nuevas variables con nombres diferentes.
let {entidadBancaria: entidadBancaria2, cantidadBanco: cantidadBanco2} = cuentaBancaria
console.log(entidadBancaria2)
console.log(cantidadBanco2)
// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado.
let cuentaBancariaPedro = {
    entidadBancaria: "Santander",
    usuario: 24234503,
    cantidadBanco: 7684,
    cuentaAhorros: false,
    work: {
        jobName: "Contable",
        exp: 12,
        job: function(){
            console.log("Está en su turno de 8:00 - 17:00")
        }
    }
}
let {entidadBancaria: entidadBancaria3, work: {jobName: nombreTrabajo, exp: experiencia}} = cuentaBancariaPedro
console.log(nombreTrabajo)
console.log(experiencia)

// 6. Usa propagación para combinar dos arrays en uno nuevo.
let nuevoArray = [12,11,10,9,8]
let nuevoArray2 = [7,6,5,4,3,2,1,0]

let arrayConjunto = [...nuevoArray, ...nuevoArray2]
console.log(arrayConjunto)
// 7. Usa propagación para crear una copia de un array.
let arrayCopia = [...nuevoArray]
console.log(arrayCopia)
// 8. Usa propagación para combinar dos objetos en uno nuevo.
let combinado = {...cuentaBancaria, ...cuentaBancariaPedro};
console.log(combinado);
// 9. Usa propagación para crear una copia de un objeto.
let cuentaBancariaIrene = {

}
cuentaBancariaIrene = {...cuentaBancariaPedro}
console.log(cuentaBancariaIrene)
// 10. Combina desestructuración y propagación.
let numerosBase = [1, 2, 3];
let numerosExtendidos = [...numerosBase, 4, 5, 6]; // propagación
let [primero, segundo, ...resto] = numerosExtendidos; // desestructuración

console.log(primero); // 1
console.log(segundo); // 2
console.log(resto);   // [3, 4, 5, 6]
