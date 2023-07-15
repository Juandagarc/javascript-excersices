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
- 3.Hacer un programa de computador, de tal manera que lea desde el teclado un numero entero y lo
imprima al revés.
*/
var prompt = require('prompt-sync')(); //variable prompt global declarada para utilizar prompt node.js 

invertirNumero = () => {//funcion para invertir un numero
    console.log("Este programa lee un número entero desde el teclado y lo imprime al revés.");//se le informa al usuario que hace este programa
    let numero = parseInt(prompt("Ingrese un numero: "));//Se le pide un numero al usuario para imprimirlo al reves y este se convierte a un entero
    let residuo = 0;
    let invertido = 0;
  
    while (numero > 0) {//ciclo para invertir el numero
      residuo = numero % 10;
      numero = Math.floor(numero / 10);
      invertido = invertido * 10 + residuo;
    }
  
    console.log(`El número invertido es: ${invertido}`);//se imprime en pantalla el numero invertido
  }
  
  invertirNumero();  