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
- Ejercicio 8 : Se pide construir un algoritmo, tal que permita jugar a un(1) jugador, el juego de memoria llamado
concéntrese (memorama) El juego consiste en “recordar” sobre la pantalla, donde están las parejas de letras, ocultas
bajo el número del recuadro sobre el que este.
*/

var prompt=require('prompt-sync')();

let parejasOriginal = "&&++@@**";

let ocultaParejas = "12345678";

let parejasAleatorias = "        ";

function MezclarParejas(contador, final) {
  let random = Math.floor(Math.random() * 8);
  if (contador < final) {
    if (parejasAleatorias[random] === ' ') {
      parejasAleatorias = parejasAleatorias.slice(0, random) + parejasOriginal[contador] + parejasAleatorias.slice(random + 1);
      MezclarParejas(contador + 1, final);
    } else {
      MezclarParejas(contador, final);
    }
  }
}

MezclarParejas(0, 8);

function VerificarNumero(numero) {
  let ocultaParejasAux = "12345678";
  if (typeof numero === 'number') {
    if (numero <= 8) {
      if (ocultaParejas[numero - 1] === ocultaParejasAux[numero - 1]) {
        return numero;
      } else {
        console.log("\nEl número ya fue elegido, por favor digita otro número: ");
        return VerificarNumero(Number(prompt()));
      }
    } else {
      console.log("\nEl número ingresado debe estar entre 1 y 8, por favor digita otro número: ");
      return VerificarNumero(Number(prompt()));
    }
  } else {
    console.log("\nEl valor ingresado debe ser un número entre 1 y 8, por favor digita otro número: ");
    return VerificarNumero(Number(prompt()));
  }
}

function ImprimirCaracteres(contador, final) {
  if (contador <= final) {
    process.stdout.write(` ${ocultaParejas[contador]} │`);
    ImprimirCaracteres(contador + 1, final);
  }
}

function ImprimirOcuParejas(contador, final, finalref) {
  if (contador <= final) {
    process.stdout.write("\n┌───┬───┬───┬───┬───┬───┬───┬───┐\n│");
    ImprimirCaracteres(contador, finalref);
    console.log("\n└───┴───┴───┴───┴───┴───┴───┴───┘");
  }
}

function SeguirJugando(parejas) {
  console.log("\n\nDeseas continuar (s/n): ");
  let opcion = prompt();
  if (opcion === 's') {
    if (parejas === 4) {
      console.log("\nJUEGO CONCENTRESE (MEMORAMA)\tNúmero de parejas: " + parejas);
      ImprimirOcuParejas(0, 7, 7);
      console.log("\nHas logrado adivinar el total de parejas, gracias por jugar");
    } else {
      EmpezarJuego(parejas);
    }
  } else if (opcion === 'n') {
    console.log("\nJUEGO CONCENTRESE (MEMORAMA)\tNúmero de parejas: " + parejas);
    ImprimirOcuParejas(0, 7, 7);
    console.log("\nGracias por jugar");
  } else {
    SeguirJugando(parejas);
  }
}

function MostrarPareja(numero1, numero2, numParejas) {
  let ocultaParejasAux = "12345678";
  if (ocultaParejas[numero1] === ocultaParejas[numero2]) {
    SeguirJugando(numParejas + 1);
  } else {
    ocultaParejas = ocultaParejas.slice(0, numero1) + ocultaParejasAux[numero1] + ocultaParejas.slice(numero1 + 1);
    ocultaParejas = ocultaParejas.slice(0, numero2) + ocultaParejasAux[numero2] + ocultaParejas.slice(numero2 + 1);
    SeguirJugando(numParejas);
  }
}

function EmpezarJuego(numeroParejas) {
  console.log("\nJUEGO CONCENTRESE (MEMORAMA)\tNúmero de parejas: " + numeroParejas);
  ImprimirOcuParejas(0, 7, 7);
  console.log("\nEntre la primera opción: ");
  let primeranumero = VerificarNumero(Number(prompt())) - 1;
  ocultaParejas = ocultaParejas.slice(0, primeranumero) + parejasAleatorias[primeranumero] + ocultaParejas.slice(primeranumero + 1);
  console.log("\nJUEGO CONCENTRESE (MEMORAMA)\tNúmero de parejas: " + numeroParejas);
  ImprimirOcuParejas(0, 7, 7);
  console.log("\nEntre la segunda opción: ");
  let segundanumero = VerificarNumero(Number(prompt())) - 1;
  ocultaParejas = ocultaParejas.slice(0, segundanumero) + parejasAleatorias[segundanumero] + ocultaParejas.slice(segundanumero + 1);
  console.log("\nJUEGO CONCENTRESE (MEMORAMA)\tNúmero de parejas: " + numeroParejas);
  ImprimirOcuParejas(0, 7, 7);
  if (numeroParejas === 3) {
    console.log("\nJUEGO CONCENTRESE (MEMORAMA)\tNúmero de parejas: " + (numeroParejas + 1));
    ImprimirOcuParejas(0, 7, 7);
    console.log("\nHas logrado adivinar el total de parejas, gracias por jugar");
  } else {
    MostrarPareja(primeranumero, segundanumero, numeroParejas);
  }
}

EmpezarJuego(0);

