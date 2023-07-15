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
- 15- Hacer un algoritmo que calcule el total a pagar por la compra de camisas. Si se compran tres camisas o mas se aplica un descuento del
20% sobre el total de la compra y si son menos de tres camisas un descuento del 10%. 
- Salvedad: Para valores fuera de este rango, no garantizamos los resultados.
*/


// Este programa sirve para aplicar un descuento según el número de camisas compradas.

var prompt = require('prompt-sync')();//Se invoca el prompt
// Ingrese el número de camisas.
console.log("Ingrese el número de camisas:");
const x = Number(prompt()); // Se lee el número de camisas.

// Ingrese el precio de las camisas.
console.log("Ingrese el precio de las camisas:");
const y = Number(prompt()); // Se lee el precio de las camisas.

// Se añade el condicional.
if (x >= 3) {
  console.log("El precio de sus camisas es de:", y - (y * 0.2));
} else if (x < 3) {
  console.log("El precio de sus camisas es de:", y - (y * 0.1));
}
