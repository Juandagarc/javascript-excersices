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
- 25 - Serie de sen(x)
*/

var prompt = require('prompt-sync')(); //variable prompt global declarada para utilizar prompt node.js 

main = () => {
    let x = 0, factorial = 1, total = 1, resultado = 1, potencia = 3, final = 1;
    let contador = 1, veces = 0;
  
    x = parseFloat(prompt("Ingrese un valor para x: "));
    veces = parseInt(prompt("Por favor ingrese el número de términos para la serie: "));
  
    while (contador <= veces) {
      for (factorial = 1; factorial <= potencia; factorial++) {
        total *= factorial;
      }
      resultado = Math.pow(x, potencia) / total;
      total = 1;
      potencia += 2;
  
      if (contador === 1) {
        console.log("Termino 1 = " + x.toFixed(0));
        contador++;
        continue;
      }
  
      if (contador % 2 === 0) {
        final -= resultado;
      } else {
        final += resultado;
      }
  
      console.log("Termino " + contador + ": senh(" + x.toFixed(0) + ") = " + resultado.toFixed(8));
  
      if (contador === veces) {
        console.log("Total suma = " + final.toFixed(8));
      }
  
      contador++;
    }
  
    return 0;
  }
  
  main();