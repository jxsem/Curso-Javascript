'use strict' // Activa el modo estricto de JavaScript: ayuda a detectar errores comunes (variables sin declarar, nombres duplicados, etc).

// -----------------------------
// Conseguir elementos por sus etiquetas
// -----------------------------
var todosLosDivs = document.getElementsByTagName("div"); 
// getElementsByTagName devuelve una colección "live" (HTMLCollection) con todos los <div> del documento.
// NOTA: es 'live' — si el DOM cambia y se añaden/quitan <div>, esta colección se actualizará automáticamente.

console.log(todosLosDivs); 
// Muestra en la consola la colección completa para inspección (útil para debugging).

// -----------------------------
// Leer el contenido de texto de un <div> específico
// -----------------------------
var contenidoEnTexto = todosLosDivs[2].textContent; 
// Accede al tercer <div> (índice 2) y obtiene su textContent (todo el texto dentro, sin etiquetas HTML).
// ADVERTENCIA: si no existen al menos 3 <div>, todosLosDivs[2] será undefined y esto lanzará un error.
// Mejor comprobación sería: if (todosLosDivs[2]) { ... } 

console.log(contenidoEnTexto);
// Muestra en la consola el texto obtenido del tercer <div>.

// -----------------------------
// Seleccionar la sección donde vamos a insertar contenido
// -----------------------------
var seccion = document.querySelector("#miseccion");
// querySelector selecciona el primer elemento que coincide con el selector CSS.
// Aquí usamos "#miseccion", por lo que seleccionamos el elemento con id="miseccion".
// Si no existe, seccion será null (hay que comprobarlo antes de usarlo en producción).

var hr = document.createElement("hr");
// Crea dinámicamente un elemento <hr> que luego se añadirá al final como separador.

// -----------------------------
// (Redundante) Volver a obtener todos los <div>
// -----------------------------
var todosLosDivs = document.getElementsByTagName("div");
// Atención: se está redeclarando la misma variable 'todosLosDivs'.
// En modo estricto esto está permitido porque es el mismo identificador; sin embargo,
// esta segunda llamada no es necesaria si la colección anterior sigue siendo válida.
// Podría confundirse al leer el código: mejor no redeclararla innecesariamente.

// -----------------------------
// Recorrer todos los <div> y copiar su texto como párrafos dentro de la sección
// -----------------------------
for (let i = 0; i < todosLosDivs.length; i++) {
    // 'i' recorre los índices de la colección desde 0 hasta length-1.

    let texto = todosLosDivs[i].textContent;
    // Obtiene el texto del <div> actual. textContent devuelve texto plano (sin HTML).

    let parrafo = document.createElement("p");
    // Crea un nuevo elemento <p> que servirá para contener el texto copiado.

    parrafo.textContent = texto;
    // Asigna el texto al párrafo. Usar textContent evita interpretar HTML (seguro contra inyección).

    seccion.append(parrafo);
    // Inserta el <p> dentro del elemento 'seccion' al final de su contenido.
    // Si 'seccion' fuera null (no existe #miseccion), esto lanzaría un error:
    // TypeError: Cannot read properties of null (reading 'append').
    // Por eso en código robusto habría una comprobación previa:
    // if (seccion) { seccion.append(parrafo); }
}

// -----------------------------
// Añadir la línea horizontal al final
// -----------------------------
seccion.append(hr);
// Añade el <hr> creado más arriba al final de la sección.
// Igual que antes, esto requiere que 'seccion' exista (no sea null).

// -----------------------------
// Resumen de puntos importantes y buenas prácticas
// -----------------------------
// 1. Comprobar existencia de elementos antes de usarlos (ej. todosLosDivs[2], seccion).
// 2. Evitar redeclarar variables innecesariamente (segunda llamada a getElementsByTagName).
// 3. Preferir for...of o Array.from(...) + forEach cuando se trabaja con colecciones HTML:
//      for (const div of todosLosDivs) { /* ... */ }
//    o:
//      Array.from(document.getElementsByTagName('div')).forEach(div => { ... });
// 4. Usar textContent para insertar texto (más seguro) o innerHTML si realmente se necesita HTML.
// 5. Manejar el caso en que no haya <div> o no exista #miseccion para evitar errores en tiempo de ejecución.

// Conseguir elementos por su clase css
var divsRojos = document.getElementsByClassName("rojo");
var divsAmarillos = document.getElementsByClassName("amarillo");

divsRojos[0].style.background = "red";
divsAmarillos[0].style.background = "yellow";

var indice;
for (let indice in divsRojos) {
    if (divsRojos[indice].className == "rojo") {
        divsRojos[indice].style.background = "red";
    }
}


// Query selector
var id = document.querySelector("#encabezado");
console.log(id)

var claseRojo = document.querySelector(".rojo");
console.log(claseRojo);