'use strict'

// DOM
function cambiaColor (color){
    caja.style.background = color;
}
// Selección mediante ID
//var caja = document.getElementById("micaja");

// Selección elemento de la página
var caja = document.querySelector("#micaja") //Seleccion como en css etiqueta, #div .class


// Propiedades de CSS dentro de JS
caja.innerHTML = "Texto en la caja desde js"; // Modificación de elementos de html en javascript
caja.style.background = "red"; // Cambio de estilos en JS
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "Nueva-clase"
console.log(caja);