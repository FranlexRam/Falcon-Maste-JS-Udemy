const colores = ['Rojo', 'Verde', 'Morado', 'Blanco', 'Amarillo'];
/* 📌 .join() 
    Nos permite transformar un arreglo a una cadena de texto y separar cada elemento.
*/
console.log(colores.join(' - '));

/*  📌 .sort()
    Permite ordenar un arreglo de cadena de texto en forma alfabetica.
*/

console.log(colores.sort());

/*  📌 .reverse()
    Permite ordenar un arreglo de forma descendente.
*/

console.log(colores.reverse());

/*  📌 .concat()
    Permite juntar dos arreglos en uno solo.
*/

const numeros = [1,3,7,83,57,70];

const unidos = colores.concat(numeros);

console.log(unidos);

/*  📌 .push()
    Permite agregar nuevos elementos al final del arreglo.
*/

colores.push('Vinotinto');
console.log(colores);

/*  📌 .pop()
    Permite eliminar elementos al final del arreglo.
*/

colores.pop();

console.log(colores);

/* 📌 .shift()
    Elimina el 1er elemento de un arreglo y recorre los elementos.
*/

const colorEliminado = colores.shift();
console.log(`${colores} //Colores disponibles`);
console.log(`${colorEliminado}// este color se elimino con el metodo`);

console.log(colores[0]);

/* 📌 .unshift()
    Agrega un elemento al inicio de un arreglo y empuja los elementos.
*/

const dias = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];

console.log(dias);
dias.unshift('Domingo');
console.log(dias);


/* 📌 .splice()
    Permite agregar un elemento en donde nosotros le indiquemos.
    -1er parametro: Posicion en donde se quiere comenzar a insertar los elementos.
    -2do parametro: Si queremos eliminar elementos del arreglo desde la posicion indicada.
    -Resto de parametros: Los elementos a insertar.
*/

const amigos = ['Carlos', 'Luis', 'Daniel'];
amigos.splice(1,2,'Franlex','Eduardo');

console.log(amigos);


/* 📌 .slice()
    Nos permite copiar una parte de un arreglo a otro.
    -1er parametro: Pocision desde donde queremos copiar.
    -2do parametro: Hasta antes de que elemento copiar.
*/
const frutas = ['Fresa','Manzana','Pera','Uva','Durazno','Patilla','Melon'];
const frutasFavoritas = frutas.slice(0,4);
console.log(frutasFavoritas);