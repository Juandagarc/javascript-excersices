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
- 21 - Serie de cos(x)
*/
var prompt = require('prompt-sync')(); //variable prompt global declarada para utilizar prompt node.js 

factorial = (n) => {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  coseno = (x, n) => {
    let result = 0;
    let i = 0;
  
    while (i <= n) {
      let term = Math.pow(-1, i) * Math.pow(x, 2 * i) / factorial(2 * i);
      result += term;
      i++;
    }
  
    return result;
  }
  
  // Obtener el valor de X y el número de términos del usuario
  const x = parseFloat(prompt("Ingrese el valor de X:"));
  const terminos = parseInt(prompt("Ingrese el número de términos de la serie:"));
  
  // Calcular el coseno utilizando la serie de Taylor
  const cosenoValor = coseno(x, terminos);
  
  // Mostrar el resultado
  console.log(`El coseno de ${x} es aproximadamente: ${cosenoValor}`);