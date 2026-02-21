/*
Crie uma função que receba um objeto desestruturado e retorne uma string formatada 
*/

let primeirasPalavras = {
  primeiraPalavra: "Papai",
  segundaPalavra: "Mamãe",
  terceiraPalavra: "Nene"
};

function falasBebe({primeiraPalavra, segundaPalavra, terceiraPalavra}) {
  return `As primeiras palavras do bebê foram ${primeiraPalavra}, depois foi ${segundaPalavra} e a terceira foi ${terceiraPalavra}`;
}

console.log(falasBebe(primeirasPalavras));