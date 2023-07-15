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
// Imprimir el enunciado
console.log("Este programa pide un número e imprime su factorial");

// Leer el número de repeticiones
const Sumatoria = Number(prompt("Ingrese el número de repeticiones:"));

// Definir la función factorial para calcular el factorial de un número
function factorial(numero) {
   if (numero === 0 || numero === 1) {
      return 1;
   } else {
      return numero * factorial(numero - 1);
   }
}

// Definir la función Secuencia
function Secuencia(Primero, Segundo, Contador) {
   if (Contador < Sumatoria) { // Si el contador es menor que el número de repeticiones
      console.log(`${Segundo} x `); // Imprimir el resultado parcial
   }
   
   if (Contador < Sumatoria) { // Si el contador es menor que el número de repeticiones
      Secuencia(Segundo, Segundo + 1, Contador + 1); // Llamar recursivamente a la función Secuencia con los nuevos valores
   } else {
      const factorialSegundo = factorial(Segundo); // Calcular el factorial de Segundo utilizando la función factorial
      console.log(`${Segundo} = ${factorialSegundo}`); // Imprimir el resultado final, que es el factorial de Segundo
   }
}

// Invocar la función Secuencia con los valores iniciales
Secuencia(1, 1, 1);
