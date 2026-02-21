/*
Dado o array [10, 20, 30, 40], desestruture apenas o primeiro e último elemento
*/

let nums = [10, 20, 30, 40];

const [primeiro, , , ultimo] = nums;
console.log(primeiro, ultimo);