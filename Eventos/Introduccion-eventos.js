'Use strict'

//Eventos de raton 
window.addEventListener("load", () => { // Es un evento de carga "load" se dispara cuando toda la página ha terminado de cargar

var boton = document.querySelector("#boton")

function cambiarColor(){ //Capturar el evento en el html con el atributo onclick
    console.log("Me has dado click")

    var bg = boton.style.background

    if(bg == "green"){
        boton.style.background = "red"
    }else{
        boton.style.background = "green"
    }
}

// MEJOR OPCION
var boton2 = document.querySelector("#boton2")

boton2.addEventListener("click", function(){ // es un método que sirve para “escuchar” (detectar) un evento en un elemento del DOM.
        console.log("Me has dado click")

    var bg2 = boton2.style.background

    if(bg2 == "green"){
        boton2.style.background = "red"
    }else{
        boton2.style.background = "green"
    }
})

// Evento de MOUSE OVER -> pasar por encima de algo
boton2.addEventListener("mouseover", function(){
    boton2.style.background = "#ccc"
})

// Evento de MOUSE OUT -> CUANDO SALES por encima de algo
boton2.addEventListener("mouseout", function(){
    boton2.style.background = "black"
})

// EVENTOS DE TECLADO


//Focus -> dentro de algún elemento
var input = document.querySelector("#campo_nombre")
input.addEventListener("focus", function(){
    console.log("estás dentro del input")
})

//Blur -> fuera de algún elemento
var input = document.querySelector("#campo_nombre")
input.addEventListener("blur", function(){
    console.log("estás saliendo del input")
})

//Keydown -> Tecla que pulsa el usuario
var input = document.querySelector("#campo_nombre")
input.addEventListener("keydown", function(event){ // "event" es el objeto que contiene toda la info del evento (tecla, clic, mouse, etc.)
    console.log("estás pulsando tecla en el input:", event.key); //key hace referencia a la tecla
});

//Keypress -> tecla presionada
var input = document.querySelector("#campo_nombre")
input.addEventListener("keypress", function(event){
    console.log("tecla presionada en el input:", event.key);
});

//Keyup
var input = document.querySelector("#campo_nombre")
input.addEventListener("keyup", function(event){
    console.log("tecla soltada en el input:", event.key);
});

}); // Final de load


