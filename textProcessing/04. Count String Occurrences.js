function solve(text, word){

let arr = text.split(" ");
let count = 0

for (const el of arr) {
    if(el === word) count++;
}
console.log(count);

}
solve('This is a word and it also is a sentence',
'is'
)