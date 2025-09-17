miArray = [1, 2, 3, 4]

let person = {
    name: "jose",
    age: 24,
    alias: "soldado"
}
// Desestructuración -> extraer valores de arreglos o propiedades de objetos y asignarlos a variables de manera directa.
// Sintaxis array
let [valor1, valor2, valor3, valor4] = miArray

console.log(valor1)
console.log(valor2)
console.log(valor3)
console.log(valor4)

// Sintaxis array con valores predeterminados
let [valor5, valor6, valor7, valor8, valor9 = 0,] = miArray
console.log(valor9)

// Sintaxis objetos
let {name, age, alias} = person
console.log(name)
console.log(age)
console.log(alias)

// sintaxis objetos con valores predeterminados
let {name2, age2, alias2, email = "soldadojimenezj@gmail.com"} = person
console.log(name2) // No existe
console.log(age2) // No existe
console.log(alias2) // No existe
console.log(email)

// Sintaxis objetos con nuevos nombres de variables
let {name: name3, age: age3, alias: alias3} = person
console.log(name3)
console.log(age3)
console.log(alias3)

// Objetos anidados
let persona3 = {
    nombre: "Jose",
    edad: 24,
    alias: "Soldado",
    caminar: function(){
        console.log(`${this.nombre} está caminando`)
    },
    job: {
        name: "programador",
        exp: 0
    },
    work: function(){
        console.log(`${this.name} está trabajando`) // This, hace referencia a los metodos. 
    },
}

let {nombre: nombre2, job: {name: jobName}} = persona3
console.log(nombre2)
console.log(jobName)

// Propagación -> forma de expandir (desplegar) el contenido de un array u objeto. OPERADOR ...

let miArray2 = [...miArray] // Copia
let miArray3 = [...miArray, 5, 6, 7, 8, 9, 10]

console.log(miArray2)
console.log(miArray3)

// Combinacion de arrays

let miArray4 = [...miArray, ...miArray3, 11, 12, 13, 14, 15]
console.log(miArray4)

// Sintaxis objetos

let persona4 = {...person, email: "pepito123@gmail.com"}
console.log(persona4)