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
- 7. Hacer un programa de computador, de tal manera que pida el número de termino deseados en la
siguiente serie: Serie de Narayana: Esta serie comienza con los números 1, 1 y 1. Los siguientes términos
se calculan como la suma del término anterior y el número de parejas de términos consecutivos anteriores
que son diferentes. La fórmula para el enésimo número de Narayana es N(n) = N(n-1) + N(n-3), donde
N(0) = 1, N(1) = 1 y N(2) = 1.
Los primeros nueve términos de la serie de Narayana son:
Serie de Narayana (continuación): 1, 1, 1, 2, 3, 4, 6, 9, 13.
- Salvedad: Para valores fuera de este rango, no garantizamos los resultados.
 */

const ps = require('prompt-sync');
const prompt = ps(); 
console.log("Este programa pide el número de términos deseados de la serie de Narayana y los imprime, teniendo en cuenta que:");
console.log("Serie de Narayana: Esta serie comienza con los números 1, 1 y 1. Los siguientes términos se calculan como la suma del término anterior y el número de parejas de términos consecutivos anteriores que son diferentes.");
console.log("Los primeros nueve términos de la serie de Narayana son: 1, 1, 1, 2, 3, 4, 6, 9, 13.");
console.log("Salvedad: Este programa toma como datos de entrada únicamente valores numéricos enteros positivos, de otro modo no se garantizan sus resultados.");

const obtenerNumero = Math.floor(Number(prompt("Digite la cantidad de términos deseados:")));

function serieNarayana(N1, N2, N3, n) {
    if (n >= 1) {
        if (n === 1) {
            console.log(N2);
        } else {
            console.log(N2 + ", ");
        }
        serieNarayana(N2, N3, N1 + N3, n - 1);
    }
}

if (obtenerNumero < 0) {
    console.log("Por favor ingrese un valor positivo");
} else if (obtenerNumero === 0) {
    // No se imprime ningún término
} else if (obtenerNumero === 1) {
    console.log("1");
} else {
    console.log("1, ");
    serieNarayana(1, 1, 1, obtenerNumero - 1);
}
