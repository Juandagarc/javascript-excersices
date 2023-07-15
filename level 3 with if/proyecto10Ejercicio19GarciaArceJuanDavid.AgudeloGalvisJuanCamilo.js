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
// Definir la función para imprimir las 'A'
function Imp(Inicio, Final) {
    if (Inicio <= Final) {
       process.stdout.write("A"); // Imprimir la letra 'A' sin salto de línea
       Imp(Inicio + 1, Final); // Llamar recursivamente a la función Imp con Inicio incrementado en 1
    }
 }
 
 // Definir la función para imprimir los espacios
 function Espacio(Inicio, Final) {
    if (Inicio <= Final) {
       process.stdout.write(" "); // Imprimir un espacio sin salto de línea
       Espacio(Inicio + 1, Final); // Llamar recursivamente a la función Espacio con Inicio incrementado en 1
    }
 }
 
 // Definir la función para hacer la animación
 function Aplicar(Vertical, Contador, Final, Contador1, Final1) {
    if (Vertical <= 40) {
       setTimeout(() => {
          process.stdout.write("\n".repeat(9)); // Generar saltos de línea para dar efecto de animación
          Espacio(Contador1, Final1);
          Imp(1, 1); // Llamar a la función Imp
          Espacio(Contador, Final);
          if (Vertical !== 10) {
             Imp(1, 1); // Llamar a la función Imp
          }
          console.log(""); // Imprimir un salto de línea
          Aplicar(Vertical + 1, Contador, Final - 2, Contador1, Final1 + 1); // Llamar recursivamente a la función Aplicar con los nuevos valores
       }, 1000); // Esperar 1 segundo antes de realizar la siguiente iteración
    }
 }
 
 // Invocar la función principal Aplicar con los valores iniciales
 Aplicar(1, 1, 78, 1, 0);
 