import { american, diners, discover, mastercard, visa } from "./tarjetas.js";

let numero = prompt(`Ingrese el número de su tarjeta:`);

while (true) {
    //BLoque depurar errores de ingresp
  try {
    if (isNaN(numero)) {
      throw new Error("El número de tarjeta debe ser un número");
    }
    if (numero.length < 13 || numero.length > 16) {
      throw new Error("El número de tarjeta debe tener 16 dígitos");
    }
    if (parseInt(numero) < 0) {
      throw new Error("El número de tarjeta no puede ser negativo");
    }
    //Fin del bloque de depuración de errores de ingreso
  
}
//Inicio Bloque imprimir tipo de tarjeta
switch (numero) {
    case 1:
        if (american(numero)){
        alert("la tarjeta es tipo American Express");
        break;
        }
    case 2:
        if (diners(numero)){
            alert("la tarjeta es tipo Diners Club");
            break;
            }
            case 3:
                if (discover(numero)){
                    alert("la tarjeta es tipo Discover");
                    break;
                    }
                    case 4:
                        if (mastercard(numero)){
                            alert("la tarjeta es tipo Mastercard");
                        }
                    case 5:
                        if (visa(numero)){
                            alert("la tarjeta es tipo Visa");
                            break;
                            }
                            break;
                        } default (error) {
                          alert(error.message);
                        }
}

//El programa de bebe permitir el
// ingreso de enteros positivos  máximo 16 caracteres numéricos.
//Si se ingresa un caracter diferente debe mostrar un mensaje de
//error y volver a solicitar el ingreso del número de tarjeta.

// if (american === numero){
//     alert("la tarjeta es tipo American Express");
// } else if (diners === numero){
//     alert("la tarjeta es tipo Diners Club");
// } else if (discover === numero){
//     alert("la tarjeta es tipo Discover");
// } else if (mastercard === numero){
//     alert("la tarjeta es tipo Mastercard");
// }else if (visa === numero){
//     alert("la tarjeta es tipo Visa");
// }