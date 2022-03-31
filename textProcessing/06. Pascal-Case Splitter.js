function solve(str){

let arr = str.split("");

let pattern = /[A-Z][a-z]+/g;

let words = str.match(pattern);     
let result = [];


for (const word of words) {
    result.push(word);
}

console.log(result.join(", "));




}
solve('SplitMeIfYouCanHaHaYouCantOrYouCan')