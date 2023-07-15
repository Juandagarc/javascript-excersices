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
- 14- Que imprima de un articulo, clave, precio original y su precio con descuento. El descuento lo hace en base a la clave, si la clave es uno
(1) el descuento es del 10% y si la clave es 2 el descuento en del 20% (solo existen dos claves).
- Salvedad: Para valores fuera de este rango, no garantizamos los resultados.
*/


// Este programa sirve para imprimir de un artículo, clave, precio original y su precio con descuento. El descuento lo hace en base a la clave, si la clave es 1 el descuento es del 10% y si la clave es 2 el descuento es del 20% (solo existen dos claves).

var prompt = require('prompt-sync')();//Se invoca el prompt
// Por favor escriba la clave:
console.log("Por favor escriba la clave:");
const x = Number(prompt()); // Se lee la clave.

// Escriba el precio original:
console.log("Escriba el precio original:");
const y = Number(prompt()); // Se lee el precio original.

// Se añade el condicional.
if (x === 1) {
  console.log("Su descuento es:", y - (y * 0.1));
} else if (x === 2) {
  console.log("Su descuento es:", y - (y * 0.2));
} else {
  console.log("Su clave no es válida.");
}
