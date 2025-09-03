// Sets -> Sirve para guardar coleccion de datos, pero la diferencia es cómo almacenan y manejan los elementos:

/* 
    Duplicados:
Array: permite elementos duplicados.
Set: no permite duplicados, cada elemento es único.
    Orden:
Array: mantiene el orden de inserción.
Set: en JavaScript mantiene inserción, pero no tiene índices.
    Acceso:
Array: se accede por índice.
Set: se accede por valor, no por posición.
    Inserción:
Array: se puede agregar en cualquier posición o al final.
Set: se agrega solo si no existe ya.
    Eliminación:
Array: se puede eliminar por índice o valor (requiere búsqueda).
Set: se elimina directamente por valor.
    Longitud:
Array: propiedad .length.
Set: propiedad .size.
    Uso típico:
Array: listas ordenadas, elementos duplicados permitidos, acceso por posición.
Set: colección de valores únicos, útil para filtrado y operaciones de conjuntos.*/
//Sintaxis Set

// Declaracion
let miSet = new Set()

// Inicializar
miSet = new Set(["Jose", "Manuel", 23, "Soldadojimenezj@gmail.com"])
console.log(miSet)

// Metodos comunes

// add y delete
miSet.add("Se añade un elemento") //Se añade un elemento
console.log(miSet)

miSet.delete("Se añade un elemento") // Se borra un elemento, hay que indicarlo con elemento.
console.log(miSet)

console.log(miSet.delete("Se añade un elemento")) // Retorna false o true porque así dice si se ha borrado o no. -> False

// Has

console.log(miSet.has("Jose")) // Metodo HAS que se usa para buscar un elemento en el set. Es booleano

// Size
console.group(miSet.size) // 4 elementos en el set

// Convertir un set en un array.
let miArray = Array.from(miSet)
console.log(miArray) //Transformas el set en el array

//Convertir un array en un set
miSet = new Set(miArray)
console.log(miSet) // Recuperas el set

miSet.add("Soldadojimenezj@gmail.com") // No añade duplicados, los sets NO añaden duplicados.
console.log(miSet)