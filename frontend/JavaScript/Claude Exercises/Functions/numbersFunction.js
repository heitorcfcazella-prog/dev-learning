// Crie uma função que receba dois números e retorne o maior deles.

function maior(a, b){
  if (a > b){
    return `${a} é maior do que ${b}`;
  } else{
    return `${b} é maior do que ${a}`;
  }
}

console.log(maior(9, 3));