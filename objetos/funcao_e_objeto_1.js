function criarData(dia, mes, ano) {
    return {
        dia: dia,
        mes: mes,
        ano: ano,
        exibir: function() {
            return `${this.dia}/${this.mes}/${this.ano}`;
        }
    };
}

const data1 = criarData(11, 12, 2001);
const data2 = criarData(16, 1, 2023);
const data3 = criarData(24, 10, 2020);

console.log(data1.exibir())
console.log(data2.exibir())
console.log(data3.exibir())