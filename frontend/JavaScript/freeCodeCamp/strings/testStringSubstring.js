/*
se o método includes() achar um caractere
ou palavra especifica no input do
usuario, ele retorna True
*/

let phrase = "JavaScript is awesome!";
let result1 = phrase.includes("awesome");
let result2 = phrase.includes("Awesome");

console.log(result1, result2);

/* o segundo método busca a partir de uma parte
especifica */
let text = "Hello, JavaScript world!";
let result3 = text.includes("JavaScript", 7);

console.log(result3);

