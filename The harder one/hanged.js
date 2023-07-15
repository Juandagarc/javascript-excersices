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
- Ejercicio 9 : Ahorcado.
*/

const prompt = require('prompt-sync')();

var numeroAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

//https://chat.openai.com/share/b5c77255-01cd-41d6-a82c-c6662c3d2aa7 Corto
//https://chat.openai.com/share/a74ed019-1af2-417f-a93c-b5cc7d2c8bc3 Largo

var vidas = 7;

let palabraOculta = [];
let letrasIntentadas = [];
const palabra1 = "PEREIRA";
const palabra2 = "UNIVERSIDAD";
const palabra3 = "PROGRAMACION";
const palabra4 = "SISTEMAS";
const palabra5 = "INGENIERIA";
const palabra6 = "INTELIGENCIA";
const palabra7 = "ARTIFICIAL";
const palabra8 = "TABLERO";
const palabra9 = "COMPUTADOR";
const palabra10 = "EVALUAR";

const mayuscula = (str) => {
    return str.toUpperCase();
};

const palabras = [
    palabra1,
    palabra2,
    palabra3,
    palabra4,
    palabra5,
    palabra6,
    palabra7,
    palabra8,
    palabra9,
    palabra10,
];

const palabraAleatoria = palabras[numeroAleatorio(0, 10)];


const hacerEspacios = (final) => {
    let espacios = "";
    for (let i = 0; i < final; i++) {
        espacios += " ";
    }
    return espacios;
};
/*Dibuja muñeco*/

const munequito = (error) =>
{
        if (error === 7) {
            console.log(" JUEGO AHORCADO");
            console.log("+----+");
            console.log("|" + hacerEspacios(4) + "\t" + palabraOculta.join(" "));
            console.log("|");
            console.log("|" + hacerEspacios(4));
            console.log("|");
            console.log("-----");
            
        } else if (error === 6) {
            console.log(" JUEGO AHORCADO");
            console.log("+----+");
            console.log("|" + hacerEspacios(4) + "0\t" + palabraOculta.join(" "));
            console.log("|");
            console.log("|" + hacerEspacios(4));
            console.log("|");
            console.log("-----");
        } else if (error === 5) {
            console.log(" JUEGO AHORCADO");
            console.log("+----+");
            console.log("|" + hacerEspacios(4) + "0\t" + palabraOculta.join(" "));
            console.log("|" + hacerEspacios(4) + "|");
            console.log("|" + hacerEspacios(4));
            console.log("|");
            console.log("-----");
        } else if (error === 4) {
            console.log(" JUEGO AHORCADO");
            console.log("+----+");
            console.log("|" + hacerEspacios(4) + "0\t" + palabraOculta.join(" "));
            console.log("|" + hacerEspacios(3) + "/|");
            console.log("|" + hacerEspacios(4));
            console.log("|");
            console.log("-----");
        } else if (error === 3) {
            console.log(" JUEGO AHORCADO");
            console.log("+----+");
            console.log("|" + hacerEspacios(4) + "0\t" + palabraOculta.join(" "));
            console.log("|" + hacerEspacios(3) + "/|\\" + hacerEspacios(1, 1));
            console.log("|" + hacerEspacios(4));
            console.log("|");
            console.log("-----");
        } else if (error === 2) {
            console.log(" JUEGO AHORCADO");
            console.log("+----+");
            console.log("|" + hacerEspacios(4) + "0\t" + palabraOculta.join(" "));
            console.log("|" + hacerEspacios(3) + "/|\\" + hacerEspacios(1, 1));
            console.log("|" + hacerEspacios(4) + "|");
            console.log("|");
            console.log("-----");
        } else if (error === 1) {
            console.log(" JUEGO AHORCADO");
            console.log("+----+");
            console.log("|" + hacerEspacios(4) + "0\t" + palabraOculta.join(" "));
            console.log("|" + hacerEspacios(3) + "/|\\" + hacerEspacios(1, 1));
            console.log("|" + hacerEspacios(4) + "|");
            console.log("|" + hacerEspacios(3) + "/");
            console.log("-----");
        } else if (error === 0) {
            console.log(" JUEGO AHORCADO");
            console.log("+----+");
            console.log("|" + hacerEspacios(4) + "0\t" + palabraOculta.join(" "));
            console.log("|" + hacerEspacios(3) + "/|\\" + hacerEspacios(1, 1));
            console.log("|" + hacerEspacios(4) + "|");
            console.log("|" + hacerEspacios(3) + "/ " + "\\");
            console.log("-----");
            console.log("FIN DEL JUEGO");
        } 
}

const ocultarPalabra = () => {
    for (let i = 0; i < palabraAleatoria.length; i++) {
        palabraOculta[i] = "_";
    }
    return palabraOculta.join(" ");
}

const validarLetraYaIngresada = (letra) => {
    letra = mayuscula(letra);
    let letraYaIngresada = false;

    for (let i = 0; i < letrasIntentadas.length; i++) {
        if (letra == letrasIntentadas[i]) {
            letraYaIngresada = true;
            break;
        }
    }

    if (letraYaIngresada) {
        console.log("Letra ya ingresada");
    } else {
        letrasIntentadas.push(letra);
    }
}

const validarLetra = (letra) => {
    let menosVidas = false;
    for (let i = 0; i < palabraAleatoria.length; i++) {
        if (letra === palabraAleatoria[i]) {
            palabraOculta[i] = letra;
            menosVidas = true;
        }
    }
    if (!menosVidas) {
        vidas--;

    }
    return palabraOculta;
}

const prueba = () => {
    ocultarPalabra();
    while (vidas >= 0) {
        if (palabraOculta.join("") === palabraAleatoria) {
            console.clear();
            console.log("¡Adivinaste la palabra correctamente!");
            break;
        } else {
            console.clear();
            console.log("Las letras ingresadas hasta ahora son: " + letrasIntentadas);
            console.log("vidas = " + vidas);
            munequito(vidas);
            if (vidas > 0){
                var letra = prompt("Ingrese una letra: ");
            }else if(vidas == 0){
                break;
            }
            letra = mayuscula(letra);
            validarLetra(letra);
            validarLetraYaIngresada(letra);
            prompt("Presione enter para continuar");

        }
    }
    if (vidas ==0)
    {
        console.log("Acabaste todas tus vidas, intentalo otra vez");
        console.log("La palabra a encontrar era: " + palabraAleatoria);
    }
}

prueba();