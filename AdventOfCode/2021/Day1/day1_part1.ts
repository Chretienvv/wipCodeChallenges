import * as fs from 'fs';
let inputFile =fs.readFileSync("input.txt").toString().split("\n")

// Because the submarine is on level 1
let higherNumber = 1

for(let item in inputFile){

    if(inputFile[item] > inputFile[Number(item)-1] && item != "0"){
        console.log(inputFile[item],inputFile[Number(item)-1], "INCREASE")
       higherNumber++
    }else{
        console.log(item, "current", inputFile[item],"last", inputFile[Number(item)-1], "not enough")
    }
}



console.log(higherNumber)
