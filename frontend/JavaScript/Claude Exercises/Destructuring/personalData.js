/*
Crie um objeto com informações pessoais e desestruture 3 propriedades
*/

let pessoa = {
  nome: "Jorge",
  idade: 33,
  cidade: "Santos"
};

const { nome, idade, cidade} = pessoa;
console.log(nome);
console.log(cidade);
console.log(`${nome} tem ${idade} anos e mora em ${cidade}.`);