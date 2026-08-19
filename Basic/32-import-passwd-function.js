import { validPassWord } from "./31-modules.exercises.js";

const passwordsDePrueba = ["Admin_DAW2026", "M1P@ssw0rd_Segur4", 
    "adrian_dev2026@", "1234567890_@", "Cort@1", "Ad_123@", "Programacion_Web@", 
    "SOLO_MAYUSCULAS@", "JavaScript2026", "Contraseña Falsa 123"] //array con contraseñas de prueba

for(let valor of passwordsDePrueba){
    try{
        validPassWord(valor)
    }catch(error){
        console.log("Error:* ", error.message)
    }
}
console.log("Ejecucion finalizada")