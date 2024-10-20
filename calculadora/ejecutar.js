import { suma, resta, multiplicacion, division } from "./calculadora.js";


try {
  
    console.log(`Suma de ${a,b} es: `+ suma(a, b));
    console.log(`Resta de ${a,b} es: `+ resta(a, b));
    console.log(`Multiplicación de ${a,b} es: `+ multiplicacion(a, b));
    console.log(`División de ${a,b} es: `+ division(a, b));
  
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
