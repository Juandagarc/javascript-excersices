
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
- 29 .En computación las funciones trigonométricas como el seno, coseno, tangente, etc., al igual que otros
tipos de funciones, no se calculan directamente, lo que sucede en realidad es que internamente, la
máquina realiza las llamadas series de Taylor, que son el resultado de la suma de varios términos para
formar los resultados a estas funciones.
Hacer un programa para calcular los resultados de las siguientes funciones usando las series de Taylor
que se dan a continuación.
Esta es la serie de taylor de e a la x.
Para cada ejercicio, pida por teclado: a). El valor de x b). El número de términos de la serie
- Salvedad: Para valores fuera de este rango, no garantizamos los resultados.


*/var prompt = require('prompt-sync')();//Se invoca el prompt
// Se define el laberinto como una cadena de caracteres vacía.
// Este programa genera la suma de la serie de Taylor para cosh(x)
// Ingrese el valor de x:

function lognat(c, x, t, z) {
    if (c <= t) {
        let r = (Math.pow(-1, c - 1) * Math.pow(x - 1, c)) / c;
        z = z + r;
        return lognat(c + 1, x, t, z);
    } else {
        return z;
    }
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Este programa da el resultado de ln(x) a través de una serie de Taylor\nIngrese el número de términos de la serie: ", (t) => {
    rl.question("Ingrese un valor para x: ", (x) => {
        const result = lognat(1, x, t, 0.0);
        console.log("El resultado es " + result.toFixed(8));
        rl.close();
    });
});