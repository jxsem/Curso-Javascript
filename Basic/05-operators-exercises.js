let sum = 5 + 3
let subtraction = 10 - 6
let multiplication = 4 * 7
let division = 20 / 4
let modulus = 9 % 2

// 2. Crea una variable para cada tipo de operaciÃ³n de asignaciÃ³n, que haga uso de las variables utilizadas para las operaciones aritméticas.

let number = 10
number += sum
number -= subtraction
number *= multiplication
number /= division
number %= modulus

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación.

console.log(5 > 3)
console.log(10 >= 10)
console.log(7 == "7")
console.log(8 != 9)
console.log(6 === 6)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación.

console.log(5 < 3)
console.log(10 < 5)
console.log(7 === "7")
console.log(8 != 8)
console.log(6 !== 6)

// 5. Utiliza el operador lógico and.

console.log(true && true)
console.log(5 > 3 && 10 > 5)

// 6. Utiliza el operador lógico or.

console.log(true || false)
console.log(5 > 3 || 10 < 5)

// 7. Combina ambos operadores lógico.

console.log((5 > 3 && 10 > 5) || (5 < 3 && 10 > 5))

// 8. AÃ±ade alguna negaciÃ³n.

console.log(!(5 < 3))

// 9. Utiliza el operador ternario.

let age = 18
let canVote = (age >= 18) ? "Puede votar" : "No puede votar"
console.log(canVote)

// 10. Combina operadores aritméticas, de comparación y lógico.

let result = (5 + 3) * 2 > 10 && (4 * 2) === 8;
console.log(result)