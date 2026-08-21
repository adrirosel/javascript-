//1. Crea una funcion que retorne a otra funcion

const saludar = function saludo(name){
    console.log(`Hola, ${name}!`)
}

function obtenerSaludo(name){
    return saludar
}

//2. Implementa una funcion currificada que multiplique 3 numeros

//a * b * c
function mult(a){
    return function (b){
        return function (c){
            return a * b * c
        }
    }
}
/* const multAB = mult(a)(b)
console.log(multAB(c)) //resultado = a * b * c */

const multAB = mult(4)(2)
console.log(multAB(1))
//3. Desarrolla una funcion recursiva que calcule la potencia de un numero elevado a un exponente

/* function f1(){
    return f1()
}

f1() */

function potencia(base, exp){
    if(exp == 1){
        return base
    } 
    return base * potencia(base, exp - 1)
}
console.log(potencia(5,5)) //3125


//4. Crea una funcion createCounter() que reciba un valor inicial y retorne un objeto con metodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado

 
function createCounter(valor){
    let valorInicial = valor
    return { 
        Increment(){
            valorInicial++
            console.log(`Valor: ${valorInicial}`)
        },
        decrement(){
            valorInicial--
            console.log(`Valor: ${valorInicial}`)
        },
        getValue(){
            return valorInicial
        }
    }
}

/* let counter = createCounter(1)
console.log(counter.Increment())
//console.log(counter.Increment())
console.log(counter.Increment())
//console.log(counter.decrement())
console.log(counter.getValue()) 
 */

let counter = createCounter(1)
counter.Increment()
counter.Increment()
counter.Increment()
counter.decrement()
console.log(counter.getValue())
//5. Crea una funcion sumManyTimes(multiplier, ...numbers) que primero sume todos los numeros (usando parametros Rest) y luego multiplique el resultado por multiplier

//6. Crea un callback que se invoque con el resultado de la suma de todos los numeros que se le pasan a una funcion

//7. Desarrolla una funcion parcial

//8. Implementa un ejemplo que haga uso de Spread 

//9. Implementa un retorno implicito

//10. Haz uso del this lexico