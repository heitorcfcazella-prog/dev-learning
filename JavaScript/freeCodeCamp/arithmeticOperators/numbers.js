/*
Number type unifica os inteiros e floats em um unico tipo.
Ele unifica integers, floats, Infinitys, NaN (Not a Number)
*/

const wholeNumber = 50;
const decimalNumber = 4.5;
const negativeNumber = -7;

console.log(typeof wholeNumber);
console.log(typeof decimalNumber);
console.log(typeof negativeNumber);

const infiniteNumber = 1 / 0;
console.log(infiniteNumber);
console.log(typeof infiniteNumber);

const notANumber = 'hello world' / 2;
console.log(notANumber);
console.log(typeof notANumber);

