//Loops o bucles

//Se asocia a una estructura de control
//mientras se cumpla una condicion, se va a repetir la ejecucion de un bloque de codigo
//nos sirve para manejar grandes cantidades de datos
//o automatizar tareas repetitivas

// for

for (var i = 0; i<10; i++){
    console.log(`Hola ${i}`) //interpolamos el indice para saber en que iteracion ocurre
    //Esto lo que hace es: 
    //Inicializa una variable de apoyo, mientras que el valor de esa
    //variable sea menor que x cantidad, se repetira el bucle
    //al finalizar cada iteracion, esta variable se incrementa en 1
    //se repetira tantas veces como se cumpla en la condicion
}

const numbers = [1, 2, 3, 4, 5]

for (let i = 0; i<numbers.length; i++){
    //Aqui, utilizamos numbers.length para recorrer la lista en funcion de 
    //su longitud
    //si i la inicializamos a 1, pondriamos 1 <= numbers.length
    console.log(`Elemento: ${numbers[i]}`)
    //Imprimimos iteracion a iteracion cada valor de la posicion de la lista
}

// while

//Aqui, la condicion se comprueba ANTES de la iteracion
//es decir
//tenemos i = 0 como una variable, si la condicion se cumple, entra dentro 
//del bucle (del bloque de codigo a ejecutar mientras se cumple la condicion)
//para no hacer un bucle infinito en el que siempre se cumpla la condicion
//colocamos, en este caso, un incremento
//asi cuando no se cumpla la condicion, continuara la respectiva ejecucion de codigo


let j = 0
while(j < 10){
    console.log(`Hola ${j}`)
    j++
}

// do while
//Aqui nos aseguramos de que el codigo se ejecuta minimo una vez antes
//de entrar al bucle
//En caso de que la variable no se cumpla directamente con la condicion del bucle
//se ejecuta UNA SOLA VEZ
let k = 0
do {
    console.log(`Hola ${k}`)
    k++

} while(k < 5)

//for of

myArray = ["Adrian", "Rosel", "Martinez", 45, 2004, true]
let mySet = new Set(["Adrian", "Rosel", "Martinez"])
myMap = new Map([
    ["name", "Adrian"],
    ["age", 20], 
    ["email", "roselmartinezadrian@gmail.com"]
])

let myString = "Hola JavaScript"

for(let valor of myArray){
    console.log(valor)
    //Se ejecuta el for por cada uno de los valores del array
}

for (let valor2 of mySet){
    console.log(valor2)
    //Se ejecuta el for por cada uno de los valores del set 
}

for (let valor3 of myMap){
    console.log(valor3)
    //Se ejecuta el for por cada uno de los valores del map
}

for (let valor4 of myString){
    console.log(valor4)
    //Tambien podemos iterar caracter a caracter en un String
}

// Buenas practicas

//break y continue

for (var i = 0; i<10; i++){
    if(i == 5){
        continue //Se lo salta, se va directamente a la proxima iteracion
    } else if (i == 7){
        break //Detiene toda la ejecucion del bucle una vez llegados a la condicion
    }
    console.log(`Hola ${i}`)
}