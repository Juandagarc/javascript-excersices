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
- 24 - Serie de In
*/

var prompt = require('prompt-sync')(); //variable prompt global declarada para utilizar prompt node.js 

main = () => {
    let x = 0;
    let total = 2;
    let resultado = 1;
    let potencia = 2;
    let final = 0;
    let contador = 1;
    let veces = 0;
  
    x = parseFloat(prompt("Ingrese un valor para x: "));
    veces = parseInt(prompt("Por favor ingrese el número de términos para la serie: "));
  
    while (contador <= veces) {
      resultado = Math.pow(x - 1, potencia) / total;
      total = total + 1;
      potencia = potencia + 1;
  
      if (contador === 0) {
        console.log("Termino 1 = " + (x - 1).toFixed(1));
        contador += 2;
      }
  
      if (contador % 2 === 0) {
        final = final - resultado;
      } else {
        final = final + resultado;
      }
  
      console.log("Termino " + contador + ": ln(" + x.toFixed(1) + ") = " + resultado.toFixed(8));
  
      if (contador === veces) {
        console.log("Total suma = " + final.toFixed(8));
      }
  
      contador++;
    }
  }
  
  main();