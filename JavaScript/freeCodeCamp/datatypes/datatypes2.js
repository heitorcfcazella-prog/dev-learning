//number: integers e floats
let num = 12;
//float: número decimal
let float = 3.14;
//string: texto
let str = "Abacate";
//boolean: verdadeiro ou falso
let boo = false
/*undefined ou null: undefined é quando a variavel foi declarada, 
mas não recebeu um valor
null: valor vazio ou intencionalmente com esse valor
*/
let und;
//object: coleção de valores chave
let pet = {
	name: "Fluffy",
	age: 3,
	type: "dog"
};
/*symbol: é um valor único e imutável que pode ser usado como
identificador para propriedades de objetos
*/
const crypticKey1 = Symbol("saltNpepeer");
const crypticKey2 = Symbol("saltNpepeer");
console.log(crypticKey1 === crypticKey2);

//BigInt: number tão grande de coloca n no final
bigint = 7675642546789868787574n

/*Váriaveis são declaradas usando let (se forem ser alteradas)
ou const (se forem um valor imutável)
usamos '='' para atribuir um valor

seus nomes devem ser descritivos e com significados, usando o
método camelCase. Ela pode começar com _ ou $, mas não pode ter
espaços ou palavras chaves que tem uso no próprio código
*/

let lastName = "Correa";
const cityName = "São Paulo";

var x;