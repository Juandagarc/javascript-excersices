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
-  km/h convertir a mph
*/
var prompt = require('prompt-sync')();//Se invoca el prompt
var kmh = prompt("Por favor digite cuantos km/h quiere convertir a mph:");//Se piden los datos
var mph = kmh * 0.621371;//Procedimiento
console.log( kmh + " km/h equivalen a " + mph + "mph.");//Se muestran los resultados