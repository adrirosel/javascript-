//Condicionales

//if, else if, else

//if (si)

let age = 37
if (age == 37){
    //Bloque de codigo
    console.log(`La edad es ${age}`)
} 

// else (si no)
if (age == 37){
    //Bloque de codigo
    console.log(`La edad es ${age}`)
} else{
    console.log(`La edad NO es ${age}`)
}

// else if
//En el caso de que cumpla una condicion, no se revisan mas condiciones
// en caso de que no se cumpla ninguna condicion, 
//se cumple la condicion por "defecto" (else)
if (age == 37){
    //Bloque de codigo
    console.log(`La edad es ${age}`)
    } else if(age < 18){
        console.log("Es menor de edad")
    }else{
        console.log(`La edad NO es ${age}`)
    }

//Operadores ternarios
//age == 37 ? console.log("La edad es " + age) : console.log("La edad NO es " + age)
const message = age == 37 ? "La edad es " + age : "La edad NO es " + age
console.log(message)

//switch
let day = 0
let dayName

switch (day) {
    case 0:
        dayName == "Lunes"
        break
    case 1:
        dayName == "Martes"
        break
    case 2: 
        dayName == "Miercoles"
        break
    case 3:
        dayName == "Jueves"
        break
    case 4:
        dayName == "Viernes"
        break
    case 5: 
        dayName == "Sabado"
        break
    case 6: 
        dayName == "Domingo"
        break
    case 7: 
        console.error()
        break
    default:
        break
}