/*
Math object oferece a possibilidade de realizar calculos
matemáticos complexos
*/

//Math.random() gera um float entre 0 e 1

const randomNum = Math.random();

console.log(randomNum);

//Math.min() pega o menor da lista e Math.max() pega o maior da lista

const smallest = Math.min(1, 5, 3, 9);
console.log(smallest);

const largest = Math.max(1, 5, 3, 9);
console.log(largest);

//Math.ceil() arredonda para o maior int mais próximo e Math.floor() arredonda para o menor int mais próximo
console.log(Math.ceil(4.3)); //5
console.log(Math.floor(4.7)); //4

//Math.floor() e Math.random() é útil para gerar im número aleatório entre dois números inteiros

const max = 10;
const min = 5;
const randomNum2 = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum2);

const randomNumBtw1And20 = Math.floor(Math.random() * 20) + 1;
console.log(randomNumBtw1And20);

//Math.trunc() tira o decimal
console.log(Math.trunc(2.9)); // 2
console.log(Math.trunc(9.1)); // 9

//Math.sqrt() tira a raiz quadrada
//Math.cbrt() tira a raiz cúbica
console.log(Math.sqrt(81));
console.log(Math.cbrt(27));

//Math.abs() tira o negativo do número
console.log(Math.abs(-5));

//Math.pow() preicsa de dois números, o segundo eleva o primeiro
console.log(Math.pow(2, 3));
console.log(Math.pow(8, 2));