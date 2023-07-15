/*
-Fecha de publicación: 19/06/2023
-Hora: 20:57
- Versión de su código: v1
-Autores: Ingenieros candidatos del Segundo Coding BootCamp sobre FullStack
- Nombre del lenguaje utilizado: Java script
- Versión del lenguaje utilizado: ECMAScript 2021
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Ejercicio 01. Construir una función en lenguaje “ECMASCRIPT 6.0” ( javascript 6.0 ), tal que:
    - Usted debe crear la función tipo flecha llamada rush , tomando dos(2) valores enteros positivos como argumentos,
    denominados respectivamente x e y.
    - Su función rush debe mostrar (en pantalla del ordenador) un rectángulo de x caracteres para el ancho, y de y
    caracteres para la longitud.
    - El usuario podrá modificar los valores de los argumentos, para comprobar si ha manejado todo como se supone que
    debe.
*/

const prompt = require('prompt-sync')();

// Función para imprimir una línea horizontal
const imprimirHorizontal = (ancho, stop, charExtremoIzquierdo, charMedio, charExtremoDerecha) => {
  // Caso base: si el ancho es 1 y no se ha llegado al final, se imprime el carácter de extremo derecho
  if (ancho === 1 && stop !== 1) {
    process.stdout.write(charExtremoDerecha);
  }
  // Caso base: si el ancho es igual al valor de stop, se imprime el carácter de extremo izquierdo
  // y se llama recursivamente a la función para imprimir la parte restante de la línea
  else if (ancho === stop) {
    process.stdout.write(charExtremoIzquierdo);
    imprimirHorizontal(ancho - 1, stop, charExtremoIzquierdo, charMedio, charExtremoDerecha);
  }
  // Caso general: se imprime el carácter medio y se llama recursivamente a la función
  // para imprimir la parte restante de la línea
  else if (ancho > 0) {
    process.stdout.write(charMedio);
    imprimirHorizontal(ancho - 1, stop, charExtremoIzquierdo, charMedio, charExtremoDerecha);
  }
};

// Función para imprimir la figura verticalmente
const imprimirVertical = (ancho, alto, stop) => {
  // Caso base: si el alto es igual al valor de stop, se llama a imprimir la línea horizontal
  // correspondiente y se llama recursivamente a la función para imprimir la parte restante de la figura
  if (alto === stop) {
    imprimirHorizontal(ancho, ancho, '/', '*', '\\');
    process.stdout.write('\n');
    imprimirVertical(ancho, alto - 1, stop);
  }
  // Caso base: si el alto es 1, se llama a imprimir la línea horizontal final
  else if (alto === 1) {
    imprimirHorizontal(ancho, ancho, '\\', '*', '/');
    process.stdout.write('\n');
  }
  // Caso general: se imprime una línea horizontal seguida de una llamada recursiva para imprimir
  // la parte restante de la figura
  else if (alto > 0) {
    imprimirHorizontal(ancho, ancho, '*', ' ', '*');
    process.stdout.write('\n');
    imprimirVertical(ancho, alto - 1, stop);
  }
};

// Función principal para crear la figura
const rush = (ancho, alto) => {
  if (ancho > 0 && alto > 0) {
    imprimirVertical(ancho, alto, alto);
  }
};

// Solicitar al usuario el ancho y alto de la figura
const ancho = prompt("Ingrese el ancho: ");
const alto = prompt("Ingrese el alto: ");

rush(ancho, alto); // Llamar a la función principal para imprimir la figura
