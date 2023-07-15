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
- 28.Hacer un programa de computador, de tal manera que presente lo siguiente en la pantalla: (con un
máximo de cuatro(4) ordenes “IMPRIMIR” )
- Salvedad: Para valores fuera de este rango, no garantizamos los resultados.
*/
function espacios(cant, cont) {  // Función para imprimir espacios en la consola
    if (cont < cant) {
      process.stdout.write(" ");
      cont++;
      espacios(cant, cont); // Llamada recursiva para imprimir el siguiente espacio
    }
  }
  
  function figura(cant, cont, esp) {  // Función para imprimir la figura en cada línea
    if (cont <= cant) {
      if (cont === 0) {
        espacios(esp, 0);
      }
      process.stdout.write("A");
      cont++;
      figura(cant, cont, esp); // Llamada recursiva para imprimir el siguiente carácter de la figura
    }
  }
  
  function numimp(max, num, esp) {  // Función para imprimir la figura en múltiples líneas
    if (num < max) {
      figura(num, 0, esp); // Llamar a la función figura para imprimir la figura en una línea
      console.log("");
      num++;
      esp--;
      numimp(max, num, esp); // Llamada recursiva para imprimir la siguiente línea de la figura
      num -= 2;
      esp += 2;
      figura(num, 0, esp); // Llamar a la función figura para imprimir la figura en una línea (reversa)
      console.log("");
    }
  }
  
  function main() {
    var num = 0;
    var max = 6;
    var esp = 39;
    numimp(max, num, esp); // Iniciar la impresión de la figura
  }
  
  main(); // Llamar a la función principal