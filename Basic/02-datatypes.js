//Tipos de datos primitivos

//String (Cadena de texto)
//Tres ejemplos, una con cada tipo de comilla
let name = "Adrian Rosel"
let alias = 'Martinez'
let email = `Mi email es roselmartinezadrian@gmail.com` 

// Números (Number)
let age = 20 //Entero
let height = 1.83 //Decimal

// Booleanos (Boolean)

let isStudent = true 
let isTeacher = false

// Undefined

let undefinedValue
console.log(undefinedValue)

//Variable declarada pero sin valor asignado/asociado
//JS detecta que el tipo de dato asociado es un tipo de dato undefined

// Null

let nullValue = null

//En realidad esto representa que yo intencionadamente quiero que en esta 
//variable hay una ausencia de valor 

// Symbol

let mySymbol = Symbol("mysymbol")
//Los symbol son valores unicos como identificadores de propiedades,
// nos valen para intentar evitar colisiones

//BigInt

let myBigInt = BigInt(29020202020203939039202939302032439)
let myBigInt2 = 29020202020203939039202939302032439n

//Numeros ENTEROS extremadamente GRANDES que van a abarcar en memoria TODO lo que puedan


// Mostramos los tipos de datos
console.log(typeof name)
console.log(typeof mySymbol)
console.log(typeof age)
console.log(typeof height)
console.log(typeof isStudent)
console.log(typeof undefinedValue)
console.log(typeof nullValue)
console.log(typeof myBigInt)
console.log(typeof myBigInt2)
// Asi sucesivamente ....