/* 
Faça um array de números e calcule a soma de todos usando um loop
*/

let num = [4, 15, 19, 8, 42, 1];
let contador = 0;
let valor = 0;

while (contador < num.length){
  valor += num[contador];
  contador++;
}

console.log(valor);