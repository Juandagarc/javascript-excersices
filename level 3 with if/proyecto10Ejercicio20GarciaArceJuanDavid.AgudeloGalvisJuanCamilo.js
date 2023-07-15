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
- 20.Hacer un programa de computador, de tal manera que presente lo siguiente en la pantalla: (con un
máximo de cuatro(4) ordenes “IMPRIMIR” ).
- Salvedad: Para valores fuera de este rango, no garantizamos los resultados.
*/

function generateSequence(nFilas, currentRow = 0, sequence = "") {
  if (currentRow === nFilas) {
    return; // Caso base: todas las filas se han generado, terminamos la recursión
  }
  
  if (sequence.length <= currentRow) {
    sequence += "A"; // Agregamos un carácter "A" al final de la secuencia en cada llamada recursiva
  }

  console.log(sequence); // Imprimimos la secuencia actual

  generateSequence(nFilas, currentRow + 1, sequence); // Llamada recursiva con la siguiente fila y la secuencia actualizada
}

var nFilas = 25;
generateSequence(nFilas);
