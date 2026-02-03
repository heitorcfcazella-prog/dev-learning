/*Converta esta função para arrow function: 
function triplo(n) { return n * 3; } */

//Original
let triploOriginal = function(triplo){
  return n * 3;
};

//Modificado
let triploArrow = n => n * 3;
console.log(triploArrow(9));