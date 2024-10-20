// Clase Calculadora
export class Calculadora {
    // Método para sumar dos números
    suma(a, b) {
        this.validarNumeros(a, b);
        return a + b;
    }

    // Método para restar dos números
    resta(a, b) {
        this.validarNumeros(a, b);
        return a - b;
    }

    // Método para multiplicar dos números
    multiplicacion(a, b) {
        this.validarNumeros(a, b);
        return a * b;
    }

    // Método para dividir dos números
    division(a, b) {
        this.validarNumeros(a, b);
        if (b === 0) {
            throw new Error("Error: No se puede dividir por cero.");
        }
        return a / b;
    }

    // Método para validar que ambos parámetros son números 
    validarNumeros(...numeros) {//Este método se encapsulará arriba en los métodos de las operaciones
        for (const cifra of numeros) {
            if (typeof cifra !== 'number' || isNaN(cifra)) {
                throw new Error(`Error: '${cifra}' no es un número válido.`);
            }
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