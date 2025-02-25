/*
📌 Global scope o variable global:
-Son las variables declaradas fuera de una funcion.
-Podemos acceder a ellas desde cualquier parte del codigo.
-Podemos usar const, let y var.
*/

var nombre = 'Carlos';

const saludo = () => {
    console.log(`Hola ${nombre}.`);

    nombre='Franlex';
    console.log(`El nuevo nombre es ${nombre}.`)
};

saludo();