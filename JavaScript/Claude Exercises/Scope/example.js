/*
Global: Acessível em todo o código
Local(função): Acessível apenas dentro da função
Bloco: Acessível apenas dentro de {} (com let/const) 
*/

let varGlobal = "Acessível em todo lugar";

function testarEscopo(){
  let varLocal = "Só existe aqui";
  console.log(varGlobal);
  console.log(varLocal);
}

testarEscopo();

if (true) {
  let varBloco = "Só no if";
  var varSemBloco = "var ignota bloco";
  console.log(varBloco);
}

console.log(varSemBloco);

let nome = "João";

function mudarNome(){
  let nome = "Maria";
  console.log(nome)
}

mudarNome()
console.log(nome);