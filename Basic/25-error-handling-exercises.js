

function dividir(a, b){
    if(a == 0 & b == 0){
        throw new Error ("Datos incorrectos, no se puede dividir 0/0")// 3. Lanza una excepción genérica
    }else if(typeof a !== "number" || typeof b !== "number"){
        throw new Error("los valores deben ser numeros")// 6. Lanza varias excepciones según una lógica definida
    }
    return a / b
}
 try{// 1. Captura una excepción utilizando try-catch
    //console.log(dividir(0, 0))
    //console.log(dividir("10", 5))
    //console.log(dividir(10, "5"))
    console.log(dividir(10, 5)) 
}catch(error){
    console.log("Error:* ", error.message)
} finally {// 2. Captura una excepción utilizando try-catch y finally

    console.log("Ejecucion finalizada")
}

// 4. Crea una excepción personalizada

class SumCharPlusNumberError extends Error{
    constructor(message, a, b){
        super(message)
        this.a = a
        this.b = b
    }
}

// 5. Lanza una excepción personalizada

function sum(a, b){
    if(typeof a !== "number" || typeof b !== "number"){
        throw new SumCharPlusNumberError("No se puede sumar un numero y una cadena de texto")
    }
    return a + b
}

// 7. Captura varias excepciones en un mismo try-catch

try{
    //console.log(dividir(0, 0))
    //console.log(dividir("10", 5))
    //console.log(dividir(10, "5"))
    //console.log(dividir(10, 5))
    //console.log(sum("5", 6))
    console.log(sum("hola", 7))
    //console.log(sum(6, 7))
} catch(error){
    if(error instanceof SumCharPlusNumberError){
        console.log("Error:* ", error.message)
    }else if(error instanceof Error){
        console.log("Error:* ", error.message)
    }
 } finally {
    console.log("Ejecucion finalizada")
}

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

 function transformFloat(lista){
    for(let i = 0; i<lista.length; i++){
        lista[i] = parseFloat(lista[i])
        if(isNaN(lista[i]) === true){
            throw new Error("No es posible transformar a float")
        }
    }
    return lista
}
let lista = ["Hola", true, "Depende", 5]
let lista2 = [5, 6, 7, 8]
try{
    //console.log(transformFloat(lista))
    console.log(transformFloat(lista2))
} catch(error){
    console.log("Error:* ", error.message)
}

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

class PropertyNotFoundError extends Error{ //Creamos excepcion personalizada
    constructor(message){
        super(message)
    }
}
let persona = {// Creamos el objeto que vamos a inspeccionar
    nombre: "Juan", 
    edad : 20,
    dni : "29854012J"
}

function hasProperty(objeto, nombrePropiedad){
    // Comprueba si la clave existe en el objeto
    if(!(nombrePropiedad in objeto)){
        throw new PropertyNotFoundError(`La propiedad ${nombrePropiedad} no existe`)
    }
    return true
}

try{
    //console.log(hasProperty(persona, persona.dni))//la llamada a la funcion devuelve True
    console.log(hasProperty(persona, "deporte"))//se lanza la excepcion personalizada
} catch(error){
    if(error instanceof PropertyNotFoundError){
        console.log("Error:* ", error.message)
    }else{
        console.log("Error: Ha ocurrido un fallo")
    }
} finally {
    console.log("Ejecucion finalizada")
}
// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10

const iniciarSesion = (usuario, contraseña) =>{
    let user = "Adrian"
    let passwd = "kkkk"
    let contador = 0
    while(contador < 11){ //Maximo de 10 reintentos
        try{
            if(usuario !== user || contraseña !== passwd){ //Si las credenciales no son correctas, lanza la excepcion
                throw new Error("Credenciales incorrectas")     
                //console.error("Credenciales incorrectas") Solucion chapucera teniendo el try/catch fuera de la funcion
                       
            }else {
                console.log("Inicio de sesion exitoso") //Si son correctas, imprime el mensaje y abandona el bucle
                break
            }
        } catch(error){ //Usamos el catch dentro del bucle para que en cada iteracion se capture el mensaje
            console.log("Error:* ", error.message)
        }
        contador++ //Usamos el contador al final de TODA la iteracion para ahorrarnos un bucle infinito
    } 
      
}
iniciarSesion("Juan", "perico")

