
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
- Salvedad: Para valores fuera de este rango, no garantizamos los resultados.
*/

var prompt = require('prompt-sync')();//Se invoca el prompt
console.log(" Se define la serie de Fibonacci como la serie que comienza con los dígitos 1 y 0 y va sumando progresivamente los dos últimos elementos de la serie, así: 0 1 1 2 3 5 8 13 21 34.......  ");
console.log("Hacer un programa de computador, de tal manera que presente la serie de Fibonacci hasta llegar sin sobrepasar el número 10,000.");

function fibonacci(n) {
    if (n <= 1) {
      return [0, 1]; // Caso base: Retorna los valores iniciales de la serie
    } else {
      var fibSeries = fibonacci(n - 1); // Llamada recursiva para obtener la serie anterior
      var nextFib = fibSeries[fibSeries.length - 1] + fibSeries[fibSeries.length - 2]; // Calcula el siguiente número
      
      if (nextFib <= 10000) {
        fibSeries.push(nextFib); // Agrega el siguiente número a la serie si es menor o igual a 10,000
      }
  
      return fibSeries; // Retorna la serie actualizada
    }
  }
  
  var fibonacciSeries = fibonacci(20); // Llamada inicial con el número 20 para generar la serie
  console.log(fibonacciSeries);
  
  