// Función para sumar todos los números
export function sumar(numeros) {
    return numeros.reduce((a, b) => a + b, 0); //aquí se utiliza la función reduce() e internamente como argumento se invoca una arrow function como callback
}

// Función para contar números primos
export function contarPrimos(numeros) {
    const primos = numeros.filter(esPrimo); //filter() invoca como argumento la funcion esPrimo() para filtrar los primos y luego los cuenta con .length
    return {
        cantidad: primos.length,
        lista: primos
    };
}

// Función para contar números pares
export function contarPares(numeros) {
    const pares = numeros.filter(num => num % 2 === 0);
    return {
        cantidad: pares.length,
        lista: pares
    };
}

// Función para calcular el promedio de números primos
export function promedioPrimos(numeros) {
    const primos = numeros.filter(esPrimo);
    if (primos.length === 0) return {promedio: 0, lista:[]};
    const promedio = primos.reduce((a, b) => a + b, 0) / primos.length;
    return{ promedio, lista: primos};
}

// Función para calcular el promedio de números pares
export function promedioPares(numeros) {
    const pares = numeros.filter(num => num % 2 === 0); //se calcula cuántos pares tiene el array
    if (pares.length === 0) return {promedio: 0, lista: []};
    const promedio = pares.reduce((a, b) => a + b, 0) / pares.length;//reduce() cuenta los 
    return {promedio, lista: pares};
}

// Función para determinar si un número es primo
export function esPrimo(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) { //math.sqrt() lo que hace es calcular la raiz cuadrada de un número, si ese es el caso, significa que no es primo.
        if (num % i === 0) return false;
    }
    return true; //todos los números que pasen por los conodicionales anteriores como true, significa que sí son primos
}

// Diseñar un programa que me solicite ingresar n cantidad de números por teclado,
// luego de ingresar los números el programa me debe solicitar qué operación deseo 
// realizar:
// a. Sumar los números
// b. Contar los números primos 
// c. Contar los números pares 
// d. Calcular el promedio de los números primos
// e. Calcular el promedio de numeros pares.
// Pare este ejercicio se solicita trabajar con módulos.