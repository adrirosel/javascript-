// map

// Declaracion

let myMap = new Map()
//Usamos la palabra new para declarar un nuevo objeto

// Inicializacion
//los Maps se definen usando pares key : value (clave : valor)
myMap = new Map([
    ["name", "Adrian"],
    ["age", 20], 
    ["email", "roselmartinezadrian@gmail.com"]
])

console.log(myMap)

//Metodos y propiedades

//set

myMap.set("alias", "rosel")
console.log(myMap)

//Con set podemos añadir nuevos valores al Map, y tambien
//podemos sobreescribir valores definidos previamente:

myMap.set("name", "Adrian Rosel Martinez")
//Esto sobreescribe la clave name, cambiandole su valor al nuevo introducido

console.log(myMap)

//get

//Este metodo nos sirve para recuperar un valor
//Utilizamos la clave para obtener el valor, ya que la clave va a ser unica
//Si la clave no existe, recibiremos undefined
myMap.get("name")

console.log(myMap.get("alias"))

// has
//Funciona igual que en los sets, a este metodo le pasamos la clave, 
//si la contiene, devuelve True; sino la contiene, False

console.log(myMap.has("name"))//Devuelve True

console.log(myMap.has("surname"))//Devuelve False

//keys
//retorna un listado unicamente con las claves del map
console.log(myMap.keys())

//values
//retorna un listado con los valores del map
console.log(myMap.values())

//size
//nos dice cual es el tamaño del map

console.log(myMap.size)

//entries
//devuelve un listado tanto de las claves como de los valores correspondientes
//es decir, un iterador del map
console.log(myMap.entries())

//delete

myMap.delete("age")

console.log(myMap)
//Tambien devuelve true o false si se contiene o no el elemento a eliminar

//clear
myMap.clear() //Usamos directamente el metodo clear() para eliminar todo el contenido del map

