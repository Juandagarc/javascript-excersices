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
- 4.Hacer un programa de computador, de tal manera que lea desde el teclado un grupo de 75 números,
diferentes a cero(validar este requisito) y al final de leídos, imprima:
    * Cantidad de números Mayores a 150
    * Número mayor y número menor encontrado en el grupo
    * Cantidad de Números negativos encontrados
    * Promedio de los Positivos Encontrados.
*/
var prompt = require('prompt-sync')(); //variable prompt global declarada para utilizar prompt node.js 

let numeroi = 0;
let numeros = 1;
let mayoresde150 = 0;
let mayor = 0;
let menor = 0;
let negativos = 0;
let suma = 0;
let positivos = 0;

while (numeros <= 75) {
    
  numeroi = parseFloat(prompt(`Ingrese el numero #${numeros}: `));

  if (numeroi === 0) {
    console.log('El numero recien ingresado no es diferente de 0');
    numeros--;
  }

  if (numeroi > 150) {
    mayoresde150++;
  }

  if (numeroi > mayor) {
    mayor = numeroi;
  }

  if (numeros === 1) {
    menor = numeroi;
  }

  if (menor > numeroi && numeroi !== 0) {
    menor = numeroi;
  }

  if (numeroi < 0) {
    negativos++;
  }

  if (numeroi > 0) {
    positivos++;
    suma += numeroi;
    promedio = suma / positivos; // Actualizar el promedio en cada iteración
  }

  if (numeros === 75) {
    console.log(`Cantidad de numeros mayores a 150: ${mayoresde150}`);
    console.log(`El numero mayor es: ${mayor}`);
    console.log(`El numero menor es: ${menor}`);
    console.log(`Cantidad de numeros negativos: ${negativos}`);
    console.log("El promedio de los numeros positivos es: " + promedio);
  }
  
   numeros++;
}