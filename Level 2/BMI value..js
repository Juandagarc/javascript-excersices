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
- 17- Construir un programa que calcule el índice de masa corporal de una persona, donde: (IMC = peso [kg] /altura2 [m]) e indique el estado
en el que se encuentra esa persona en función del valor de IMC.
- Salvedad: Para valores fuera de este rango, no garantizamos los resultados.
*/


// Este programa sirve para calcular el índice de masa corporal de una persona.

var prompt = require('prompt-sync')();//Se invoca el prompt
// Indique el peso.
console.log("Indique el peso:");
const peso = Number(prompt()); // Se lee el peso.

// Indique la altura.
console.log("Indique la altura:");
const altura = Number(prompt()); // Se lee la altura.

const indiceMasaCorporal = peso / Math.pow(altura, 2); // Se calcula el índice de masa corporal.

// Se utiliza un condicional para determinar la categoría según el rango del índice de masa corporal.
if (indiceMasaCorporal < 16) {
  console.log("Criterio de ingreso a hospital");
} else if (indiceMasaCorporal >= 16 && indiceMasaCorporal < 17) {
  console.log("Infrapeso");
} else if (indiceMasaCorporal >= 17 && indiceMasaCorporal < 18) {
  console.log("Bajo peso");
} else if (indiceMasaCorporal >= 18 && indiceMasaCorporal < 25) {
  console.log("Peso normal");
} else if (indiceMasaCorporal >= 25 && indiceMasaCorporal < 30) {
  console.log("Sobrepeso (obesidad de grado I)");
} else if (indiceMasaCorporal >= 30 && indiceMasaCorporal < 35) {
  console.log("Obesidad crónico (obesidad de grado II)");
} else if (indiceMasaCorporal >= 35 && indiceMasaCorporal < 40) {
  console.log("Obesidad premórbida (obesidad de grado III)");
} else if (indiceMasaCorporal > 40) {
  console.log("Obesidad mórbida (obesidad de grado IV)");
} else {
  console.log("Se ingresaron cantidades no válidas");
}
