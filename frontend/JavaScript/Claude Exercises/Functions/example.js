/*
Funções são blocos de código reutilizáveis que 
executam tarefas específicas. Você declara (cria) 
a função uma vez e pode invocar (chamar) ela 
quantas vezes precisar.
*/

//DECLARAÇÃO
function saudacao(nome){
  return `Olá, ${nome}!`;
}

//INVOCAÇÃO
let mensagem = saudacao("Maria");
console.log(mensagem);

//Função sem parâmetros
function dizerOi(){
  console.log("Oi!");
}
dizerOi()

//Função com múltiplos parâmetros
function somar(a, b) {
  return a + b;
}
console.log(somar(5, 3));