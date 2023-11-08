const cliente = {
    codigo: 1214,
    nome: 'Ana',
    vip: true,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 123,
        complemento: 'Apto 201',
        pontosRef: [
            'Hospital',
            'Shopping'
        ]
    },
    nomeFilhos: ['Bia', 'Carlos', 'Gabriel']
};

console.log(cliente.endereco.logradouro);
console.log(cliente.endereco.pontosRef[0]);
console.log(cliente.nomeFilhos[2]);