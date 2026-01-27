/* substrings são uma sequência de caracteres
(palavras) que aparecem em uma string maior,
como "hello" e "world" em "hello world"
para localizarmos elas usamos o método
indexOf(), que retorna a posição dela na 
string, se não acha-la ele vai retornar -1
*/

let sentence1 = "JavaScript is awesome!";
let position1 = sentence1.indexOf("awesome!");
let position2 = sentence1.indexOf("fantastic!");
console.log(position1); // 14
console.log(position2); // -1

let sentence2 = "JavaScript is awesome, and JavaScript is powerful!";
let position3 = sentence2.indexOf("JavaScript", 10);
console.log(position3);
/* podemos especificar onde ele deve começar a
busca, começando no décimo caractere e analisando
até chegar no index 27 */

console.log("freeCodeCamp".indexOf("F"));
// -1, por que é case sensitive

