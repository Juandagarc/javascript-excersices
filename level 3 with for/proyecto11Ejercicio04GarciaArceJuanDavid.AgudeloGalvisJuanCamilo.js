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

const readline = require('readline');

let leerGrupoNumeros = () => {
  const numeros = []; // Arreglo para almacenar los números ingresados por el usuario
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  let contador = 0; // Variable para llevar la cuenta de cuántos números se han ingresado

  let leerNumero = () => {
    rl.question(`Ingrese el número #${contador + 1}: `, (numero) => {
      numero = parseFloat(numero); // Convertir el número ingresado a tipo float

      if (numero === 0 || isNaN(numero)) { // Verificar si el número es igual a 0 o no es un número válido
        console.log("El número debe ser diferente de cero. Inténtelo nuevamente.");
        leerNumero(); // Volver a solicitar al usuario que ingrese un número válido
      } else {
        numeros.push(numero); // Agregar el número ingresado al arreglo de números
        contador++;

        if (contador < 75) { // Verificar si se han ingresado menos de 75 números
          leerNumero(); // Volver a solicitar al usuario que ingrese otro número
        } else {
          rl.close(); // Cerrar la interfaz de readline ya que se han ingresado todos los números
          procesarNumeros(); // Llamar a la función para procesar los números ingresados
        }
      }
    });
  }

  let procesarNumeros = () => {
    let cantidadMayores150 = 0; // Variable para contar la cantidad de números mayores a 150
    let numeroMayor = -Infinity; // Variable para almacenar el número mayor encontrado, inicializada con un valor mínimo
    let numeroMenor = Infinity; // Variable para almacenar el número menor encontrado, inicializada con un valor máximo
    let cantidadNegativos = 0; // Variable para contar la cantidad de números negativos encontrados
    let sumaPositivos = 0; // Variable para almacenar la suma de los números positivos encontrados
    let cantidadPositivos = 0; // Variable para contar la cantidad de números positivos encontrados

    for (let i = 0; i < numeros.length; i++) {
      const numero = numeros[i];

      if (numero > 150) { // Verificar si el número es mayor a 150
        cantidadMayores150++; // Incrementar el contador de números mayores a 150
      }

      if (numero > numeroMayor) { // Verificar si el número es mayor al número mayor encontrado hasta el momento
        numeroMayor = numero; // Actualizar el número mayor encontrado
      }

      if (numero < numeroMenor) { // Verificar si el número es menor al número menor encontrado hasta el momento
        numeroMenor = numero; // Actualizar el número menor encontrado
      }

      if (numero < 0) { // Verificar si el número es negativo
        cantidadNegativos++; // Incrementar el contador de números negativos
      }

      if (numero > 0) { // Verificar si el número es positivo
        sumaPositivos += numero; // Sumar el número a la variable de suma de positivos
        cantidadPositivos++; // Incrementar el contador de números positivos
      }
    }

    const promedioPositivos = sumaPositivos / cantidadPositivos; // Calcular el promedio de los números positivos

    // Imprimir los resultados
    console.log("Cantidad de números mayores a 150: " + cantidadMayores150);
    console.log("Número mayor encontrado: " + numeroMayor);
    console.log("Número menor encontrado: " + numeroMenor);
    console.log("Cantidad de números negativos encontrados: " + cantidadNegativos);
    console.log("Promedio de los números positivos encontrados: " + promedioPositivos);
  }

  leerNumero();
}

leerGrupoNumeros();
