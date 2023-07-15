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
- 18.Hacer un programa de computador, utilizando ciclos anidados; de tal manera que presente lo siguiente
en la pantalla: (con un máximo de cuatro(4) ordenes “IMPRIMIR” .). Las líneas de las cuadriculas son
solo de referencia para mostrar filas y columnas; no se pide que las imprima.
*/

var prompt = require('prompt-sync')(); //variable prompt global declarada para utilizar prompt node.js 

renglones = (limite) => {
    let contador = 0;
    let cantidadEI = 9;
    let cantidadEC = 0;
    let renglon = 0;
  
    while (renglon < limite) {
      if (renglon === 0) {
        espaciosI(0, 9);
      } else if (renglon < 9) {
        espaciosI(contador, cantidadEI);
      }
  
      if (renglon > 0) {
        process.stdout.write("Z");
      }
  
      espaciosC(contador, cantidadEC);
  
      console.log("Z");
  
      if (renglon > 0) {
        cantidadEI--;
        cantidadEC += 2;
      } else {
        cantidadEI--;
        cantidadEC = 1;
      }
  
      renglon++;
    }
  }
  
  espaciosI = (contador, cantidadEI) => {
    while (contador < cantidadEI) {
      process.stdout.write(" ");
      contador++;
    }
  }
  
  espaciosC = (contador, cantidadEC) => {
    while (contador < cantidadEC) {
      process.stdout.write(" ");
      contador++;
    }
  }
  
  renglones(10);