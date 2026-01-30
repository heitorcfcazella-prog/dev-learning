/*
Crie um array de nomes e use for...of para 
exibir cada nome em maiúsculas.
*/

let nomes = ["Heitor", "Heloísa", "Ana", "Emily", "Hugo"];
for (let nome of nomes){
  nome = nome.toUpperCase();
  console.log(nome);
}