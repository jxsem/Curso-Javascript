// 1. Crea un objeto con 3 propiedades.
let coche = {
    marca: "Toyota",
    kilometraje: 20.394,
    estado: "Bien cuidado",
}
// 2. Accede y muestra su valor.
console.log(coche)
// 3. Agrega una nueva propiedad.
coche.numeroPuertas = 4
// 4. Elimina una de las 3 primeras propiedades.
delete coche.estado;
// 5. Agrega una función e invócala.
coche.mover = function(){
        console.log("El coche se está moviendo")
    };
coche.mover();
// 6. Itera las propiedades del objeto.
for (let prop in coche) {
    console.log(prop + ": " + coche[prop]);
}

// 7. Crea un objeto anidado.
let ordenador = {
    marca: "Apple",
    ram: 8,
    pantalla: 14,
    encender: function(){
        console.log("El ordenador se está encendiendo")
    },
    software: {
        version: 15.6,
        nombre: "Sequoia"
    },
    usabilidad: {
        programacion: "Python, Javascript, Node"
    },
    apagar: function(){
        console.log("El ordenador se está apagando")
    },
    update: function(){
        console.log("El ordenador se está actualizando")
    } 
}
// 8. Accede y muestra el valor de las propiedades anidadas.
console.log(ordenador.software)
console.log(ordenador.usabilidad)
// 9. Comprueba si los dos objetos creados son iguales.
console.log(coche == ordenador)
// 10. Comprueba si dos propiedades diferentes son iguales.
console.log(coche.marca == coche.kilometraje)