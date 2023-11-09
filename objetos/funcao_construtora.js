// Função construtora (classe) -> constrói objeto
// ainda falando sobre objeto
function Data(dia = 1, mes = 1, ano = 2023) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
}

const data1 = new Data();
const data2 = new Data(24, 12, 2023);
const data3 = new Data(11, 10, 2023);

console.log(data1);
console.log(data2);
console.log(data3);