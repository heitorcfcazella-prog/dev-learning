/* 
Parâmetros: são valores que você passa para a função
Retorno: é o valor que a função devolve após executar
*/

// Parâmetros básicos
function apresentar(nome, idade){
  return `Meu nome é ${nome} e tenho ${idade} anos`;
}

console.log(apresentar("Pedro", 20))

// Parâmetros com valores padrão
function saudar(nome = "visitante"){
  return `Olá, ${nome}`;
}

console.log(saudar());
console.log(saudar("Ana"));

//Múltiplos returns (early returns)
function verificarIdade(idade){
  if (idade < 0) return "Idade Inválida";
  if (idade < 18) return "Menor de idade";
  return "Maior de idade";
}

console.log(verificarIdade(25));