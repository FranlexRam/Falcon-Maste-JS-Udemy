const persona = {
    nombre: 'Carlos',
    edad: 27,
    correo: 'carlos123@gmail.com',
    suscripciones: {
        web: true,
        correo: false
    },
    coloresFavoritos: ['negro', 'azul', 'blanco'],
    saludo: function () {
        alert('Hola hola!!')
    },
}

console.log(persona);
console.log(persona.correo);
console.log(persona.suscripciones.web);

const variable = 'edad';
const variable2 = 'suscripciones';
console.log(persona[variable]);
console.log(persona[variable2]);

console.log(persona.coloresFavoritos[1]);

persona.pais = 'Venezuela';
persona.estado = 'Caracas';

console.log(persona);

persona.saludo();