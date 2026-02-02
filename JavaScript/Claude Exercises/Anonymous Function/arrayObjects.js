const produtos = [
  {nome: "Caneca", preco: 15},
  {nome: "Lápis", preco: 1.50},
  {nome: "Mochila", preco: 100},
  {nome: "Borracha", preco: 2.50},
];

let menorQue10 = produtos.filter(function(item){
  return item.preco < 10;
});

console.log(menorQue10);