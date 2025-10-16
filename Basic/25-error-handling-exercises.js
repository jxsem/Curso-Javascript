// 1. Captura una excepción utilizando try-catch.
let numero = 1;
let numeroDos = 2;

try {
    // simulamos un posible error
    if (typeof numero !== "number" || typeof numeroDos !== "number") {
        throw new Error("Los valores deben ser números");
    }

    let resultado = numero + numeroDos;
    console.log("El resultado es:", resultado);

} catch (error) {
    console.log("Error: no se puede sumar.", error.message);
}
// 2. Captura una excepción utilizando try-catch y finally.
try {
    // simulamos un posible error
    if (typeof numero !== "number" || typeof numeroDos !== "number") {
        throw new Error("Los valores deben ser números");
    }

    let resultado = numero + numeroDos;
    console.log("El resultado es:", resultado);

} catch (error) {
    console.log("Error: no se puede sumar.", error.message);
} finally {
    console.log(numero + numeroDos)
}
// 3. Lanza una excepción genérica.

// 4. Crea una excepción personalizada.
class MiExcepcionPersonalizada extends Error {
    constructor(mensaje) {
        super(mensaje);
        this.name = "MiExcepcionPersonalizada";
    }
}

// 5. Lanza una excepción personalizada.
try {
    throw new MiExcepcionPersonalizada("Ha ocurrido un error personalizado");
} catch (error) {
    console.log(`${error.name}: ${error.message}`);
}

// 6. Lanza varias excepciones según una lógica definida.
function verificarNumero(num) {
    if (typeof num !== "number") {
        throw new TypeError("El valor debe ser un número");
    } else if (num < 0) {
        throw new RangeError("El número no puede ser negativo");
    } else if (num === 0) {
        throw new Error("El número no puede ser cero");
    } else {
        console.log("Número válido:", num);
    }
}

try {
    verificarNumero(-5);
} catch (error) {
    console.log(`${error.name}: ${error.message}`);
}

// 7. Captura varias excepciones en un mismo try-catch.
try {
    verificarNumero("texto"); // Cambia para probar distintos errores
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Tipo incorrecto:", error.message);
    } else if (error instanceof RangeError) {
        console.log("Rango incorrecto:", error.message);
    } else {
        console.log("Otro error:", error.message);
    }
}

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores.
let valores = ["10", "20.5", "abc", null, "30.1"];

for (let valor of valores) {
    try {
        let numero = parseFloat(valor);
        if (isNaN(numero)) {
            throw new Error(`No se puede convertir '${valor}' a número`);
        }
        console.log(`Convertido correctamente: ${numero}`);
    } catch (error) {
        console.log("Error:", error.message);
    }
}

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada.
class PropiedadNoEncontradaError extends Error {
    constructor(propiedad) {
        super(`La propiedad '${propiedad}' no existe en el objeto`);
        this.name = "PropiedadNoEncontradaError";
    }
}

function verificarPropiedad(obj, propiedad) {
    if (!(propiedad in obj)) {
        throw new PropiedadNoEncontradaError(propiedad);
    }
    console.log(`Propiedad '${propiedad}' encontrada con valor:`, obj[propiedad]);
}

try {
    verificarPropiedad({ nombre: "Juan" }, "edad");
} catch (error) {
    console.log(`${error.name}: ${error.message}`);
}

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10.
function ejecutarConReintentos(func, maxIntentos = 10) {
    let intento = 0;

    while (intento < maxIntentos) {
        try {
            intento++;
            console.log(`Intento ${intento}...`);
            return func(); // si no hay error, se sale del bucle
        } catch (error) {
            console.log(`Error en intento ${intento}: ${error.message}`);
            if (intento >= maxIntentos) {
                console.log("Se alcanzó el número máximo de intentos.");
                throw error;
            }
        }
    }
}

// Ejemplo de uso:
try {
    ejecutarConReintentos(() => {
        if (Math.random() < 0.8) throw new Error("Falla aleatoria");
        console.log("Éxito en ejecución");
    });
} catch (error) {
    console.log("Error final:", error.message);
}
