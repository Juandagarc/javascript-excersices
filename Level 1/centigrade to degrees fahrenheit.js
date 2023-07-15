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
- 1. Escribir un programa que convierta de grados centígrados a grados fahrenheit, teniendo en cuenta la
siguiente formula: F= (9/5)C + 32

*/
console.log("1. Escribir un programa que convierta de grados centígrados a grados fahrenheit,/n" +
"teniendo en cuenta la siguiente formula: F= (9/5)C + 32"); //Se muestra el enunciado
var prompt = require('prompt-sync')();//Se invoca el prompt
var centigrados = prompt("Por favor digite los centigrados a convertir a Farenheit:");//Se piden los datos
fahrenheit = (centigrados * 9/5) + 32;//Procedimiento
console.log( centigrados + " °C son " + fahrenheit + " grados farenheit");//Se muestran los resultados


