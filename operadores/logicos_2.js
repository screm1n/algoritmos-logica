const t1 = true;
const t2 = true;

let comprarTV50 = t1 && t2; // and
console.log('Vamos comprar a TV 50"? ' + (comprarTV50)); 

let comprarTV32 = t1 !== t2; // xor
console.log('Vamos comprar a TV 32"? ' + (comprarTV32)); 

let tomarSorvete = t1 || t2; // or
console.log('Vamos comprar sorvete"? ' + (tomarSorvete)); 

let ficarEmCasa = !tomarSorvete; // not
console.log('Vamos ficar em casa? ' + (ficarEmCasa)) 