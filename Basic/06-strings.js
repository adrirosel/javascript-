//Strings

//Concatenacion de cadenas

let myName ="Adrian"
let greeting = "Hola, " + myName + "!"
console.log(greeting)

//Longitud
console.log(greeting.length)

//Acceso a caracteres

console.log(greeting[4]) //Le paso el indice del caracter
//Empezamos a contar desde el 0, si ponemos el ultimo numero, saldra undefined

console.log(greeting.toUpperCase())//Mayusculas
console.log(greeting.toLowerCase())//Minusculas
console.log(greeting.indexOf("Adrian"))
//Indice donde encuentra la palabra Adrian
console.log(greeting.includes("Adrian"))//Devuelve True
console.log(greeting.slice(0, 10))//Se queda con 10 elementos, ya que se queda entre el 0 y el 9
console.log(greeting.replace("Adrian", "Rosel"))
//El primer parametro es la palabra a sustituir, el segundo es la sustitucion

// Template literals (Plantillas literales)

let message = `Hola, este es mi
curso de JavaScript`

//Usamos acento invertido para hacer textos en varias lineas

let message2 = `Este es 
mi nuevo mensaje`
console.log(message2)

//Tambien para interpolar datos sin necesidad de concatenar strings
console.log(`Hola, mi nombre es ${myName}`)
