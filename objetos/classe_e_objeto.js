class Data {
    dia = 24
    mes = 1
    ano = 1999

    constructor(dia = 24, mes = 1, ano = 1999) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }

    exibir() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
}

const data1 = new Data();
data1.dia = 11;
data1.mes = 11;
data1.ano = 2011;
console.log(data1)

const data2 = new Data(31, 12, 2023);
console.log(data2);

console.log(typeof data1);
console.log(typeof Data);