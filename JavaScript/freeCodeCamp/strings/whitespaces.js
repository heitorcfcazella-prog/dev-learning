/*
trim() é usado para remover espaços vazios (espaços, tabs e quebras
de linhas) do inicio e fim de uma string
Espaços entre palavras são deixadas
*/

let message = "			Hello! 			";
console.log(message);
let trimmedMessage = message.trim();
console.log(trimmedMessage);

/*
trimStart() tira os espaços vazios do começo da string
*/
let greeting = "	Hello!	";
console.log(greeting);
let trimmedStart = greeting.trimStart();
console.log(trimmedStart);

/*
trimEnd() tira os espaços vazios do final da strinh
*/
let trimmedEnd = greeting.trimEnd();
console.log(trimmedEnd);