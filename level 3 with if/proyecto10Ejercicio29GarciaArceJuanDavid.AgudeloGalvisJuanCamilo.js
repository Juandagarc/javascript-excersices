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
- 29 .En computación las funciones trigonométricas como el seno, coseno, tangente, etc., al igual que otros
tipos de funciones, no se calculan directamente, lo que sucede en realidad es que internamente, la
máquina realiza las llamadas series de Taylor, que son el resultado de la suma de varios términos para
formar los resultados a estas funciones.
Hacer un programa para calcular los resultados de las siguientes funciones usando las series de Taylor
que se dan a continuación.
Esta es la serie de taylor de e a la x.
Para cada ejercicio, pida por teclado: a). El valor de x b). El número de términos de la serie
- Salvedad: Para valores fuera de este rango, no garantizamos los resultados.
*/

var prompt = require('prompt-sync')();// Se importa el módulo prompt-sync para obtener entrada del usuario

function main() {
  let x = parseInt(prompt("Ingrese un valor para x: ")); // Se solicita al usuario que ingrese un valor para x
  let veces = parseInt(prompt("Por favor ingrese el numero de terminos para la serie: ")); // Se solicita al usuario que ingrese el número de términos para la serie

  let resultado = calcularResultado(x, veces);// Se llama a la función calcularResultado para obtener el resultado de la serie

  console.log(`El resultado de e^${x} es: ${resultado}`);
}

function calcularResultado(x, veces, potencia = 1, factorial = 1, resultado = 1) {// Función para calcular el resultado de la serie de e^x
  if (potencia > veces) {
    return resultado;
  }

  factorial *= potencia; // Se calcula el factorial de la potencia actual
  resultado += Math.pow(x, potencia) / factorial; // Se agrega el término actual a la suma del resultado

  return calcularResultado(x, veces, potencia + 1, factorial, resultado); // Llamada recursiva para calcular el siguiente término de la serie
}

main(); // Se llama a la función principal para iniciar el programa