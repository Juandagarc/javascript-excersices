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
- 14. Hacer un programa de computador, de tal manera que presente todas las tablas de multiplicar del 1
al 10; (con un máximo de cuatro(4) ordenes “IMPRIMIR” en todo el programa incluyendo las funciones.);
así:
- Salvedad: Para valores fuera de este rango, no garantizamos los resultados.
*/
var prompt = require('prompt-sync')();//Se invoca el prompt
// Imprimir el enunciado
console.log("Este programa presenta todas las tablas de multiplicar del 1 al 10.\n");

// Definir la función Func1
function Func1(x) {
   if (x <= 10) { // Si x es menor o igual a 10
      Func2(x, 1); // Llamar a la función Func2
      Func1(x + 1); // Llamar recursivamente a la función Func1 con x incrementado en 1
   }
}

// Definir la función Func2
function Func2(x, y) {
   if (y <= 10) { // Si y es menor o igual a 10
      console.log(`${x} x ${y} = ${x * y}`); // Imprimir la tabla de multiplicar
      Func2(x, y + 1); // Llamar recursivamente a la función Func2 con y incrementado en 1
   } else {
      console.log("\n"); // Generar un espacio después de cada tabla de multiplicar
   }
}

// Invocar la función Func1 con 1 como argumento inicial
Func1(1);
