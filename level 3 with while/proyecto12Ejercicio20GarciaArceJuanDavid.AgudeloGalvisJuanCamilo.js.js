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
- 20 - Serie de e^x
*/

var prompt = require('prompt-sync')(); //variable prompt global declarada para utilizar prompt node.js 

main = () => {
    let potencia = 1;
    let factorial = 1;
    let x, veces;
    let resultado = 1;
  
    x = parseInt(prompt("Ingrese un valor para x: "));
    veces = parseInt(prompt("Por favor ingrese el número de términos para la serie: "));
  
    while (potencia <= veces) {
      factorial *= potencia;
      resultado += Math.pow(x, potencia) / factorial;
      potencia++;
    }
  
    console.log(`El resultado de e^${x} es: ${resultado}`);
  }
  
  main();