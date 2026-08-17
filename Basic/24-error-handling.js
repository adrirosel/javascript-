// Manejo de errores

//Excepcion
/*
let myObject

console.log(myObject.email) //Lanza un error, el programa deja de funcionar
*/

//Tratamiento (captura) de errores

//Try-catch

try{
    //Codigo que intenta ejecutar
    console.log(myObject.email)
    console.log("Finaliza la ejecucion sin errores")
}catch{
    //Bloque de error
    console.log("Se ha producido un error")
}

// Captura de errorres

try{
    
    console.log(myObject.email)
    
}catch(error){
    console.log("Se ha producido un error:* ", error.message)
}

//finally
//el finally ejecuta siempre dicho bloque de codigo, 
//independientemente del resultado de la compilacion anterior

try{    
    console.log(myObject)//Sin producir el error    
}catch(error){
    console.log("Se ha producido un error:* ", error.message)
} finally{
    console.log("Este codigo se ejecuta SIEMPRE")
}

// Lanzamiento de errores

// Crear excepciones personalizadas 

class SumZeroIntegerError extends Error{
    constructor(message, a, b){
        super(message)
        this.a = a
        this.b = b
    }

    printNumbers(){
        console.log(this.a, " + ", this.b)
    }

}

//throw
function sumIntegers(a, b){

    if(typeof a !== "number" || typeof b !== "number"){
        throw new TypeError("Esta operacion solo acepta numeros")
    }
    if(!Number.isInteger(a) || !Number.isInteger(b)){
        throw new Error("valor no admitido")
    }
    if(a == 0 || b == 0){
        throw new SumZeroIntegerError("Uno de los dos numeros es cero")
    }
    return a + b
}
try{
    console.log(sumIntegers(4, 2))
    console.log(sumIntegers("Adrian", 4))
    console.log("5", 4)
    console.log(5.5, 3)
} catch(error){
    console.log("Operacion no realizada:* ", error.message)
} finally {
    console.log("Ejecucion finalizada")
}

//throw new Error("Se ha producido un error") //Error que decido lanzar YO

//Capturar varios errores

try{
    //console.log(sumIntegers(5.5, 10))
    //console.log(sumIntegers("5", 10))
    console.log(sumIntegers(0, 10))
} catch(error){
    if(error instanceof TypeError){
        console.log("Se ha producido un error de tipo:* ", error.message)
    }else if (error instanceof Error){
        console.log("Se ha producido un error:* ", error.message)
    }else if (error instanceof SumZeroIntegerError){
        console.log("Se ha producido un error:* ", error.message)
    }
} finally {
    console.log("Adios")
}


