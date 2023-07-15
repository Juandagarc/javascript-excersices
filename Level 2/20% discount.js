/*
-Fecha de publicación: 19/06/2023
-Hora: 20:57
- Versión de su código: v1
-Autores: Ing(c) Juan David García Arce.
- Nombre del lenguaje utilizado: Java script
- Versión del lenguaje utilizado: ECMAScript 2021
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- 11-En un almacén se hace un 20% de descuento a los clientes cuya compra supere los $100,000 ¿ Cual será la cantidad que pagara una
persona por su compra? .
- Salvedad: Para valores fuera de este rango, no garantizamos los resultados.
*/


// Este programa sirve para realizar descuentos a compras superiores a $100.000.

var prompt = require('prompt-sync')();//Se invoca el prompt
// Por favor ingrese el valor de la compra:
console.log("Por favor ingrese el valor de la compra:");
const compra = Number(prompt()); // Se lee el valor de la compra.

// Se define la función "determinador".
function determinador() {
  const x = compra - (compra * 0.20); // Se calcula el valor de compra con descuento.

  // Se añade el condicional.
  if (compra > 100000) {
    console.log(`Su valor de compra quedó en: $${x}`);
  } else {
    console.log(`Su valor de compra quedó en: $${compra}`);
  }
}

determinador(); // Se invoca la función.