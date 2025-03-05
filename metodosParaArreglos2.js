/* 📌 .indexOf()
    Obtenemos el index del elemento. Si el elemento esta repetido, obtenemos el primer index de un elemento.
    Si no hay elemento nos retorna -1.
*/

const nombres = ['Carlos','Luis','Pedro','Daniel','Franlex','Carlos','Eduardo','Roberto','Juan','John'];

// console.log(nombres.indexOf('Carlos'));


/* 📌 .lastIndexOf()
    Si el elemento esta repetido, obtenemos el ultimo index de ese elemento.
*/
// console.log(nombres.lastIndexOf('Carlos'));


/* 📌 .forEach()
    Nos permite ejecutar una funcion por cada elemento.
*/

nombres.forEach((nombre,index)=>{
    // console.log(`Hola ${nombre} (${index})`);
});


/* 📌 .find()
    Nos permite recorrer un arreglo y devuelve el 1er elemento que retornemos
*/

const resultado = nombres.find((nombre)=>{
    if(nombre[0]==='E'){
        return nombre;
    };
});

// console.log(resultado);


/* 📌 .map()
    Nos permite ejecutar una funcion por cada elemento y crear un nuevo arreglo en base a los resultados de esa funcion. Devuelve todos los elementos del arreglo original.
*/

const nombresPractica = ['Carlos',567,'Luis','Pedro','Daniel','Franlex','Carlos','Eduardo','Roberto','Juan','John','Sam','Ramirez'];

// const nombresMayuscula = nombresPractica.map((nombre)=>nombre.toUpperCase());
// console.log(nombresMayuscula);



/* 📌 .filter()
    Nos permite ejecutar una funcion por cada elemento y luego crear un nuevo arreglo en base a los resultados de esa funcion. Devuelve los elemntos que cumplan una condicion (filtrado).
*/

const nombre4Letras = nombresPractica.filter((nombre)=>nombre.length===5);
console.log(nombre4Letras);


/* 📌 .includes()
    Nos permite saber si el arreglo contiene un elemento especificado.
*/
console.log(nombresPractica.includes('Eduard'));//false.


/* 📌 .every()
    Nos permite ejecutar un condicional sobre cada elemento y nos devuelve TRUE si TODOS los elementos cumplieron la condicion.
*/

const nombresValidos = nombresPractica.every((nombre)=> {
    if (typeof nombre === 'string') {
        return true
    } else {
        return false
    }
});

console.log('Los nombres son validos?? '+ nombresValidos);


/* 📌 .some()
    Nos permite ejecutar un condicional sobre cada elemento y nos devuelve true si alguno cumplio la condicion.
*/

const nombresAlgunos = nombresPractica.every((nombre)=>{
    if (typeof nombre !== 'string') {
        return false
    } else {
        return true
    }
});

console.log(nombresAlgunos);//false porque hay un valor numerico en el array