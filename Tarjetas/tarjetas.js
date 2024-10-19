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

//El programa de bebe permitir el
// ingreso de enteros positivos  máximo 16 caracteres numéricos.
//Si se ingresa un caracter diferente debe mostrar un mensaje de
//error y volver a solicitar el ingreso del número de tarjeta.


