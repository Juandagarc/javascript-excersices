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
- 10. Hacer un programa de computador, de tal manera que pida el número de termino deseados en la
siguiente serie: Serie de Motzkin: Esta serie cuenta el número de caminos no cruzados de longitud n en
una retícula tridimensional. Comienza con los números 1, 1 y los siguientes términos se calculan como la
suma de los términos anteriores y la suma de los términos anteriores menos el tercer término anterior. La
fórmula para el enésimo número de Motzkin es M(n) = M(n-1) + Σ(k=0, n-2) M(k)M(n-2-k), donde M(0) =
1 y M(1) = 1.
Los primeros nueve términos de la serie de Motzkin son: 1, 1, 2, 4, 9, 21, 51, 127, 323.
- Salvedad: Para valores fuera de este rango, no garantizamos los resultados.
*/
var prompt = require('prompt-sync')();//Se invoca el prompt
/**
 * Serie de Motzkin
 * 
 * Este programa calcula y muestra la serie de Motzkin a partir de un número dado por el usuario.
 * La serie de Motzkin es una secuencia de números que se define recursivamente de la siguiente manera:
 * M(0) = 1
 * M(1) = 1
 * M(2) = 2
 * M(n) = M(n-2) + Σ(M(i) * M(n-i-1)) para i = 0 hasta n-2
 * 
 * @version 1.0
 */

// Presentación del programa
console.log("Este programa sirve para hallar la serie de Motzkin");
console.log("Por favor ingrese el número de la serie:");

// Obtener la cantidad de términos deseados
const cantidad = parseInt(prompt());

/**
 * Función recursiva para calcular y mostrar la serie de Motzkin.
 * 
 * @param {number} numero1 - Primer término de la serie.
 * @param {number} numero2 - Segundo término de la serie.
 * @param {number} contador - Contador para controlar la cantidad de términos mostrados.
 */
function motzkin(numero1, numero2, contador) {
  console.log(numero1);
  if (contador === cantidad) {
    return;
  }
  motzkin(numero2, numero2 + sumProduct(numero1, numero1), contador + 1);
}

/**
 * Función auxiliar para calcular el producto y la suma necesarios en la fórmula de la serie de Motzkin.
 * 
 * @param {number} n - Valor utilizado en el cálculo.
 * @param {number} acc - Acumulador utilizado en el cálculo.
 * @returns {number} El resultado del producto y la suma.
 */
function sumProduct(n, acc) {
  if (n === 0) {
    return 0;
  }
  return n * (acc - n) + sumProduct(n - 1, acc);
}

// Calcular y mostrar la serie de Motzkin
motzkin(1, 1, 0);
