/*Construa uma calculadora, em que você possui 3 variáveis:

let numero1 = 10;

let numero2 = 5;

let operador = "*";

Usando switch, execute a operação correspondente:

+, -, *, /

O que fazer quando o operador for inválido?
*/

let numero1 = 10;
let numero2 = 5;
let operador = "-";

switch (operador) {
  case "+":
    console.log(numero1 + numero2);
    break;

  case "-":
    console.log(numero1 - numero2);
    break;

  case "*":
    console.log(numero1 * numero2);
    break;

  case "/":
    console.log(numero1 / numero2);
    break;

  default:
    console.log("Operador inválido");
}
