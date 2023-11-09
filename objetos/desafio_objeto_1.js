// objeto data 
// atributos: (dia/mes/ano)
// metodo: exibir -> "dia/mes/ano"

const data = {
    dia: 24,
    mes: 'dezembro',
    ano: 2023,
    exibir: function() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
};

data.dia = 16;

console.log(data.exibir());
console.log(data.mes);

//