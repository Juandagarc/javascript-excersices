
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
- 13-Una persona enferma, que pesa 70 kg, se encuentra en reposo y desea saber cuantas calorías consume su cuerpo durante todo el tiempo
que realice una misma actividad. Las actividades que tiene permitido realizar son únicamente dormir o estar sentado en reposo. Los datos
que tiene son que estando dormido consume 1.08 calorías por minuto y estando sentado en reposo consume 1.66 calorías por minuto. 
- Salvedad: Para valores fuera de este rango, no garantizamos los resultados.
*/

// Este programa sirve para determinar cuántas calorías consume una persona enferma de 70 kilos.

var prompt = require('prompt-sync')();//Se invoca el prompt
// ¿Cuánto tiempo estuvo realizando la actividad?
console.log("¿Cuánto tiempo estuvo realizando la actividad?");
const tiempo = Number(prompt()); // Se lee el tiempo de la actividad.

// ¿Qué actividad realizó?
console.log("¿Qué actividad realizó?");
const actividad = prompt(); // Se lee la actividad realizada.

// Se añade el condicional.
if (actividad === 'dormir') {
  console.log(`La cantidad de calorías consumidas es de ${1.08 * tiempo}`);
} else if (actividad === 'reposo') {
  console.log(`La cantidad de calorías consumidas es de ${1.66 * tiempo}`);
} else {
  console.log(0);
}
