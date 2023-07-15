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
- 14.Hacer un programa de computador, utilizando ciclos anidados; de tal manera que presente lo siguiente
en la pantalla: (con un máximo de cuatro(4) ordenes “IMPRIMIR” .). Las líneas de las cuadriculas son
solo de referencia para mostrar filas y columnas; no se pide que las imprima.
*/

var prompt = require('prompt-sync')(); //variable prompt global declarada para utilizar prompt node.js 

let renglon = 1;

while (renglon <= 7) {
  let espacios = "";
  let letras = "";
  let numero = 0;

  while (numero <= renglon - 1) {
    espacios += " ";
    numero++;
  }

  numero = 1;
  while (numero <= 13 - (renglon * 2) + 2) {
    letras += "P";
    numero++;
  }

  console.log(espacios + letras);
  renglon++;
}