
import { readFileSync as read } from 'fs';

// eigen oplossing dat nog mooier moet worden
import * as fs from 'fs';
// Het goede antwoord is 6822109
// Least common aan het eind 111000100111 COrating
// Most common aan het einde 011101011011 OX rating
let testFile = ["00100",
    "11110",
    "10110",
    "10111",
    "10101",
    "01111",
    "00111",
    "11100",
    "10000",
    "11001",
    "00010",
    "01010"]

const inputFile: Array<string> = fs.readFileSync("input.txt").toString().split("\n").map(line => line.trim()).filter(line => line.length >0)

function decodeBinary(binary: string) {
    return parseInt(binary, 2)
}

function getLifeSupportRating(oxygenRating: string, CO2Rating: string) {
    return decodeBinary(oxygenRating) * decodeBinary(CO2Rating)
}

let positionCountOX: number = 0
let positionCountCO2: number = 0
let test1: string
let test2:string

function getOxygenRating(inputArray: Array<string>, mostCommonValue: number) {
    let oxygenRating: string
    let outputArray: Array<string> = inputArray.filter(item => {
        let itemBinaryArray = item.split("")
        // console.log(parseInt(itemBinaryArray[positionCountOX]), mostCommonValue)
        if (parseInt(itemBinaryArray[positionCountOX]) == mostCommonValue) { return true }
    })

    console.log(outputArray)
    if (outputArray.length === 1) {
        oxygenRating = outputArray[0]
        test2 = outputArray[0]
        console.log("ox", oxygenRating)
    }
    else  {
        positionCountOX++
        let newMostCommon = getMostCommonValue(outputArray)
        getOxygenRating(outputArray, newMostCommon)
    }
    // console.log(" voor de return", outputArray)
    // console.log(oxygenRating)
    return oxygenRating
}

function getMostCommonValue(inputArray: Array<string>) {
    // console.log("length", inputArray.length)
    let mostCommonValue: number
    let countOfZero: number = 0
    let countOfOne: number = 0
    for (let item of inputArray) {
        if (parseInt(item[positionCountOX]) === 0) { countOfZero++ } else { countOfOne++ }
    }
    // console.log("1", countOfOne, "0", countOfZero)
    if (countOfOne >= countOfZero) {
        mostCommonValue = 1
    } else { mostCommonValue = 0 }
    console.log("Mostcommon", mostCommonValue, " positie", positionCountOX)
    return mostCommonValue
}

function getCO2Rating(inputArray: Array<string>, mostCommonValue: number) {
    let oxygenRating: string
    let outputArray: Array<string> = inputArray.filter(item => {
        let itemBinaryArray = item.split("")
        // console.log(parseInt(itemBinaryArray[positionCountOX]), mostCommonValue)
        if (parseInt(itemBinaryArray[positionCountCO2]) == mostCommonValue) { return true }
    })

    console.log(outputArray)
    if (outputArray.length === 1) {
        oxygenRating = outputArray[0]
        test1 = outputArray[0]
        console.log("co", oxygenRating)
    }
    else  {
        positionCountCO2++
        let newMostCommon = getLeastCommonValue(outputArray)
        getCO2Rating(outputArray, newMostCommon)
    }
    // console.log(" voor de return", outputArray)
    // console.log(oxygenRating)
    return oxygenRating
}


function getLeastCommonValue(inputArray: Array<string>) {
    // console.log("length", inputArray.length)
    let leastCommonValue: number
    let countOfZero: number = 0
    let countOfOne: number = 0
    for (let item of inputArray) {
        if (parseInt(item[positionCountCO2]) === 0) { countOfZero++ } else { countOfOne++ }
    }
    // console.log("1", countOfOne, "0", countOfZero)
    if (countOfOne >= countOfZero) {
        leastCommonValue = 0
    } else { leastCommonValue = 1 }
    // console.log("leastcommon", leastCommonValue, " positie", positionCountCO2)
    return leastCommonValue
}



let oxygenRating = getOxygenRating(inputFile, getMostCommonValue(inputFile))
console.log("ox",oxygenRating)
let co2Rating = getCO2Rating(inputFile, getLeastCommonValue(inputFile))
console.log("co" ,co2Rating)
console.log(test1, test2)
console.log(getLifeSupportRating(test1, test2))







// REduce solution found on the internet
// const input:Array<string> = read('input.txt', { encoding: 'utf8' })
//   .split('\n')
//   .map(line => line.trim())
//   .filter(line => line.length > 0);

// const oxygenGeneratorRating = reduce(input, 0, (counts:Array<number>) => {
//   if (counts[1] > counts[0]) {
//     return 1;
//   } else if (counts[1] < counts[0]) {
//     return 0;
//   } else {
//     return 1;
//   }
// // });

// const co2ScrubberRating = reduce(input, 0, (counts:Array<number>) => {

//   if (counts[0] > counts[1]) {
//     return 1;
//   } else if (counts[0] < counts[1]) {
//     return 0;
//   } else {
//     return 0;
//   }
// });

// // console.log(parseInt(oxygenGeneratorRating, 2) * parseInt(co2ScrubberRating, 2));
// console.log(co2ScrubberRating)
// function reduce(input:Array<string>, place:number, comparator:(counts:Array<number>) => number):string {
//   const counts = [ 0, 0 ];
//   console.log(input)
//   if (input.length === 1) {
//     return input[0];
//   } else {
//     for (const value of input) {
      
//       const bit = +value[place];
//       counts[bit]++;
//     }
//     console.log(counts)
//     const bit = comparator(counts);
//     return reduce(input.filter(value => +value[place] === bit), place + 1, comparator);
//   }
// }
