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
- 25.Hacer un programa de computador, de tal manera que presente lo siguiente en la pantalla: (con un
máximo de cuatro(4) ordenes “IMPRIMIR”)
- Salvedad: Para valores fuera de este rango, no garantizamos los resultados.
*/
function renglones(limite, renglon = 1) {  // Función para generar los renglones de la figura
    if (renglon > limite) {
      return; // Finalizar la función si se ha alcanzado el límite de renglones
    }
  
    if (renglon === 1 || renglon === 7) {
      espacios(9); // Llamar a la función espacios para imprimir los espacios iniciales
      letras(1); // Llamar a la función letras para imprimir las letras en el renglón actual
    }
    if (renglon === 2 || renglon === 6) {
      espacios(8);
      letras(3);
    }
    if (renglon === 3 || renglon === 5) {
      espacios(7);
      letras(5);
    }
    if (renglon === 4) {
      espacios(6);
      letras(7);
    }
  
    console.log(); // Salto de línea
  
    renglones(limite, renglon + 1);
  }
  
  function espacios(espacio, contador = 1) {
    if (contador > espacio) {
      return;
    }
  
    process.stdout.write(" ");
  
    espacios(espacio, contador + 1); // Llamada recursiva para imprimir el siguiente espacio
  }
  
  function letras(cantidad, contador = 1) { // Función para imprimir letras en la consola
    if (contador > cantidad) {
      return;
    }
  
    process.stdout.write("Z");
  
    letras(cantidad, contador + 1);
  }
  
  renglones(7);// Iniciar la generación de los renglones de la figura
  