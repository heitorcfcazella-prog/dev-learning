/*
Faça uma função que tenha uma variável local com 
o mesmo nome de uma global e veja qual é usada.
*/

let variavel = "Olá Mundo!";

function local(){
  let variavel = "Olá Marte!"
}

console.log(variavel);