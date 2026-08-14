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
        if(caracter == "a" || caracter == "e" || caracter == "i" || caracter == "o" || caracter == "u"){
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
function esPrimo(num){
  if(num <= 1 ) return false //El 0 y el 1 NO son considerados primos, asi que los eliminamos del planteamiento
    for(let i = 2; i< num; i++){
         if(num % i == 0){
            return false
          }
     }
  return true
}
console.log(esPrimo(66))

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos.

const elemComun = (arr1, arr2) => {

    let comunes = []//Variable donde guardaremos los elementos comunes
    for(let i = 0; i<arr1.length; i++){
        for(let j = 0; j<arr2.length; j++){ //Doble bucle for para recorrer los dos arrays
            if(arr1[i] === arr2[j]){ //Si el elemento de la posicion de uno es igual al del otro, lo guardamos
                comunes.push(arr2[j])
            }
        }
    }console.log(comunes)
}

let array1 = [1, 5, 7, 8, 10] //Ejemplo
let array2 = [5, 8, 10, 6, 2, 4] //Ejemplo

elemComun(array1, array2) 

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares.

function numPares(numeros){
    let suma = 0
    for(let i = 0; i<numeros.length; i++){
        if(numeros[i] % 2 == 0){
             suma += numeros[i]
        }
    }
    return suma
}

let numeros = [3, 6, 9, 12, 16, 22, 32] //La suma de los numeros pares deberia ser 88

console.log(numPares(numeros))

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado.

function numCuadrado(numeros){
    let cuadrados = []
    for(let i = 0; i<numeros.length; i++){
        //numeros[i] **= 2
        cuadrados.push(numeros[i] ** 2)
    }
    console.log(cuadrados)
}
let nums = [3, 4, 5, 6] //Deberia devolver [9, 16, 25, 36]
numCuadrado(nums)

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso.

const cadenaInversa = function(str){
    let separarPalabras = str.split(" ")
    let strInverse = []
    for(let i = 0; i<separarPalabras.length; i++){
        strInverse.unshift(separarPalabras[i])
    }
    let impresionLinea = ""
    for(let j = 0; j<strInverse.length; j++){
        impresionLinea += strInverse[j] + " "
    }
    console.log(impresionLinea)
}
let str1 = "Hola me llamo Noemi"
cadenaInversa(str1)
// 10. Crea una función que calcule el factorial de un número dado.

function factorial(numero){
    let contador = 1
    let factorial = 1
    while(contador <= numero){
        factorial *= contador
        contador++
    }
    console.log(factorial)
}
factorial(5) //120
factorial(50)//Aproximadamente $3,0414 \veces 10^{64}$

