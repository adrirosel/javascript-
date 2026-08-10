//Operadores

//Operadores aritmeticos
console.log(5 + 10) //Suma

let a = 5
let b = 10
console.log (a+b)

console.log(5 - 10) //Resta
console.log(5 * 10) //Multiplicacion
console.log(5 / 10) //Division
console.log(5 % 10) //Modulo (Resto de la division)
console.log(5 ** 10) //Exponente

a++ //Incremento
console.log(a)

b-- //Decremento
console.log(b)

//Operadores de asignacion

let myVariable = 2 // = 
console.log(myVariable)
myVariable += 2 //Modifica el valor de variable utilizando el valor que ya tiene
// mmyVariable = myVariable + 2 Es lo mismo pero mas largo
console.log(myVariable)

myVariable -= 2
myVariable *= 2
myVariable /= 2
myVariable %= 2
myVariable **= 2

//Operadores de comparacion

console.log(a > b)
//Compara los valores para ver si uno es mayor que otro, si se cumple la condicion
//devuelve el booleano true, si no se cumple, false
// Para todos las comparaciones se devolvera un resultado expreso en un valor booleano

console.log(a<b)
console.log(a<=b)
console.log(a>=b)
console.log(a == a) //Este operador compara el valor, aqui se devolvera true, ya que 
                    //a va a valer lo mismo que a
console.log(a === 5)//Aqui se compara la IDENTIDAD, va a devolver FALSE, ya que el valor de la a ha cambiado
                    //a lo largo del codigo

console.log(a == 6)  //Devuelve true, estamos comprobando una igualdad por VALOR
console.log(a == "6")//True tambien, ya que como tienen el mismo VALOR, va a dar true igual

console.log(a === "6")//A nivel de identidad (tipo Y valor) va a dar FALSE
//ya que inicialmente hemos asignado a como ENTERO, y lo estamos comparando con un valor de tipo STRING

console.log(a!=b) //Desigualdad, a es distinto de b? La respuesta va a ser TRUE, ya que los valores SI son distintos
//es decir, el resultado contrario a su comprobacion por igualdad

console.log(a!==b)//Desigualdad, a es distinto de b? La respuesta va a ser TRUE, ya que los valores SI son distintos
//es decir, el resultado contrario a su comprobacion por identidad

console.log(0 == false) //Devuelve true
console.log(1 == false) //Devuelve false
console.log(2 == false) //Devuelve false
console.log(0 == "")// Devuelve true
console.log(0 == " ")
console.log(0 === "") //Devuelve false
console.log(0 == "Hola")
console.log(undefined == null)//True
console.log(undefined === null)//False
/*
Esto significa que, a nivel mas interno del lenguaje
se encuentran un abanico de posibilidades a comparar ya que el lenguaje compara
los tipos/valores a nivel interno, por lo que habra muchas peculiaridades */ 

//Truthy values (valores verdaderos)
/* Todos los numeros positivos y negativos menos el 0, 
Todas las cadenas de texto menos las vacias
el boolean = true*/

//Falsy values (valores falsos)
// 0
// 0n
// null
// undefined
// NaN (Not a Number)
// boolean = false
// Cadenas de texto vacias

//Esto va a ser SIEMPRE ASI 



//Operadores logicos

//Estos comparan valores pero en realidad estan comparando su valor booleano
//intentamos identificar si una expresion es verdadera o falsa, uniendo diferentes comparaciones

//AND (&&)
console.log(5 > 10 && 15 > 20)
//Si las dos condiciones son falsas, el computo general es falso

console.log(5 < 10 && 15 < 20)
//Si las dos condiciones son verdaderas, el computo general es verdadero
console.log(5 < 10 && 15 > 20)
//En un and, si una de las dos condiciones no se cumple, el computo general es false

//or ( || )

console.log(5 > 10 || 15 > 20)


console.log(5 < 10 || 15 < 20)

console.log(5 < 10 || 15 > 20)

//Si una de las dos condiciones se cumple, dara true, si ninguna de las dos condiciones, seria false

console.log(5 > 10 && 15 > 20 || 30 <40 )
//Aqui, el and no se cumple en ninguna de las dos condiciones, pero como el or si se cumple, 
//EL COMPUTO GENERAL de la operacion, sera TRUE

// not (!)
console.log(!(5 > 10 && 15 > 20))
//Si niego el valor, estoy INVIRTIENDO el resultado de la comparacion
// es decir, si aqui en concreto tengo un FALSE, al negarlo, tendre un true

//Operadores ternarios
//Es otra forma de escribir condicionales pero funciona como un operador

const isRaining = false

isRaining ? console.log("Esta lloviendo") : console.log("No esta lloviendo")
//Lo que esta a continuacion del ? ejecuta en caso de que la condicion se cumpla
//Lo que esta detras de los : se cumple en caso de que la condicion NO se cumpla

/*Al ejecutar el codigo con la variable a false, se ejecuta lo que esta 
detras de los dos puntos, en caso de que estuviera a true, se ejecutaria lo que esta
a continuacion del ? */