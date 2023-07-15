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
- 2.Hacer un programa de computador, de tal manera que imprima el valor de la suma de los elementos
de la serie de Fibonacci entre 0 y 100.

*/

let sumFibonacciInRange = maxValue => {
  var series = [0, 1]; // Los primeros dos números de la serie de Fibonacci
  var nextNumber = 0;
  var sum = 1;

  // Generar la serie de Fibonacci y calcular la suma
  for (var i = 2; nextNumber <= maxValue; i++) {
    nextNumber = series[i - 1] + series[i - 2]; // Calcula el siguiente número de Fibonacci sumando los dos últimos números de la serie
    if (nextNumber <= maxValue) {
      series.push(nextNumber); // Agrega el siguiente número de Fibonacci a la serie
      sum += nextNumber; // Suma el siguiente número de Fibonacci a la suma total
    }
  }

  return sum; // Retorna la suma de los números de la serie de Fibonacci
}

var maxValue = 100; // Valor máximo hasta el cual se calculará la suma de la serie de Fibonacci
var sum = sumFibonacciInRange(maxValue); // Calcula la suma de la serie de Fibonacci hasta el valor máximo

console.log("Suma de los elementos de la serie de Fibonacci entre 0 y " + maxValue + ":"); // Imprime un mensaje en la consola
console.log(sum); // Imprime la suma de la serie de Fibonacci
