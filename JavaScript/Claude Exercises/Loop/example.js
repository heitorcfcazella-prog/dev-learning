/*
Laços (ou loops) repetem blocos de código múltiplas vezes, 
economizando tempo e linhas de código.

- for: Quando você sabe quantas vezes vai repetir
- while: Repete enquanto uma condição for verdadeira
- do...while: Executa pelo menos uma vez, depois verifica a 
condição
- for...of: Itera sobre valores de arrays
- for...in: Itera sobre propriedades de objetos
*/


//FOR
for (let i = 1; i <= 5; i++){
  console.log("Número: " + i);
}

//WHILE
let contador = 0;
while (contador < 3){
  console.log("Contador: " + contador);
  contador++;
}

//DO...WHILE - executa pelo menos uma vez

let numero = 10;
do {
  console.log("Executou uma vez");
  numero++;
} while (numero < 5);

// FOR...OF - para arrays
let frutas = ["maçã", "banana", "pera", "uva", "laranja"];
for (let fruta of frutas){
  console.log(fruta);
}

//FOR...IN - para objetos
let pessoa = {nome: "João", idade: 25};
for (let chave in pessoa){
  console.log(`${chave}: ${pessoa[chave]}`);
}