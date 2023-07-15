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
- 7.Hacer un programa de computador, de tal manera que, lea un número entero N, no negativo(validar
esto) y mostrar la suma de los factoriales de todos los números desde 0 hasta N.
*/
var prompt = require('prompt-sync')(); //variable prompt global declarada para utilizar prompt node.js 

// Función que calcula el factorial de un número
factorial = (number) => {
    if (number === 0) {
      return 1;
    } else {
      let result = 1;
      while (number > 0) {
        result *= number;
        number--;
      }
      return result;
    }
  }
  
  // Función que realiza la suma de factoriales
  sumaFactoriales = () => {
    // Solicitar al usuario un número entero no negativo
    const numero = parseInt(prompt("El siguiente programa lee un número entero, no negativo y muestra la suma de los\nfactoriales de todos los números desde 0 hasta el número ingresado.\nIngrese por favor el número: "));
  
    // Validar que el número sea no negativo
    if (numero < 0) {
      console.log("Error: El número debe ser no negativo.");
      return;
    }
  
    let acumulado = 0;
    let inicio = 0;
  
    // Calcular la suma de los factoriales utilizando un ciclo while
    while (inicio <= numero) {
      const factorialActual = factorial(inicio);
      acumulado += factorialActual;
  
      // Imprimir el factorial actual
      process.stdout.write(`${factorialActual}`);
  
      // Imprimir el símbolo '+' después de cada factorial, excepto en el último
      if (inicio !== numero) {
        process.stdout.write(" + ");
      }
  
      inicio++;
    }
  
    // Imprimir el resultado de la suma
    console.log(` = ${acumulado}`);
  }
  
  // Llamar a la función para realizar la suma de factoriales
  sumaFactoriales();
  