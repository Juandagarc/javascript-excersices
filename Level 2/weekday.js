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
- 3. Que pida un número del 1 al 7 e imprima el día de la semana correspondiente.
- Salvedad: Para valores fuera de este rango, no garantizamos los resultados.
*/

var prompt = require('prompt-sync')();//Se invoca el prompt
var number = parseInt(prompt("Ingrese un numero para determinar el dia de la semana: "));//Se piden los datos
switch (number) {
    case 1:
        console.log("El dia es Lunes");//Si es lunes
        break;

    case 2:
        console.log("El dia es Martes");//Si es martes
        break;

    case 3:
        console.log("El dia es Miercoles");//Si es miercoles
        break;

    case 4:
        console.log("El dia es Jueves");//Si es jueves
        break;

    case 5:
        console.log("El dia es Viernes");//Si es viernes
        break;

    case 6:
        console.log("El dia es Sabado");//Si es sabado
        break;

    case 7:
        console.log("El dia es Domingo");//Si es domingo
        break;

    default:
        console.log("Su valor excede el rango permitido");//else
        break;
}
