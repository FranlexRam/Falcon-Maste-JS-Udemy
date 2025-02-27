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
    Permite untar dos arreglos en uno solo.
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

//4:02:50