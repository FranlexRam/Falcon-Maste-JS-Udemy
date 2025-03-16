/*
    📌 .indexOf() .lastIndexOf() - Devuelve el index del primer/ultimo caracter especificado.
*/

// const texto = 'Hola soy Franlex';
// console.log(texto.indexOf('x'));
// console.log(texto.lastIndexOf('e'));


/*
    📌 .slice() - Devuelve un fragmento de una cadena de texto.
    1er parametro: index desde donde se quiere contar.
    2do parametro: (opcional)- index hasta donde se quiere contar.
*/

// const texto = 'Hola soy Franlex!';
// const index = texto.lastIndexOf('a');
// console.log(texto.slice(index));


/*
    📌 .replace() - Devuelve una cadena de texto en donde reemplaza un valor por otro.
    1er parametro: el texto que queremos reemplazar.
    2do parametro: el texto que queremos poner.
*/

// const texto = 'Hola soy Franlex!';
// console.log(texto.replace('Franlex','Carlos'));


/*
    📌 .split() - Convierte una cadena de texto en un arreglo.
    Tenemos que especificar donde cortar cada elemento.

    1er parametro: caracter que funcionara como separador.
*/

const texto = 'Hola yo soy Franlex!';
console.log(texto.split(' '));


console.log(texto.toUpperCase());
console.log(texto.toLowerCase());