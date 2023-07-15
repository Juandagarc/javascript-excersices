
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
- 9- Un hombre desea saber cuanto dinero se genera por concepto de intereses sobre la cantidad que tiene en inversión en el banco. El decidirá
reinvertir los intereses siempre y cuando estos excedan a $7,000, y en ese caso desea saber cuanto dinero tendrá finalmente en su cuenta.
- Salvedad: Para valores fuera de este rango, no garantizamos los resultados.
*/

// Este programa sirve para determinar si una persona debe invertir en intereses
// teniendo en cuenta que una ganancia se puede producir con una inversión SUPERIOR a $7.000.
var prompt = require('prompt-sync')();//Se invoca el prompt
// Por favor ingrese el capital inicial:
console.log("Por favor ingrese el capital inicial:");
const capital = Number(prompt()); // Se lee el capital inicial.

// Por favor ingrese el interés:
console.log("Por favor ingrese el interés:");
const interes = Number(prompt()); // Se lee el interés.

// Se define la función "determinador".
function determinador() {
  const x = capital + (capital * (interes / 100)); // Se calcula el saldo según la fórmula.

  // Se añade el condicional.
  if (x < 7000) {
    console.log(`No invierta, su saldo será de ${x}`);
  } else {
    console.log(`Invierta, su saldo será de ${x}`);
  }
}


determinador(); // Se invoca la función.
