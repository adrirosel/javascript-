// set

//Declaracion

let mySet = new Set()

// Inicializacion

mySet = new Set(["Adrian", "Rosel", "Martinez"])
//en primera instancia, los datos deben ir entre corchetes

console.log(mySet)

//Metodos comunes

// add y delete

mySet.add("Mercha")
mySet.delete("Adrian")

console.log(mySet)

mySet.delete()//Sigo teniendo los mismos elementos, ya que NO borra el ultimo
//sino que hay que ESPECIFICAR que elemento queremos borrar
//tampoco funciona siguiendo un INDICE, hay que indicar EL VALOR

mySet.add("Macarrones")

console.log(mySet.delete("Macarrones"))
//A parte de borrar elementos, delete devuelve true o false en funcion de 
//si un elemento ya existia y se ha podido eliminar o no

// has (tiene)

//comprobamos si hay un elemento

console.log(mySet.has("Macarrones"))//False

console.log(mySet.has("Rosel"))//True

//size (igual que length pero aqui se le denomina tamaño en vez de longitud)

console.log(mySet.size)

//convertir un set a un array

let myArray = Array.from(mySet)
console.log(myArray)

//convertir un array a un set

mySet = new Set(myArray)
console.log(mySet)

//Set NO admite duplicados, es decir, que por muchas veces que intentemos
//añadir un elemento del mismo valor, NO se va a duplicar

mySet.add("Fiesta")
mySet.add("Fiesta")
mySet.add("Fiesta")
mySet.add("Fiesta")
mySet.add("Fiesta")
mySet.add("Fiesta")
mySet.add("Fiesta")
console.log(mySet)
//Aunque lo "añada" 500 veces, solo se añadira UNA vez
//pero tiene que ser exactamente igual