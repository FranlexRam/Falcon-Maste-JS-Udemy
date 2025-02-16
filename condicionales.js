// const usuario = {
//     edad: 15,
//     pais: 'Mexico',
//     ticket: true
// };

// if (usuario.edad>=18 && usuario.ticket) {
//     console.log('El usuario tiene ticket y es mayor de edad!')
// } else {
//     console.log('El usuario es menor de edad o NO tiene ticket.')
// }

//Ejemplo #2: anidando condicionales.
const usuario = {
    edad: 19,
    pais: 'Mexico',
    ticket: false
};

if (usuario.edad >=18) {
    if (usuario.ticket) {
        console.log('El usuario es mayor de edad y tiene su ticket... Puede entrar al concierto.🙂')
    } else {
        console.log('El usuario es mayor de edad PERO no tiene ticket. 😂')
    }
} else {
    console.log('El usuario es menor de edad. 🤨')
}