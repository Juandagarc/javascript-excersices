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
- 5. Escribir un programa que pida horas y minutos como datos de entrada e imprima el total en minutos.
*/
var prompt = require('prompt-sync')();//Se invoca el prompt
var hours = prompt("Por favor, ingrese la cantidad de horas:");//Se piden los datos
var minutes = prompt("Por favor ingrese la cantidad de minutos:");//Se piden los datos
function hoursToMinutes (hours, minutes) {//Se crea la funcion
    return ( hours * 60 + minutes);//Procedimiento
};//Fin de la funcion
var result = hoursToMinutes(hours, minutes);//Procedimiento
console.log( hours + " horas y " + minutes + " equivalen a " + result + " Minutos");//Se muestran los resultados