var prompt = require('prompt-sync')();//Se invoca el prompt
/**
 * Serie Triangular
 * 
 * Este programa pide al usuario la cantidad de términos deseados de la serie triangular
 * y los imprime en la consola.
 * 
 * La serie triangular cuenta el número de puntos en una retícula triangular de lado n.
 * Comienza con el número 1 y los términos siguientes se calculan como la suma de los términos
 * anteriores y el número de puntos en la diagonal de la retícula de lado n-1.
 * La fórmula para el enésimo número de la serie triangular es T(n) = T(n-1) + (n-1)T(n-2), donde T(0) = 1.
 * 
 * Los primeros nueve términos de la serie triangular son: 1, 3, 6, 10, 15, 21, 28, 36, 45.
 * 
 * Toma en cuenta que este programa solo acepta valores numéricos enteros positivos como entrada.
 * 
 * @version 1.0
 */

// Presentación del programa
console.log("Este programa pide el número de términos deseados de la serie de Triangular y los imprime, teniendo en cuenta que:");
console.log("Serie de Triangular: Esta serie cuenta el número de puntos en una retícula triangular de lado n. Comienza con el número 1 y los siguientes términos se calculan como la suma de los términos anteriores y el número de puntos en la diagonal de la retícula de lado n-1. La fórmula para el enésimo número de la serie triangular es T(n) = T(n-1) + (n-1)T(n-2), donde T(0) = 1.");
console.log("Los primeros nueve términos de la serie triangular son: 1, 3, 6, 10, 15, 21, 28, 36, 45.");
console.log("Salvedad: Este programa toma como datos de entrada únicamente valores numéricos enteros positivos, de otro modo no se garantizan sus resultados.");

// Obtener la cantidad de términos deseados
console.log("Digite la cantidad de términos deseados: ");
const obtenerNumero = Math.floor(parseInt(prompt()));

/**
 * Función recursiva para calcular y mostrar la serie triangular.
 * 
 * @param {number} T - El término actual de la serie triangular.
 * @param {number} n - El valor de n para el cálculo del siguiente término.
 * @param {number} contador - El contador para controlar la cantidad de términos a mostrar.
 */
function serieTriangular(T, n, contador) {
  if (contador >= 1) {
    if (contador === 1) {
      process.stdout.write(`${T}`);
    } else {
      process.stdout.write(`${T}, `);
    }
    serieTriangular(n + T, n + 1, contador - 1);
  }
}

// Validar y mostrar la serie triangular
if (obtenerNumero < 0) {
  console.log("Por favor ingrese un valor positivo");
} else if (obtenerNumero === 0) {
  // No hay términos para mostrar
} else {
  serieTriangular(1, 2, obtenerNumero);
}
