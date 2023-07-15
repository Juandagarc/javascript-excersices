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
var prompt = require('prompt-sync')(); //variable prompt global declarada para utilizar prompt node.js 

fibonacciSum = () => {
    let x = 1;
    let y = 0;
    let z = 1;
    let suma = 1;
  
    console.log("Este programa presenta la suma de los elementos de la serie de Fibonacci entre 0 y 100.");
    console.log("Los números a sumar son:\n0  1  1  2  3  5  8  13  21  34  55  89");
  
      while (z <= 55) {
        z = x + y;
        y = x;
        x = z;
        suma += z;
      }
    
      console.log("y su suma es: " + suma);
  }
  
  fibonacciSum();