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
- 21.Hacer un programa de computador, de tal manera que presente lo siguiente en la pantalla: (con un
máximo de cuatro(4) ordenes “IMPRIMIR” )
- Salvedad: Para valores fuera de este rango, no garantizamos los resultados.
*/

// Función para generar la secuencia de letras según el número de línea
const generateSequence = (lineNumber) => {
  if (lineNumber === 1) {
    return "P".repeat(13); // En la primera línea, se repite "P" 13 veces
  } else if (lineNumber === 2) {
    return "N".repeat(11); // En la segunda línea, se repite "N" 11 veces
  } else if (lineNumber === 3) {
    return "L".repeat(9); // En la tercera línea, se repite "L" 9 veces
  } else if (lineNumber === 4) {
    return "J".repeat(7); // En la cuarta línea, se repite "J" 7 veces
  } else if (lineNumber === 5) {
    return "H".repeat(5); // En la quinta línea, se repite "H" 5 veces
  } else if (lineNumber === 6) {
    return "F".repeat(3); // En la sexta línea, se repite "F" 3 veces
  } else if (lineNumber === 7) {
    return "D"; // En la séptima línea, solo hay una "D"
  }
};

// Función para generar espacios antes de cada línea
const generateSpaces = (count) => {
  if (count === 0) {
    return "";
  }
  return " " + generateSpaces(count - 1);
};

// Función recursiva para generar cada línea de la pirámide
const generatePyramidLine = (lineNumber, totalLines) => {
  if (lineNumber > totalLines) {
    return ""; // Caso base: si el número de línea supera el total de líneas, se devuelve una cadena vacía
  }
  
  const spacesBefore = generateSpaces(lineNumber - 1); // Generar espacios antes de la línea
  const sequence = generateSequence(lineNumber); // Generar la secuencia de letras para la línea actual
  
  const line = spacesBefore + sequence; // Concatenar los espacios y la secuencia de letras
  return line + "\n" + generatePyramidLine(lineNumber + 1, totalLines); // Recursivamente generar la siguiente línea
};

const totalLines = 7; // Número total de líneas en la pirámide
const pyramid = generatePyramidLine(1, totalLines); // Generar la pirámide desde la primera línea
console.log(pyramid); // Imprimir la pirámide completa