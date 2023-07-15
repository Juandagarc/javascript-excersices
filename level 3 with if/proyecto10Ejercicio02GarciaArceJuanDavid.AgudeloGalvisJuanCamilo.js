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
- 2.Hacer un programa de computador, de tal manera que imprima el valor de la suma de los elementos de
la serie de Fibonacci entre 0 y 100.
- Salvedad: Para valores fuera de este rango, no garantizamos los resultados.
*/

console.log("Este programa presenta la suma de los elementos de la serie de Fibonacci entre 0 y 100.");

// Imprime el primer número de la serie (0)
console.log("Los números a sumar son:\n0,");

// Definición de la función recursiva para sumar los elementos de la serie de Fibonacci
// Parametros:
// - acumula: la suma acumulada de los elementos anteriores
// - n1: el número anterior en la serie
// - n2: el número actual en la serie
function sumarFibonacci(acumula, n1, n2) {
    // Verifica si el número actual es mayor que 100
    if (n2 > 100) {
        return; // Termina la recursividad si el número actual es mayor que 100
    } else {
        if (n2 === 89) {
            // Si el número actual es 89, imprime el número y la suma acumulada hasta ese punto
            console.log(n2 + " y su suma es de: " + (acumula + n2));
        } else {
            // Imprime el número actual de la serie
            console.log(n2 + ", ");
        }
        
        // Llamada recursiva para continuar sumando los elementos de la serie
        sumarFibonacci(acumula + n2, n2, n1 + n2);
    }
}

// Llamada inicial a la función sumarFibonacci con los valores iniciales
sumarFibonacci(0, 0, 1);