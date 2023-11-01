const hora = 17;
const saudacao = 
    hora <= 11 ? "Bom dia" : (hora <= 17 ? "Boa tarde" : "Boa noite"); 
    // se um ou outro for falso, retorna boa noite
console.log(saudacao);