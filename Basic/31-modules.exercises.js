// 1. Exporta una función
function comprobarMayus(passwd){
    let tieneMayus = false
    for(let valor of passwd){
        if(valor === valor.toUpperCase() && valor !== valor.toLowerCase()){ //Doble comparacion para evitar falsos positivos (numeros, guiones/guiones bajos, etc)
            tieneMayus = true
            break
        }
    }
    if(tieneMayus === false){
        throw new TypeError("La contraseña debe de tener al menos 1 caracter en mayuscula")
    }
}

function tieneNumeros(passwd){
    let tieneNum = false
    for(let valor of passwd){
        if(isNaN(parseInt(valor))){
            continue
        }else{
            tieneNum = true
            break
        }
    }
    if(tieneNum === false){
        throw new TypeError("La contraseña debe contener al menos 1 numero")
    }
}

export function validPassWord(passwd){
    comprobarMayus(passwd)
    if(passwd.length < 10){
        throw new TypeError("La contraseña debe tener una longitud superior a 10 caracteres")
    }
    tieneNumeros(passwd)
    if(!(passwd.includes("@")||passwd.includes("_"))){
        throw new TypeError("La contraseña debe contener caracteres especiales")
    }
    console.log("La contraseña es valida")
}

//No es necesario complicarse tanto con este ejercicio, pero bueno, asi tambien trabajo lecciones de otros ficheros
//creo otro fichero externo en el que hago uso de manejo de errores e importo esta funcion

// 2. Exporta una constante

export const saludo = "Hola"

// 3. Exporta una clase

export class ClaseExportada{
    constructor(mensaje){
        this.mensaje = mensaje
    }
}

// 4. Importa una función
// 5. Importa una constante
// 6. Importa una clase

import { add, PI, Circle } from "./28-export-modules.js"


// 7. Exporta una función, una constante y una clase por defecto

export default function porDefecto(){
    console.log("Soy una funcion exportada por defecto")
}

//export default const constPorDefecto = "Soy una constante exportada por defecto" 
//NO se puede exportar constantes por defecto

export default class Defecto{
    porDefecto(){
        console.log("Soy una clase exportada por defecto")
    }
}

// 8. Importa una función, una constante y una clase por defecto
import substract from "./28-export-modules.js" //Funcion por defecto comentada en el fichero 28
import MyClass from "./28-export-modules.js"
//No se puede importar constantes por defecto

// 9. Exporta una función, una constante y una clase desde una carpeta

//import { miFuncion, miConstante, miClase } from "./miCarpeta/fichero.js"

// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior

//import { miFuncion, miConstante, miClase } from "../otroDirectorio/fichero.js"