// (IIFE) Expresion de funcion invocada inmediatamente.


// Una función que se define y se ejecuta al mismo tiempo, sin necesidad de llamarla después
(function() {
  console.log("Hola, me ejecuté sola");
})();

// IIFE Clasico
(function (){
    console.log("IIFE Clásico")
})(); //<- El punto y coma aqui en las IIFE es imporatnte.

//IIFE Arrow funcion
(() => {
    console.log("IIFE con arrow function")
})();

