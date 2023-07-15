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
- 22.Hacer un programa de computador, de tal manera que presente lo siguiente en la pantalla: (con un
máximo de cuatro(4) ordenes “IMPRIMIR” )
- Salvedad: Para valores fuera de este rango, no garantizamos los resultados.
*/

// imprime los mensajes en consola
const imprimirConsola = (message) =>{
  process.stdout.write(message);
}

//funcion para imprimir las letras p que conforman la piramide
function imprimirLetraP(Inicio, Final) {
  if (Inicio <= Final) {
    imprimirConsola("P");
    imprimirLetraP(Inicio + 1, Final);
  } else {
    return;
  }
}

// funcion que imprime los espacios que conforman la piramide
function imprimirEspacios(Inicio, Final) {
  if (Inicio <= Final) {
    imprimirConsola(" ");
    imprimirEspacios(Inicio, Final - 1);
  } else {
    return;
  }
}

// funcion general (main) que se encarga de construir toda la piramide
function imprimirPiramide(Fila, Contador, Final, FinalP) {
  if (Fila <= 7) {
    imprimirEspacios(Contador, Final);
    imprimirLetraP(Contador, FinalP);
    imprimirConsola("\n");
    imprimirPiramide(Fila + 1, Contador, Final + 1, FinalP - 2);
  } else {
    return;
  }
}

//llamado de la funcion principal (main) ingresando los parametros deseados para construir la piramide
imprimirPiramide(1, 1, 34, 13);