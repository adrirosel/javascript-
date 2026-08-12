// 1. Crea un array que almacene cinco animales
let animales = ["vaca", "cerdo", "pelicano", "perro", "gato"]

// 2. Añade dos más. Uno al principio y otro al final

//Al principio 
animales.unshift("buey")
//al final 
animales.push("conejo")

//Esto estaria mal, ya que cogeria el elemento que hay en esa posicion y lo sobreescribe
//animales[0] = "gusano"
console.log(animales)


// 3. Elimina el que se encuentra en tercera posición

animales.splice(2, 1) //El que se encuentra en la tercera posicion [2], es el cerdo
console.log(animales)

// 4. Crea un set que almacene cinco libros

let libros = new Set(["Cien años de soledad", "El Quijote", "Crimen y Castigo", 
    "La Divina Comedia", "eL Principe"])


// 5. Añade dos más. Uno de ellos repetido

libros.add("El Extranjero")
libros.add("Cien Años de soledad")
//Nota: Al usar Set como una estructura de datos, lo que se pretende es que no haya datos repetidos, 
//ya que esta estructura no permite que haya dos elementos identicos, asi que si queremos cumplir de cierto modo
//lo que dice el ejercicio, le cambio una letra minuscula a mayuscula
//pero 100% exacto no se podria 
console.log(libros)
libros.add("El Quijote") //Para comprobar que no se puede añadir dos exactamente iguales
console.log(libros)

// 6. Elimina uno concreto a tu elección

//Para hacer una buena practica, elimino el segundo "repetido"
libros.delete("Cien Años de soledad")
console.log(libros)//Comprobacion

// 7. Crea un mapa que asocie el número del mes a su nombre

let mes = new Map([
    [1, "Enero"], 
    [2, "Febrero"],
    [3, "Marzo"], 
    [4, "Abril"],
    [5, "Mayo"], 
    [6, "Junio"],
    [7, "Julio"], 
    [8, "Agosto"],
    [9, "Septiembre"], 
    [10, "Octubre"],
    [11, "Noviembre"], 
    [12, "Diciembre"]
])

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

console.log(mes.has(5))//Devuelve True

console.log(mes.get(5))//Devuelve "Mayo" (su valor)

// 9. Añade al mapa una clave con un array que almacene los meses de verano

mes.set("Verano", ["Junio", "Julio", "Agosto"])
console.log(mes)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let marcasRopa = ["nike", "adidas", "puma"]

let setMarcasRopa = new Set(marcasRopa)
console.log(setMarcasRopa)//Comprobacion


let marcas = new Map([
    ["coches", ["toyota", "audi", "BMW"]], 
    ["ropa", setMarcasRopa]
])

console.log(marcas)