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
- 5. Hacer un programa de computador, de tal manera que pida el número de termino deseados en la
siguiente serie: Serie de Perrin: Esta serie comienza con los números 3, 0 y 2. Los siguientes términos
se calculan como la suma del término anterior y el tercer término anterior. La fórmula para el enésimo
número de Perrin es P(n) = P(n-2) + P(n-3), donde P(0) = 3, P(1) = 0 y P(2) = 2.
Los primeros nueve términos de la serie de Perrin son: 3, 0, 2, 3, 2, 5, 5, 7, 10.
- Salvedad: Para valores fuera de este rango, no garantizamos los resultados.
*/
var prompt = require('prompt-sync')();//Se invoca el prompt
/**
 * Serie de Perrin
 * 
 * Este programa calcula y muestra los términos de la Serie de Perrin hasta un número dado por el usuario.
 * La Serie de Perrin es una secuencia de números que se construye sumando los dos términos anteriores y el término a tres posiciones anteriores.
 * La serie comienza con los valores iniciales 3, 0, 2.
 * 
 * @version 1.0
 */

/**
 * Función para calcular y mostrar los términos de la Serie de Perrin.
 * 
 * @param {number} primero - Primer término de la serie.
 * @param {number} segundo - Segundo término de la serie.
 * @param {number} tercero - Tercer término de la serie.
 * @param {number} contador - Contador de términos calculados.
 */
function perrin(primero, segundo, tercero, contador) {
    console.log(primero);
    if (contador < cantidad) {
      perrin(segundo, tercero, segundo + primero, contador + 1);
    }
  }
  
  // Solicitar al usuario el número de términos deseados
  const cantidad = Number(prompt("Ingrese el número de términos deseados en la Serie de Perrin:"));
  
  // Calcular y mostrar la Serie de Perrin
  perrin(3, 0, 2, 1);
  
  