const usuarios = {
    nombre: 'Carlos',
    edad: 27,
    amigos: ['Luis', 'Pedro', 'Lucas'],
    saludo: () => {
        console.log('Hola, estoy aqui.');
    },
};

/*
    📌 Metodos propios
    Los objetos pueden tener metodos personalizado.
*/
usuarios.saludo();

/*
    📌 Object.keys()
    Nos devuelve un objeto con las llaves (keys) del objeto.
*/

const resultados = Object.keys(usuarios);
console.log(resultados);


/*
    📌 object.values()
    Nos devuelve un arreglo con los valores (values) del objeto.
*/

const resultados2 = Object.values(usuarios);
console.log(resultados2);


/*
    📌 object.entries()
    Nos devuelve un arreglo con las parejas de clave y valor del objeto.
*/

const resultados3 = Object.entries(usuarios);
console.log(resultados3);


console.log(`El objeto tiene ${Object.keys(usuarios).length} elementos`);