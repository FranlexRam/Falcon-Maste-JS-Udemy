//5:55:55
const amigos = ['Alejandro', 'Andres', 'Franlex', 'Arturo', 'Adrian', 'Antonio', 'Angel', 'Roberto'];

for (let i = 0; i < amigos.length; i++) {
    // console.log(amigos[i][0]);

    if(amigos[i][0]!== 'A'){
        console.log('ALTO! Hay un nombre que NO empieza con la letra A.');
        console.log(amigos[i] + ' no empieza con la letra A.');
        break;
    }
    console.log(amigos[i]);
};

//06:03:06