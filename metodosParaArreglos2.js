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

console.log(resultado);