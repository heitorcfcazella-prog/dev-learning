/* Os operadores unários atuam em um único operando para 
executar operações como conversão de tipo, manipulação de valor 
ou verificação de determinadas condições. */

// unary plus converte o operando em um número

const str = '42';
const strToNum = +str;

console.log(strToNum);
console.log(typeof str);
console.log(typeof strToNum);

// unary negative convrte para número e inverte o sinal

const strToNegativeNum = -str;
const str2 = '-12';
const strToNegativeNum2 = -str2;

console.log(strToNegativeNum);
console.log(typeof str);
console.log(typeof strToNum);
console.log(strToNegativeNum2);
console.log(typeof str2);

// ! inverte o valor booleano do operando

let isOnline = true;
console.log(!isOnline);

let isOffline = false;
console.log(!isOffline);

// ~ torna os 1 e 0 da representação binária em 0 e 1

const num = 5;
console.log(~num);

// void avalia uma expressão e retorna undefined

const result = void (2 + 2);

console.log(result);