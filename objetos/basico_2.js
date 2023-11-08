const produto = {
    nome: 'iPad',
    preco: 5600,
    desconto: 0.15,
    precoComDesconto: function() {
        return this.preco * (1 - this.desconto); // qnd tiver dentro do objeto usar this.
    }
};

console.log(produto.precoComDesconto());