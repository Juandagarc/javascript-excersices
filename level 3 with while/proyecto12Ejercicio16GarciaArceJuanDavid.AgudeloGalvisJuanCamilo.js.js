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
- 16.Hacer un programa de computador, utilizando ciclos anidados; de tal manera que presente lo siguiente
en la pantalla: (con un máximo de cuatro(4) ordenes “IMPRIMIR” .). Las líneas de las cuadriculas son
solo de referencia para mostrar filas y columnas; no se pide que las imprima.
*/

var prompt = require('prompt-sync')(); //variable prompt global declarada para utilizar prompt node.js 

renglones = (limite) => {
    let renglon = 1;
  
    while (renglon <= limite) {
      if (renglon === 1 || renglon === 7) {
        espacios(9);
        letras(1);
      }
      if (renglon === 2 || renglon === 6) {
        espacios(8);
        letras(3);
      }
      if (renglon === 3 || renglon === 5) {
        espacios(7);
        letras(5);
      }
      if (renglon === 4) {
        espacios(6);
        letras(7);
      }
      console.log(); // Salto de línea
      renglon++;
    }
  }
  
  espacios = (espacio) => {
    let contador = 1;
  
    while (contador <= espacio) {
      process.stdout.write(" ");
      contador++;
    }
  }
  
  letras = (cantidad) => {
    let contador = 1;
  
    while (contador <= cantidad) {
      process.stdout.write("Z");
      contador++;
    }
  }
  
  renglones(7);