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
- 6. Escribir un programa que reciba el número de minutos como datos de entrada e imprima en pantalla
el total de horas y minutos.
*/
var prompt = require('prompt-sync')();//Se invoca el prompt
var minutes = prompt("Por favor, ingrese la cantidad de minutos:");//Se piden los datos
var hours = Math.trunc(minutes / 60);//Procedimiento
var seconds = (minutes % 60);//Procedimiento
console.log(minutes + " minutos son " + hours + " horas y " + seconds + " minutos.");//Se muestran los resultados