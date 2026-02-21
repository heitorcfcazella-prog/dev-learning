import produtos from './produtos.json' with { type: "json" };

const container = document.getElementById('lista-produtos');

function carregarProdutos(){
  container.innerHTML = produtos.map(produto => `
    <div class=produto>
      <img src="${produto.img}" alt="${produto.nome}">
      <h3>${produto.nome}</h3>
      <p>Preço: R$${produto.preco.toFixed(2)}</p>
      <button>Coloque no Carinho</button>
    </div>
    `).join('');
}

carregarProdutos();