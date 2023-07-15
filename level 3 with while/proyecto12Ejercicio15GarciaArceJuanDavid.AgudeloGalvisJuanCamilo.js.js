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
- 15.Hacer un programa de computador, utilizando ciclos anidados; de tal manera que presente lo siguiente
en la pantalla: (con un máximo de cuatro(4) ordenes “IMPRIMIR” .). Las líneas de las cuadriculas son
solo de referencia para mostrar filas y columnas; no se pide que las imprima.
*/
var prompt = require('prompt-sync')(); //variable prompt global declarada para utilizar prompt node.js 

// Variable para contar los renglones de la pirámide
let renglon = 1;

// Bucle externo para los renglones
while (renglon <= 7) {
    // Condicional para determinar la configuración de letras 'A' en cada renglón
    if (renglon === 1 || renglon === 7)
        console.log("A     A");

    if (renglon === 2 || renglon === 6)
        console.log("AA   AA");

    if (renglon === 3 || renglon === 5)
        console.log("AAA AAA");

    if (renglon === 4)
        console.log("AAAAAAA");

    renglon++;
}