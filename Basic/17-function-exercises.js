// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios.

// 1. Crea una función que reciba dos números y devuelva su suma.

function sumar(a, b){
    //console.log(a + b)
    return a + b
}
//sumar(a, b)
console.log(sumar(4, 5))
// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos.

const numMayor = function(numeros){
    let numeroM = 0
    for(let i = 0; i<numeros.length; i++){
        if(numeros[i] > numeroM) numeroM = numeros[i]
    }
    console.log(numeroM)
}

let array = [3, 4, 66, 99, 25, 120]

numMayor(array)

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene.

function numVocales(str){
    let vocales = 0
    for(let caracter of str){
        if(caracter == "a" || caracter == "e" || caracter == "i" || caracter == "0" || caracter == "u"){
            vocales++
        }
    }
    return vocales
}
let string = `Hola, me llamo Adrian; tengo 20 años y actualmente 
estoy estudiando DAW(Desarrollo de Aplicaciones Web)`
console.log(numVocales(string))

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas.

const strMayus = (strings) => {
    let mayusculas = []
    for(let st of strings){
        mayusculas.push(st.toUpperCase())
    }
    console.log(mayusculas)
}

let arrayStr = ["Hola", "Adios", "Buenas", "Ordenador"]

strMayus(arrayStr)

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario.
/*
const esPrimo = (num) => {
    if(num % 2 == 0 && !(num == 2)){
        return false
    } else if(){
    
    }
    return true
}
*/
const esPrimo = (num) => {
   
}
console.log(esPrimo(47))
// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos.

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares.

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado.

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso.

// 10. Crea una función que calcule el factorial de un número dado.