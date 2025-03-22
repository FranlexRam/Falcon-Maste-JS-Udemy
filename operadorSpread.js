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
//**ARRAYS
const amigos = ['Alejandro', 'Carlos', 'Luis', 'FRANLEX'];

const [a, b, c, d] = amigos;
console.log(a,d);

//**OBJETOS
const persona = {
    nombre: 'Franlex',
    apellido: 'Ramirez',
    pais: 'Venezuela',
    edad: 31,
};

const {nombre,apellido,pais,edad} = persona;
console.log(nombre, pais);
//Mezcalndo ambas
console.log(c,edad,d,pais);

//*Usando una funcion:
const mostrarEdad = (nombre,edad,pais) => console.log(`${nombre} tiene ${edad} a;os de edad y nacio en ${pais}!!!`);

mostrarEdad(persona.nombre,persona.edad,persona.pais);