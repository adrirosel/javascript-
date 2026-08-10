// 1. Crea una variable para cada operación aritmética

//Suma 
let suma = 10 + 4
//Resta 
let resta = 10-5
//Multiplicacion
let mult = 10*2
//Division
let div = 10 / 5
// Modulo
let modulo = 10 % 2
//Exponente 
let exp = 2 ** 4


// 2. Crea una variable para cada tipo de operación de asignación, que haga uso 
// de las variables utilizadas para las operaciones aritméticas


let suma2 = 6 + 2
suma2 += suma
//Creamos una variable nueva y le asignamos un valor, a continuacion
//a dicha variable le aplicamos la operacion de asignacion para modificar su valor con el de la variable anterior

let resta2 = 8-2
resta2 -= resta

let mult2 = 8*2
mult2 *= mult

let div2 = 8/2
div2 /= div

let mod2 = 8%2
mod2 %= modulo

let exp3 = 8**2
exp3 **= exp

// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación
let a = 3
let b = 5
console.log(a < b) //Devuelve True
console.log(a + b > a - b) //Devuelve True
let str1 = "Hola"
let str2 = "Hola"
console.log(str1 == str2)//True
console.log(str1 === str2)//True
console.log(str2 != a)//True

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(5 < 4)//False
console.log(5 != 5)//False
console.log("hola" == "ADIOS")//False
console.log("Hola" === "hola")//False
console.log("5" === 5)//False
// 5. Utiliza el operador lógico and
console.log(5>4 && 3<6) //Devuelve True
console.log(5 !=6 && 2 > 7)//Devuelve False
// 6. Utiliza el operador lógico or
console.log("Hola" == "Hola" || 3>6) //Devuelve True
console.log(5 !=5 || 2 > 7)//Devuelve False
// 7. Combina ambos operadores lógicos
console.log( 5 > 3 && 2 < 6 || 7 == 6) //Devuelve True
// 8. Añade alguna negación
console.log( 5 > 3 && 2 < 6 || 7 == 6 || !(77 == "Hola"))//Devuelve True
// 9. Utiliza el operador ternario
const isLosing = true
isLosing ? console.log("Esta perdiendo") : console.log("Esta ganando")
// 10. Combina operadores aritméticos, de comparación y lógicos

console.log((a + b) != 9 || (a ** b ) == 45087621 ) //Devuelve True