/*
    📌 Operador Spread:
    Permite tomar los elementos de un arreglo u objeto y expandirlos en otro sitio.
*/

// const frutas = ['Manzana', 'Pera', 'Fresa', 'Melon'];
// const comidasFavoritas = ['Pizza', 'Sushi', 'Hamburguesa', 'Pasticho'];

// const comidasTotales = [...frutas, ...comidasFavoritas]; // *usando spread (...)

// console.log(comidasTotales);

// const datosLogIn = {
//     nombre: 'Franlex',
//     correo: 'franlex@gmail.com',
//     password: 12345,
// };

// const usuario = {
//     nombre: 'Luis',
//     ...datosLogIn,
//     apellido: 'Ramirez',
//     edad: 28,
// };

// console.log(usuario);


/*
    📌 Parametro 'Rest':
    Permite que una funcion contenga un numero indefinido de argumentos.

*/

const registrarUsuario = (nombre, correo, ...datosAdicionales) => console.log(nombre, correo, datosAdicionales);

registrarUsuario('Franlex', 'franlex.ramirez@gmail.com', 28, 'Venezuela', 'Caracas');


/*
    📌 Destructuracion de objetos
    Nos permite obtener elementos o propiedades de un arreglo u objeto y guardarlos en una variable.
*/

//5:32:46