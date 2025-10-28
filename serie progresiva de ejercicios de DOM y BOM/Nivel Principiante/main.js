'use strict'

// 1 - Haz que un boton cambie el texto de un párrafo
window.addEventListener("load", () => {
    //Seleccionar el parrafo y el boton con constantes
    const parrafo = document.getElementById("miParrafo");
    const botonParrafo = document.getElementById("miBoton");

    //Poner un evento al boton que al hacer click haga algo
    botonParrafo.addEventListener("click", function(){
        //Tras hacer el evento hace cierta función que va a ser cambiar texto del párrafo
        
        parrafo.textContent = "Se ha cambiado el texto"
    });

})

// 2 - Botón que cambia el fondo de la página web
const botonFondo = document.getElementById("cambiarFondo");

//Hacer evento de click ya que se va a hacer click y va a pasar algo
botonFondo.addEventListener("click", function(){
    //tienes que modificar el estilo del body.
    document.body.style.backgroundColor = "red";
    //Haces referencia al documento, al cuerpo, al estilo de éste y al fondo.
})

// 3 -  Ejercicio 3: Mostrar/ocultar un elemento 
// Crea un botón que oculte o muestre un texto o imagen
const ocultarTexto = document.getElementById("ocultarElemento");
const parrafoTexto = document.getElementById("elemento");

ocultarTexto.addEventListener("click", function(){
    parrafoTexto.hidden = !parrafoTexto.hidden; // haz que el elemento esté oculto si estaba visible, y visible si estaba oculto
})


// 4- Ejercicio 4: Contador de clicks
// Crear boton que haga contador de click
const contadorClicks = document.getElementById("contador-clicks");
let contador = 0; // contador iniciado al 0

contadorClicks.addEventListener("click", function(){
    contador++; // Cada vez que se hace click, el contador itera
    console.log(contador) // Aparece en consola la variable contador iterando
})

// Ejercicio 5: Leer valor de un input 
// Crea un input y un botón que muestre el texto ingresado
const input = document.getElementById("miInput");
const boton = document.getElementById("mostrarBtn");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", function() {
    // Leer el valor del input
    const texto = input.value;
    
    // Mostrarlo en el párrafo
    resultado.textContent = "Has escrito: " + texto;

    // También lo podemos mostrar en consola
    console.log(texto);
});