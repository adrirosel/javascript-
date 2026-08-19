// Funciones avanzadas

// Ciudadanos de primera clase

const greet = function (name){
    console.log(`Hola, ${name}`)
}

greet("Adrian")

//Asignamos a una constante una funcion totalmente generica
//sin nombre y la invocamos con la constante

function processGreeting(greetFunction, name){
    greetFunction(name)
}

processGreeting(greet, "adrirosel")

//Una funcion que le pasamos como parametro otra funcion

//Una funcion podria retornar tambien otra funcion

function returnGreeting(name){
    return greet
}

processGreeting(greet, "javi")

const greet2 = returnGreeting()

greet2("Javi")

//Arrow functions avanzadas

//Retorno implicito
const multiply = (a, b) => a * b

console.log(multiply(2, 5))// 10

// - this lexico

const handler = {
    name : "Adrian",
    greeting : function(){
        console.log(`Hola, ${this.name}`)//Hacemos referencia al name del objeto
    }, 
    arrowGreeting: () => {
        console.log(`Hola, ${this.name}`)
    }
}

handler.greeting()
handler.arrowGreeting();//Aqui no hereda el this, crean su propio contexto
//crea su PROPIO contexto

// IIFE (Expresion de funcion invocada inmediatamente)

//Una funcion que se invoca inmediatamente
//Se ejecutan en el momento en el que se definan

// IIFE - clasico

//Hay que colocar un punto y coma al final de la ultima ejecucion
//previa a la IIFE, ya que de otra manera, la ejecucion
//del bloque de codigo anterior interfiere en la ejecucion de la IIFE
(function() {
    console.log("IIFE clasico")
})();//Punto y coma para poder realizar la proxima IIFE

(() => { //IIFE arrow function
    console.log("IIFE clasico2")
})();

// Parametros Rest (...)

/* function sum(...numbers){
    console.log(numbers)
}
sum(1, 2, 4) */

// ... se usa para cuando no se sabe CUANTOS parametros se van a usar
// y asi se crea un array con los parametros

function sum(...numbers){
    let result = 0
    for(let number of numbers){
        result += number
    }
    return result
}
console.log(sum(1, 2, 4, 6, 8, 9))
console.log(sum(1, 2, 4, 9))
//Usamos de forma dinamica un numero indefinido de parametros
//y los almacenamos en un array

// Operador Spread (...)

const numbers = [1, 2, 4]

function sumWithSpread(a, b, c){
    return a + b + c
}

console.log(sumWithSpread(1, 2, 4)) //Sin spread
console.log(sumWithSpread(...numbers))
//Aqui un array lo desenpaqueta porque sabemos que hay que 
//recibir x parametros, iguales a los parametros de numbers
// entonces con (...) desenpaqueto en 3 valores (a, b y c) 

//Que tenga mas no es un problema porque solo utiliza los x primeros valores
//si metemos menos valores de los necesitados da error
//porque x funcion no es capaz de implementar el parametro que falta

// Closures (Clausuras)

function createCounter(){
    let counter = 0
    return function() {
        counter++
        console.log(`Contador: ${counter}`)
    }
    
}

const counter = createCounter()

counter()
counter()
counter()
counter()
counter()

//La funcion interna accede al contexto de la funcion 
// externa manteniendo
// el estado de la variable despues de ejecutarse

const counter2 = createCounter()
counter2()
counter2()
counter2()
counter2()
 //Se reinicia el counter porque cambia el scoup

// Recursividad
//Una funcion se llama asi misma

function factorial(n){
    if (n <= 1){
        return 1
    }
     return n * factorial(n - 1)
}

console.log(factorial(5))
//Hay que definir una condicion para que pueda dejar de ejecutarse

// Funciones parciales

function partialSum(a){
    return function(b, c){
        return sum(a, b, c)
    }
}

const sumWith = partialSum(4)

console.log(sumWith(2, 3))
console.log(sumWith(1, 2))
//La primera funcion recibe un parametro que no cambia, 
//y la segunda recibe parametros variables de forma dinamica
//Una manera de dividir una funcion con varios parametros en varias funciones
//con menos parametros

// Currying

function currySum(a){
    return function(b){
        return function (c){
            return function(d){
                return sum(a, b, c, d)
            }
        }
    }
}

const sumAB = currySum(1)(2)
const sumC = sumAB(3)
console.log(sumC(2))
console.log(sumC(3))
console.log(sumAB(5)(7))

//El currying tenemos todas las funciones que querramos anidadas y 
// podemos modificarlo de forma dinamica
//para tener un comportamiento muy concreto de cada una de las funciones
//que yo puedo invocar poco a poco sin necesidad de hacer una llamada completa

// Callbacks (pendiente)
