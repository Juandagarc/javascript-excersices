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
- 212.Hacer un programa de computador, de tal manera que lea desde el teclado un numero entero y lo
imprima al revés.
- Salvedad: Para valores fuera de este rango, no garantizamos los resultados.
*/
var prompt = require('prompt-sync')();//Se invoca el prompt
// Este programa lee desde el teclado un número entero y lo imprime al revés.
console.log("Por favor ingrese el número:");

// Se establece la entrada del número
const Numero = parseInt(prompt());

// Se establece la función para voltear el número
function VoltearNumero(Numero) {
  const Proceso = Numero % 10;

  if (Numero > 10) {
    console.log(Proceso);
    VoltearNumero((Numero - Proceso) / 10);
  } else {
    console.log(Numero);
  }
}

// Se imprime texto guía
console.log("Su número al revés es: ");

// Se invoca la función para obtener el número volteado
VoltearNumero(Numero);
