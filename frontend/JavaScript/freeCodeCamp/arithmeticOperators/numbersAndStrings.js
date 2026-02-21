/*
Se você juntar uma string e um número o JS trata com uma
string, já que o + serve para concatenar e para somar
O JS vê o número, converte ela para String e concatena os
dois, isso se chama "coerção de tipo"
*/

const result = 5 + '10';

console.log(result, typeof result);

/*
Com outras operações ele faz o oposto: torna a string em número
*/

const subtractionResult = '10' - 5;
console.log(subtractionResult, typeof subtractionResult);

const multiplicationResult = '10' * 2;
console.log(multiplicationResult, typeof multiplicationResult);

const divisionResult = '20' / 2;
console.log(divisionResult, typeof divisionResult);

/*
Com strings de número ele resulta em NaN
*/

const subtractionResult2 = 'abc' - 5;
console.log(subtractionResult2, typeof subtractionResult2); // NaN

/*
Com booleans o JS trata o true como 1 e o false como 0
*/

const result1 = true + 1;
console.log(result1, typeof result1);

const result2 = false + 1;
console.log(result2, typeof result2);

const result3 = 'Hello' + true;
console.log(result3, typeof result3);

/*
Com null = 0 e undefined = NaN
*/

const result4 = null + 5;
console.log(result4, typeof result4);

const result5 = undefined + 5;
console.log(result5, typeof result5);