/* 
ASCII é um sistema de de codificação de caracteres
usado em computadores para representar texto, 
atribuindo um valor numérico para cada 
caractere, por exemplo: 
A - 65
a - 97
Em JS você pode acessar facilmente o código
ASCII de um caractere usando charCodeAt()
*/

let letter = "A";
console.log(letter.charCodeAt(0)); //65
let symbol = "!";
console.log(symbol.charCodeAt(0)); //33

/*fromCharCode permite mostrar o caractere
correspondente de um código ASCII
*/

let char = String.fromCharCode(65);
console.log(char);

/* 
Esses métodos são particularmente úteis quando
você precisa manipular ou comparar caracteres
com base em seus valores ASCII.

Por exemplo, você pode usar charCodeAt() 
para verificar se um caractere é maiúsculo, 
minúsculo ou um dígito comparando 
seu valor ASCII.

Por outro lado, fromCharCode()pode ser usado 
para gerar dinamicamente caracteres a partir 
de seus códigos ASCII.
*/