/*
-Fecha de publicación: 19/06/2023
-Hora: 20:57
- Versión de su código: v1
-Autores: Ing(c) Juan David García Arce. Ing(c) Juan Camilo Galvis Agudelo.
- Nombre del lenguaje utilizado: Java script
- Versión del lenguaje utilizado: ECMAScript 2021
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- 6.Hacer un programa de computador, de tal manera que, lea un número e imprima su factorial.
*/
var prompt = require('prompt-sync')(); //variable prompt global declarada para utilizar prompt node.js 
let i = 1;
let factorial = 1;
let n = 0;

console.log("Ingrese un número entero positivo: ");
n = parseInt(prompt());

while (i <= n) {
  factorial *= i;
  i++;
}

console.log(`El factorial de ${n} es: ${factorial}`);
