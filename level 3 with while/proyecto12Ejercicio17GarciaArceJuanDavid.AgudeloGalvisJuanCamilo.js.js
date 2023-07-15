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
- 17.Hacer un programa de computador, utilizando ciclos anidados; de tal manera que presente lo siguiente
en la pantalla: (con un máximo de cuatro(4) ordenes “IMPRIMIR” .). Las líneas de las cuadriculas son
solo de referencia para mostrar filas y columnas; no se pide que las imprima. 
*/
var prompt = require('prompt-sync')(); //variable prompt global declarada para utilizar prompt node.js 

renglones = (limite) => {
    let contador = -1;
    let cantidadEI = 0;
    let cantidadEC = 16;
    
    for (let renglon = 0; renglon < limite; renglon++) {
      espaciosI(contador, cantidadEI);
      process.stdout.write("Z");
      espaciosC(contador, cantidadEC);
      
      if (renglon < 9) {
        console.log("Z");
      }
      
      cantidadEI++;
      cantidadEC -= 2;
    }
  }
  
  espaciosI = (contador, cantidadEI) => {
    for (; contador < cantidadEI; contador++) {
      process.stdout.write(" ");
    }
  }
  
  espaciosC = (contador, cantidadEC) => {
    for (; contador < cantidadEC; contador++) {
      process.stdout.write(" ");
    }
  }
  
  renglones(10);
  
  