/*
O método slice() é usado quando queremos
extrair uma parte especifica de uma string 
maior, retornando uma nova string.
Ele precisa do parâmetro de busca inicial
e final (esse é opcional)
*/

//string.slice(strartIndex, endIndex);

let message = "Hello, world!";
let greeting = message.slice(0, 5);
let world = message.slice(7);

console.log(greeting); //Hello
console.log(world); //world!

/* usando números negativos ele conta de
trás para frente */

let message1 = "JavaScript is fun!";
let lastWord = message1.slice(-4);

console.log(lastWord); //fun!

//Usando para pegar uma palavra no meio da string

let message2 = "I love JavaScript!";
let language = message2.slice(7, 17);

console.log(language);