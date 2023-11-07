function executar(funcao) {
    if(typeof funcao === "function") {
        console.log(funcao(90, 20));
    }
}

function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

executar(somar);
executar(subtrair);