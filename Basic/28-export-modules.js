// Exportacion de modulos

//funciones
export function add(a, b){
    return a + b
}

console.log(add(5, 10))

// Propiedades

export const PI = 3.141592

// Exportacion por defecto

/* export default function substract(a, b){
    return a - b
} */

/* export default function substract2(a, b){
    return a - b
} Daria error por duplicacion, la exportacion por defecto tiene que ser unica*/ 
//SOLO SE PUEDE EXPORTAR POR DEFECTO FUNCIONES, propiedades NO

// Clases

export class Circle {
    constructor(radius){
        this.radius = radius
    }
    Area(){
        return Math.PI * Math.pow(this.radius, 2)
    }
    Perimeter(){
        return 2 * Math.PI * this.radius
    }
}

export default class MyClass{
    func(){
        console.log("Mi clase")
    }
}