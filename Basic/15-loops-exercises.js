// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
let i = 1
while (i <= 20){
    console.log(i)
    i++
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let suma = 0
for(let i = 1; i<=100; i++){
    suma += i
}
console.log(suma)


// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for (let i = 1; i<=50; i++){
    if (i % 2 == 0){
        console.log(i)
    } 
}
/* (Otra forma)
let i = 1
while (i <= 50){
    if(i % 2 == 0){
        console.log(i)
        i++
    } 
}
*/
// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

let contactos = ["Isabel", "Ariana", "Juan", "Jose", "Francisco", "Adrian"]

for(let nombre of contactos){
    console.log(nombre)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

let numVocales = 0

let cadenaTexto = `En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho 
tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, 
rocín flaco y galgo corredor`
//let cadenaSinEspacios = cadenaTexto.replaceAll(" ", "")
//console.log(cadenaTexto)
let cadenaMinusculas = cadenaTexto.toLowerCase()
for(let caracter of cadenaMinusculas){
    if(caracter == "a" || caracter == "e" || caracter == "i" || caracter == "o" || caracter == "u"){
        numVocales++
    }
}
console.log(`La cadena de texto tiene ${numVocales} vocales`)
// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let numeros = [9, 1, 2, 5, 7, 5, 8, 2, 4]
let producto = 1
for (let i = 0; i < numeros.length; i++){
   let numero = numeros[i]
   producto *= numero
}
console.log(`El producto de la serie de numeros es ${producto}`)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

for(let i = 1; i <= 10; i++){
    let resultado = 5 * i
    console.log(` 5 x ${i} = ${resultado}`)
}

// 8. Usa un bucle para invertir una cadena de texto
let cadenaInversa = ""
for(let i = cadenaTexto.length - 1; i>=0; i--){
    cadenaInversa += cadenaTexto[i]
}
console.log(cadenaInversa)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
/*La secuencia de Fibonacci consiste en una serie de numeros en la que, un numero es el resultado 
de la suma de los dos anteriores numeros
Los 10 primeros numeros a imprimir serian: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
*/
console.log("===== Secuencia de Fibonacci =====")
let contador = 0
let numActual = 0
let numSiguiente = 1

while(contador < 10){
    console.log(numActual)
    let suma = numActual + numSiguiente
    numActual = numSiguiente
    numSiguiente = suma
    contador++
}


// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

let numeros2 = [1, 12, 2, 10, 3, 14, 5, 25, 6, 36]

let numerosM = []

for (let i = 0; i<numeros2.length; i++){
    if(numeros2[i] > 10){
        numerosM.push(numeros2[i])
    }
}
console.log(numerosM) 
