export function american(numero) {
  let exp = /^3[4-7]\d{13}$/;
  return exp.test(numero);
}

export function diners(numero) {
  let exp = /^3(?:0[0-5]|[68]\d)\d{11}$/;
  return exp.test(numero);
}

export function discover(numero) {
  let exp = /^6011\d{12}$/;
  return exp.test(numero);
}

export function mastercard(numero) {
  let exp = /^5[1-5]\d{14}$/;
  return exp.test(numero);
}

export function visa (numero){
    let exp = /^4\d{15}$/;
    return exp.test(numero);
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


