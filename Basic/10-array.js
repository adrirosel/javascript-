// array

//Declaracion e Inicializacion

let myArray = []
let myArr2 = new Array()

console.log(myArray)
console.log(myArr2)

myArray = [1] //meter una posicion (el numero 1) en el array (Recomendado)
myArr2 = new Array(3)//Definir el numero de posiciones vacias que tiene el array
//(No recomendado)
console.log(myArray)
console.log(myArr2) 

let myArr3 = new Array(1, 2, 4, 6)//No define el numero de posiciones vacias, 
//                                  sino que crea la lista directamente con esos datos
//Se pueden guardar datos de distinto tipo en un array

//Se puede acceder a una posicion concreta de un array y darle un valor

myArr2[0] = "Adrian"
myArr2[1] = "Rosel"
myArr2[2] = "Martinez"

console.log(myArr2)

myArray = []

//myArr[0] = "Adrian"
myArray[1] = "Rosel"
myArray[2] = "Martinez"

console.log(myArray)

//De forma dinamica, a medida que modificamos el contenido del array este se adapta,
//en este caso estamos dejando la primera posicion (0) libre

//Metodos comunes
myArray = []

// push y pop

//Push sirve para introducir elementos dentro de un array
myArray.push("Adrian")
myArray.push("Rosel")
myArray.push("Martinez")
myArray.push(2006)
myArray.push(69)


console.log(myArray)

//Pop sirve para eliminarlos

myArray.pop("Martinez")
myArray.pop(2006)
myArray.pop(69)

console.log(myArray)

console.log(myArray.pop())//De esta manera, elimina el ULTIMO elemento del array
//por lo que a partir de aqui solo nos queda "Adrian" en el array
//Y TAMBIEN LO DEVUELVE
//Se podria guardar en una variable para que, aunque este eliminando el elemento,
//tener ese elemento guardado para mas adelante

//shift / unshift

myArray.shift() //Elimina el PRIMER elemento del array y lo devuelve (igual que el pop)

myArray.unshift("Isabel", "Maria")//Inserta uno o mas elementos al principio del array

console.log(myArray)

//length

myArray.length //sin parentesis, es una propiedad, es decir, contiene un valor
// ese valor es la longitud del array

console.log(myArray.length)

// clearn (Borrar el contenido del array)

//myArray = []
myArray.length = 0 //alternativa

//slice 
myArray.push(37, "Adrian", "Rosel", 2006)

let myNewArray = myArray.slice(1, 3) //creamos una copia superficial de un trozo del array con las 
//posiciones del array que le indicamos
//No tiene en cuenta el ultimo indice, el primero si
console.log(myArray)
console.log(myNewArray)

//splice
myArray.splice(1, 3) //elimina los elementos desde que indice quiero empezar, y CUANTOS elementos quiero eliminar
console.log(myArray)

myArray = ["Adrian", "Rosel", "Martinez", 45, 2004, true]

myArray.splice(1, 2, 4) //Desde la posicion (1) incluyendola, elimina 2 elementos
// y en esa posicion agrega el numero 4 (en este ejemplo)
console.log(myArray)