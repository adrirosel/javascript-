// Importacion modulos


//Importacion de funciones/propiedades
import { add , Circle, PI} from "./28-export-modules.js";

import resta from "./28-export-modules.js";

add(5, 10)

//Importacion de propiedades



console.log(PI)

//Importacion por defecto

//console.log(resta(10, 5))
let myClass = new resta()
myClass.func()

// Clases

let circle = new Circle(10)
console.log(circle.radius)
console.log(circle.Area().toFixed(2))
console.log(circle.Perimeter().toFixed(3))

//Proyecto modular (Pendiente)