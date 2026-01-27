/*
Esses operadores realizam operações nas representações 
binárias de números. JavaScript fornece vários operadores 
bitwise, incluindo AND (&), OR (|), XOR (^), NÃO (~), 
deslocamento esquerdo (<<), e turno direito (>>).
*/

let a = 5; // Binário: 101
let b = 3; // Binário: 011

console.log(a & b); //1 (Binário: 001, já que é a casa que o número iguala)

console.log(a | b); //7 (111), por que pelo menos um dos bits é 1 em cada posição

console.log(a ^ b); //6 (110), se um é 1 os dois viram, se os dois são igauis é 0

console.log(~a); // torna negativo

console.log(a << 1); //10 (1010) adiciona mais um número

console.log( a >> 1); //2 (10) tira um número

