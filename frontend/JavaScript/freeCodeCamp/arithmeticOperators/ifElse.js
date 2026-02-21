if (null){
	console.log("This will not run.");
}

if ("freeCodeCamp"){
	console.log("This will run.");
}

const age = 15;

if (age >= 18){ 
	console.log("Você pode votar!");
} else{
	console.log("Você não pode votar!");
}

const score = 87;

if (score >= 90){
	console.log('You got an A');
} else if (score >= 80) {
	console.log('You got an B');
} else if (score >= 70) {
	console.log('You got an C');
} else {
	console.log('You failed" You need to study more!')
}

/* if/else reduzido (termary operator): 
condition ? expressionIfTrue : expressionIfFalse;
*/

const temperature = 30;
const weather = temperature > 25 ? 'sunny' : 'cool';

console.log(`It's a ${weather} day!`)