/*
    📌 .toString() 
*/

const numero = 10;
const texto = numero.toString();
console.log(numero, typeof numero);
console.log(texto, typeof texto);

/*
    📌 .toFixed()
*/

const PI = 3.141516;
console.log(PI.toFixed(10));

/*
    📌 parseInt()
    Transforma un texto en un numero. No trabaja con decimales.
*/

// const numero1 = parseInt(prompt('Escribe un numero:'));
// const numero2 = parseInt(prompt('Escribe otro numero:'));

// console.log(numero1 + numero2);


/*
    📌 parseFloat()
    Igual que parseInt pero trabaja con decimales.
*/

// const numero3 = parseFloat(prompt('Escribe un numero'));
// const numero4 = parseFloat(prompt('Escribe otro numero'));

// console.log(numero3 + numero4);


/*
    📌 Math.random()
    Genera un numero random entre el 0 y 1.
*/

const random = Math.random();
console.log(random);

/*
    📌 Math.floor()
    Redondea un numero hacia abajo.
*/

const floor = Math.floor(10.4);
console.log(floor);

/*
    📌 Math.ceil()
    Redondea un numero hacia arriba.
*/

const ceil = Math.ceil(10.4);
console.log(ceil);

/*
    📌 Math.round()
    Redondea al entero mas cercano.
*/

const round1 = Math.round(10.4);
const round2 = Math.round(10.5);
console.log(round1, round2);


/*
    📌 Ejemplo de como generar un numero al azar del 0 al 100.
*/

const azar = Math.random();
console.log(Math.floor(azar * 101));