/*Arrow functions são uma sintaxe mais curta para 
escrever funções. Elas são especialmente úteis 
para funções simples e callbacks. */

//Sintaxe tradicional
let somaTradicional = function(a, b){
  return a + b;
};

//Arrow function equivalente
let somaArrow = (a, b) => {
  return a + b;
}

//Arrow function simplificada
let somaArrowSimplificada = (a, b) => a + b;
console.log(somaArrowSimplificada(9, 6));

let dobrar = numero => numero * 2;
console.log(dobrar(5));

let saudacao = () => "Olá!";
console.log(saudacao());