// 1. Crea una clase que reciba dos propiedades
class Persona{
    #name
    #age
    constructor(name, age){
        this.#name = name
        this.#age = age
    }
    // 2. Añade un método a la clase que utilice las propiedades
    presentacion(){
        console.log(`Hola, soy ${this.name} y tengo ${this.age} años`)
    }
    // 4. Añade un método estático a la primera clase
    static run(){
        console.log("La persona esta corriendo")
    }
    get name(){
        return this.#name
    }
    set name(name){
        this.#name = name
    }
    get age(){
        return this.#age
    }
    set age(newAge){
        this.#age = newAge
    }
}

// 3. Muestra los valores de las propiedades e invoca a la función
let p1 = new Persona("Mario", 22)
console.log(p1.name)
console.log(p1.age)
p1.presentacion()


// 5. Haz uso del método estático
Persona.run()
// 6. Crea una clase que haga uso de herencia
class Camarero extends Persona {
    // 8. Modifica la clase con getters y setters para que use propiedades privadas
    #zone
    #letter
    constructor(name, age, zone, letter){
        super(name, age)
        this.#zone = zone
        this.#letter = letter
    }
    // 7. Crea una clase que haga uso de getters y setters (Los implemento en esta misma clase)
    // 8. Modifica la clase con getters y setters para que use propiedades privadas

    get zone(){
        return this.#zone
    }
    set zone(newZone){
        this.#zone = newZone
    }
    get letter(){
        return this.#letter
    }
    set letter(newLetter){
        this.#letter = newLetter
    }
    // 10. Sobrescribe un método de una clase que utilice herencia
    presentacion(){
        console.log(`Hola, soy ${this.name}, tengo ${this.age} años, me encuentro en la zona ${this.#zone}
            y mi talonario tiene la letra ${this.#letter}`)
    }
}

// 9. Utiliza los get y set y muestra sus valores
let c1 = new Camarero("Adrian", 20, "PlacetaIzq", "B")
c1.name = "Jose"
console.log(c1.name)

c1.presentacion()//Comprobacion del ejercicio 10