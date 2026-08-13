// Funciones

//Bloque de codigo diseñado para realizar una accion especifica
//se las tiene que llamar
//utilizadas para poder usar codigo reutilizable


//Simple
function myFunc(){
    console.log("Hola funcion")
} 

for(let i = 0; i< 5; i++){
    myFunc()
}

//Con parametros

function myFuncWithParams(name){

    console.log(`Hola ${name}`)
}

myFuncWithParams("Adrian")

//Funciones anonimas

const myFunc2 = function(name){
    console.log(`Hola ${name}`)
}

myFunc2("Rosel")

//Funciones flecha / Arrow Functions

const myFunc3 = (name) => {
    console.log(`Hola ${name}`)
}

myFunc3("Adrian Rosel Martinez")

const myFunc4 = (name) => console.log(`Hola ${name}`)

myFunc4("Adri Rosel")


//Parametros

function sum(a, b){
    console.log(a+b)
}

sum(5, 10) //devuelve 15

sum(5) //NaN

sum() //NaN

function defaultSum(a = 0, b = 0){ //Predefinimos los parametros para evitar errores de compilacion
    console.log(a+b)
}

defaultSum(5, 10) //15
defaultSum(5) //5
defaultSum() // 0

//Retorno de valores

function mult(a, b){
    return a * b
} 
//Para imprimir el valor en este caso hay que DECIDIR imprimirlo (console.log())

console.log(mult(5, 2))

// Funciones anidadas

function extern(){
    console.log("Funcion externa")
    function intern(){
        console.log("Funcion interna")
    }
    intern()
}

extern()//Llama a metodo externo
//intern()//Fuera del escope (error)

//Funciones de orden superior

//Es una funcion que recibe como parametros el nombre de 
//otra funcion y el parametro de esta
//asi en el interior de esta funcion de orden superior
//podemos llamar a la funcion que pasamos por parametros
function applyFunc(func, param){
    func(param)
}


//Al llamar a la funcion de orden superior, pasamos separados de comas 
//los parametros nombre de funcion y su parametro
applyFunc(myFunc4, "Funcion de orden superior")

//forEach

let array = [1, 2, 3, 4, true, 5]

mySet = new Set(["Adrian", "Rosel", "Martinez"])

myMap = new Map([
    ["name", "Adrian"],
    ["age", 20], 
    ["email", "roselmartinezadrian@gmail.com"]
])

array.forEach((value) => console.log(value))

/*
array.forEach(function (value){
    console.log(value)
})
*/

mySet.forEach((value) => console.log(value))

myMap.forEach((value) => console.log(value))

//Es decir, forEach funciona para realizar 
// iteraciones en estructuras de datos