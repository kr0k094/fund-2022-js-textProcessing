function solve(word, text){

let textArr = text.split(" ");
let isFound = false;

for (const el of textArr) {
    let currentEL = el.toLowerCase();

    if(currentEL === word){
        isFound = true;
        break;
    }
    // else{
    //     console.log(`${word} not found !`)
    // }

}

if(isFound){
    console.log(word);
}else{
    console.log(`${word} not found!`);
}


}
solve('javascript',
'JavaScript is the best programming language'
)