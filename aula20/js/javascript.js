// OPERADORES DE ATRIBUIÇÃO

var x = 1;
var y = 1;

//SOMA 
console.log(x = x + y);
console.log(x += y);

//SUBTRAÇÃO
console.log(x -= y);

//MULTIPLICAÇÃO
console.log(x *= y);

//DIVISÃO
console.log(x /= y);

//LOOPS
console.log(x++);
console.log(x--);

while(x <= 100) {
    console.log(x);
    
    x *= 2;
}

console.log(x);

var j = 5;

while(x > 0) {
    console.log(x);

    x -= j;
    
}