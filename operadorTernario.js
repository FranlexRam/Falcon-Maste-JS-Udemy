const boleto = 'vip';
let codigoDeAcceso;

boleto === 'vip'
? codigoDeAcceso = 'VIP-123-456'
: codigoDeAcceso = 'REGULAR-456-789';

console.log(codigoDeAcceso);


boleto === 'vip'
? console.log(`Tienes un boleto VIP que corresponde a ${codigoDeAcceso}`)
: console.log(`Tienes un boleto regular. Corresponde a ${codigoDeAcceso}`);