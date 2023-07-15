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
- 2.Hacer un programa de computador, de tal manera que imprima el valor de la suma de los elementos de
la serie de Fibonacci entre 0 y 100.
- Salvedad: Para valores fuera de este rango, no garantizamos los resultados.
*/
var prompt = require('prompt-sync')();//Se invoca el prompt
console.log("Este es un programa que utilizando ciclos anidados se generen las siguientes ternas de enteros:\n");

function Secuencia(Primero, Segundo, Tercero) {
  if (Primero === 10) {
    return;
  }

  if (Primero % 3 === 0) {
    console.log(Primero + " " + Segundo + " " + Tercero);
    Secuencia(Primero + 1, Segundo + 1, Tercero);
  } else {
    console.log(Primero + " " + Segundo + " " + Tercero);
    Secuencia(Primero + 1, Segundo, Tercero + 1);
  }
}

Secuencia(1, 1, 1);
