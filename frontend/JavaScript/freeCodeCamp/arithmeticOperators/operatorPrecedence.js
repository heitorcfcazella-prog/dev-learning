/*
(), *, /, +, - é a procedencia, de maior para menor, se todas 
tiverem o mesmo valor, ela será da esquerda para a direita
*/

const result1 = 2 + 3 * 4;
console.log(result1);

const result2 = (2 + 3) * 4;
console.log(result2);

const result3 = 2 + 6 / 3;
console.log(result3);

//Operadores como o = e ** operam da direita para a esquerda

let a, b;
a = b = 5;
const result4 = 2 ** 3 ** 2;

console.log(result4);
console.log(a, b, a + b);