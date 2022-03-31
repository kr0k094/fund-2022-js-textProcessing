function solve(words, text){

let textArr = text.split(" ");
    words = words.split(", ");

for (const word of words) {
    

for(let i = 0; i < textArr.length; i++){
    let currentWord = textArr[i];
    if(word.length == currentWord.length && currentWord.includes("*")){
        textArr[i] = word;
    }
}

}
console.log(textArr.join(" "));

}
// solve('great',
// 'softuni is ***** place for learning new programming languages'
// )

solve('great, learning',
'softuni is ***** place for ******** new programming languages'
)