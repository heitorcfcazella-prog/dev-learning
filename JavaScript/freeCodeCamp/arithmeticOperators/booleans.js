/*
booleanos retornam apenas true ou false, permitindo criar um
sistema baseado em condições.
*/

let isOldEnoughToDrive = true;

if (isOldEnoughToDrive) {
	console.log(`You're old enough to drive`);
} else {
	console.log(`Sorry, you are not old enough to drive`);
}

/*
== é um operador de igualdade, ele é, por exemplo, 
útil para comparar uma string e um número
*/

console.log(5 == "5"); //true

/*
=== é um operador estrito de igualdade,
que não performa comparação entre dois tipos de dados 
diferentes
*/

console.log(5 === '5'); //false

/*
!= é um operador de inequidade, que verifica se um valor
não é igual ao outro. Se igual, false, se não, true
*/

console.log(5 != "5"); //false

/*
!== é um operador estrito de inequidade verifica se um valor
não é igual ao outro SEM performar comparação entre dois tipos
diferentes de dados
*/

console.log(5 !== "5"); //true