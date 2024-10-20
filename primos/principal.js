import { solicitarNumeros,mostrarMenu,obtenerOpcion} from "./datosEntrada.js";
import { sumar, contarPrimos, contarPares, promedioPrimos, promedioPares } from "./operaciones.js";

function principal() {
  const numeros = solicitarNumeros();

  do {
    mostrarMenu();
   let opcion = obtenerOpcion();  //se ajola en una variable la opción que elije el usuario

    switch (opcion) {
      case "a":
        console.log(`La suma de los números ${numeros} es: `+ sumar(numeros));
        break;
      case "b":
        console.log(
          `La cantidad de números primos del array ${numeros} son:` + contarPrimos(numeros));
        break;
      case "c":
        console.log(`La cantidad de números pares del array ${numeros} son:` + contarPares(numeros));
        break;
      case "d":
        console.log(
          `El promedio de los números primos ${numeros} es de:` + promedioPrimos(numeros)
        );
        break;
      case "e":
        console.log(
          `El promedio de los números pares ${numeros} es de:` + promedioPares(numeros)
        );
        break;
      case "f":
        console.log("Saliendo...");
        break;
      default:
        console.log("Opción no válida. Intente de nuevo!!!");
    }
  } while (opcion !== "f");
}

principal();

// Diseñar un programa que me solicite ingresar n cantidad de números por teclado,
// luego de ingresar los números el programa me debe solicitar qué operación deseo
// realizar:
// a. Sumar los números
// b. Contar los números primos
// c. Contar los números pares
// d. Calcular el promedio de los números primos
// e. Calcular el promedio de numeros pares.
// Pare este ejercicio se solicita trabajar con módulos.
