/*
Objetos armazenam dados em pares chave-valor, 
permitindo organizar informações relacionadas.
*/


//Criando objeto
let livro = {
  titulo: "1984",
  autor: "George Orwell",
  paginas: 328,
  disponivel: true
};

//Acessando propriedades
console.log(livro.titulo);
console.log(livro.autor);

//modificando propriedades
livro.paginas = 330;
livro.editora = "Companhia das Letras";

//Métodos em objetos
let pessoa = {
  nome: "Carlos",
  idade: 30,
  apresentar: function(){
    return `Olá, sou ${this.nome}`;
  }
}

console.log(pessoa.apresentar());

//Objetos aninhados (obj dentro de obj)
let estudante = {
  nome: "Ana",
  curso: {
    nome: "Engenharia",
    periodo: 5
  }
};

console.log(estudante.curso.nome);

//Ideia: Criar o sistema de uma livraria onde pode ver se tem um livro, pegar ele, devolver e colocar mais livros (forms com cada info)