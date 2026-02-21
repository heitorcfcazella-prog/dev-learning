/* 
If/Else avalia condições em sequência
switch compara um valor em vários casos
*/

let idade = 18;

if (idade < 18){
  console.log("Menor de Idade");
} else if (idade === 18){
  console.log("Acabou de atingir a maioridade");
} else {
  console.log("Maior de idade");
}

// SWITCH
let diaSemana = 3;

switch (diaSemana){
  case 1:
    console.log("Domingo");
    break
  case 2:
    console.log("Segunda-feira");
    break
  case 3:
    console.log("Terça-feira");
    break
  case 4:
    console.log("Quarta-feira");
    break
  case 5:
    console.log("Quinta-feira");
    break
  case 6:
    console.log("Sexta-feira");
    break
  case 7: 
    console.log("Sábado");
    break
}