/*
-Fecha de publicación: 19/06/2023
-Hora: 20:57
- Versión de su código: v1
-Autores: Ing(c) Juan David García Arce.
- Nombre del lenguaje utilizado: Java script
- Versión del lenguaje utilizado: ECMAScript 2021
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- 10-Determinar si un alumno aprueba a reprueba un curso, sabiendo que aprobara si su promedio de tres calificaciones es mayor o igual a
3,0; reprueba en caso contrario. 
- Salvedad: Para valores fuera de este rango, no garantizamos los resultados.
*/


// Este programa sirve para determinar si un alumno reprueba o aprueba un curso a partir de 3 calificaciones.

var prompt = require('prompt-sync')();//Se invoca el prompt
// Por favor ingresa la primera calificación:
console.log("Por favor ingresa la primera calificación:");
const x = Number(prompt()); // Se lee la primera calificación.

// Por favor ingresa la segunda calificación:
console.log("Por favor ingresa la segunda calificación:");
const y = Number(prompt()); // Se lee la segunda calificación.

// Por favor ingresa la tercera calificación:
console.log("Por favor ingresa la tercera calificación:");
const z = Number(prompt()); // Se lee la tercera calificación.

// Se define la función "ponderado".
function ponderado() {
  const promedio = (x + y + z) / 3.0; // Se calcula el promedio.

  // Se añade el condicional.
  if (promedio >= 3.0) {
    console.log(`Ha aprobado el curso con una calificación de ${promedio}`);
  } else if (promedio <= 3.0 && promedio >= 0) {
    console.log(`Ha reprobado el curso con una calificación de ${promedio}`);
  } else {
    console.log("Ha ingresado un dato no válido.");
  }
}

ponderado(); // Se invoca la función.
