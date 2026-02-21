/*
Métodos de arrays são funções que manipulam 
ou transformam arrays de diversas formas.
*/

let numeros = [1, 2, 3];

// PUSH - adiciona no final
numeros.push(4);
console.log(numeros);

//POP - remove do final
let ultimo = numeros.pop();
console.log(ultimo);
console.log(numeros);

// SHIFT - remove do início
let primeiro = numeros.shift();
console.log(primeiro);
console.log(numeros);

// UNSHIFT - adiciona no início
numeros.unshift(0);
console.log(numeros);

// MAP - transforma cada elemento
let dobrados = numeros.map(n => n * 2);
console.log(dobrados);

// FILTER - filtra elementos
let pares = [1, 2, 3, 4, 5, 6].filter(n => n % 2 === 0);
console.log(pares);

// REDUCE - reduz a um único valor
let soma = [1, 2, 3, 4].reduce((acumulador, atual) => acumulador + atual, 0);
console.log(soma)

// FOREACH - executa função para cada elemento
let sequencia =[1, 2, 3].forEach(n => console.log(n * 2));