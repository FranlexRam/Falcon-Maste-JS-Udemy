const nombres = ['Carlos', 'Franlex', 'Eduardo', 'Luis', 'Cesar', 'Adolfo'];
nombres.forEach((nombre)=>console.log(nombre));

/*
    📌 //*Ciclo For
    Repite un bloque de codigo mientras se cumpla una condicion.

    -Expresion 1: se ejecuta una sola vez antes de comenzar a repetir el bloque de codigo.
    -Expresion 2: una condicion, mientras se cumpla se ejecutara el bloque de codigo.
    -Expresion 3: esta expresion se ejecuta siempre y despues de que se ejecute el bloque de codigo.
*/


for(let numero = 0; numero<=100; numero=numero+10) {
    console.log(numero);
};

//Cuenta regresiva:
for(let contador = 50; contador>0; contador-- ){
    console.log(`Cuenta regresiva en: ${contador}`);
};


//*Usando el arreglo 'nombres':

for(let i = 0; i<nombres.length; i++ ){
    console.log(nombres[i]);
};