
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
- 29 .En computación las funciones trigonométricas como el seno, coseno, tangente, etc., al igual que otros
tipos de funciones, no se calculan directamente, lo que sucede en realidad es que internamente, la
máquina realiza las llamadas series de Taylor, que son el resultado de la suma de varios términos para
formar los resultados a estas funciones.
Hacer un programa para calcular los resultados de las siguientes funciones usando las series de Taylor
que se dan a continuación.
Esta es la serie de taylor de e a la x.
Para cada ejercicio, pida por teclado: a). El valor de x b). El número de términos de la serie
- Salvedad: Para valores fuera de este rango, no garantizamos los resultados.


*/var prompt = require('prompt-sync')();//Se invoca el prompt
// Este programa genera la suma de la serie de Taylor para cosh(x)
// Ingrese el valor de x:
var prompt = require('prompt-sync')();// Se importa la libreria prompt-sync


const readline = require('readline');// Se importa la libreria readline

const rl = readline.createInterface({// Se crea la constante rl en la función readline               
  input: process.stdin,// Se crea la entrada de datos
  output: process.stdout// Se crea la salida de datos
});

console.log("Este programa genera la suma de la serie de Taylor para cos(x)");// Se imprime en consola el enunciado del programa

rl.question("Ingrese el valor de x en radianes: ", function (x) {// Se crea la pregunta en consola              
  rl.question("Ingrese el número de términos: ", function (final) {// Se crea la pregunta en consola       
    console.log("La suma de la serie Taylor para cos(x) es:");// Se imprime en consola el enunciado del programa

    function factorial(number) {// Se crea la función factorial
      if (number === 0) {// Se crea la condición si number es igual a 0
        return 1;// Se retorna 1                    
      } else {// Se crea la condición si no
        return number * factorial(number - 1);// Se retorna number por la función factorial de number menos 1
      }
    }

    function cosx(numero, final, acumula) {// Se crea la función cosx       
      if (numero <= final) {// Se crea la condición si numero es menor o igual a final
        const termino = (Math.pow(x, numero) / factorial(numero)) * Math.pow(-1, numero / 2);
        acumula += termino;// Se crea la constante termino en la variable x elevado a numero dividido por la función factorial de numero por la función Math.pow de -1 elevado a numero dividido 2
        cosx(numero + 2, final, acumula);// Se crea la constante acumula en la variable acumula más la función cosx de numero más 2, final y acumula
      } else {// Se crea la condición si no
        console.log(acumula);// Se imprime en consola la constante acumula
      }
    }

    cosx(0, parseInt(final) * 2 - 2, 1);// Se crea la función cosx de 0, final por 2 menos 2 y 1

    rl.close();// Se cierra la pregunta                     
  });   
});