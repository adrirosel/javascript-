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

// 3. Exporta una clase

// 4. Importa una función

// 5. Importa una constante

// 6. Importa una clase

// 7. Exporta una función, una constante y una clase por defecto

// 8. Importa una función, una constante y una clase por defecto

// 9. Exporta una función, una constante y una clase desde una carpeta

// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior
