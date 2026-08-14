// 1. Crea un objeto con 3 propiedades
let coche = {
    marca: "Opel",
    modelo: "Corsa", 
    motor: "Gasolina 1.2 Turbo"
}
// 2. Accede y muestra su valor
/* for(let key in coche){
    console.log(coche[key])
} */
//Otra forma
console.log(coche.marca)
console.log(coche["modelo"])
console.log(coche.motor)
// 3. Agrega una nueva propiedad

coche.transmision = "Manual"
console.log(coche)

// 4. Elimina una de las 3 primeras propiedades
delete coche.marca
console.log(coche)
// 5. Agrega una función e invócala

coche.arrancar = function(){
    console.log("Arrancando...")
}
coche.arrancar()

// 6. Itera las propiedades del objeto

for(let key in coche){
    console.log(coche[key])
}

// 7. Crea un objeto anidado

/* let coche2 = {
    marca: "Opel",
    modelo: "Corsa", 
    motor: "Gasolina 1.2 Turbo",
    taller : {
        nombre : "Reparaciones Adrian S.L",
        trabajadores: 10,
        añoApertura: 1967
    }
} */
let taller = {
    nombre : "Reparaciones Adrian S.L",
    trabajadores: 10,
    añoApertura: 1967
}

coche.taller = taller

console.log(coche)
// 8. Accede y muestra el valor de las propiedades anidadas

for (let key in coche.taller){
    console.log(coche.taller[key])
}

//Otra forma

console.log(coche.taller.nombre)
console.log(coche.taller.trabajadores)
console.log(coche.taller.añoApertura)


// 9. Comprueba si los dos objetos creados son iguales

console.log(coche == coche.taller) //False

// 10. Comprueba si dos propiedades diferentes son iguales

console.log(coche.marca == coche.modelo) //False