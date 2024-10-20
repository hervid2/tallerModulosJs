// Función para ordenar y mostrar los números en una tabla

function mostrarNumerosOrdenados(...numeros) { //el argumento aceptará n cantidad de # gracias al parámetro rest ...numeros
  // Ordenar los números de mayor a menor
  const numerosOrdenados = numeros.sort((a, b) => b - a); //Aquí se utiliza una arrow function que es una función expresada

  console.table(numerosOrdenados); //table() es un metodo de console para mostrar datos en forma de tabla
}

// Función principal
function iniciarPrograma() {
  const numeros = [];
  let n;
  do {
    n = parseInt(
      prompt("Ingrese un número (o cualquier otra tecla para finalizar):")
    );
    if (!isNaN(n)) {
      numeros.push(n); // Agregar el número al array
    }
  } while (!isNaN(n));

  mostrarNumerosOrdenados(...numeros); // Llamar a la función para mostrar los números ordenados
}

iniciarPrograma();

// Diseñar un programa que me solicite por teclado n cantidad de numeros,
// al finalizar la carga de los números, el programa debe enviar los mismos
// a una función expresada como único parámetro rest donde serán ordenados
// de mayor a menor para luego mostrarlos en una tabla por consola
