/*
*Parametros: valores especificados en la definicion.
*Argumentos: valores que le pasamos a la funcion cuando la invocamos.
*/

const saludo = (nombre = "amigo") => console.log(`Hola ${nombre}`); //Parametros.

//Argumentos
saludo('Carlos');
saludo('Cesar');
saludo('Franlex');

//**Multiples parametros:

const operacion = (a,b)=> console.log( a + b);

operacion(3,5);
operacion(10000,500);
operacion(45,58);


//Calculadora con funciones:

const calculadora = (tipo, a, b)=> {
    if (tipo==='suma') {
        console.log(a+b);
    } else if (tipo==='resta') {
        console.log(a-b);
    } else if (tipo==='multiplicacion') {
        console.log(a*b);
    }
};

console.log('Aqui calculadora con funciones.');
calculadora('suma',3,4);
calculadora('resta',3,4);
calculadora('multiplicacion',3,4);