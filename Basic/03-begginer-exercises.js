// 1. Escribe un comentario en una linea
// Esto es un comentario de una linea
// 2. Escribe un comentario en varias lineas
/*
Esto es 
un comentario en 
varias lineas
*/
// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let string = "String"
let entero = 1
let decimal = 1.5
let booleano = false
let mySymbol = Symbol("Simbolo")
let indefinido
let valorNull = null
let enteroG = 8583894848294385472983290305482821043957392048572940584n
/*
console.log(typeof undefined)
console.log(typeof enteroG)
*/
// 4. Imprime por consola el valor de todas las variables
let variables = [string, entero, decimal, booleano, mySymbol, indefinido, valorNull, enteroG]

console.log("Imprimiendo los valores de las variables")
for (var i = 0; i<variables.length; i++){
    console.log(variables[i])
}

// 5. Imprime por consola el tipo de todas las variables

 console.log("Imprimiendo los tipos de datos de las variables...")
for (var i = 0; i<variables.length; i++){
    console.log(typeof variables[i])
}

// 6. A continuacion, modifica los valores de las variables por otros del mismo tipo

string = "Hola mundo"
//Comprobacion
console.log(string)

entero = 2
console.log(entero)

decimal = 4.5
console.log(decimal)

booleano = true 
console.log(booleano)

mySymbol = Symbol("Simbolo2")
console.log(mySymbol)

//Para undefined, es "surrealista" querer cambiar un tipo de dato indefinido a "otro indefinido"
//puesto que al ser indefinido, como la propia palabra indica, es un tipo de dato que no esta definido
//asi que solo se podria cambiar posteriormente a otro tipo de dato distinto, que es para lo que se suele usar

valorNull = 'notNull'
console.log(valorNull)

enteroG = 7574983847593746548393276578298546592956782955n
console.log(enteroG)


// 7. A continuacion, modifica los valores de las variables por otros de distinto tipo

string = 5
console.log(string)
//Puedo cambiar los valores de las variables a otros de distinto tipo sin problema
//por ejemplo, voy a poner enteroG a null y lo voy a imprimir

enteroG = null
console.log(enteroG)

//No hay ningun error de compilacion

// 8. Declara constantes con valores
// asociados a todos los tipos de dato primitivos
const string2 = "String"
const entero2 = 1
const decimal2 = 1.5
const booleano2 = false
const mySymbol2 = Symbol("Simbolo")
//const undefined2
const valorNull2 = null
const enteroG2 = 8583894848294385472983290305482821043957392048572940584n

// 9. A continuacion, modifica los valores de las constantes

/*Por norma general, no se pueden modificar los valores de las constantes
asi que si yo hiciese esto: 
string2 = "Hoooola"
console.log(string2)
daria error al ejecutarse
*/

// 10. Comenta las lineas que produzcan algun tipo de error al ejecutarse
//Hecho. 