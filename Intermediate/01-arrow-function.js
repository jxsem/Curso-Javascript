// Funciones flecha avanzadas.
const multiplicacion = (a,b) => a * b // En una sola linea
console.log(multiplicacion(2, 5))

// this lexico

const handler = {
    name: "Jose",
    greeting: function(){
        console.log(`Hola ${this.name}`) //This acaba pillando el contexto del objeto, y acaba pillando al propiedad de name.
    },
    arrowGreeting: () => {
        console.log(`Hola ${this.name}`) //Aqui cambia This no acaba pillando el contexto del objeto.
    }

}

handler.greeting(); //Objeto.metodo el valor de this dentro de ese metodo apunta al objeto que lo llama.
handler.arrowGreeting(); // Es decir, no te pilla el this dentro de la funcion flecha porque tiene que haber primero un this fuera de dicha funcion

function Persona(nombre) {
  this.nombre = nombre; // ✅ "this" existe aquí
  this.saludar = () => {
    console.log("Hola " + this.nombre); // hereda el this de Persona
  }
}

const jose = new Persona("Jose");
jose.saludar(); // Hola Jose
