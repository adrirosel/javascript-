// Console

// log

console.log("Hola, JavaScript!")

// error

console.error("Este es un mensaje de error (soy rojo")
//console.error("Error al conectarse a la base de datos: ", new Error("Conexion fallida"))

//warn

console.warn("Este es un mensaje de advertencia (Soy amarillo")

// info

console.info("Este es un mensaje de informacion adicional")

// table
let data = [
    {name : "Adrian", age : 20},
    {name : "Jose", age : 18}
]
console.table(data)

// group

console.group("Usuario:")
console.log("Nombre: Adrian")
console.log("Edad: 20")
console.groupEnd() //Cerrar el grupo
console.log("ajsdhlkjfh") //Fuera del grupo

// time

//Se pueden realizar mediciones en paralelo
// y mezclarlos
console.time("Tiempo de ejecucion")
for(let i = 0; i< 10000; i++){

}

console.time("Tiempo de ejecucion 2")
for(let i = 0; i< 10000; i++){

}

console.timeEnd("Tiempo de ejecucion")//Mismo texto que en console.time()
console.timeEnd("Tiempo de ejecucion 2")

// assert (Muestra un mensaje de error si lo que evalua es falso)

let age = 16

console.assert(age >=18, "El usuario debe ser mayor de edad")

//Si se cumple NO se muestra el mensaje

// count

console.count("Click")
console.count("Click")
console.countReset("Click")
//Importante tambien usar los mensajes como identificador (identicos)

// trace (Seguimiento de la pila de ejecucion)

function funcA(){
    funcB()
}

function funcB(){
    console.trace("Seguimiento de la ejecucion")
}
 
//console.trace("Seguimiento de la ejecucion")

funcA()

// clear

//console.clear()