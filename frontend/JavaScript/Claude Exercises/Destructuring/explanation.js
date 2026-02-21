/**
Desestruturação permite extrair valores de objetos e arrays de forma mais limpa e direta
*/

// Desestruturação de OBJs
let pessoa = {
  nome: "João",
  idade: 25,
  cidade: "São Paulo"
};

// Forma tradicional
let nome1 = pessoa.nome;
let idade1 = pessoa.idade;

// Com desestruturação
const { nome, idade, cidade } = pessoa;
console.log(nome);
console.log(idade);

// Com nomes diferentes
const { nome: nomeCompleto, idade: anos} = pessoa;
console.log(nomeCompleto);

// Desestruturação de ARRAYS
let cores = ["Vermelho", "Azul", "Verde"];

const [primeira, segunda] = cores;
console.log(primeira);
console.log(segunda);

//Pulando elementos
const [, , terceira] = cores;
console.log(terceira)

// Em parâmetros de função
function exibirPessoas ({ nome, idade }) {
  console.log(`${nome} tem ${idade} anos`);
}

exibirPessoas(pessoa);