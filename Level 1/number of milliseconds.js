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
- 11. Escribir un programa que pida horas, minutos y segundos como datos de entrada y muestre en
pantalla el número de milisegundos.
*/

var prompt = require('prompt-sync')();//Se invoca el prompt
var horas = parseInt(prompt("Por favor digite el número de horas, minutos y segundos que desea convertir a milisegundos. \n Digite horas: " ));//Se ingresa el enunciado y se piden los datos
var minutos = parseInt(prompt("Digite minutos: "));//Se ingresan los minutos
var segundos = parseInt(prompt("Digite segundos: "));//Se ingresan los segundos

var milisegundos = (horas * 3600000) + (minutos * 60000) + (segundos * 1000);//Procedimiento

console.log("La cantidad de milisegundos para " + horas + " hora, " + minutos + " minutos y " + segundos + " segundos es de " + milisegundos + " milisegundos");//Mostrar resultados
