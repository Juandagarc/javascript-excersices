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
- 6. Hacer un programa de computador, de tal manera que pida el número de termino deseados en la
siguiente serie: Serie de Padovan: Esta serie comienza con los números 1, 0 y 0. Los siguientes términos
se calculan como la suma de los dos términos anteriores y el tercer término anterior. La fórmula para el
enésimo número de Padovan es P(n) = P(n-2) + P(n-3), donde P(0) = 1, P(1) = 0 y P(2) = 0.
Los primeros nueve términos de la serie de Padovan son: 1, 0, 0, 1, 0, 1, 1, 1, 2.
- Salvedad: Para valores fuera de este rango, no garantizamos los resultados.
*/
var prompt = require('prompt-sync')();//Se invoca el prompt
/**
 * Serie de Padovan
 * 
 * Este programa calcula y muestra los términos de la Serie de Padovan hasta un número dado por el usuario.
 * La Serie de Padovan es una secuencia de números que se construye sumando los dos términos anteriores y el término a tres posiciones anteriores.
 * La serie comienza con los valores iniciales 1, 0, 0.
 * 
 * @version 1.0
 */

/**
 * Función para calcular y mostrar los términos de la Serie de Padovan.
 * 
 * @param {number} primero - Primer término de la serie.
 * @param {number} segundo - Segundo término de la serie.
 * @param {number} tercero - Tercer término de la serie.
 * @param {number} contador - Contador de términos calculados.
 */
function padovan(primero, segundo, tercero, contador) {
    console.log(tercero);
    if (contador < cantidad) {
      padovan(segundo, tercero, segundo + primero, contador + 1);
    }
  }
  
  // Solicitar al usuario el número de términos deseados
  const cantidad = Number(prompt("Ingrese el número de términos deseados en la Serie de Padovan:"));
  
  // Calcular y mostrar la Serie de Padovan
  padovan(1, 0, 0, 1);
  