/*Crie uma função que retorne diferentes mensagens
baseadas na hora do dia (manhã, tarde, noite) */

function saudacao(hora) {
  if (hora >= 6 && hora < 12) {
    return "Bom dia!";
  } 
  else if (hora >= 12 && hora < 18) {
    return "Boa tarde!";
  } 
  else {
    return "Boa noite!";
  }
}

console.log(saudacao(14.37));
