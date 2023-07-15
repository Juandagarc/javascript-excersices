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
- 4. Hacer un programa de computador, de tal manera que pida el número de termino deseados en la
siguiente serie: Serie de Pell: Esta serie comienza con los números 0 y 1, y los siguientes términos se
calculan como 2 veces el término anterior más el término anterior al anterior. La fórmula para el enésimo
número de Pell es P(n) = 2P(n-1) + P(n-2), donde P(0) = 0 y P(1) = 1.
Los primeros nueve términos de la serie de Pell son: 0, 1, 2, 5, 12, 29, 70, 169, 408.
*/
const prompt = require('prompt-sync')(); // Se invoca el prompt para recibir entrada del usuario

/**
 * Serie de Pell
 * 
 * Este programa calcula y muestra los términos de la Serie de Pell hasta un número dado por el usuario.
 * La Serie de Pell es una secuencia de números que se construye utilizando la fórmula P(n) = 2 * P(n-1) + P(n-2),
 * donde P(0) = 0 y P(1) = 1 son los valores iniciales.
 * 
 * @version 1.0
 */

/**
 * Función para calcular y mostrar los términos de la Serie de Pell.
 * 
 * @param {number} primero - Primer término de la serie.
 * @param {number} segundo - Segundo término de la serie.
 * @param {number} contador - Contador de términos calculados.
 */
function pell(primero, segundo, contador) {
  console.log(primero);
  if (contador < cantidad) {
    pell(segundo, 2 * segundo + primero, contador + 1);
  }
}

// Solicitar al usuario el número de términos deseados
const cantidad = Number(prompt("Ingrese el número de términos deseados en la Serie de Pell:"));

// Calcular y mostrar la Serie de Pell
pell(0, 1, 1);



