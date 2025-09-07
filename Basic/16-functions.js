// Funciones -> Bloque de codigo diseñado para realizar una tarea 

function miFuncion(){
    console.log("Hola funcion")
}

for (i = 1; i < 5; i++){ 
    miFuncion()
}

// Con parámetros
function miFuncionParametros(nombre){
    console.log("hola " + nombre)
}

miFuncionParametros("jose")

// Funciones anonimas -> No tienen nombre y se guardan en una variable o una constante
const miFuncion2 = function(nombre){
    console.log("hola " + nombre)
}

miFuncion2("Jose Manuel")

// Funciones flecha -> Se usa en una sola linea
const funcionFlecha = (nombre) => console.log("Hola " + nombre)
funcionFlecha("Javascript")

// Parametros
function suma(a, b){
    console.log(a + b)
}
suma(5, 10)
suma(5)

function defaultSuma(a = 0, b = 0){ // Valores por defecto
    console.log(a + b)
}
defaultSuma()
defaultSuma(b = 5)

// Retorno de valores

function mult(a, b){
    return a * b // Devuelve el valor de multiplicar 2 numeros
}

let resultado = mult(5, 10) // Devuelve el valor y lo almacena en una variable resultado
console.log(resultado) // Se imprime la variable resultado con el valor retornado de la funcion

// Funciones anidadas

function externa(){
    console.log("Funcion externa")
    function interna(){
        console.log("Funcion interna")
    }
    interna() // Aqui si se llama
}

externa()
// Interna() is not defined -> Fuera del scope

// Funciones de orden superior -> es una función que puede hacer al menos una de estas dos cosas: 1 Recibir otra función como parámetro. 2 Devolver una función.

// Ejemplo: Funcion que recibe otra funcion
function procesarNumero(num, funcion){ // Toma dos cosas, un numero y una funcion que aun no se ejecuta
    return funcion(num); // Esto toma la funcion que recibe como parametro y la ejecuta pasando num como argumento
}

// Función simple
function cuadrado(x){ // Luego tenemos la funcion simpre que se encarga de realiar la tarea
    return x * x; // Y que devuelve el resultado de dos numeros al cuadrado
}

// Usamos la función de orden superior -> Es decir usamos la funcion para """procesar el numero""" y la tarea simple
resultado = procesarNumero(5, cuadrado);
console.log(resultado); // 25

// ForEach
let miArray = [1, 2, 3, 4];

// Usamos el método forEach para recorrer cada elemento del array
miArray.forEach(function (valor) { 
    // La función que pasamos a forEach recibe un parámetro 'valor'
    // que representa el elemento actual del array en cada iteración

    console.log(valor); 
    // Imprime en la consola el valor actual del array
    // Primero imprime 1, luego 2, luego 3, luego 4
});

// ForEach combinado con funciones flecha
miArray.forEach((valor) => console.log(valor))
