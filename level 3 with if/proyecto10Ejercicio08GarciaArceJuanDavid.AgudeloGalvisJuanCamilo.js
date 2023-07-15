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
- 8. Hacer un programa de computador, de tal manera que pida el número de termino deseados en la
siguiente serie: Serie de Catalán: Esta serie es una secuencia de números que aparece en diversos
problemas de conteo en matemáticas. Comienza con los números 1, 1, y los siguientes términos se
calculan como la suma de los productos de los términos anteriores. La fórmula para el enésimo número
de Catalán es C(n) = (2n)! / (n!(n+1)!), donde C(0) = 1.
Los primeros nueve términos de la serie de Catalán son: 1, 1, 2, 5, 14, 42, 132, 429, 1430.
 */

const ps = require('prompt-sync');
const prompt = ps(); 
const obtenerNumero = Math.floor(Number(prompt("Digite la cantidad de términos deseados:")));

/*
 * Calcula el factorial de un número dado.
 */
function calcularFactorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    return num * calcularFactorial(num - 1);
}

/*
 * Calcula el número de Catalan para un índice dado utilizando recursividad.
 */
function calcularCatalan(n) {
    if (n === 0) {
        return 1;
    }
    let catalan = 0;
    for (let i = 0; i < n; i++) {
        catalan += calcularCatalan(i) * calcularCatalan(n - i - 1);
    }
    return catalan;
}

/*
 * Genera la serie de números de Catalan hasta el término dado utilizando recursividad.
 */
function serieCatalan(n) {
    for (let i = 0; i < n; i++) {
        const catalan = calcularCatalan(i);
        console.log(catalan);
    }
}

// Verifica si el número obtenido es negativo
if (obtenerNumero < 0) {
    console.log("Por favor ingrese un valor positivo");
} 
// Verifica si el número obtenido es igual a cero
else if (obtenerNumero === 0) {
    // No se imprime ningún término
} 
// Genera la serie de números de Catalan para el número obtenido
else {
    serieCatalan(obtenerNumero);
}