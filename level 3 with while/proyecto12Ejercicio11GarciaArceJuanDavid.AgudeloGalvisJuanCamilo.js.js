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
- 11.Hacer un programa de computador, utilizando ciclos anidados; de tal manera que presente lo siguiente
en la pantalla: (con un máximo de cuatro(4) ordenes “IMPRIMIR” . Las líneas de las cuadriculas son solo
de referencia para mostrar filas y columnas; no se pide que las imprima.
*/
var prompt = require('prompt-sync')(); //variable prompt global declarada para utilizar prompt node.js 


let renglon = 1;

while (renglon <= 25) {
    let letra = 1;
    let espacios = 1;

    while (espacios <= 79 - renglon + 1) {
        process.stdout.write(" ");//imprime los espacios en blanco
        espacios++;
    }

    while (letra <= renglon) {
        process.stdout.write("A");//imprime "A"
        letra++;
    }

    process.stdout.write("\n");//hace los saltos de linea
    renglon++;
}
