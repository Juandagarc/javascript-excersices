
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
- 20-Una compañía dedicada al alquiler de automóviles cobra un monto fijo de $400000 para los primeros 300 km de recorrido. Para más de
300 km y hasta 1000 km, cobra un monto adicional de $ 15.000 por cada kilómetro en exceso sobre 300. Para más de 1000 km cobra un
monto adicional de $ 10.000 por cada kilómetro en exceso sobre 1000. Los precios ya incluyen el 20% del impuesto general a las ventas,
IVA. Diseñe un algoritmo que determine el monto a pagar por el alquiler de un vehículo y el monto incluido del impuesto.
- Salvedad: Para valores fuera de este rango, no garantizamos los resultados.
*/

// Este programa sirve para pagar por el alquiler de un vehículo y el valor del impuesto.

var prompt = require('prompt-sync')();//Se invoca el prompt
// Por favor ingrese la cantidad de kilómetros que desea recorrer.
console.log("Por favor ingrese la cantidad de kilómetros que desea recorrer:");
const kilometros = Number(prompt()); // Se lee la cantidad de kilómetros a recorrer.

const precioImpuesto = 0.2; // Valor del impuesto (20%).

let precioPagar, impuesto;

if (kilometros <= 300) {
  precioPagar = 400000; // Precio a pagar por el alquiler sin impuesto.
  impuesto = precioPagar * precioImpuesto; // Cálculo del impuesto.
  console.log(`El precio a pagar es de ${precioPagar} y el impuesto YA INCLUIDO es de: ${impuesto}`);
} else if (kilometros > 300 && kilometros <= 1000) {
  precioPagar = 400000 + 15000 * (kilometros - 300); // Precio a pagar por el alquiler sin impuesto.
  impuesto = precioPagar * precioImpuesto; // Cálculo del impuesto.
  console.log(`El precio a pagar es de ${precioPagar} y el impuesto YA INCLUIDO es de: ${impuesto}`);
} else if (kilometros > 1000) {
  precioPagar = 400000 + 10000 * (kilometros - 1000); // Precio a pagar por el alquiler sin impuesto.
  impuesto = precioPagar * precioImpuesto; // Cálculo del impuesto.
  console.log(`El precio a pagar es de ${precioPagar} y el impuesto YA INCLUIDO es de: ${impuesto}`);
}
