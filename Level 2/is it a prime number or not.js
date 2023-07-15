/*
-Fecha de publicación: 19/06/2023
-Hora: 20:57
- Versión de su código: v1
-Autores: Ing(c) Juan David García Arce.
- Nombre del lenguaje utilizado: Java script
- Versión del lenguaje utilizado: ECMAScript 2021
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- 1. Que pida un número del 1 al 5 e imprima si es primo o no.
- Salvedad: Para valores fuera de este rango, no garantizamos los resultados.
*/

var prompt = require('prompt-sync')();//Se invoca el prompt
var number = parseInt(prompt("Ingrese el primer numero para determinar si es primo: "));//Se ingresan los datos

    switch (number) {
        case 2:
        case 3:
        case 5:
        console.log("Es primo.");//Si es primo
            break;
        default:
            console.log("No es primo o excede el rango.");//Si no es primo
            break;
    }

