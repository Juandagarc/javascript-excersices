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
- 12-Un obrero necesita calcular su salario semanal, el cual se obtiene de la siguiente manera:
  Si trabaja 40 horas o menos se le paga $16 por hora
  Si trabaja mas de 40 horas se le paga $16 por cada una de las primeras 40 horas y $20 por cada hora extra. Datos de entrada: Nro de horas
trabajadas.
- Salvedad: Para valores fuera de este rango, no garantizamos los resultados.
*/


// Este programa sirve para determinar el salario semanal de un obrero por el número de horas trabajadas.

var prompt = require('prompt-sync')();//Se invoca el prompt
// Por favor ingresa el número de horas:
console.log("Por favor ingresa el número de horas:");
const num1 = Number(prompt()); // Se lee el número de horas trabajadas.

// Se define la función "descuento".
function descuento() {
  // Se añade el condicional.
  if (num1 <= 40) {
    console.log("Su sueldo actual es de: $16/hora, es decir que a la semana ganaría un salario de:", num1 * 16);
  } else if (num1 > 40) {
    console.log("Su sueldo actual es de: $16/hora las primeras 40 horas, es decir que a la semana ganaría un salario de:", 40 * 16 + (num1 - 40) * 20);
  } else {
    console.log("El valor que ingresó no es válido.");
  }
}

descuento(); // Se invoca la función.
