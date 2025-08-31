// 1. Concatena dos cadenas de texto
let cadena = 'Hola que tal'
let nombre = cadena + ' Javascript'

// 2. Muestra la longitud de una cadena de texto
console.log(nombre.length)

// 3. Muestra el primer y último carácter de un string
console.log(cadena[0])
console.log(cadena[cadena.length - 1])

// 4. Convierte a mayúsculas y minúsculas un string
console.log(nombre.toUpperCase())
console.log(nombre.toLowerCase())

// 5. Crea una cadena de texto en varias líneas
let template = `En varias
lineas de
texto`
console.log(template)

// 6. Interpola el valor de una variable en un string
let interpolar = `${nombre}`
console.log(interpolar)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(nombre.replace(/ /g, "-")) // (/ /g) busca todos los espacios

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(nombre.includes("Javascript"))

// 9. Comprueba si dos strings son iguales
console.log(nombre === cadena)

// 10. Comprueba si dos strings tienen la misma longitud
console.log(nombre.length === cadena.length)

