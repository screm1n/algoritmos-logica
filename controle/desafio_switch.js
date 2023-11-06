let nota = 5.5;

switch (Math.floor(nota)) {
    case 10: console.log('Você tirou nota A+'); break;
    case 9: console.log('Você tirou nota A'); break;
    case 8: console.log('Você tirou nota B+'); break;
    case 7: console.log('Você tirou nota B'); break;
    case 6: console.log('Você tirou nota C+'); break;
    case 5: console.log('Você tirou nota C'); break;
    case 4: console.log('Você tirou nota D+'); break;
    case 3: console.log('Você tirou nota D'); break;
    case 2: console.log('Você tirou nota E+'); break;
    case 1: console.log('Você tirou nota E'); break;
    case 0: console.log('Você tirou nota F'); break;
    default: console.log('Nota inválida')
}

// ou