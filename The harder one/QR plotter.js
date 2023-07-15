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
- Ejercicio 03. Utilice solo vectores. Una empresa marca todos sus productos con un código QR como el de la figura,
que es un arreglo de 30x30 píxeles negros y blancos(string de 900 caracteres). Es posible detectar un producto
falsificado comprobando una serie de características en el código QR.
*/

let qr = ' '.repeat(900).split('');//crea un vector de 900 elementos con espacios en blanco
                                  //.split mete un separador en cada elemento en el vector  queda asi: [' ', ' ', ' '.... 900 mas]

//genera el interior de manera aleatoria 
const HacerInterior = (contador, final) => {
  if (contador <= final) {
    qr[contador] = Math.random() < 0.25 ? '█' : ' ';//Genera aleatoriamente los pixeles negros y blancos 25% pixel negro 75% pixel blanco  
    HacerInterior(contador + 1, final);
  }
};

HacerInterior(31, 868);

//hace los muros horizontales 
const HacerMurosHorizontales = (contador, final) => {
  if (contador <= final) {
    qr[contador] = ' ';//asigna los pixeles blanos a la linea de mas arriba y la linea de mas abajo
    HacerMurosHorizontales(contador + 1, final);
  }
};

HacerMurosHorizontales(0, 29);
HacerMurosHorizontales(870, 899);
//Hace los muros del ladoizquierdo 
const HacerMuroIzq = (contador, final) => {
  if (contador <= final) {
    qr[contador] = ' ';//asignamos los pixeles blancos a la columna izquierda 
    HacerMuroIzq(contador + 30, final);
  }
};

HacerMuroIzq(30, 870);
//Hace los muros del lado derecho
const HacerMuroDer = (contador, final) => {
  if (contador <= final) {
    qr[contador] = ' ';//asignamos los pixeles blancos a la columna derecha
    HacerMuroDer(contador + 30, final);
  }
};

HacerMuroDer(29, 869);

console.log('         012345678901234567890123456789');
console.log('        ┌------------------------------┐');

//imrprime el primer arreglo sin la cuadricula 
for (let i = 0; i < 900; i += 30) {
  const row = qr.slice(i, i + 30).join('');//crea un subconjunto de la matriz de i hasta i + 30 y .join sirve para que no exista un separador 
                                          //este subconjunto toma linea por linea en cada interaccio para imprimirla cuando se llame row 
  console.log(`${Math.floor(i / 30)}\t|${row}|${Math.floor(i / 30)}`);;//aca es donde se llama el console.log para imprimir linea por linea 
}
console.log('        └------------------------------┘');
console.log('         012345678901234567890123456789');
console.log('\nQR con cuadrícula:\n');


//Funcion que le asiga a row cada linea, cada ves que se llama cambia de linea 
//Retorna el subconjunto de la linea 
const ImprimirCaracteres = (contador, final) => {
    let row = '';
    if (contador <= final) {
      row += `${qr[contador]}│`;//creamos el row que son la linea y los cuadros negros o el espacio 
      row += ImprimirCaracteres(contador + 1, final);//concatena row con el valor del siguiente elemento del arreglo para que cuando sea llamado se imprima 
    }
    return row;
  };
  
  const ImprimirQRcuadricula = (contador, final, finalref) => {
    if (contador <= final) {
      const column = Math.floor(contador / 30);//REdondea al entero para colocar el numero de la columna 
      const row = ImprimirCaracteres(contador, finalref);
      console.log(`${column}\t│${row}${column}`);//imprimimos primero el numero de la columna luego imrpimos la linea de 30 y despues imprimimos de nuevo el numero de la columna
      console.log('\t├─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┤');
      ImprimirQRcuadricula(contador + 30, final, finalref + 30);
    }
  };
  

console.log('\t│0│1│2│3│4│5│6│7│8│9│0│1│2│3│4│5│6│7│8│9│0│1│2│3│4│5│6│7│8│9│');

ImprimirQRcuadricula(0, 899, 29);
console.log('\t│0│1│2│3│4│5│6│7│8│9│0│1│2│3│4│5│6│7│8│9│0│1│2│3│4│5│6│7│8│9│');

//Evaluamos la condicion  b que es el cuadrado de 7*7 en la parte superior derecha 
const EvaluarCuadrado = (contador, final, cuenta) => {
  if (contador <= final) {
    if (contador === 59 || contador === 89 || contador === 119 || contador === 149 || contador === 179 || contador === 209) {//esta linea evalua la siguiente del 7*7 
      return EvaluarCuadrado(contador + 23, final, cuenta);
    } else {
      cuenta = qr[contador] === '█' ? cuenta + 1 : cuenta;//pregunta que si en ese lugar del vector  hay un cuadro negro: si lo hay suma uno a cuenta 
      return EvaluarCuadrado(contador + 1, final, cuenta);
    }
  }
  return cuenta;//retorna el numero de pixeles que existen ese cuadrado 7*7
};

console.log('\n\nCondicion a: se cumple, existen los espacios en blanco por la periferia');

//pregunta si cuenta es mayor a 25 para saber si la condicion se cumple 
const cuadradoNegro = EvaluarCuadrado(52, 238, 0);
if (cuadradoNegro >= 25) {
  console.log(`Condición b: Se cumple. El número de pixeles negros es de: ${cuadradoNegro}`);//true
} else {
  console.log(`Condición b: NO se cumple. El número de pixeles negros es de: ${cuadradoNegro}`);//false 
}

const EvaluarError1 = cuenta => {//si es un pixel blanco se le suma uno a cuenta para acumlar un error 
  return qr[182] === '█' ? cuenta : cuenta + 1;
};

const EvaluarError2 = cuenta => {//si es un pixel blanco se le suma uno a cuenta para acumlar un error
  return qr[184] === '█' ? cuenta : cuenta + 1;
};

const EvaluarError3 = cuenta => {//si es un pixel blanco se le suma uno a cuenta para acumlar un error
  return qr[205] === '█' ? cuenta : cuenta + 1;
};

if (EvaluarError1(0) + EvaluarError2(0) + EvaluarError3(0) === 0) {//en caso de que no exista error se le dira al usuario que no existe
                                                                   //Si la suma de los errores es cero quiere decir que no existe problema
  console.log('Condición c: Se cumple. Hubieron 0 errores.');
} else {
  console.log(`Condición c: NO se cumple.\nErrores: ${EvaluarError1(0) + EvaluarError2(0) + EvaluarError3(0)} No es original.`);//en caso de que existan errores se le dira al usuario cuantos hay 
}