/*
Crie um array de números e use map para criar um novo 
array com cada número elevado ao quadrado.
*/

let arrayOriginal = [1, 2, 3, 4, 5];
let arraySquare = arrayOriginal.map(n => n**2);
console.log(arraySquare);