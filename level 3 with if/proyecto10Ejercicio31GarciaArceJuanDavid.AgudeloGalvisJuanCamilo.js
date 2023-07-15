
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

var prompt = require('prompt-sync')();//Se invoca el prompt
// Este programa genera la suma de la serie de Taylor para senh(x)
// Ingrese el valor de x:
const prompt = require('prompt-sync')();

function calcularFactorial(n) { // Función recursiva para calcular el factorial de un número
  if (n <= 1) {
    return 1;
  }
  return n * calcularFactorial(n - 1);
}

function calcularPotencia(base, exponente) {// Función recursiva para calcular una potencia
  if (exponente === 0) {
    return 1;
  }
  return base * calcularPotencia(base, exponente - 1);
}

function calcularTermino(x, potencia, factorial) {// Calcula el término actual de la serie de Taylor para senh(x)
  return calcularPotencia(x, potencia) / factorial;
}

function calcularSerieTaylorSenh(x, potencia, terminoActual, sumaActual) {// Calcula la serie de Taylor para senh(x)
  if (terminoActual === 0) {
    console.log("Termino 1 = " + x);
    return calcularSerieTaylorSenh(x, potencia + 2, terminoActual + 1, sumaActual + x);
  }

  const factorial = calcularFactorial(potencia);
  const termino = calcularTermino(x, potencia, factorial);
  sumaActual += termino;

  console.log("Termino " + (terminoActual + 1) + ": senh(" + x + ") = " + termino.toFixed(8));

  if (terminoActual >= 2 && Math.abs(termino) < 1e-8) {
    console.log("Total suma = " + sumaActual.toFixed(8));
    return;
  }

  return calcularSerieTaylorSenh(x, potencia + 2, terminoActual + 1, sumaActual);
}

function calcularSenh() { // Función principal para calcular la serie de Taylor de senh(x)
  const x = parseFloat(prompt("Ingrese el valor de x: "));
  const terminos = parseInt(prompt("Ingrese el número de términos para la serie: "));

  const potenciaInicial = 1;
  const terminoInicial = 0;
  const sumaInicial = 0;

  console.log("Calculando la serie de Taylor para senh(x)...");
  console.log("Valor de x: " + x);
  console.log("Número de términos: " + terminos);
  console.log("--------------------------------------");

  calcularSerieTaylorSenh(x, potenciaInicial, terminoInicial, sumaInicial);
}

// Ejemplo de uso
calcularSenh();
