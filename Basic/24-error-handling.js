// excepcion
let miobjeto
//console.log(miobjeto.email)

// Tratamiento de errores

// try-catch
try{
    console.log(miobjeto)
    console.log("Finaliza la ejecucion sin errores")
}catch{
    // Bloque de error
    console.log("se ha producido un error")
}

// Captura de errores
try{
    console.log(miobjeto.email)
    console.log("Finaliza la ejecucion sin errores")
}catch (error) {
    console.log("se ha producido un error", error.message)
}

// finally
try{
    console.log(miobjeto)
    console.log("Finaliza la ejecucion sin errores")
}catch{
    console.log("se ha producido un error")
} finally{ // Siempre se ejecuta produzca error o no
    console.log("Este codigo se ejecuta siempre")
}

// Lanzamiento errores

// throw
function sum(a, b){
    if (!Number.isInteger(a) || !Number.isInteger(b)){
        throw new Error("Esta operación solo suma numeros enteros")
    }
    return a + b
}

try {
    console.log(sum(5,10))
    console.log(sum("5",10))
    console.log(sum(5,"10"))
    console.log(sum("5","10"))
}catch (error) {
    console.log("Se ha producido un error:", error.message)
}

// Crear excepciones personalizadas

class MiErrorPersonalizado extends Error{
    constructor (message, a, b){
        super (message)
        this.a = a
        this.b = b
    }
    printNumbers(){
        console.log(a + "+" + b)
    }
}
