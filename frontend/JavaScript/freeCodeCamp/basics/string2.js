let firstName = "John";
let lastName = "Doe";

let fullname = firstName + " " + lastName; // + é o melhor para concatenação simples
console.log(fullname); //John Doe

let greeting = 'Hello';
greeting += ', John!'; // += é útil para construir a frase passo a passo

console.log(greeting); //"Hello, John!"

/*
Na programação, uma função é um bloco reutilizável
de código que executa uma tarefa específica e pode
ser chamado com várias entradas. Um método,
por outro lado, é um tipo de função que é 
associado a um objeto, ou seja, 
opera com os dados contidos dentro 
esse objeto.
*/

let str1 = 'Hello';
let str2 = 'World';

let result = str1.concat(' ', str2); // é benéfico para concatenar várias strings juntas


console.log(result);