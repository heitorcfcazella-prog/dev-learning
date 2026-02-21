/*
Use reduce para multiplicar todos os números de um array.
*/

let multiplicar = [1, 2, 3, 4, 5].reduce((acumulador, atual) => acumulador * atual, 1);
console.log(multiplicar);