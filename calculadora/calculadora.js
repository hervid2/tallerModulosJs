
    // función para sumar dos números
   export function suma(a, b) {
        this.validarNumeros(a, b);
        return a + b;
    }

    // función para restar dos números
    export function resta(a, b) {
        this.validarNumeros(a, b);
        return a - b;
    }

    // función para multiplicar dos números
    export function multiplicacion(a, b) {
        this.validarNumeros(a, b);
        return a * b;
    }

    // función para dividir dos números
    export function division(a, b) {
        this.validarNumeros(a, b);
        if (b === 0) {
            throw new Error("Error: No se puede dividir por cero.");
        }
        return a / b;
    }

    // función para validar que ambos parámetros son números
    export function validarNumeros(...numeros) {
        for (const num of numeros) {
            if (typeof num !== 'number' || isNaN(num)) {
                throw new Error(`Error: '${num}' no es un número válido.`);
            }
        }
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