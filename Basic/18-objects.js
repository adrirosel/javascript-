// Objetos

//Coleccion de propiedades
//a nivel estructural se parecen a los maps (clave : valor)
//dentro puede tener tanto datos primitivos como otros objetos

//Sintaxis

let person = {
    name: "Adrian", 
    age: 20,
    alias: "RoselMar"
}

// Acceso a propiedades

// Notacion punto

console.log(person.age) //Imprime una propiedad a la que se esta 
                        //accediendo del objeto
//Notacion corchetes
console.log(person["age"])

// Modificacion

person.name = "Juan" //Modificacion de una propiedad del objeto
console.log(person.name)

person.age = 19
console.log(person.age)

//JS al ser de tipado dinamico podemos modificar propiedades
//en tiempo de ejecucion

//Eliminacion de propiedades

delete person.age

//Nueva propiedad

person.email = "roselmartinezadrian@gmail.com"
person["age"] = 20
console.log(person)

//Metodos (funciones)

let person2 = {
    name: "Adrian", 
    age: 20,
    alias: "RoselMar",
    //Defino la funcion con su nombre siguiendo
    //estructura clave : valor y la estructura de las funciones
    walk: function(){
        console.log(`La persona que tiene ${age} años camina...`)
    }
}
//Lo llamo como una propiedad mas, añadiendo los parentesis ya que es una funcion
person2.walk()

// Anidacion de objetos

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

console.log(person3.job)
console.log(person3.job.name)
person3.job.work()

//Igualdad de objetos

console.log(person)

let person4 = {
    name: 'Juan',
    alias: 'RoselMar',
    email: 'roselmartinezadrian@gmail.com',
    age: 20
}

console.log(person)
console.log(person4)//Identicos

console.log(person == person4) //False
console.log(person === person4) //False

//No se compara el valor que tiene dentro, en realidad se compara 
// la direccion de memoria, y CADA OBJETO se guarda en una direccion de memoria
//diferente

console.log(person.name == person4.name)//True
//Aqui SI accedemos al valor de la propiedad al hacer la comparacion

// Iteracion

//para iterar estructuras que NO son objetos, se usa OF
//mientras que para iterar objetos se usa IN

for(let key in person4){
    console.log(key)
}
//Iterar objeto completo
for(let key in person4){
    console.log(key + ": " + person4[key])
}

// Funciones como objetos

//Estoy creando un objeto que es util cuando se necesiten crear diferentes 
//estancias (Constructor)
//Pero esto se implementa mejor en una CLASE
//por tanto esto asi no es buena practica
function Person(name, age){
    this.name = name
    this.age = age
}

let person5 = new Person("Isabel Maria", 48)

console.log(person5)

console.log(typeof person5)
console.log(typeof person4) //Ambos son objetos