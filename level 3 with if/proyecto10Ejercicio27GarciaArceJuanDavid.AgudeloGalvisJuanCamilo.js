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
- 27.Hacer un programa de computador, de tal manera que presente lo siguiente en la pantalla: (con un
máximo de cuatro(4) ordenes “IMPRIMIR” )
- Salvedad: Para valores fuera de este rango, no garantizamos los resultados.
*/
function renglones(limite, renglon = 0, cantidadEI = 9, cantidadEC = 0) { // Función para generar los renglones de la figura
    if (renglon >= limite) {
      return; // Caso base: si se alcanza el límite de renglones, se termina la función recursiva
    }
  
    if (renglon === 0) {
      espaciosI(0, cantidadEI);
    } else if (renglon < 9) {
      espaciosI(0, cantidadEI - renglon);
    }
  
    if (renglon > 0) {
      process.stdout.write("Z");
    }
  
    espaciosC(0, cantidadEC + renglon);
  
    console.log("Z");
  
    if (renglon > 0) {
      cantidadEI--;
      cantidadEC += 2;
    } else {
      cantidadEI--;
      cantidadEC = 1;
    }
  
    renglones(limite, renglon + 1, cantidadEI, cantidadEC);
  }
  
  function espaciosI(contador, cantidadEI) { // Función para imprimir los espacios iniciales en un renglón
    if (contador >= cantidadEI) {
      return; // Caso base: si se alcanza la cantidad de espacios iniciales, se termina la función recursiva
    }
  
    process.stdout.write(" ");
  
    espaciosI(contador + 1, cantidadEI);// Llamada recursiva para imprimir el siguiente espacio
  }
  
  function espaciosC(contador, cantidadEC) {
    if (contador >= cantidadEC) {// Caso base: si se alcanza la cantidad de espacios centrales, se termina la función recursiva
      return;
    }
  
    process.stdout.write(" ");
  
    espaciosC(contador + 1, cantidadEC);
  }
  
  renglones(10);// Iniciar la generación de los renglones de la figura