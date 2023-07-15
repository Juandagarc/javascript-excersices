
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
- 2. Escribir un programa que calcule el volumen de una esfera, teniendo en cuenta la siguiente formula:
(4/3)PI r^3 Tome un valor de PI=3.1415926

*/
var prompt = require('prompt-sync')();//Se invoca el prompt
var radio = prompt("Por favor ingrese el radio de la esfera:");//Se piden los datos
    function volumenEsfera (radio){//Se crea la funcion
    return ( (4 / 3) * Math.PI * Math.pow(radio, 3) );//Procedimiento
};//Final de la funcion
console.log("El volumne de una esfera de radio " + radio + " es de " + volumenEsfera(radio));//Se muestran los resultados