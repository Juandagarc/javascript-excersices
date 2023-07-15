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
- 7-Que tome dos números y diga si ambos son pares o ambos son impares.
- Salvedad: Para valores fuera de este rango, no garantizamos los resultados.
*/

// Este programa sirve para que pida dos números y diga si AMBOS son pares o impares.

// Por favor ingrese el primer número:
console.log("Por favor ingrese el primer número:");
const x = Number(prompt()); // Se lee el primer número.

// Por favor ingrese el segundo número:
console.log("Por favor ingrese el segundo número:");
const y = Number(prompt()); // Se lee el segundo número.

// Se añade el condicional.
if (x % 2 === 0 && y % 2 === 0) {
  console.log("Ambos números son pares.");
} else if (x % 2 !== 0 && y % 2 !== 0) {
  console.log("Ambos números son impares.");
} else {
  console.log("El valor que ingresó no es válido.");
}
