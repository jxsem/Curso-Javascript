// 1. Imprime por consola tu nombre si una variable toma su valor.
let nombre = "Jose";
if (nombre === "Jose"){
    console.log(nombre)
} else{
    console.log("Nombre equivocado.")
}

// 2. Imprime por consola un mensaje si el usuario y contraseña coinciden con unos establecidos.
let password = 1234
let user = "jose.tech"
if (user === "jose.tech" && password === 1234){
    console.log("Credenciales correctas")
} else{
    console.log("Credenciales incorrectas.")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje.
let number = 1
if (number < 0){
    console.log("El numero es negativo")
}else if(number > 0){
    console.log("El numero es positivo")
}else{
    console.log("El numero es cero.")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan.
let age = 19;
let mayoria_edad = 18;
if (age < mayoria_edad){
    console.log("Eres menor de edad y te faltarian " + (mayoria_edad - age) + " años para poder votar")
} else{
    console.log("Puedes votar")
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad.
const mensaje = age == 18 ? "Es adulto" : "Es menor"
// 6. Muestra en qué estación del año nos encontramos dependiendo del valor de una variable "mes".
let mes = "Enero"

if (mes == "Noviembre" || mes == "Diciembre" || mes == "Enero"){
    console.log("Estamos en invierno")
}else if(mes == "Febrero" || mes == "Marzo" || mes == "Abril" || mes == "Mayo"){
    console.log("Primavera")
}else if(mes === "Junio" || mes == "Julio" || mes == "Agosto"){
    console.log("Verano")
}else if(mes == "Septiembre" || mes == "Octubre"){
    console.log("Otoño")
}else{
    console.log("Mes invalido")
}
// 6. Estación del año según el mes
mes = "Enero"

if (mes === "Diciembre" || mes === "Enero" || mes === "Febrero") {
    console.log("Estamos en invierno")
} else if (mes === "Marzo" || mes === "Abril" || mes === "Mayo") {
    console.log("Primavera")
} else if (mes === "Junio" || mes === "Julio" || mes === "Agosto") {
    console.log("Verano")
} else if (mes === "Septiembre" || mes === "Octubre" || mes === "Noviembre") {
    console.log("Otoño")
} else {
    console.log("Mes inválido")
}

// 7. Número de días que tiene un mes
if (mes === "Enero" || mes === "Marzo" || mes === "Mayo" || mes === "Julio" ||
    mes === "Agosto" || mes === "Octubre" || mes === "Diciembre") {
    console.log("El mes tiene 31 días")
} else if (mes === "Abril" || mes === "Junio" || mes === "Septiembre" || mes === "Noviembre") {
    console.log("El mes tiene 30 días")
} else if (mes === "Febrero") {
    console.log("El mes tiene 28 o 29 días")
} else {
    console.log("Mes inválido")
}

// 8. Saludo según idioma usando switch
let idioma = "fr"
switch (idioma) {
    case "es":
        console.log("Hola")
        break
    case "en":
        console.log("Hello")
        break
    case "fr":
        console.log("Bonjour")
        break
    default:
        console.log("Idioma no reconocido")
}

// 9. Switch para estación del año según mes
switch (mes) {
    case "Diciembre":
    case "Enero":
    case "Febrero":
        console.log("Estamos en invierno")
        break
    case "Marzo":
    case "Abril":
    case "Mayo":
        console.log("Primavera")
        break
    case "Junio":
    case "Julio":
    case "Agosto":
        console.log("Verano")
        break
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
        console.log("Otoño")
        break
    default:
        console.log("Mes inválido")
}

// 10. Switch para número de días del mes
switch (mes) {
    case "Enero":
    case "Marzo":
    case "Mayo":
    case "Julio":
    case "Agosto":
    case "Octubre":
    case "Diciembre":
        console.log("El mes tiene 31 días")
        break
    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
        console.log("El mes tiene 30 días")
        break
    case "Febrero":
        console.log("El mes tiene 28 o 29 días")
        break
    default:
        console.log("Mes inválido")
}

