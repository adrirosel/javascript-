// 1. Usa desestructuración para extraer los dos primeros elementos de un array

let lista = [1, 2, 3, 4, 5, 6]

let [valor1, valor2] = lista
console.log(valor1)
console.log(valor2)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

let [valor3, valor4, valor5, valor6, valor7, valor8, valor9 = 0] = lista
console.log(valor3)
console.log(valor4)
console.log(valor5)
console.log(valor9) //Valor predeterminado

// 3. Usa desestructuración para extraer dos propiedades de un objeto

let objeto = {
    nombre: "Adrian", 
    apellidos: "Rosel Martinez", 
    comunidadAut: "Region de Murcia", 
    edad: 20
}

let {nombre, apellidos} = objeto
console.log(nombre)
console.log(apellidos)
// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

let {comunidadAut : CA, edad : age} = objeto
console.log(CA)
console.log(age)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

let person3 = {
    name: "Adrian", 
    age: 20,
    alias: "RoselMar",
    //Defino la funcion con su nombre siguiendo
    //estructura clave : valor y la estructura de las funciones
    walk: function(){
        console.log("La persona camina...")
    },
    job : {
        name: "Programador",
        exp: 15,
        work : function(){
            console.log(`La persona ${this.name}trabaja...`)
            //this hace referencia a la propiedad del propio objeto como tal
            //al hacer interpolaciones dentro de objetos es necesario incluir this
            //al referirse a propiedades del mismo objeto
        }
    }
}

let {job : {name : jobName, exp}} = person3

console.log(jobName)
console.log(exp)

// 6. Usa propagación para combinar dos arrays en uno nuevo

let verdura = ["tomate", "lechuga", "zanahoria"]
let fruta = ["platano", "maracuya", "manzana"]

let compra = [...verdura, ...fruta]
console.log(compra)

// 7. Usa propagación para crear una copia de un array

let compra2 = [...compra]

// 8. Usa propagación para combinar dos objetos en uno nuevo

let dobleObjeto  = {...objeto, ...person3}
console.log(dobleObjeto)

// 9. Usa propagación para crear una copia de un objeto

let dobleObjeto2 = {...dobleObjeto}

// 10. Combina desestructuración y propagación

let juanito = {
    nombre: "Juanito"
}
let juanito2 = {...juanito, edad : 13, correo : "juanito@hotmail.com"}

let {nombre : nombre2, ...restoDatos} = juanito2 //Combinacion de la desestructuracion, con el operador (...)
console.log(restoDatos)



