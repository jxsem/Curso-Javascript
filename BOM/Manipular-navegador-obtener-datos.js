'use strict'
window.addEventListener("load", () => {
// BOM - Browser Objet Model

/*Es un conjunto de objetos y propiedades 
que el navegador proporciona a JavaScript 
para interactuar con todo lo que no forma 
parte directa del documento HTML, 
es decir, el propio navegador */

// Tamaño de la ventana
function getBom(){
console.log(window.innerHeight) //Altura
console.log(window.innerWidth) //Anchura
}

getBom();

// Tamaño de la pantalla
function getScreen(){
    console.log(screen.width)
    console.log(screen.height)
}

getScreen();

// Obtener URL 
function url(){
    console.log(window.location);
}

//redirigir a otra web mediante URL
function redirect(url){
    window.location.href = url;
}

// Abrir pequeña ventana navegador
function abrirVentana(url){
    window.open(url,"","width = 300, height = 300");
}
})
