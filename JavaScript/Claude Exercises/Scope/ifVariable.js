/*Declare uma variável com let dentro de um if e 
tente acessá-la fora do if (observe o erro). */

if (true){
  let variavelIf = "Banana";
  console.log(variavelIf);
};

console.log(variavelIf); // Variável não definida, só existe no If