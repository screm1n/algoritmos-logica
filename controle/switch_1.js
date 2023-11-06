let nota = 0;

switch(Math.ceil(nota)) {
    case 10: 
    case 9: 
    case 8: 
    case 7: 
    case 6: 
    case 5:
        console.log('Parabéns');
        break;
    case 0:
    case 1: 
    case 2: 
    case 3: 
    case 4: 
    case 4.9:
        console.log('Reprovado');
        break;
    default:
        console.log('Nota inválida');
}