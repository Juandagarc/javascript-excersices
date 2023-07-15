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
- Ejercicio 04 : Graficador.
*/

/* 
SALVEDAD: Cuando se ingresan coeficientes de -1, se debe indicar. 
          No se admiten graficaciones de dominios de gran magnitud

          Para el apartado gráfico UNICAMENTE se admiten polinomios de bajo grado para sostener
          la escalabilidad

*/


const prompt = require('prompt-sync')();

let polinomio = [];

// Función para identificar los números teniendo en cuenta el signo negativo
function getNumbers(nums, index) {
  let flag = true; // Bandera de parada del ciclo, cambia al detectar una X o un signo de otro número
  let result = '';
  
  while (flag) {
    if (index < nums.length) {
      const n = nums[index];
      
      // Cuando result está vacío, se tiene en cuenta el signo
      if (n === '+' && result.length === 0) {
        index += 1;
      } else if (n === '-' && result.length === 0) {
        result += n;
        index += 1;
      } else if (n === 'X' && result.length === 0) {
        result = '1';
        flag = false;
      } else if (n !== '-' && n !== '+' && n !== 'X' && n !== '(' && n !== ')') {
        result += n;
        index += 1;
      } else {
        flag = false;
      }
    } else {
      flag = false;
    }
  }
  
  return [result, index];
}

// Función principal que recorre la "función exponencial"
function obtenerPolinomio() {
  let index = 0;
  let flag = false; // Bandera que indica si se ha recorrido una X previamente
  var nums = prompt("Digite la función: ");
  nums= nums.toUpperCase();

  const datosPolinomio = [];
  let coeficiente, number = 0;
  
  // console.log("Coeficiente \t Potencia\n");
  
  while (index < nums.length) {
    // Caso especial cuando una X se encuentra a la potencia 1
    if ((nums[index] === '+' || nums[index] === '-') && nums[index - 1] === 'X' && index !== 0) {
      flag = false;
      datosPolinomio.push([parseInt(number), 1 ]);
    }
    
    [number, index] = getNumbers(nums, index);
    
    if (index < nums.length) {
      if (nums[index] !== 'X' && !flag) { // Caso cuando no hay X
        datosPolinomio.push([parseInt(coeficiente), 0 ]);
      } else if (nums[index] === 'X') {
        coeficiente = number;
        flag = true;
        index += 1;
      } else if (nums[index] === '(' || nums[index] === ')') { // Omite los paréntesis
        if (number.length !== 0) { // Imprime el número del exponente cuando identifica ')'
          datosPolinomio.push([parseInt(coeficiente), parseInt(number)]);
          flag = false;
        }
        index += 1;
      } else { // Imprimir exponentes
        datosPolinomio.push([parseInt(coeficiente), parseInt(number)]);
        flag = false;
      }
    } else {
      if (flag) {
        datosPolinomio.push([parseInt(coeficiente), parseInt(number)]);
        flag = false;
      } else {
        datosPolinomio.push([parseInt(number), 0]);
      }
    }
  }
  
  if (flag) { // Imprime exponente 1 si una X a la 1 está al final de la cadena
    datosPolinomio.push([parseInt(number), 1]);
  }

  console.log(datosPolinomio, '\n\n')
  return datosPolinomio;
}


const inicio = parseFloat(prompt("Ingrese el valor de inicio: "));
const fin = parseFloat(prompt("Ingrese el valor de fin: "));
const intervalo = parseFloat(prompt("Ingrese el valor del intervalo: "));


function procesarValores() {
  

  let valor = inicio, resultado;

  

  let valoresGraficar = [];

  for (let i = 0; i < polinomio.length; i++) {
    console.log(polinomio[i])
  }

  // console.log("\n\nValor\tResultado")

  while (valor <= fin) {
    resultado = 0;

    for (let i = 0; i < polinomio.length; i++) {
      resultado += polinomio[i][0] * (valor ** polinomio[i][1]);
    }

    valoresGraficar.push([valor, resultado]);
    valor += intervalo;
  }


  return valoresGraficar;
}

polinomio = obtenerPolinomio();

/* TABLA */ 
let array1 = polinomio.map(vector => vector[0]);
let array2 = polinomio.map(vector => vector[1]);
console.log("pOLINOMIO: ", polinomio );


// Verificar que los arrays tienen la misma cantidad de elementos
if (array1.length !== array2.length) {
  console.log('Los arrays no tienen la misma cantidad de elementos.');
} else {
  // Obtener la longitud máxima de los elementos en ambas arrays
  var maxLength = Math.max(array1.length, array2.length);

  // Obtener la longitud máxima de caracteres en cada columna
  var column1Width = Math.max('Array 1'.length, ...array1.map(String).map(e => e.length));
  var column2Width = Math.max('Array 2'.length, ...array2.map(String).map(e => e.length));

  // Crear una tabla en la consola
  var table = '';
  table += '┌' + '─'.repeat(column1Width + 2) + '┬' + '─'.repeat(column2Width + 2) + '┐\n';
  table += '│ ' + 'Coef...'.padEnd(column1Width, ' ') + ' │ ' + 'Pot...'.padEnd(column2Width, ' ') + ' │\n';
  table += '├' + '─'.repeat(column1Width + 2) + '┼' + '─'.repeat(column2Width + 2) + '┤\n';

  for (var i = 0; i < maxLength; i++) {
    var value1 = i < array1.length ? array1[i] : '';
    var value2 = i < array2.length ? array2[i] : '';

    table += '│ ' + String(value1).padEnd(column1Width, ' ') + ' │ ' + String(value2).padEnd(column2Width, ' ') + ' │\n';

    if (i < maxLength - 1) {
      table += '├' + '─'.repeat(column1Width + 2) + '┼' + '─'.repeat(column2Width + 2) + '┤\n';
    }
  }

  table += '└' + '─'.repeat(column1Width + 2) + '┴' + '─'.repeat(column2Width + 2) + '┘';

  console.log(table);
}


/* GRAFICA ------------------------------------------------------------------------------------------------*/



// Tamaño de la matriz
const rows = 50;
const cols = 50;

// Función para generar una matriz vacía con las dimensiones dadas
const crearMatriz = (filas, columnas) => {
  const matriz = [];
  for (let i = 0; i < filas; i++) {
    const fila = Array(columnas).fill(" ");
    matriz.push(fila);
  }
  return matriz;
};

// Crear la matriz de 50x50
let matriz = crearMatriz(rows, cols);

// Función para modificar una fila de una matriz con asteriscos
const modificarFila = (matriz, indiceFila) => {
  if (indiceFila < 0 || indiceFila >= matriz.length) {
    console.log('Índice de fila fuera de rango');
    return;
  }
  
  for (let i = 0; i < matriz.length; i++) {
    if(i%5==0){
        matriz[indiceFila][i] = '|'; 
    }else{
        matriz[indiceFila][i] = '-'; 
    }
}
};

// Ejemplo de uso
matriz = crearMatriz(50, 50); // Utilizando la función crearMatriz() del código anterior

// Función para modificar una columna de una matriz con asteriscos
const modificarColumna = (matriz, indiceColumna) => {
  if (indiceColumna < 0 || indiceColumna >= matriz[0].length) {
    console.log('Índice de columna fuera de rango');
    return;
  }

  for (let i = 0; i < matriz.length; i++) {
    if(i%5==0){
        matriz[i][indiceColumna] = '-'; 
    }else{
        matriz[i][indiceColumna] = '|'; 
    }
   
  }
};

modificarFila(matriz, 25); // Modificar la fila 10 con asteriscos
modificarColumna(matriz, 25); // Modificar la columna 20 con asteriscos

const XY = (filaX) => {
  filaX = 25 + filaX;
  return filaX;
};
const Y = (filaY) => {
    filaY = 25 - filaY;
    return filaY;
  };

// Función para modificar una posición de la matriz con un asterisco
const modificarMatriz = (matriz, x, y) => {
  matriz[y][x] = '*';
};


let valoresGraficar = procesarValores();

let ArregloValoresEjeX = valoresGraficar.map(vector => vector[0]);
let ArregloValoresEjeY = valoresGraficar.map(vector => vector[1]);


const CalcularCantidadDeCoordenas = () =>{
  let contandor=0;
  for (let i=inicio; i <= fin; i=i+intervalo){
    contandor++;
  }
  return contandor;
}


const imprimirGrafica = () =>{
  let CantidadMaximaDeIteraciones= CalcularCantidadDeCoordenas();

  for(let i=0; i <CantidadMaximaDeIteraciones; i++){
    let x=ArregloValoresEjeX[i];
    let y=ArregloValoresEjeY[i];

    console.log("Coordenada #",i, ":(",x,",",y,")");

    modificarMatriz(matriz, XY(x), Y(y));
  }
}

imprimirGrafica()


// Imprimir la matriz en la consola
for (let i = 0; i < matriz.length; i++) {
  console.log(matriz[i].join(' '));
}
