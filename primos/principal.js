import { solicitarNumeros,mostrarMenu,obtenerOpcion} from "./datosEntrada.js";
import { sumar, contarPrimos, contarPares, promedioPrimos, promedioPares } from "./operaciones.js";

function principal() {
  const numeros = solicitarNumeros();
  let opcion;

  do {
    mostrarMenu();
   opcion = obtenerOpcion();  //se ajola en una variable la opción que elije el usuario que se trae desde el método del módulo

   switch (opcion) {
    case "a":
      console.log(`La suma de los números ${numeros} es: ` + sumar(numeros));
      break;
    case "b":
      const primosInfo = contarPrimos(numeros);
      console.log(`Los números primos son: ${primosInfo.lista}`);
      console.log(`La cantidad de números primos es: ${primosInfo.cantidad}`);
      break;
    case "c":
      const paresInfo = contarPares(numeros);
      console.log(`Los números pares son: ${paresInfo.lista}`);
      console.log(`La cantidad de números pares es: ${paresInfo.cantidad}`);
      break;
    case "d":
      const primosPromedio = promedioPrimos(numeros);
      console.log(`Los números primos son: ${primosPromedio.lista}`);
      console.log(`El promedio de los números primos es: ${primosPromedio.promedio}`);
      break;
    case "e":
      const paresPromedio = promedioPares(numeros);
      console.log(`Los números pares son: ${paresPromedio.lista}`);
      console.log(`El promedio de los números pares es: ${paresPromedio.promedio}`);
      break;
    case "f":
      console.log("Saliendo...");
      break;
    default:
      console.log("Opción no válida. Intente de nuevo.");
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
