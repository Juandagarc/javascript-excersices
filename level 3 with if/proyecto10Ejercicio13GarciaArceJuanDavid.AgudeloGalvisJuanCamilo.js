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
- 13. Hacer un programa de computador, de tal manera que lea desde el teclado un grupo de 75 números,
diferentes a cero(validar este requisito) y al final de leídos, imprima:
* Cantidad de números Mayores a 150
* Número mayor y número menor encontrado en el grupo
* Cantidad de Números negativos encontrados
* Promedio de los Positivos Encontrados.
- Salvedad: Para valores fuera de este rango, no garantizamos los resultados.
*/
var prompt = require('prompt-sync')();//Se invoca el prompt
// Este programa genera un grupo de 75 números y los categoriza en distintas condiciones.
console.log("Establezca el número inicial del rango:");

// Se establece el número inicial del rango
const Inicio = parseInt(prompt());

console.log("Establezca el rango final:");

// Se establece el rango final
const Rango = parseInt(prompt());

console.log("Establezca la cantidad de números a generar:");

// Se establece la cantidad de números a generar
const Cantidad = parseInt(prompt());

// Se crea la función Generador que ejecutará los datos ingresados
function Generador(Rango, Contador, ContadorMayores, ContadorNegativos, Promedio) {
  if (Contador < Cantidad) {
    const Aleatorio = Math.floor(Math.random() * (Rango - Inicio + 1) + Inicio);

    console.log(Aleatorio + ", ");

    if (Aleatorio < 150 && Aleatorio >= 0) {
      Generador(Rango, Contador + 1, ContadorMayores + 1, ContadorNegativos, Promedio + Aleatorio);
    } else if (Aleatorio < 0) {
      Generador(Rango, Contador + 1, ContadorMayores + 1, ContadorNegativos + 1, Promedio + Aleatorio);
    }
  } else {
    console.log("\nLa cantidad de menores a 150 es: " + ContadorMayores);
    console.log("La cantidad de números negativos es: " + ContadorNegativos);
    console.log("Su promedio es: " + Promedio / Cantidad);
  }
}

// Se invoca la función Generador
Generador(Rango, 0, 0, 0, 0);
