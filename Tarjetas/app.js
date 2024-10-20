import { american, diners, discover, mastercard, visa } from "./tarjetas.js";

let numero = prompt(`Ingrese el número de su tarjeta:`);

while (true) { //Bloque para depurar errores en el ingreso de la tarjeta
  try {
    if (isNaN(numero)) { // Validar que el número es numérico
      throw new Error("El número de tarjeta debe ser un número");
    }
    if (numero.length < 14 || numero.length > 16) {// Validar longitud entre 14 y 16 dígitos
      throw new Error("El número de tarjeta debe tener de 14 a 16 dígitos");
    }
    if (parseInt(numero) < 0) {// Validar que no es un número negativo
      throw new Error("El número de tarjeta no puede ser negativo");
    }

    // Identificar el tipo de tarjeta
    if (american(numero)) {
      alert("La tarjeta es tipo American Express");
    } else if (diners(numero)) {
      alert("La tarjeta es tipo Diners Club");
    } else if (discover(numero)) {
      alert("La tarjeta es tipo Discover");
    } else if (mastercard(numero)) {
      alert("La tarjeta es tipo Mastercard");
    } else if (visa(numero)) {
      alert("La tarjeta es tipo Visa");
    } else {
      alert("Número de tarjeta inválido o tipo no reconocido");
    }

    break; // Salir del bucle si se evalúa correctamente

  } catch (error) {
    console.error(error); // Registrar el error en consola para depuración
    numero = prompt("Error: " + error.message + "\nIngrese nuevamente el número de tarjeta:");
  }
}

// Diseñar un programa que permita validar el tipo de tarjeta
// de crédito que registra el operador, para ello debemos tener en
// cuenta que las diferentes tarjetas tienen diferentes nomenclaturas:
// - American Express: 15 dígitos y empieza por 34 - 37.
// - Diners Club: tiene 14 dígitos y empieza por 300-305 0 36-38.
// - Discover: 16 dígitos y empieza por 6011.
// - Mastercard: 16 dígitos y empieza por 51-55.
// - Visa: 16 dígitos y empieza por 4.
// El programa solo se debe permitir el ingreso de enteros positivos
// y máximo 16 caracteres, si el operador ingresa un caracter no
// permitido se debe mostrar por pantalla el error y solicitar nuevamente
// el número de su tarjeta de crédito. Para este ejercicio se solicita
// trabajar con módulos, expresiones regulares y condicionales. Si está
// permitido solicitar al operador el tipo de su tarjeta de crédito.