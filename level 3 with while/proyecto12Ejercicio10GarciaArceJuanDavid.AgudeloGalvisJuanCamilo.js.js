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
- 10.Se pide hacer un programa de computadora, utilizando ciclos anidados; de tal forma que imprima lo
siguiente en la pantalla.
*/
var prompt = require('prompt-sync')(); //variable prompt global declarada para utilizar prompt node.js 

let imprimirA = (Inicio, Final) => {
    let i = Inicio;
  for (let i = Inicio; i <= Final; i++) {
    process.stdout.write("A");
  }
}

let imprimirEspacios = (Inicio, Final) => {//se encarga de imprimir los espacios que separan a las dos letras
  for (let i = Inicio; i <= Final; i++) {
    process.stdout.write(" ");
  }
}

let aplicarDesplazamiento = () => {
  let contador1 = 0;
  let contador2 = 16;

  // Intervalo para actualizar el movimiento de las letras
  while (contador1 < contador2) {
    console.clear();
    imprimirEspacios(1, contador1);
    imprimirA(1, 1);
    imprimirEspacios(contador1 + 2, contador2 - 2);
    imprimirA(1, 1);
    imprimirEspacios(contador2 + 2, 78);
    console.log();
    contador1++;
    contador2--;
  }
}

aplicarDesplazamiento();