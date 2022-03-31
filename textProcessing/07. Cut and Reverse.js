function solve(str) {

let leftHalf = str.slice(0, str.length / 2);
let rightHalf = str.slice(str.length / 2)
leftHalf = leftHalf.split("").reverse().join("");
rightHalf = rightHalf.split("").reverse().join("");
console.log(leftHalf);
console.log(rightHalf);





}
solve('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')