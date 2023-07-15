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

var prompt = require('prompt-sync')(); //variable prompt global declarada para utilizar prompt node.js 

fibonacciSerie = () => {//funcion principal de la serie de fibonacci
    let x = 1;//valores iniciales de la serie 
    let y = 0;//valores iniciales de la serie
    let z = 1;//variable auxiliar
  
    console.log("Este programa presenta la serie de Fibonacci como la serie que comienza con los dígitos 1 y 0 y va");
    console.log("sumando progresivamente los dos últimos elementos de la serie, así: 0 1 1 2 3 5 8 13 21 34.......");
    console.log("Para este programa, se presentará la serie de Fibonacci hasta llegar sin sobrepasar el número 10,000:\n0  1");
    
    while (z <= 10000) {//ciclo while para la serie de fibonacci sin pasar el numero 10000
      console.log(z + " ");
      z = x + y;
      x = y;
      y = z;
    }
  }
  
  fibonacciSerie();