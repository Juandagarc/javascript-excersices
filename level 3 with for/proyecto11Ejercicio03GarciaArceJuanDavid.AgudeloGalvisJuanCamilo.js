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

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Solicitar al usuario que ingrese un número entero
rl.question('Ingrese un número entero: ', (numero) => {
  // Llamar a la función reverseNumero para revertir el número ingresado
  const numeroReverso = reverseNumero(numero);
  // Imprimir el número al revés
  console.log('El número al revés es:', numeroReverso);
  rl.close();
});

// Función para revertir un número
let reverseNumero = numero => {
  let numeroReverso = '';
  // Recorrer los dígitos del número de forma inversa
  for (let i = numero.length - 1; i >= 0; i--) {
    // Agregar el dígito actual al final de la cadena numeroReverso
    numeroReverso += numero.charAt(i);
  }
  // Devolver el número invertido
  return numeroReverso;
}
