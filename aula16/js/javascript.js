// OPERADORES LÓGICOS

var idade = 16;
var nome = 'Elvis';

if(nome == 'Elvis' && idade == 16) {
    console.log('O Elvis pode entrar na aula de Física');
} else {
    console.log('Este não é o Elvis');
}

if(1 == 1 && 3 > 2 && true) {
    console.log('Passou');
}

if((1 == 1 && 3 > 2) && true) {
    console.log('Passou');
} else if (nome == 'Elvis' && idade >= 14) {
    console.log('Aqui passa!');
}
