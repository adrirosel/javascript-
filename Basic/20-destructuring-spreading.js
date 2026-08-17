myArray = [1, 2, 3, 4]

let person = {
    name : "Adrian", 
    age : 20, 
    alias : "adrirosel"
}
myArray.push(5)
console.log(myArray)

let myValue = myArray[1]
console.log(myValue)

let myName = person.name

console.log(myName)

// Desestructuracion

// Sintaxis arrays

let [myValue0, myValue1, myValue2 = 0] = myArray

console.log(myValue0)
console.log(myValue1)
console.log(myValue2)

//Desesctructuro el array en diferentes variables todo de una unica vez

//Sintaxis arrays con valores predeterminados

/*[myArray0 = 0, myValue1, myValue2]  = myArray

console.log(myValue0)
console.log(myValue1)
console.log(myValue2)
*/
//Esto NO funciona

let [myValue3, myValue4, myValue5 = 0] = myArray

console.log(myValue3)
console.log(myValue4)
console.log(myValue5)

//Los datos que no nos interesan ponemos separadas comas con valores vacios

let [myValue10, , , myValue13] = myArray
console.log(myValue10)
console.log(myValue13)

//Sintaxis objects

//let[name, age, alias] = person MAL, lo estoy haciendo como si fuera un array

/* let {name, age, alias} = person

console.log(name)
console.log(age)
console.log(alias)

//Sintaxis de objetos con valores predeterminados

let { name2, age2, alias2, email = "rosel@gmail.com"} = person
console.log(name2) NO EXISTE
console.log(age2) NO EXISTE
console.log(alias2) NO EXISTE
console.log(email) */

let {age, name, alias} = person

/* 
En objetos la desestructuralizacion cambia un poco la sintaxis
y aparte, usamos el nombre DE LA CLAVE, no como si fuera una variable, 
por tanto, lo que esta arriba comentado no tiene mucho sentido
*/

// Sintaxis objects pero con nuevos nombres de variables

let {name: name3, age: age3, alias : alias3} = person

console.log(name3)
console.log(age3)
console.log(alias3)

//Posdata: el orden no importa porque busca el nombre de la propiedad y 
//lo guarda en la variable

//Objects anidados

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

let {name : name4, job: {name: jobName} } = person3
console.log(name4)
console.log(jobName) //el nombre del objeto anidado

// Propagacion (...)

//permite expandir elementos de un array u objeto a otros arrays u objetos

let myArray2 = [...myArray] //Copia de arrays

let myArray3 = [...myArray, 6, 7] //Propagacion
console.log(myArray2)
console.log(myArray3)

//Combinacion de arrays

let myArray4 = [...myArray, ...myArray2, ...myArray3]
console.log(myArray4)

//Sintaxis objects

let person4 = {...person} //Copia de otro objeto

console.log(person4)

//Propagacion del objeto person al añadir nuevos datos
let person5 = {...person, email: "rosel@gmail.com"}
console.log(person5)