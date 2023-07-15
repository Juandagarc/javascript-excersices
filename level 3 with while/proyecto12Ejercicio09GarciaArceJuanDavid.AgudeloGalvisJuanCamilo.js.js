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
- 9.Hacer un programa de computador, de tal manera que, utilizando ciclos anidados se generen las
siguientes ternas de enteros.
*/
var prompt = require('prompt-sync')(); //variable prompt global declarada para utilizar prompt node.js 

contador = (a, b, c) => {
    while (a <= 9) {
        if (a % 3 === 0) {
            console.log(`${a} ${b} ${c}`);
            b = b + 1;
            c = 1;
        } else {
            console.log(`${a} ${b} ${c}`);
            c = c + 1;
        }
        a = a + 1;
    }
}

let a = 1;
let b = 1;
let c = 1;
contador(a, b, c);
