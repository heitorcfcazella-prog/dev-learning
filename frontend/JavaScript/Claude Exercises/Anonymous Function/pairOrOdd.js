/*Atribua uma função anônima a uma variável que retorne 
se um número é par ou ímpar. */

let parOuImpar = function(n){
  /* if (n % 2 === 0){
    return "Par";
  } else {
    return "Ímpar";
  } */
  return n % 2 === 0 ? "Par" : "Ímpar";
}

console.log(parOuImpar(10));
console.log(parOuImpar(1));