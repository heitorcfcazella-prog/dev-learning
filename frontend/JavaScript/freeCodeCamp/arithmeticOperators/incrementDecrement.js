/*
++ adiciona 1 e -- remove 1
prefix (++x ou --x) aumenta ou diminui o valor primeiro e depois 
retorna o valor. Use-o se você quer atualizar o valor 
imediatamente
postfix (x++ ou x--) retorna o valor e depois aumenta ou 
diminui. Use-o se você quiser o valor atual primeiro e só quer
se preocupar com o valor incrementado depois
*/

let x1 = 5;
let x2 = 15;

console.log(++x1);
console.log(x1);
console.log(++x2);
console.log(x2);

let y1 = 6;
let y2 = 16;

console.log(y1++);
console.log(y1);
console.log(y2++);
console.log(y2);