const name = "Alice";
const greeting = `Hello, ${name}!`;

console.log(greeting);

/*
`` é usado para facilitar a manipulação 
da string e adição de códigos dentro dela
*/

const age = 25;
const message = `My name is ${name} and I am ${age} years old.`;
console.log(message);
//muito mais profissional :o

let poem = `Roses are red,
Violets are blue,
JavaScript is fun,
And so are you.`
console.log(poem);
/* podemos escrever em várias linhas
que o próprio código já pula,
sem precisar do \n */

const song = "Bohemian Rhapsody";
const score = 9.5;
const highestScore = 10;
const output = `One of my favorite songs is 
"${song}". I rated it ${score /highestScore * 100}%.`;
console.log(output);