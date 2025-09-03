// if (si)
let age = 37

if (age == 37) {
  console.log("La edad es 37")
}

// else (si no)
if (age == 37) {
  console.log("La edad es 37")
} else {
  console.log("La edad no es 37")
}

// else if (si no, si)
if (age == 37) {
  console.log("La edad es 37")
} else if (age < 18) {
  console.log("Es menor de edad")
} else {
  console.log("La edad no es 37 ni es menor de edad")
}

// Operador ternario
const message = age == 37 ? "La edad es 37" : "La edad no es 37" //condición ? valor_si_verdadero : valor_si_falso
const mensaje = age == 12 ? "La edad es 37" : "La edad no es 12"
console.log(message)
console.log(mensaje)

// switch -> es como una serie de ifs anidados 
let day = 3
let dayName

switch (day) {
  case 0:
    dayName = "Domingo"
    break
  case 1:
    dayName = "Lunes"
    break
  case 2:
    dayName = "Martes"
    break
  case 3:
    dayName = "Miércoles"
    break
  case 4:
    dayName = "Jueves"
    break
  case 5:
    dayName = "Viernes"
    break
  case 6:
    dayName = "Sábado"
    break
  default:
    dayName = "Número de día incorrecto"
}

console.log(dayName)
