// Strings

//Concatenacion
let myName = 'Jose'
let greeting = 'Hola, ' + myName
console.log(greeting)
console.log(typeof greeting)

//Longitud
console.log(greeting.length)

// Acceso a caracteres
console.log(greeting[0])
console.log(greeting[1])

// Métodos comunes 
console.log(greeting.toUpperCase()) // Convierte el texto en mayusculas.
console.log(greeting.toLowerCase()) // Convierte el texto en minusculas.
console.log(greeting.indexOf("Jose")) // Indice donde encuentra esa palabra.
console.log(greeting.includes("Jose")) // Incluye el caracter Jose? -> True
console.log(greeting.includes("Pedro")) // Incluye el caracter Pedro? -> False
console.log(greeting.slice(0, 9)) // Imprime desde el caracter 0 hasta el carácter 9 -> Hola, Jos

// Plantillas literales 
let mensaje = `Hola, esto
es un mensaje
tabulado`

console.log(mensaje)
console.log(`Hola ${myName}`)
