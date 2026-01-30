/*
Crie um programa que receba uma nota (0-10) 
e exiba se o aluno está "Reprovado" (< 6), 
"Recuperação" (6-7) ou "Aprovado" (> 7).
*/

let nota = 6;

if (nota < 6){
  console.log("Reprovado");
} else if (nota > 7){
  console.log("Aprovado");
} else{
  console.log("Recuperação");
}