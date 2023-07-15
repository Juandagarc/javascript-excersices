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
- 8. Escribir un programa que pida como datos de entrada 2 números y realice las operaciones de suma,
resta, multiplicación y división y muestre los resultados de forma ordenada en pantalla
*/
var prompt = require('prompt-sync')();//Se invoca el prompt
var number = parseInt(prompt("Ingrese por favor el primer número: "));//Se piden los datos
var number1 = parseInt(prompt("Ingrese por favor el segundo número: "));//Se piden los datos

var suma = number + number1;//Procedimiento
var resta = number - number1;//Procedimiento
var multiplicacion = number * number1;//Procedimiento
var division  = number / number1;//Procedimiento

console.log("Suma: " + suma +  "\nResta: " + resta + "\nMultiplicación: " + multiplicacion + "\nDivision: " + division );//Se muestran los resultados