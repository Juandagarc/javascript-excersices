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
- 2. Que pida un número e imprima si es par o impar.
- Salvedad: Para valores fuera de este rango, no garantizamos los resultados.
*/

var prompt = require('prompt-sync')();//Se invoca el prompt
var number = parseInt(prompt("Por favor ingrese un numero para determinar si es par o no :"));//Se ingresan los datos
number = number % 2;

switch (number) {
    case 0:
        console.log("El numero es par.");//Si es par
        break;

    default:
        console.log("El numero es impar.")//Si no es par
        break;
}
