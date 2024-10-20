
export function solicitarNumeros() {
    const n = parseInt(prompt("Ingrese la cantidad de números que desea ingresar: "));
    let numeros = [];
    
    for (let i = 0; i < n; i++) {
        const numero = parseFloat(prompt(`Ingrese el número ${i + 1}: `));
        numeros.push(numero);//se llama .push para agregar en cada ciclo el número ingresado al array
    }
    
    return numeros;
}


export function mostrarMenu() {
    console.log("\n--- Menú de Operaciones ---");
    console.log("\nSeleccione por favor uno de los literales para ejecutar la operación que desea realizar:");
    console.log("a. Sumar los números");
    console.log("b. Contar los números primos");
    console.log("c. Contar los números pares");
    console.log("d. Calcular el promedio de los números primos");
    console.log("e. Calcular el promedio de los números pares");
    console.log("f. Salir");
}

export function obtenerOpcion() {
    return prompt("Seleccione una opción: ");
}
