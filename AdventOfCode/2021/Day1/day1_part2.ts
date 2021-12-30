import * as fs from 'fs';
let inputFile =fs.readFileSync("input.txt").toString().split("\n").map(Number) 

let higherNumber = 0

for(let item in inputFile){
    let item2 =Number(item)
    let sum = inputFile[item2] + inputFile[item2+1] + inputFile[item2+2]
    if(isNaN(sum)) break;
    let sum2 = inputFile[item2+1] + inputFile[item2+2] + inputFile[item2+3]
    if(sum2 > sum ){
        higherNumber++
    }
}



console.log(higherNumber)
