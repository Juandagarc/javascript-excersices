
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
- 21-Diseñe un algoritmo y operacionalícelo, tal que lea un número entero positivo, de tres cifras (N <= 999 Y N>=100) y determine si el
número es capicúo (es igual al revés del número original). Ejemplo: N=323, 101.
- Salvedad: Para valores fuera de este rango, no garantizamos los resultados.
*/

// Este programa ayuda a determinar si un número es capicúo.
var prompt = require('prompt-sync')();//Se invoca el prompt
console.log("Este programa ayuda a determinar si un número es capicúo.");
const numero = Number(prompt()); // Se lee el número ingresado.

const parteEntera = Math.floor(numero / 100); // Se obtiene la parte entera del número dividido por 100.
const digitoUnidad = numero % 10; // Se obtiene el dígito de la unidad.

if (parteEntera === digitoUnidad) {
  console.log("Son capicúos");
} else {
  console.log("No son capicúos");
}
