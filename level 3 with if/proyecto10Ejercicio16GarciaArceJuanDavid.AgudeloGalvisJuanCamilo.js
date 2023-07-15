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
- 2.Hacer un programa de computador, de tal manera que imprima el valor de la suma de los elementos de
la serie de Fibonacci entre 0 y 100.
- Salvedad: Para valores fuera de este rango, no garantizamos los resultados.
*/
var prompt = require('prompt-sync')();//Se invoca el prompt
// Definir la función factorial para calcular el factorial de un número
function factorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * factorial(numero - 1);
    }
  }
  
  // Imprimir el enunciado
  console.log("Este programa pide un número e imprime su sumatoria de factoriales");
  
  // Leer el número de repeticiones
  const Sumatoria = Number(prompt("Ingrese el número de repeticiones:"));
  
  // Definir la función Secuencia
  function Secuencia(Primero, Segundo, Contador) {
    if (Contador < Sumatoria) { // Si el contador es menor que el número de repeticiones
      console.log(`${Segundo}! + `); // Imprimir el resultado parcial
    }
  
    if (Contador < Sumatoria) { // Si el contador es menor que el número de repeticiones
      Secuencia(Segundo, Segundo + 1, Contador + 1); // Llamar recursivamente a la función Secuencia con los nuevos valores
    } else {
      console.log(`${Segundo}! = `); // Imprimir el resultado final
  
      let sumatoriaFactoriales = Total(Sumatoria); // Calcular la sumatoria de los factoriales utilizando la función Total
  
      console.log(sumatoriaFactoriales); // Imprimir el resultado de la sumatoria de factoriales
    }
  }
  
  // Invocar la función Secuencia con los valores iniciales
  Secuencia(1, 1, 1);
  
  // Definir la función Total para calcular la sumatoria de factoriales
  function Total(n) {
    if (n === 0) {
      return 1;
    } else {
      return factorial(n) + Total(n - 1); // Calcular recursivamente el factorial y sumarlo a la llamada recursiva de Total
    }
  }
  