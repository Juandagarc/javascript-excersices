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
- 7. Escribir un programa que pida como datos de entrada el nombre, apellido y año de nacimiento y
luego los imprima juntos.
*/
var prompt = require('prompt-sync')();//Se invoca el prompt
var nombre = prompt("Por favor digite su nombre:")//Se piden los datos
var apellido = prompt("Por favor digite apellido")//Se piden los datos
var anoDeNacimiento = prompt("Por favor digite su año de nacimiento:")//Se piden los datos
console.log(nombre + " " + apellido + " " + anoDeNacimiento)//Se muestran los resultados