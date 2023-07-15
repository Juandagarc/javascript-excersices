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
- 24.Hacer un programa de computador, de tal manera que presente lo siguiente en la pantalla: (con un
máximo de cuatro(4) ordenes “IMPRIMIR”)
- Salvedad: Para valores fuera de este rango, no garantizamos los resultados.
*/
function espacios(cant, cont) {
    if (cont < cant) {
      process.stdout.write(" ");
      cont++;
      espacios(cant, cont); // Llamada recursiva para imprimir más espacios
    }
  }
  
  function letras(cant, cont) {
    if (cont <= cant) {
      process.stdout.write("A");
      letras(cant, cont + 1); // Llamada recursiva para imprimir más letras
    }
  }
  
  function figura(cant, cont, esp1, esp2) {
    if (cant === 4) {
      espacios(esp1, 0); // Llamar a la función espacios para imprimir los espacios iniciales
      letras(7, cont); // Llamar a la función letras para imprimir las letras en la primera parte de la figura
    } else {
      espacios(esp1, 0); // Llamar a la función espacios para imprimir los espacios iniciales
      letras(cant, cont); // Llamar a la función letras para imprimir las letras en la primera parte de la figura
      espacios(esp2, 0); // Llamar a la función espacios para imprimir los espacios entre las partes de la figura
      letras(cant, cont); // Llamar a la función letras para imprimir las letras en la segunda parte de la figura
    }
  }
  
  function numimp(max, num, esp1, esp2) {
    if (num <= max) {
      figura(num, 1, esp1, esp2);// Llamar a la función figura para imprimir una parte de la figura
      process.stdout.write("\n");
      numimp(max, num + 1, esp1, esp2 - 2);
      figura(num - 1, 1, esp1, esp2 + 2);
      process.stdout.write("\n");// Imprimir un salto de línea en la consola
    }
  }
  
  function main() {
    const max = 4;
    const num = 1;
    const esp1 = 27;
    const esp2 = 5;
    numimp(max, num, esp1, esp2);// Iniciar la ejecución del programa principal
  }
  
  main();