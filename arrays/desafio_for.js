// desafio começar do penultimo em forma decrescente pulando de 2 em 2
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let numeros = 9; numeros >= 1; numeros-- && numeros--) {
    console.log(numeros);
}

//

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let i = num.length -2; i >= 0; i -= 2) {
    console.log(num[i]);
}