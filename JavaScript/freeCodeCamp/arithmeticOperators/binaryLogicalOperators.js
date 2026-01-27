/*
Operadores de lógica binária são úteis para avaliar duas
ou mais expressões e retornar um resultado

&& roda quando os dois são verdadeiros
|| roda quando um dos dois são verdadeiros
*/

const result = true && 'hello';

console.log(result); // hello aparece por que os dois são true

const result1 = 0 && 3;

console.log(result1); //0 aparece por que é o falso

const result2 = false && 0;

console.log(result2); // false aparece por que quando os dois são falsos aparece o primeiro

if (2 < 3 && 3 < 4){
	console.log('O bloco if roda');
} else {
	console.log("O bloco else roda");
}

const result3 = 'This is truthy' || false;

console.log(result3);