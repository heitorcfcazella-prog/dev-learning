/*
Crie uma variável global e tente acessá-la dentro 
e fora de uma função.
*/

let global = "Olá mundo!";

console.log(global);

function local(){
  console.log(global);
}