'use strict';

// ---------------------------
// 1️⃣ getElementById
// ---------------------------
// Selecciona un elemento único por su id
// HTML ejemplo: <div id="miDiv">Contenido</div>
let divPorId = document.getElementById("miDiv");
console.log("getElementById:", divPorId); // Devuelve el elemento <div>

// ---------------------------
// 2️⃣ getElementsByClassName
// ---------------------------
// Selecciona todos los elementos que tienen una clase específica
// HTML ejemplo: <div class="rojo"></div><div class="rojo"></div>
let divsRojos = document.getElementsByClassName("rojo");
console.log("getElementsByClassName:", divsRojos); // HTMLCollection (live)
console.log("Primer div rojo:", divsRojos[0]);

// Recorrer HTMLCollection con bucle clásico
for (let i = 0; i < divsRojos.length; i++) {
    divsRojos[i].style.color = "red"; // Cambia el color de texto
}

// ---------------------------
// 3️⃣ getElementsByTagName
// ---------------------------
// Selecciona todos los elementos por su etiqueta
// HTML ejemplo: <p>Hola</p><p>Mundo</p>
let parrafos = document.getElementsByTagName("p");
console.log("getElementsByTagName:", parrafos); // HTMLCollection
console.log("Primer párrafo:", parrafos[0]);

// ---------------------------
// 4️⃣ querySelector
// ---------------------------
// Selecciona el primer elemento que coincida con un selector CSS
// HTML ejemplo: <div class="rojo"><p>Texto</p></div>
let primerParrafoRojo = document.querySelector("div.rojo p");
console.log("querySelector:", primerParrafoRojo); // Devuelve <p>

// También funciona para id
let divPorIdQuery = document.querySelector("#miDiv");
console.log("querySelector por id:", divPorIdQuery);

// ---------------------------
// 5️⃣ querySelectorAll
// ---------------------------
// Selecciona todos los elementos que coincidan con un selector CSS
// HTML ejemplo: <ul><li>1</li><li>2</li><li>3</li></ul>
let todosLi = document.querySelectorAll("ul li");
console.log("querySelectorAll:", todosLi); // NodeList (estático)

// Recorrer NodeList con forEach
todosLi.forEach((li, index) => {
    li.style.background = index % 2 === 0 ? "lightblue" : "lightgreen";
    console.log(`LI ${index + 1}:`, li.textContent);
});

// ---------------------------
// 6️⃣ Comparación rápida
// ---------------------------
// getElementById -> elemento único
// getElementsByClassName / getElementsByTagName -> HTMLCollection (live, necesita bucle clásico)
// querySelector -> primer elemento coincidente
// querySelectorAll -> NodeList (estático, soporta forEach)
// querySelector/querySelectorAll -> permite selectores CSS complejos (clase, id, etiquetas, combinaciones)
