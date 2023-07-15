
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
- Ejercicio 7 : Resonancia magnética.
*/

let prompt = require('prompt-sync')();//Se importa la librería prompt-sync
let resonancia = [];//Se crea un arreglo vacío, para ir agregando por cola
const crearResonancia = (contador) => {
const generarNumeroAleatorio = () => {
        let numero = 25;
    }
  if (contador < 1000) {
    resonancia.push(Math.floor(Math.random() + 25));//Se recomienda modificar el rango de aleatoriedad para ver el programa en acción, a 60
    crearResonancia (contador + 1);//Se llama a la función recursivamente, aumentando el contador
  } else {
    console.log(resonancia)//Se imprime el arreglo
  }//Función que rellena el arreglo "resonancia", en este caso al ser un arreglo,
}//no es necesario convertir los números a carácteres ASCCI, ya que se guarda el número entero.
crearResonancia(0);//Se llena el arreglo de valores
/*  PUNTOS SOSPECHOSOS:
PARTE 1 DEL EJERCICIO.
Función que, para un determinado punto en la imagen (identificado por sus coordenadas x, y ,z),
detecta si es sospechoso. Se consideran sospechosos aquellos puntos para los que TODOS los puntos adyacentes
tengan un valor entre 20 y 40 (esto incluye los puntos pertenecientes al mismo plano, al plano inferior y al plano superior).
Nota: A la hora de analizar la imagen, no se analizarán los puntos de ninguno de los planos exteriores del cubo.
*/
const puntoSospechoso = (x, y, z) => {
  let posicion = (z * 100) + (y * 10) + x;//Se calcula la posición del punto en el arreglo
  if (
    x === 0 ||//si está en la periferia, no lo toma en cuenta
    x === 9 ||
    y === 0 ||
    y === 9 ||
    z === 0 ||//ó , or
    z === 9 
  ) {
    return false; //Aqui se descarta la periferia
  } else if (
    resonancia[posicion - 111] >= 20 &&//la misma posición/----Plano z - 1
    resonancia[posicion - 111] <= 40 &&//x-1, y-1, z-1
    resonancia[posicion - 110] >= 20 &&//x==, y-1, z-1
    resonancia[posicion - 110] <= 40 &&//x==, y-1, z-1
    resonancia[posicion - 110] >= 20 &&//x==, y-1, z-1
    resonancia[posicion - 110] <= 40 &&//x==, y-1, z-1
    resonancia[posicion - 109] >= 20 &&//x+1, y-1, z-1
    resonancia[posicion - 109] <= 40 &&//x+1, y-1, z-1
    resonancia[posicion - 101] >= 20 &&//x-1, y==, z-1
    resonancia[posicion - 101] <= 40 &&//x-1, y==, z-1
    resonancia[posicion - 100] >= 20 &&//x==, y==, z-1
    resonancia[posicion - 100] <= 40 &&//x==, y==, z-1
    resonancia[posicion - 99] >= 20 &&//x+1, y==, z-1
    resonancia[posicion - 99] <= 40 &&//x+1, y==, z-1
    resonancia[posicion - 91] >= 20 &&//x-1, y+1, z-1
    resonancia[posicion - 91] <= 40 &&//x-1, y+1, z-1
    resonancia[posicion - 90] >= 20 &&//x==, y+1, z-1
    resonancia[posicion - 90] <= 40 &&//x==, y+1, z-1
    resonancia[posicion - 89] >= 20 &&//x+1, y+1, z-1
    resonancia[posicion - 89] <= 40 &&//x+1, y+1, z-1
    resonancia[posicion - 11] >= 20 &&//x-1, y-1, z==/----Igual plano z
    resonancia[posicion - 11] <= 40 &&//x-1, y-1, z==
    resonancia[posicion - 10] >= 20 &&//x==, y-1, z==
    resonancia[posicion - 10] <= 40 &&//x==, y-1, z==//EL MISMO PUNTO SE EXCLUYE; POR ESO NO SE INCLUYE
    resonancia[posicion - 9] >= 20 &&//x+1, y-1, z==
    resonancia[posicion - 9] <= 40 &&//x+1, y-1, z==
    resonancia[posicion - 1] >= 20 &&//x-1, y==, z==
    resonancia[posicion - 1] <= 40 &&//x-1, y==, z==
    resonancia[posicion + 1] >= 20 &&//x+1, y==, z==
    resonancia[posicion + 1] <= 40 &&//x+1, y==, z==
    resonancia[posicion + 9] >= 20 &&//x-1, y+1, z==
    resonancia[posicion + 9] <= 40 &&//x-1, y+1, z==
    resonancia[posicion + 10] >= 20 &&//x==, y+1, z==
    resonancia[posicion + 10] <= 40 &&//x==, y+1, z==
    resonancia[posicion + 11] >= 20 &&//x+1, y+1, z==
    resonancia[posicion + 11] <= 40 &&//x+1, y+1, z==/----Igual plano z
    resonancia[posicion + 89] >= 20 &&//x-1, y-1, z+1/PLANO Z + 1
    resonancia[posicion + 89] <= 40 &&//x-1, y-1, z+1
    resonancia[posicion + 90] >= 20 &&//x==, y-1, z+1
    resonancia[posicion + 90] <= 40 &&//x==, y-1, z+1
    resonancia[posicion + 91] >= 20 &&//x+1, y-1, z+1
    resonancia[posicion + 91] <= 40 &&//x+1, y-1, z+1
    resonancia[posicion + 99] >= 20 &&//x-1, y==, z+1
    resonancia[posicion + 99] <= 40 &&//x-1, y==, z+1
    resonancia[posicion + 100] >= 20 &&//x==, y==, z+1
    resonancia[posicion + 100] <= 40 &&//x==, y==1, z+1
    resonancia[posicion + 101] >= 20 &&//x+1, y==, z+1
    resonancia[posicion + 101] <= 40 &&//x+1, y==, z+1
    resonancia[posicion + 109] >= 20 &&//x-1, y+1, z+1
    resonancia[posicion + 109] <= 40 &&//x-1, y+1, z+1
    resonancia[posicion + 110] >= 20 &&//x==, y+1, z+1
    resonancia[posicion + 110] <= 40 &&//x==, y+1, z+1
    resonancia[posicion + 111] >= 20 &&//x+1, y+1, z+1
    resonancia[posicion + 111] <= 40//x+1, y+1, z+1/FIN PLANO Z + 1
  ) {
    return true;//Aqui detecta si un punto evaluead es sospechoso, para ello evalua todas las posiciones adyacentes a ver si estan lo valores establecidos 
  } else {
    return false;//De otra forma lo descarta
  }
}
/* Función que, para un determinado punto en la imagen (identificado por sus coordenadas x, y ,z),
detecta si es sospechoso. Se consideran sospechosos aquellos puntos para los que TODOS los puntos adyacentes
tengan un valor entre 20 y 40 (esto incluye los puntos pertenecientes al mismo plano, al plano inferior y al plano superior).
Nota: A la hora de analizar la imagen, no se analizarán los puntos de ninguno de los planos exteriores del cubo.*/
const contarPuntosSospechosos = (z) => { //Funcion para contar de puntos sospechosos
    /**
     * @param {*} arreglo Resonancia
     * @param {*} contador Posicin a evaluar
     * @param {*} final Posicion de parada
     * @param {*} puntos Contador de putnos sospechosos
     * @returns 
     */
  const contar = (arreglo, contador, final, puntos) => {
    if (contador > final) {//Se verifica que no este en la ultima posicion
      return puntos;//Se retorna el resultado
    } else {
      if (puntoSospechoso(
        (contador % 10), // punto x
        ((Math.trunc(contador / 10)) % 10), // punto y
        (Math.trunc(contador / 100) + 1) // punto z
      )) {
        return contar(arreglo, (contador + 1), final, (puntos + 1));//Se llama a la funcion contar
      } else {
        return contar(arreglo, (contador + 1), final, puntos);//Se llama a la funcion contar
      }
    }
  }
  let resultado = contar(resonancia, (100 * (z - 1)), (100 * z), 0);//Se llama a la funcion contar
  return resultado;//Se retorna el resultado
}
console.log(puntoSospechoso(1,1,1));
contarPuntosSospechosos(1);
//  LÍNEAS SOSPECHOSAS:
// /* Función que, para un determinado punto en la imagen (identificado por sus coordenadas x, y ,z),
// detecta si es sospechoso. Se consideran sospechosos aquellos puntos para los que TODOS los puntos adyacentes
// tengan un valor entre 20 y 40 (esto incluye los puntos pertenecientes al mismo plano, al plano inferior y al plano superior).
// Nota: A la hora de analizar la imagen, no se analizarán los puntos de ninguno de los planos exteriores del cubo.*/

// ;PARTE 2 DEL EJERCICIO.
// ;Función que, para un determinado plano de la imagen, busque líneas sospechosas.
// ;Se considera una línea sospechosa toda línea HORIZONTAL (paralelas al eje X) en la que haya al menos tres(3) puntos
// ;sospechosos consecutivos, para esto se pide que imprima el plano (fotografía, en modo gráfico) y que marque con un
/**
 * @param {*} z Plano
 * @param {*} contador Posicion
 * @param {*} lineas  Contador de lineas
 * @param {*} puntosSospechososSeguidos //Contador de púntos sospechosos
 * @returns 
 */
const contarLineasSospechosas = (z, contador = 0, lineas = 0, puntosSospechososSeguidos = 0) => {
    const x = contador % 10;//Se obtienen las coordenadas del punto
    const y = Math.floor(contador / 10) % 10;//Se obtienen las coordenadas del punto
    const puntoSospechosoActual = puntoSospechoso(x, y, Math.floor(contador/ 100) + 1);//Se evalua si el punto es sospechoso
    if (contador >= ((100 * z) - 1)){
      return Math.floor(lineas / 6);//Se retorna el numero de lineas sospechosas
    }  else if (puntoSospechosoActual) {
        puntosSospechososSeguidos++;//Se aumenta el contador de puntos sospechosos
        if (puntosSospechososSeguidos >= 3) {
          return contarLineasSospechosas(z, contador + 1, lineas + 1, puntosSospechososSeguidos);//Se llama a la funcion contar lineas sospechosas
        } else {
          return contarLineasSospechosas(z, contador + 1, lineas, puntosSospechososSeguidos);//Se llama a la funcion contar lineas sospechosas
        }
      } else {
        puntosSospechososSeguidos = 0;
        return contarLineasSospechosas(z, contador + 1, lineas, puntosSospechososSeguidos);//Se llama a la funcion contar lineas sospechosas
      }
    }   
//Ayudame a arreglar la función de imprimir lineas, no está tomando todos los puntos sospechos
  const imprimirLineas = (Z) => {
    const imprimir = (arreglo, contador, final, cont2) => {//Funcion para imprimir lineas
      if (contador < final) {
        if (//Se evalua si el punto es sospechoso
          contador > 2 &&
          contador % 10 === 0 &&//se modifica por 10, debido a que el tamaño de los planos cambia
          (
            (puntoSospechoso((contador + 2) % 10, Math.floor((contador + 2) / 10) % 10, Math.floor((contador - 2) / 100) + 1) &&//Se evalua si el punto es sospechoso
            puntoSospechoso((contador + 1) % 10, Math.floor((contador + 1) / 10) % 10, Math.floor((contador - 1) / 100) + 1) &&//Se evalua si el punto es sospechoso
            puntoSospechoso(contador % 10, Math.floor(contador / 10) % 10, Math.floor(contador / 100) + 1)) ||//Se evalua si el punto es sospechoso
            (puntoSospechoso((contador - 1) % 10, Math.floor((contador - 1) / 10) % 10, Math.floor((contador - 1) / 100) + 1) &&
            puntoSospechoso(contador % 100, Math.floor(contador / 10) % 10, Math.floor(contador / 100) + 1) &&
            puntoSospechoso((contador + 1) % 10, Math.floor((contador + 1) / 10) % 10, Math.floor((contador + 1) / 100) + 1)) ||
            (puntoSospechoso((contador - 2) % 10, Math.floor((contador - 2) / 10) % 10, Math.floor((contador - 2) / 100) + 1) &&
            puntoSospechoso((contador - 1) % 10, Math.floor((contador - 1) / 10) % 10, Math.floor((contador - 1) / 100) + 1) &&
            puntoSospechoso(contador % 10, Math.floor(contador / 10) % 10, Math.floor(contador / 100) + 1))
          )//Se evalua si el punto es sospechoso
        ) {
          process.stdout.write(`${cont2}${" ".repeat(3 - cont2.toString().length)}█`);//Se imprime el punto
          imprimir(arreglo, contador + 1, final, cont2 + 1);
        } else if (contador % 10 === 0) {
          process.stdout.write(`${cont2}${" ".repeat(3 - cont2.toString().length)}░`);
          imprimir(arreglo, contador + 1, final, cont2 + 1);
        } else if (
          (contador + 1) % 10 === 0 &&
          puntoSospechoso((contador - 2) % 10, Math.floor((contador - 2) / 10) % 10, Math.floor((contador - 2) / 100) + 1) &&
          puntoSospechoso((contador - 1) % 10, Math.floor((contador - 1) / 10) % 10, Math.floor((contador - 1) / 100) + 1) &&
          puntoSospechoso(contador % 10, Math.floor(contador / 10) % 10, Math.floor(contador / 100) + 1)
        ) {
          process.stdout.write("█\n");
          imprimir(arreglo, contador + 1, final, cont2);
        } else if ((contador + 1) % 10 == 0) {
          process.stdout.write("░\n");
          imprimir(arreglo, contador + 1, final, cont2);
        } else if (//
          contador >= 2 &&
          (
            (puntoSospechoso(contador % 10, Math.floor(contador / 10) % 10, Math.floor(contador / 100) + 1) &&
            puntoSospechoso((contador + 1) % 10, Math.floor((contador + 1) / 10) % 10, Math.floor((contador + 1) / 100) + 1) &&
            puntoSospechoso((contador + 2) % 10, Math.floor((contador + 2) / 10) % 10, Math.floor((contador + 2) / 100) + 1)) ||
            (puntoSospechoso((contador - 1) % 10, Math.floor((contador - 1) / 10) % 10, Math.floor((contador - 1) / 100) + 1) &&
            puntoSospechoso(contador % 10, Math.floor(contador / 10) % 10, Math.floor(contador / 100) + 1) &&
            puntoSospechoso((contador + 1) % 10, Math.floor((contador + 1) / 10) % 10, Math.floor((contador + 1) / 100) + 1)) ||
            (puntoSospechoso((contador - 2) % 10, Math.floor((contador - 2) / 10) % 10, Math.floor((contador - 2) / 100) + 1) &&
            puntoSospechoso((contador - 1) % 10, Math.floor((contador - 1) / 10) % 10, Math.floor((contador - 1) / 100) + 1) &&
            puntoSospechoso(contador % 10, Math.floor(contador / 10) % 10, Math.floor(contador / 100) + 1))
          )
        ) {
          process.stdout.write("█");
          imprimir(arreglo, contador + 1, final, cont2);
        } else {
          process.stdout.write("░");
          imprimir(arreglo, contador + 1, final, cont2);
        }
      }
    }
    if (Z < 1 || Z > 8) {
      console.log("\nPlano no válido.\n");
    } else {
      console.log("   0123456789");
      imprimir(resonancia, 100 * (Z - 1), 100 * Z, 0);
    }
  }
//  INFORME:
// PARTE 3 DEL EJERCICIO
// Función que emplea las funciones anteriormente descritas para identificar en una imagen si hay alguna línea sospechosa
// y genera un informe con todas las fotografías en en plano Z, y la cantidad de líneas y puntos sospechosos en cada una.
const imprimirInforme = () => {
    const imprimir = (contador, masLineas) => {
      if (contador > 8) {
        if (contarLineasSospechosas(masLineas, 100 * (masLineas - 1)) === 0) {
          console.log("\n\nNo se encontró ningún plano con líneas sospechosas.\n");
        } else {
          console.log(`\n\nEl plano (Z) con más líneas sospechosas es el número ${masLineas}.\n`);
        }
      } else {
        process.stdout.write(
          `${contador}${" ".repeat(31 - contador.toString().length)}${contarLineasSospechosas(contador, 100 * (contador - 1))}${" ".repeat(
            41 - contarLineasSospechosas(contador, 100 * (contador - 1)).toString().length
          )}${contarPuntosSospechosos(contador)}\n`
        );
        if (contarLineasSospechosas(contador, 100 * (contador - 1)) >= contarLineasSospechosas(masLineas, 100 * (masLineas - 1))) {
          imprimir(contador + 1, contador);
        } else {
          imprimir(contador + 1, masLineas);
        }
      }
    };
    console.log("Plano en Z(Fotografía)         Líneas sospechosas x plano(foto)         Puntos sospechosos por plano(foto)\n");
    imprimir(1, 0);
  };
    // PARTE 4 DEL EJERCICIO
  imprimirLineas(6);//Se imprime el plano
  console.log(" ");//Se imprime el plano
  imprimirInforme(); // Genera el informe
  let usuario = prompt("Ingrese el plano que quiere ver: ");
  imprimirLineas(usuario);
  let puntos = prompt("Ingrese el plano que quiere saber puntos: ");
  console.log(contarPuntosSospechosos(puntos));