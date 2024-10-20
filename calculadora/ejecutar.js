import { Calculadora } from "./calculadora.js";  // Importar la clase Calculadora

// Solicitar al usuario que ingrese dos números y convertirlos a números decimales
let a = parseFloat(prompt("Ingrese el primer número:"));
let b = parseFloat(prompt("Ingrese el segundo número:"));

// Crear una instancia de la clase Calculadora
const calculadora = new Calculadora();

try {
    console.log(`Suma de ${a} y ${b} es: ` + calculadora.suma(a, b));
    console.log(`Resta de ${a} y ${b} es: ` + calculadora.resta(a, b));
    console.log(`Multiplicación de ${a} y ${b} es: ` + calculadora.multiplicacion(a, b));
    console.log(`División de ${a} y ${b} es: ` + calculadora.division(a, b));
} catch (error) {
    console.error(error.message);
}






/*
5. Diseñar un modulo llamado calculadora, en este módulo debe exportar una
clase con los siguientes metodos:
a. Suma
b. Resta
c. Multiplicación
d. División
Al momento de realizar cada operación el sistema debe validar que no se
presenten errores, si al momento de su ejecución se presenta algún error, el
sistema debe enviar un mensaje personalizado indicando el tipo de error
para que el usuario lo solucione y continue realizando los cálculos básicos
de las matemáticas.
*/
