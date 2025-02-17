const usuario = {
    nombre: 'Carlos',
    pais: 'Peru'
};

switch (usuario.pais) {
    case 'Mexico':
        console.log('El usuario es mexicano!')
        break;
    case 'Argentina':
        console.log('El usuario es argentino!')
        break;
    case 'Venezuela':
        console.log('El usuario es venezolano!')
        break;

    default:
        console.log('El usuario es de otro pais.')
        break;
}