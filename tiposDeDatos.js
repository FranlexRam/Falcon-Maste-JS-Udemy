const nombre = 'Carlos';
const parrafo = "Este es un parrafo";

// Arrays - Arreglos
const arreglo = ['texto',456, true, {propiedad: 'valor'}, [1,2,3,]];
console.log(arreglo);

//objeto
const persona = {
    nombre: 'Carlos',
    edad: 27,
    carro : {
        marca: 'Toyota',
        color: 'Gris'
    }
}

console.log(persona);

console.log(persona.carro.marca);


//Operadores artimeticos
/*
% modulo
++ Aumento
--Disminucion
*/

/*
Operadores de ignacion
+=   suma un numero al valor de una variable.
-=   Resta un numero al valor de una variable.
*=   Multiplica un numero al valor de una variable.
/=   Divide un numero al valor de una variable.
%=   Obtiene el sobrante de una division y lo asigna a la variable.
*/

let numero = 10;
numero *=5;


console.log(`El resultado es ${numero}:`);


const resultado = 
7>1
? 'El primer valor es mayor que el segundo'
: 'El segundo valor es mayor que el primero';

console.log(resultado);

//Ejemplo #3:
const variable = false;
console.log(`la variable es: ${variable}`);