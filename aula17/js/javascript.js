// OPERADORES LÓGICOS ||

var idade = 16;
var nome = 'Elvis';

if(nome == 'Elvis' || idade > 14) {
    console.log('Pode entrar na aula de Física');
} else {
    console.log('Não pode entrar!')
}

if(nome == 'Elvis' && 15 > 20 || 10 == 10) {
    console.log('Testando');
} else {
    console.log('Não entrou!');
}