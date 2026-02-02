/* Simule um array e use uma função anônima 
para filtrar números maiores que 10. */

const numeros = [4, 20, 170, 9, 12, 17, 1]

let filtrado = numeros.filter(function(numero) {
  return numero > 10;
})

console.log(filtrado);