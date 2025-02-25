//** Usando console.log

// const operacion = (tipo, numero1, numero2) => {

//     if (tipo==='SUMA') {
//         console.log(`La suma es ${numero1+numero2}`);
//     } else if (tipo==='RESTA'){
//         console.log(`La resta es ${numero1-numero2}`);
//     }

//     return 'Hola, estoy funcionando!';
// };

// const miVariable = operacion('RESTA', 100, 11);
// console.log(miVariable);

//** Usando return

const operacion = (tipo, numero1, numero2) => {
    if (tipo==='SUMA') {
        return numero1+numero2;
    } else if (tipo==='RESTA'){
        return numero1-numero2;
    }
};

const miVariable = operacion('RESTA', 100, 11);
console.log(miVariable);