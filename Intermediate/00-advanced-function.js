// Funciones avanzadas

// Ciudadanos de primera clase

const greet = function (name){
    console.log(`Hola, ${name}`)
}
greet("Jose")

//Funcion que le pasamos como parametro otra funcion
function processGreeting(greetFunction, name){
    greetFunction(name)
}
processGreeting(greet, "Pedro")

// Funcion podria retornar otra funcion
function returnGreeting(name){
    return greet
}

console.log(returnGreeting())// Muestra funcion greet