// 1. Concatena dos cadenas de texto
let nombre = "Juan Jose"
console.log("Hola mi nombre es " + nombre + "!")

// 2. Muestra la longitud de una cadena de texto
console.log(nombre.length)
// 3. Muestra el primer y último carácter de un string
console.log(nombre[0])
//console.log(nombre[8]) Funciona en este caso en concreto, 
//pero para otra cadena de caracteres no aplicaria en la mayoria de casos
console.log(nombre[nombre.length-1])

// 4. Convierte a mayúsculas y minúsculas un string
let alerta ="Este Es Un Mensaje De Alerta"
console.log(alerta.toUpperCase() + "(Bien escrito, es una alerta)")
console.log(alerta.toLowerCase() + "(Mal escrito, estoy susurrando...)")
// 5. Crea una cadena de texto en varias líneas

let mensajeLargo = `Este es un mensaje larguisimo, 
por ende voy a necesitar varias lineas
para poder escribirlo`

// 6. Interpola el valor de una variable en un string
console.log(`Cuando hablamos sobre alguien usualmente nos referimos a el por su nombre, 
    por ejemplo: "Hola, ${nombre}"`)
// 7. Reemplaza todos los espacios en blanco de un string por guiones
//console.log(nombre.replace(" ", "-"))
console.log(nombre.replaceAll(" ", "-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(nombre.includes("Adrian"))//False
console.log(nombre.includes("Jose"))//True
// 9. Comprueba si dos strings son iguales
console.log(nombre == mensajeLargo) //False
console.log(nombre == "Juan Jose")//True
//Tanto si usamos el operador de igualdad normal como el de identidad
//ambos son key-sensitive
// 10. Comprueba si dos strings tienen la misma longitud

console.log(nombre.length == mensajeLargo.length)