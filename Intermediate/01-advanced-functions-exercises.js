//1. Crea una funcion que retorne a otra funcion

const saludar = function saludo(name){
    console.log(`Hola, ${name}!`)
}

function obtenerSaludo(name){
    return saludar(name)
}
obtenerSaludo("Adrian")
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
        increment(){
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
counter.increment()
counter.increment()
counter.increment()
counter.increment()
console.log(counter.getValue())


//5. Crea una funcion sumManyTimes(multiplier, ...numbers) que primero sume 
// todos los numeros (usando parametros Rest) y luego multiplique el resultado por multiplier

/* function sumManyTimes(multiplier, ...numbers){
    let suma = 0
    for(let i = 0; i<numbers.length; i++){
        suma+= numbers[i]
    }
    return suma * multiplier
} */

const sumManyTimes = (multiplier, ...numbers) =>{
    let suma = 0
    for(let i = 0; i<numbers.length; i++){
        suma+= numbers[i]
    }
    return suma * multiplier
}
console.log(sumManyTimes(2, 2, 3, 4, 5, 6))



//6. Crea un callback que se invoque con el resultado de la suma de todos los numeros que se le pasan a una funcion

function sumaTotal(numbers, callback){
    let result = 0
    for(let num of numbers){
        result += num
    }
    callback(result)
}

function processResult(result){
    console.log(result)
}

sumaTotal([1, 2, 3, 4, 5], processResult)

//7. Desarrolla una funcion parcial

function sumaTotal(numbers){
    let sumTotal = 0
    for(let num of numbers){
        sumTotal += num
    }
    return function(numberOfNumbers){
        return sumTotal / numberOfNumbers
    }
}
let numeros = [1, 2, 3, 4, 5, 6]
const sumarNumeros = sumaTotal(numeros)
console.log(sumarNumeros(numeros.length))

//8. Implementa un ejemplo que haga uso de Spread 

function date(dia, mes, año){
    return `${dia}/${mes}/${año}`
}

let fecha = [27, 9, 2026]

console.log(date(...fecha))
//9. Implementa un retorno implicito

const multiplicacion = (a, b) => a * b
console.log(multiplicacion(6, 7))

//10. Haz uso del this lexico

let gimnasio = {
    nombre : "GymFit",
    horario : "07:00 - 22:30",
    mancuernas : [10, 20, 30, 40],
    matriculacion(){
        setTimeout(()=>{
            console.log(`Bienvenido a ${this.nombre}`)
        }, 4000)
    },
    informacion(){
        console.log(`Informacion de ${this.nombre}: 
            disponemos del siguiente horario: ${this.horario}
            y de la siguiente variedad de pesos en las mancuernas: ${this.mancuernas}`)
    } 

}
gimnasio.matriculacion()
gimnasio.informacion()


