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
- 8.Hacer un programa de computador, de tal manera que, utilizando ciclos anidados se generen las
siguientes parejas de enteros: (con un máximo de cuatro(4) ordenes “IMPRIMIR” en todo el programa
incluyendo las funciones.)
*/
var prompt = require('prompt-sync')(); //variable prompt global declarada para utilizar prompt node.js 

let x = 0;
let y = 1;
let i = 0;

while (i <= 9) {
  x = (y + 1) / 2;  
  console.log(i, Math.floor(x)); 
  y++;  
  i++;
}