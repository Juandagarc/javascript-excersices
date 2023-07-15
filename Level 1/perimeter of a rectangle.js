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
- 3. Escribir un programa que imprima el perímetro de un rectángulo que tome su largo y su ancho como
datos de entrada, teniendo en cuenta que el perímetro es la suma de sus 4 lados.
*/
var prompt = require('prompt-sync')();//Se invoca el prompt
var largo = prompt("Por favor digite el largo del rectangulo:");//Se piden los datos
var ancho = prompt("Por favor digite el ancho del rectangulo:");//Se piden los datos
var perimetro = ( largo * 2 ) + ( ancho * 2 );//Procedimiento
console.log("El perimetri de un rectangulo con largo " + largo + " y ancho " + ancho + " es de " + perimetro + ".");//Se muestran los resultados
