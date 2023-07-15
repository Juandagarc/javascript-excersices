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
- 1. Se define la serie de Fibonacci como la serie que comienza con los dígitos 1 y 0 y va sumando
progresivamente los dos últimos elementos de la serie, así: 0 1 1 2 3 5 8 13 21 34.......
Hacer un programa de computador, de tal manera que presente la serie de Fibonacci hasta llegar sin
sobrepasar el número 10,000.

*/

// Función para generar la serie de Fibonacci hasta un valor máximo
let fibonacciSerie = maxValue => {
  var series = [0, 1]; // Los primeros dos números de la serie de Fibonacci
  var nextNumber = 0;

  // Generar la serie de Fibonacci
  for (var i = 2; nextNumber <= maxValue; i++) {
    nextNumber = series[i - 1] + series[i - 2]; // Calcula el siguiente número sumando los dos últimos
    if (nextNumber <= maxValue) {
      series.push(nextNumber); // Agrega el siguiente número a la serie si no sobrepasa el valor máximo
    }
  }

  return series; // Devuelve la serie de Fibonacci
}

var maxValue = 10000;
var fibonacciSeries = fibonacciSerie(maxValue);

console.log("Serie de Fibonacci hasta " + maxValue + ":");
console.log(fibonacciSeries);
