const numeros = [1, 2, 3, 4, 5];

numeros[0] = 100;
numeros.push(6);

console.log(numeros.indexOf(4));
console.log(numeros.indexOf(4, 4));
console.log(numeros.includes(7));
console.log(numeros.includes(6));
console.log(numeros.join(' - '));
console.log(numeros);