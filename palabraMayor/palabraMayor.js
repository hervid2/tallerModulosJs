// Función para encontrar la palabra más larga
function encontrarPalabraMasLarga(...palabras) {//el argumento aceptará n cantidad de palabras gracias al parámetro rest ...palabras
    let palabraMasLarga = "";

    
    for (const palabra of palabras) { // Iterar sobre las palabras para encontrar la más larga con for...of
        if (palabra.length > palabraMasLarga.length) {
            palabraMasLarga = palabra; // Actualizar si la palabra actual es más larga
        }
    }

    return palabraMasLarga; // Retornar la palabra más larga
}

// Función principal
function iniciarPrograma() {
    const palabras = [];
    let n;

   do {
     // Solicitar la cantidad de palabras a ingresar
     n = parseInt(prompt("¿Cuántas palabras deseas ingresar?"), 10);

     // Verificar si la entrada es válida
     if (isNaN(n) || n <= 0) {
         console.log("Por favor, ingresa un número válido, mayor que 0!");
         return;
     }
   } while (n === isNaN);

    // Cargar las palabras
    for (let i = 0; i < n; i++) {
        let palabra = prompt(`Ingresa la palabra ${i + 1}:`);

        // Validar si la palabra ingresada es válida
        while (palabra.trim() === "") { //trim() se usa para validar que no haya espacio vacío en el ingreso
        }
        
        palabras.push(palabra); // Agregar la palabra al array
    }

    // Llamar a la función para encontrar la palabra más larga
    const palabraMasLarga = encontrarPalabraMasLarga(...palabras);
    
    // Mostrar el resultado
    console.log("La palabra más larga ingresada es:", palabraMasLarga);
}

// Iniciar el programa
iniciarPrograma();


/*
4. Diseñar un programa que me permita ingresar n cantidad de palabras por
teclado, al finalizar la carga, se debe enviar como a una función expresada
como único parámetro rest donde nos responderá cual de las palabras
ingresadas es mayor a todas las anteriores.
*/