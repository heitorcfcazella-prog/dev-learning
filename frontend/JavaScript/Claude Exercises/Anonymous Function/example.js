/*Funções anônimas são funções sem nome, 
geralmente atribuídas a variáveis ou usadas como 
argumentos de outras funções. */

// Em uma variável
let multiplicar = function(a, b){
  return a * b;
};

console.log(multiplicar(4, 5));

// Como callback
setTimeout(function() {
  console.log("Executou após 2 segundos");
}, 2000);

//Eventos
let botao = {
  click: function(callback){ callback(); }
};

botao.click(function() {
  console.log("Botão clicado!");
});