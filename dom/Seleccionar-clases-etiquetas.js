'use strict'
// Conseguir elementos por sus etiquetas
var todosLosDivs = document.getElementsByTagName("div");
console.log(todosLosDivs);

var contenidoEnTexto = todosLosDivs[2].textContent;
console.log(contenidoEnTexto);


// Conseguir elementos por su clase css