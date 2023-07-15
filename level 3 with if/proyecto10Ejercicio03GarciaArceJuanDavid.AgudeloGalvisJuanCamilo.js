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
- 3. Hacer un programa de computador, de tal manera que pida el número de termino deseados en la
siguiente serie: Serie de Lucas: Es similar a la serie de Fibonacci, pero comienza con los números 2 y 1
en lugar de 0 y 1. Es decir, los dos primeros términos de la serie son 2 y 1, y los siguientes términos se
calculan como la suma de los dos términos anteriores. La fórmula para el enésimo número de Lucas es
L(n) = L(n-1) + L(n-2), donde L(0) = 2 y L(1) = 1.
Los primeros nueve términos de la serie de Lucas son: 2, 1, 3, 4, 7, 11, 18, 29, 47.
*/
var prompt = require('prompt-sync')();//Se invoca el prompt
/**
 * Generador de la Serie de Lucas
 * 
 * Este programa genera la Serie de Lucas hasta el número deseado.
 * La Serie de Lucas comienza con los valores iniciales 2 y 1, y cada número siguiente es la suma de los dos anteriores.
 * Dependiendo de si el número deseado es par o impar, se mostrará un conjunto de números diferente.
 * 
 * @version 1.0
 */

/**
 * Función para generar la Serie de Lucas y mostrar los números hasta el número deseado (si es par).
 * 
 * @param {number} numero1 - El primer número de la serie.
 * @param {number} numero2 - El segundo número de la serie.
 * @param {number} contador - El contador de términos generados.
 */
function suma(numero1, numero2, contador) {
    if (contador <= final) {
      console.log(numero1);
      console.log(", ");
      console.log(numero2);
      console.log(", ");
      suma(numero1 + numero2, numero1 + 2 * numero2, contador + 2);
    } else {
      console.log(`Siendo ${final} los números que se decidieron mostrar.`);
    }
  }
  
  /**
   * Función para generar la Serie de Lucas y mostrar los números hasta el número deseado (si es impar).
   * 
   * @param {number} numero1 - El primer número de la serie.
   * @param {number} numero2 - El segundo número de la serie.
   * @param {number} contador - El contador de términos generados.
   */
  function suma2(numero1, numero2, contador) {
    if (contador <= final) {
      console.log(numero1);
      console.log(", ");
      console.log(numero2);
      console.log(", ");
      suma2(numero1 + numero2, numero1 + 2 * numero2, contador + 2);
    } else {
      console.log(`${numero1}, Siendo ${final} los números que se decidieron mostrar.`);
    }
  }
  
  // Obtener el número deseado de términos en la Serie de Lucas
  const final = Number(prompt("Ingrese el número de repeticiones:"));
  
  // Generar y mostrar la Serie de Lucas
  if (final % 2 === 0) {
    suma(2, 1, 2);
  } else {
    suma2(2, 1, 2);
  }
  