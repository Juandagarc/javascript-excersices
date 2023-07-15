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
- 4. Que pida un número del 1 al 12 e imprima el nombre del mes correspondiente.
- Salvedad: Para valores fuera de este rango, no garantizamos los resultados.
*/

var prompt = require('prompt-sync')();//Se invoca el prompt
var mes = parseInt(prompt("Ingrese un numero para determinar el mes del año: "));//Se piden los datos
switch (mes) {
    case 1:
        console.log("El mes es Enero");//Si es Enero
        break;

    case 2:
        console.log("El mes es Febrero");//Si es Febrero
        break;

    case 3:
        console.log("El mes es Marzo");//Si es Marzo
        break;

    case 4:
        console.log("El mes es Abril");//Si es Abril
        break;

    case 5:
        console.log("El mes es Mayo");//Si es Mayo
        break;

    case 6:
        console.log("El mes es Junio");//Si es Junio
        break;

    case 7:
        console.log("El mes es Julio");//Si es Julio
        break;

    case 8:
        console.log("El mes es Agosto");//Si es Agosto
        break;

    case 9:
        console.log("El mes es Septiembre");//Si es Septiembre
        break;

    case 10:
        console.log("El mes es Octubre");//Si es Octubre
        break;

    case 11:
        console.log("El mes es Noviembre");//Si es Noviembre
        break;

    case 12:
        console.log("El mes es Diciembre");//Si es Diciembre
        break;

    default:
        console.log("Su valor excede el rango permitido");//else
        break;
}
