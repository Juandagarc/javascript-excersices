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
- 18-En un estacionamiento cobran $1.800 por hora o fracción. Diseñe un algoritmo que determine cuanto debe pagar un cliente por el
estacionamiento de su vehículo, conociendo el tiempo de estacionamiento en horas y minutos.
- Salvedad: Para valores fuera de este rango, no garantizamos los resultados.
*/

// Este programa sirve para determinar cuánto dinero se debe pagar en estacionamiento con una tarifa de $1.800.

var prompt = require('prompt-sync')();//Se invoca el prompt
// Ingrese la cantidad de horas.
console.log("Ingrese la cantidad de horas:");
const horas = Number(prompt()); // Se lee la cantidad de horas.

// Ingrese la cantidad de minutos.
console.log("Ingrese la cantidad de minutos:");
const minutos = Number(prompt()); // Se lee la cantidad de minutos.

const totalMinutos = horas * 60 + minutos; // Se calcula el total de minutos.

const precioPagar = 1800 * Math.ceil(totalMinutos / 60); // Se calcula el precio a pagar.

console.log("El precio a pagar es de: " + precioPagar); // Se imprime la respuesta según el rango.
