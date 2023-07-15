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
- 9. Hacer un programa de computador, de tal manera que pida el número de Término deseados en la
siguiente serie: Serie de Bell: Esta serie cuenta el número de particiones no vacías de un conjunto de n
elementos. Comienza con los números 1, 1 y los siguientes términos se calculan como la suma de los
términos anteriores multiplicados por los números naturales consecutivos. La fórmula para el enésimo
número de Bell es B(n) = Σ(k=0, n-1) S(n,k), donde S(n,k) es el coeficiente binomial de (n-1) y k.
- Salvedad: Para valores fuera de este rango, no garantizamos los resultados.
*/

const prompt = require('prompt-sync')();

console.log("Este programa pide el número de términos deseados de la serie de Bell y los imprime, teniendo en cuenta que:");
console.log("Serie de Bell: Esta serie cuenta el número de particiones no vacías de un conjunto de n elementos. Comienza con los números 1, 1 y los siguientes términos se calculan como la suma de los términos anteriores multiplicados por los números naturales consecutivos.");
console.log("Salvedad: Este programa toma como datos de entrada únicamente valores numéricos enteros positivos, de otro modo no se garantizan sus resultados.");

const obtenerNumero = Number(prompt("Digite la cantidad de términos deseados:"));

function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

function coeficienteBinomial(n, k) {
  return factorial(n) / (factorial(k) * factorial(n - k));
}

function serieBell(n) {
  if (n <= 1) {
    return 1;
  } else {
    let result = 0;
    return calcularSerieBell(n, 0, result);
  }
}

function calcularSerieBell(n, k, result) {
  if (k >= n) {
    return result;
  } else {
    const coef = coeficienteBinomial(n - 1, k);
    const term = coef * serieBell(k);
    result += term;
    return calcularSerieBell(n, k + 1, result);
  }
}

function imprimir(numBell, contador) {
  if (contador === obtenerNumero + 1) {
    return;
  } else {
    if (contador === obtenerNumero) {
      console.log(numBell);
    } else {
      console.log(numBell + ",");
    }
    imprimir(serieBell(contador), contador + 1);
  }
}

if (Number.isInteger(obtenerNumero) && obtenerNumero >= 0) {
  imprimir(1, 1);
} else {
  console.log("Por favor introduzca un valor válido.");
}