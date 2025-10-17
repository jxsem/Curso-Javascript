'use strict'

window.addEventListener("load", () => {
    // ---------------------------
    // Función que crea un intervalo
    // ---------------------------
    function intervalo() {
        // setInterval ejecuta una función cada cierto tiempo (1000ms = 1s)
        // Devuelve un "ID de intervalo" que podemos usar para detenerlo más tarde con clearInterval
        let tiempo = setInterval(() => {
            console.log("set interval ejecutado"); // Solo para ver en la consola cada vez que se ejecuta

            // Seleccionamos el encabezado <h1>
            let encabezado = document.querySelector("h1");

            // Alternamos el tamaño del encabezado
            if (encabezado.style.fontSize == "50px") {
                // Si actualmente es 50px, lo hacemos 30px
                encabezado.style.fontSize = "30px";
            } else {
                // Si no, lo hacemos 50px
                encabezado.style.fontSize = "50px";
            }

        }, 1000); // Se ejecuta cada 1 segundo

        return tiempo; // Devuelve el "ID del intervalo" para poder detenerlo más tarde
    }

    // Llamamos a la función intervalo y guardamos el ID en la variable "tiempo"
    // Esto inicia el parpadeo del <h1> inmediatamente al cargar la página
    var tiempo = intervalo();


    // ---------------------------
    // Botón para iniciar el parpadeo
    // ---------------------------
    let start = document.querySelector("#start");
    start.addEventListener("click", () => {
        alert("Tiempo en bucle iniciado");
        // Detenemos el intervalo anterior por seguridad para no duplicarlo
        clearInterval(tiempo);

        // Creamos un nuevo intervalo y actualizamos la variable "tiempo"
        // Esto hace que el parpadeo vuelva a empezar desde 0
        tiempo = intervalo();
    });


    // ---------------------------
    // Botón para detener el parpadeo
    // ---------------------------
    let stop = document.querySelector("#stop");
    stop.addEventListener("click", () => {
        alert("Tiempo en bucle parado.");
        // Detiene el intervalo actual usando el ID guardado en "tiempo"
        clearInterval(tiempo);
    });

    // ---------------------------
    // setTimeout -> se ejecuta solo una vez
    // ---------------------------
    let time = setTimeout(() => {
        console.log("Set time ejecutado");

        let parrafo = document.querySelector("p");

        // Cambiamos el tamaño del párrafo solo una vez después de 1 segundo
        if (parrafo.style.fontSize == "14px") { 
            // Si el tamaño es 14px, lo ponemos a 20px
            parrafo.style.fontSize = "20px";
        } else {
            // Si no, lo ponemos a 16px
            parrafo.style.fontSize = "16px";
        }
    }, 1000); // Ejecuta la función solo después de 1 segundo

});


