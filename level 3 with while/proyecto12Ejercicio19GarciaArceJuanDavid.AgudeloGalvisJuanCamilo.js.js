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
- 19.Hacer un programa de computador, utilizando ciclos anidados; de tal manera que presente lo siguiente
en la pantalla: (con un máximo de cuatro(4) ordenes “IMPRIMIR” .). Las líneas de las cuadriculas son
solo de referencia para mostrar filas y columnas; no se pide que las imprima.
*/
var prompt = require('prompt-sync')(); //variable prompt global declarada para utilizar prompt node.js 

renglones = (limite) => {
    let contador = 0;
    let cantidadletras = 1;
    let cantidadespacios = 39;
    let renglon = 0;
  
    while (renglon < limite) {
      espacios(contador, cantidadespacios);
      letras(contador, cantidadletras);
  
      console.log();
  
      if (renglon < 5) {
        cantidadletras++;
        cantidadespacios--;
      } else {
        cantidadletras--;
        cantidadespacios++;
      }
  
      renglon++;
    }
  }
  
  espacios = (contador, cantidadespacios) => {
    for (; contador < cantidadespacios; contador++) {
      process.stdout.write(" ");
    }
  }
  
  letras = (contador, cantidadletras) => {
    for (; contador < cantidadletras; contador++) {
      process.stdout.write("A");
    }
  }
  
  renglones(11);
  