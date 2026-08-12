// // if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let nombre = "Adrian"
if (nombre == "Adrian")console.log(nombre)

// 2. Imprime por consola un mensaje si el usuario y contraseña coincide con unosestablecidos
const usuario = "adrirosel"
const passwd =  "aadddcc69"
if (usuario == "adrirosel" && passwd == "aadddcc69") console.log("Datos correctos, bienvenido!")

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let number = 4

if(number > 0){
    console.log("Numero positivo")
} else if (number < 0){
    console.log("Numero negativo")
} else{
    console.log("El numero es 0")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let edad = 15
let restante
if (edad >= 18){
    console.log("Se puede votar")
} else {
    restante = 18 - edad
    console.log(`Le faltan ${restante} años para votar`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad

let age = 18

const mensaje = age >= 18 ? "Adulto" : "Menor"
console.log(mensaje)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = 9
if(mes != 0){
    if (mes == 12 || mes <= 2){
        console.log("Estamos en invierno")
    } else if(mes >=3 && mes <=5){
        console.log("Estamos en primavera")
    } else if (mes >= 6 && mes <=8){
        console.log("Estamos en verano")
    } else if (mes >=9 && mes <= 11 ){
        console.log("Estamos en otoño")
    }
} else {
    console.error("Dato incorrecto")
}


// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior (Pendiente de repaso)
/* if(mes == 2){
    console.log("Febrero tiene 28 dias")
} else if(mes % 2 !=0 || mes == 8){
    console.log("Este mes tiene 31 dias")
} else if(mes == 9){
    console.log("Este mes tiene 30 dias")
} else {
    console.log("Este mes tiene 30 dias")
} */
if (mes <= 0 || mes > 12) {
    console.error("Error: Dato invalido")
} else if (mes ==2) {
    console.log("El mes tiene 28 dias")
} else if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12){
    console.log("El mes tiene 31 dias")
} else {
    console.log("El mes tiene 30 dias")
}
//Excepto agosto, en el calendario coinciden los meses "impares" con que tengan 31 dias

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let idioma = 2


switch(idioma){
    case 0:
        console.log("Buenas!")
        break
    case 1: 
        console.log("Nice to meet you!")
        break
    case 2: 
        console.log("Salut!")
        break
    case 3: 
        console.error("Idioma no contemplado")
        break
    default: 
        console.log("Adios")
        break;
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6
let month = 1
let estacion
//En este caso usamos el 0 para enero (el 11 para diciembre)
switch(month){
    case 0:
    case 1:
    case 11:
        estacion = "Invierno"
        break;
    case 2:
    case 3:
    case 4:
        estacion = "Primavera"
        break;
    case 5:
    case 6:
    case 7:
        estacion = "Verano"
        break;
    case 8:
    case 9:
    case 10:
        estacion = "Otoño"
        break;
    default: 
        break
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7
let numDias

if (month == 0 || month > 12){
    console.error("Error: numeros no validos")
} else {
    switch(month){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8: 
        case 10:
        case 12:
            numDias = 31
            break
        case 2:
            numDias = 28
            break
        case 4:
        case 6:
        case 9:
        case 11:
            numDias = 30
            break
        default:
            break    
    }
}