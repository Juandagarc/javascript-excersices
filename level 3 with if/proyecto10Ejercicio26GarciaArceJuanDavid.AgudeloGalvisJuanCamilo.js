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
- 26.Hacer un programa de computador, de tal manera que presente lo siguiente en la pantalla: (con un
máximo de cuatro(4) ordenes “IMPRIMIR” )
- Salvedad: Para valores fuera de este rango, no garantizamos los resultados.
*/
function espacios(cant, cont) {// Función para imprimir espacios en la consola
    if (cont < cant) {
      process.stdout.write("  ");// Imprimir dos espacios en la consola
      cont++;
      espacios(cant, cont);// Llamada recursiva para imprimir el siguiente espacio
    }
  }
  
  function figura(esp1, esp2) {// Función para generar la figura
    if (esp1 > 0) {
      espacios(esp2, 0); // Llamar a la función espacios para imprimir los espacios iniciales
      process.stdout.write("Z"); // Imprimir la letra "Z" en la consola
      espacios(esp1, 0);
      process.stdout.write("Z\n");
      figura(esp1 - 2, esp2 + 1);
    } else if (esp1 === -1) {
      espacios(esp2, 0);
      process.stdout.write("Z");
    }
  }
  
  function main() {
    const esp1 = 17;
    const esp2 = 0;
    figura(esp1, esp2);// Iniciar la generación de la figura
  }
  
  main();
  