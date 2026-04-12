import produtos from './produtos.json' with { type: "json" };

const container = document.getElementById('lista-produtos');
const carrinho = [];

function carregarProdutos(){
  container.innerHTML = produtos.map(produto => `
    <div class="produto">
      <img src="${produto.img}" alt="${produto.nome}">
      <h3>${produto.nome}</h3>
      <p>Preço: R$${produto.preco.toFixed(2)}</p>
      <button class="botao" onclick="adicionarAoCarrinho(${produto.id})">Coloque no Carinho</button>
    </div>
    `).join('');
}

carregarProdutos();

function adicionarAoCarrinho(id){
  carrinho.push(id);
  console.log(carrinho);
}