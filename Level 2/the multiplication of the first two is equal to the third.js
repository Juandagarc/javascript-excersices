/*
-Fecha de publicación: 19/06/2023
-Hora: 20:57
- Versión de su código: v1
-Autores: Ing(c) Juan David García Arce.
- Nombre del lenguaje utilizado: Java script
- Versión del lenguaje utilizado: ECMAScript 2021
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- 8-Que tome tres números y diga si la multiplicación de los dos primeros es igual al tercero.
- Salvedad: Para valores fuera de este rango, no garantizamos los resultados.
*/

var prompt = require('prompt-sync')();//Se invoca el prompt
console.log(`Este programa sirve para determinar
que leyendo por teclado la antigüedad en años,
que calcule el sueldo mensual que le corresponde
al trabajador de una empresa que cobra 40.000
euros anuales.
\nPor favor ingresa un número:`);

// Se lee el input.
const num1 = Number(prompt());

// Se define la función "descuento".
function descuento() {
  // Se añade el condicional.
  if (num1 > 10) {
    console.log("su sueldo actual es de:", 40000 * 0.1 + 40000);
  } else if (num1 > 5 && num1 <= 10) {
    console.log("su sueldo actual es de:", 40000 * 0.07 + 40000);
  } else if (num1 > 3 && num1 <= 5) {
    console.log("su sueldo actual es de:", 40000 * 0.05 + 40000);
  } else if (num1 >= 0 && num1 <= 3) {
    console.log("su sueldo actual es de:", 40000 * 0.03 + 40000);
  } else {
    console.log("El valor que ingresó no es válido.");
  }
}

descuento(); // Se invoca la función.