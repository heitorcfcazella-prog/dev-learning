/*
replace() permite achar uma palavra ou caractere em uma
string e substitui-la por outro, retornando uma nova
string no processo. 
Ele também é case-sensitive.
Ele só ira substituir a primeira aparição desse valor na
string, só irá trocar todo se for replaceAll()

string.replace(searchValue, newValue);
*/

let text = "I love JavaScript!";
console.log(text);
let newText = text.replace("JavaScript", "coding");
console.log(newText);
let updatedText = text.replace("javascript", "coding");
console.log(updatedText);