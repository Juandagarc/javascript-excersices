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
- 9. Escribir un programa que encuentre el valor del ángulo faltante de un triángulo si toma el valor de
los otros dos ángulos como datos de entrada, teniendo en cuenta que los 3 ángulos de un triángulo
suman 180 °.
*/

var prompt = require('prompt-sync')();//Se invoca el prompt
var angulo = parseInt(prompt("Por favor digite el valor del primer ángulo: "));//Se piden los datos
var angulo1 = parseInt(prompt("Por favor digite el valor del segundo ángulo: "));//Se piden los datos
var anguloRestante = 180 - (angulo1 + angulo);//Procedimiento
console.log("El valor del tercer a´ngulode un triángulo con ángulos de " + angulo + " y " + angulo1 + " es de " + anguloRestante + ".");//Mostrar resultado




