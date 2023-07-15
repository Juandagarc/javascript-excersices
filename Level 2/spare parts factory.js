/*
-Fecha de publicación: 19/06/2023
-Hora: 20:57
- Versión de su código: v1
-Autores: Ing(c) Juan David García Arce. 
- Nombre del lenguaje utilizado: Java script
- Versión del lenguaje utilizado: ECMAScript 2021
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- 16- Una empresa quiere hacer una compra de varias piezas de la misma clase a una fabrica de refacciones. La empresa, dependiendo del
monto total de la compra, decidirá que hacer para pagar al fabricante.
Si el monto total de la compra excede de $500000 la empresa tendrá la capacidad de invertir de su propio dinero un 55% del monto de
la compra, pedir prestado al banco un 30% y el resto lo pagara solicitando un crédito al fabricante.
Si el monto total de la compra no excede de $500000 la empresa tendrá capacidad de invertir de su propio dinero un 70% y el restante
30% lo pagara solicitando crédito al fabricante. El fabricante cobra por concepto de intereses un 20% sobre la cantidad que se le pague
a crédito. 
- Salvedad: Para valores fuera de este rango, no garantizamos los resultados.
*/


// Este programa sirve para que una empresa quiera hacer una compra de varias piezas de la misma clase a una fabrica de refacciones.
// La empresa, dependiendo del monto total de la compra, decidirá qué hacer para pagar al fabricante.

var prompt = require('prompt-sync')();//Se invoca el prompt
// Ingrese el monto.
console.log("Ingrese el monto:");
const x = Number(prompt()); // Se lee el monto.

const inversion1 = x * 0.55; // Se calcula la inversión 1.
const prestamo1 = x * 0.30; // Se calcula el préstamo 1.
const inversion2 = x * 0.70; // Se calcula la inversión 2.
const prestamo2 = x * 0.30; // Se calcula el préstamo 2.
const interes = (x * 0.30) * 0.20; // Se calcula el interés.

// Se añade el condicional.
if (x > 500000) {
  console.log("Su empresa tendrá la posibilidad de invertir $" + inversion1 + " y de pedir un préstamo de $" + prestamo1 + " para pagar el resto solicitando un crédito al fabricante.");
} else if (x < 500000) {
  console.log("Su empresa tendrá la posibilidad de invertir $" + inversion2 + " y de pedir un préstamo de $" + prestamo2 + " con un interés de $" + interes + " para pagar el resto solicitando un crédito al fabricante.");
}
