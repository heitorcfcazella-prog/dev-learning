/*
Arrays são listas ordenadas que armazenam diversos valores
Cada valor tem um índice, que começa em 0
*/

let numero = [1, 2, 3, 4, 5];
let frutas = ["maçã", "banana", "laranja"];
let misto = [1, "txt", true, {padre: "Paulo Ricardo"}];

console.log(frutas[0]);
console.log(frutas[2]);

//Modificando elementos
frutas[1] = "morango";
console.log(frutas);

//Quantos valores tem
console.log(frutas.length);

//Arrays multidimensionais
let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(matriz[1][2]);