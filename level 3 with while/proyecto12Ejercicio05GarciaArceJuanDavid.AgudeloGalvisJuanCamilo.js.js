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
- 5.Hacer un programa de computador, utilizando ciclos anidados; de tal manera que presente todas las
tablas de multiplicar del 1 al 10.
*/
var prompt = require('prompt-sync')(); //variable prompt global declarada para utilizar prompt node.js 

tablaMultiplicar = () => {
    let x = 1; // Variable para el primer factor
    let y = 1; // Variable para el segundo factor
    let multiplicar = 0; // Variable para el resultado de la multiplicación
  
    while (x <= 10) { // Ciclo externo para iterar sobre el primer factor
      while (y <= 10) { // Ciclo interno para iterar sobre el segundo factor
        multiplicar = x * y; // Realizar la multiplicación
        console.log(`${x} x ${y} = ${multiplicar}`); // Mostrar la operación y el resultado en la consola
        y = y + 1; // Incrementar el segundo factor
      }
      console.log("\n"); // Agregar una línea en blanco para separar las tablas de multiplicar
      y = 1; // Reiniciar el segundo factor para la siguiente iteración del primer factor
      x = x + 1; // Incrementar el primer factor
    }
  }
  
  // Llamar a la función para generar la tabla de multiplicar del 1 al 10
  tablaMultiplicar();
  