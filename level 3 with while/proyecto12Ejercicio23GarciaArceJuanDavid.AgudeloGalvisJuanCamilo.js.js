
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
- 23 - Serie de cosh(x)
*/

const prompt = require('prompt-sync')();

function factorial(n) {
  let result = 1;
  let i = 2;
  while (i <= n) {
    result *= i;
    i++;
  }
  return result;
}

fmain = () => {
  let x = 0;
  let factorialValue = 1;
  let total = 1;
  let resultado = 1;
  let potencia = 2;
  let final = 1;
  let contador = 0;
  let veces = 0;

  x = parseFloat(prompt("Ingrese un valor para x: "));
  veces = parseInt(prompt("Por favor ingrese el número de términos para la serie: "));

  while (contador < veces) {
    let i = 1;
    while (i <= potencia) {
      factorialValue *= i;
      i++;
    }
    resultado = (Math.pow(x, potencia)) / factorialValue;
    total = 1;
    potencia += 2;

    if (contador === 0) {
      console.log("Termino 1 = " + total.toFixed(8));
      contador += 2;
    }

    final += resultado;
    console.log("Termino " + contador + ": cosh(" + x.toFixed(0) + ") = " + resultado.toFixed(8));

    if (contador === veces) {
      console.log("Total suma = " + final.toFixed(8));
    }

    contador++;
  }
}

main();
