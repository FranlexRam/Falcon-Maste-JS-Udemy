/*
📌Local scope o alcance local:
-Son las variables declaradas dentro de una funcion.
-Solo podemos acceder a ellas desde dentro de una funcion.
*/

var obtenerNumeroDeLetras = (nombre) => {
    var numero = nombre.length; 
    console.log(`${nombre} se escribe con ${numero} letras!`);

    var funcionAnidada = () => {
        console.log(numero);
    };
    funcionAnidada();
};
obtenerNumeroDeLetras('Francisco');