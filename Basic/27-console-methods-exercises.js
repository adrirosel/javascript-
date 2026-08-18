// 1. Crea una función que utilice error correctamente
function sum(a, b){
    if(typeof a !== "number" || typeof b !== "number"){
        throw new Error("Valores incorrectos")
    }
    return a + b
}
try{
    console.log(sum("numero", 5))
}catch(error){
    console.error("Error:* ", error.message)
}
// 2. Crea una función que utilice warn correctamente
function rest(a, b){
    if(typeof a !== "number" || typeof b !== "number"){
        console.warn("Estos valores no son admisibles, podria provocar errores")
        return 
    }
    return a - b
}
console.log(rest(10, 5))
rest("numero", 2)
// 3. Crea una función que utilice info correctamente

function mult(a, b){
    console.info("Esta funcion se utiliza para obtener el resultado de la multiplicacion de dos numeros")
    if(typeof a !== "number" || typeof b !== "number"){
        throw new Error("Valores incorrectos")
    }
    return a * b
}

// 4. Utiliza table

let profesoresInstituto = [
    {nombre: "Adrian", asignatura : "Matematicas"},
    {nombre: "Juan", asignatura : "Lengua"},
    {nombre: "Isabel", asignatura : "Fisica"},
    {nombre: "Antonio", asignatura : "Programacion"},
    {nombre: "Miguel Angel", asignatura : "Tecnologia"}
]
console.table(profesoresInstituto)
// 5. Utiliza group

console.group("Profesores:")
for(let i = 0; i<profesoresInstituto.length; i++){
    console.log(profesoresInstituto[i].nombre, ", ", profesoresInstituto[i].asignatura)
    
}
console.groupEnd()

// 6. Utiliza time

console.time("Tiempo de ejecucion")
for(let i = 0; i< 1000000; i++){

}
console.timeEnd("Tiempo de ejecucion")

// 7. Valida con assert si un número es positivo

let numero = -1

console.assert(numero >= 0, "El numero N0 es positivo")

// 8. Utiliza count
for(let i = 0; i < 10; i++){
    console.count("Click")
}

// 9. Utiliza trace
function funciones2(){
    console.log(sum(2, 4))
    console.log(mult(3, 6))
    console.log(rest(6, 2))
}
function llamarFunciones(){
    funciones2()
    console.trace("Seguimiento de las funciones")
}
llamarFunciones()
// 10. Utiliza clear

console.clear()