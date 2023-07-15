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
- 19-Un supermercado ha puesto en oferta la venta al por mayor de cierto producto, ofreciendo un descuento del 15% por la compra de más
de 3 docenas y 10% en caso contrario. Además por la compra de más de 3 docenas se obsequia una unidad del producto por cada docena en
exceso sobre 3. Diseñe un algoritmo que determine el monto de la compra, el monto del descuento, el monto a pagar y el número de unidades
de obsequio por la compra de cierta cantidad de docenas del producto.
- Salvedad: Para valores fuera de este rango, no garantizamos los resultados.
*/


// Este programa se encarga de aplicar descuentos por docenas.


var prompt = require('prompt-sync')();//Se invoca el prompt
// Ingrese la cantidad de docenas compradas.
console.log("Ingrese la cantidad de docenas compradas:");
const cantidadDocenas = Number(prompt()); // Se lee la cantidad de docenas compradas.

// ¿Cuánto valen las docenas?
console.log("¿Cuánto valen las docenas?");
const precioDocena = Number(prompt()); // Se lee el precio de las docenas.

if (cantidadDocenas > 3) {
  const docenasObsequio = Math.floor(cantidadDocenas / 3); // Se calcula la cantidad de docenas de obsequio.
  const precioDescuento = precioDocena - (precioDocena * 0.15); // Se calcula el precio con descuento.
  console.log(`El precio de su compra es de ${precioDescuento} y se le agregan ${docenasObsequio} docenas de obsequio.`);
} else if (cantidadDocenas < 3) {
  const precioDescuento = precioDocena - (precioDocena * 0.2); // Se calcula el precio con descuento.
  console.log(`El precio de su compra es de ${precioDescuento}.`);
}
