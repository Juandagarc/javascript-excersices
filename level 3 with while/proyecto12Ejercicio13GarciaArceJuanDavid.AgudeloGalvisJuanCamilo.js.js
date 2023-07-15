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
- 13.Hacer un programa de computador, utilizando ciclos anidados; de tal manera que presente lo siguiente
en la pantalla: (con un máximo de cuatro(4) ordenes “IMPRIMIR” .)
*/
var prompt = require('prompt-sync')(); //variable prompt global declarada para utilizar prompt node.js 

// Variable para contar los renglones de la pirámide
let renglon = 1;

// Bucle externo para los renglones
while (renglon <= 7) {
    let numero = -34; // Variable para contar los espacios en blanco

    // Bucle interno para imprimir los espacios en blanco
    while (numero <= renglon - 1) {
        process.stdout.write(" ");
        numero++;
    }

    numero = 1; // Reiniciar el contador para las letras 'P'

    // Bucle interno para imprimir las letras 'P'
    while (numero <= 13 - (renglon * 2) + 2) {
        process.stdout.write("P");
        numero++;
    }

    process.stdout.write("\n"); // Salto de línea para pasar al siguiente renglón
    renglon++;
}