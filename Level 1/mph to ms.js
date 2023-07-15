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
- 10. Escribir un programa que convierta de mph (millas por hora) a m/s, teniendo en cuenta que una
milla tiene 1609.344 m y una hora tiene 3600 segundos.
*/

var prompt = require('prompt-sync')();//Se invoca el prompt
var mph = parseInt(prompt("Por favor digite la cantidad de mph que desea convertir a m/s: "));//Se piden los datos
var ms = (mph * 1690.344 )/(3600);//Procesos
console.log(mph + " mph equvalen a " + ms + " m/s");//Mostrar resultados