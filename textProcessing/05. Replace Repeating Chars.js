function solve(str){

let arr = str.split('');
let currentEl = "";
let result = [];

for (const el of arr) {

    if(currentEl !== el){
        currentEl = el; 
        result.push(el)
    }
}
console.log(result.join(""));

}
solve('aaaaabbbbbcdddeeeedssaa')