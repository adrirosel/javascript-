// Clases

class Person{
    constructor(name, age, alias){
        this.name = name
        this.age = age
        this.alias = alias
    }

}

//Sintaxis


let person = new Person("Adrian", 20, "adrirosel")
let person2 = new Person("Juan", 50, "latinlover")

console.log(typeof person) //Tipo objeto
console.log(person2)

class DefaultPerson{
    constructor(name = "Nombre por defecto", age = 0, alias = "Sin alias"){
        this.name = name
        this.age = age
        this.alias = alias
    }
}

let persona = new DefaultPerson()//Por cierto, las definiciones se hacen
//segun EL ORDEN DE LOS PARAMETROS
console.log(persona)

let person3 = new DefaultPerson("Juana", 37)
//Acceso a propiedades

console.log(person2.alias)
//console.log(person2["alias"])

person3.alias = "Juana La Loca"
console.log(person3)
console.log(person3.alias)

//Funciones en clases


class Persona2{
    constructor(name, age, alias = "Sin alias"){
        this.name = name
        this.age = age
        this.alias = alias
    }
    walk(){
        console.log(`${this.name} camina...`)
    }
}

let person4 = new Persona2("Diego", 25)

person4.walk()

//Propiedades privadas

class PrivatePerson {

    #bank //Propiedad privada

    constructor(name, age, alias = "Sin alias", bank){
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank
    }
    pay(){
        console.log(`${this.name} esta pagando con: ${this.#bank}`)
    }
}

let persona5 = new PrivatePerson("Adrian", 19, "Rosel" , "IBAN2847381")
//persona5.bank = "alkjwdfeslahfe" //MAL, tiene que ser PRIVADO

//La propiedad bank ahora es privada y solo podemos acceder a ella DENTRO
//de la clase

//console.log(person5.bank) no podemos acceder ni modificar bank por ser privada

// getters y setters

class GetPersona{
    #name
    #age
    #alias
    #bank
    constructor(name, age, alias, bank){
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    }

    get name(){
        return this.#name
    }

    set bank(newBank){
        this.#bank = newBank
    }
    /*
    get bank(){
        return this.#bank
    }
        */
       //Prueba para acceder y ver el cambio 

}

persona6 = new GetPersona("Adrian", 20, "adrirosel", "IBAN2087540987254")
console.log(persona6)//no imprime nada

console.log(persona6.name) //accedo a la propiedad

persona6.bank = "new IBAN12398754021987543"
//console.log(persona6.bank)

// Herencia

class Animal {
    constructor(name){
        this.name = name
    }

    sound(){
        console.log("Emite un sonido generico")
    }
}

class Dog extends Animal{ //Palabra reservada para indicar herencia


    run(){
        console.log("El perro corre")
    }
    //Sobreescribir metodos heredados
    sound(){
        console.log(`Guau guau`)
    }
}

let myDog = new Dog("Tobi")

//myDog.sound()
myDog.run()

class Fish extends Animal{
    constructor(name, size){
        super(name)//Llama a la superclase, nos dice que recibe un nombre
        this.size = size
    }
    swim(){
        console.log(`El pez ${this.name} nada...`)
    }
}

let myFish = new Fish("AdriFish", 10)
myFish.swim()
myDog.sound()//Metodo sobreescrito, ya no hace caso al metodo de la clase Animal

// Metodos estaticos

class MathOperations {
    static sum(a,b){
        return a + b
    }

}

//let myClass = new MathOperations()
//console.log(myClass.sum(5, 6))

console.log(MathOperations.sum(5, 10))
//Podemos acceder a los metodos estaticos de una clase sin instanciar un objeto 
//de esta misma clase
//Podemos llamar a estas funciones en la misma clase, no en las instancias
//De esta manera no hace falta crear una instancia cada vez que queramos 
//hacer una suma

//Podemos mezclar funciones estaticas y no estaticas en una misma clase
