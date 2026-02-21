/*
Adicione um método ao objeto que retorne uma 
descrição completa do carro.
*/

carro = {
  marca: "General Motors (GM)",
  modelo: "Opala Super Sport",
  ano: 1971,
  cor: "Preto",
  apresentar: function(){
    return `O carro ${this.modelo} foi produzido pela ${this.marca} no ano de ${this.ano} e uma de suas cores era ${this.cor}`;
  }
};
 
console.log(carro.apresentar());