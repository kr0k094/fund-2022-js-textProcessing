function solve(str){

let arr = str.split("\\");

let link = arr.pop().split(".");
let extension = link.splice(-1);
let name = link.join(".");
console.log(`File name: ${name}`);
console.log(`File extension: ${extension}`);



}
solve('C:\\Internal\\training-internal\\Template.pptx')