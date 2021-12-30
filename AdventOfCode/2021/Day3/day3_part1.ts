import * as fs from 'fs';

let inputFile = fs.readFileSync("input.txt").toString().split("\n")

class Submarine {
    depth: number;
    horizontal: number;
    aim: number;

    constructor(depth: number, horizontal: number, aim: number) {
        this.depth = depth
        this.horizontal = horizontal
        this.aim = aim
    }

    get_answer_day_2(depth: number, horizontal: number) {
        console.log(depth)
        console.log(horizontal)
        console.log(horizontal * depth)
    }


}

let submarine = new Submarine(0, 0, 0)

function getPowerConsumption(gamma, epsilon) {
    console.log(gamma * epsilon)
}

function decodeBinary(binary) {
    return parseInt(binary, 2)
}

function toBinary(decimal: number) {
    return decimal.toString(2)
}

interface positionCountObject {
    "0": number,
    "1": number,
    "2": number,
    "3": number,
    "4": number,
    "5": number,
    "6": number,
    "7": number,
    "8": number,
    "9": number,
    "10": number,
    "11": number,
}


let objectOfOnes: positionCountObject = {
    "0": 0,
    "1": 0,
    "2": 0,
    "3": 0,
    "4": 0,
    "5": 0,
    "6": 0,
    "7": 0,
    "8": 0,
    "9": 0,
    "10": 0,
    "11": 0,
}
let objectOfZeros: positionCountObject = {
    "0": 0,
    "1": 0,
    "2": 0,
    "3": 0,
    "4": 0,
    "5": 0,
    "6": 0,
    "7": 0,
    "8": 0,
    "9": 0,
    "10": 0,
    "11": 0,
}

let gammaBinary: string = ""
let epsilonBinary: string = ""

for (let code of inputFile) {
    let codeArray = code.split("")
    for (let position in codeArray) {
        if (codeArray[position] === "0") objectOfZeros[position] += 1
        if (codeArray[position] === "1") objectOfOnes[position] += 1
    }
}

calculateGammaAndEpsilon(objectOfOnes, objectOfZeros)
function calculateGammaAndEpsilon(objectOfOnes, objectOfZeros) {
    for (let [key, value] of Object.entries(objectOfOnes)) {
        if (objectOfOnes[key] > objectOfZeros[key]) {
            gammaBinary += "1"
            epsilonBinary += "0"
        }
        else {
            gammaBinary += "0"
            epsilonBinary += "1"
        }
    }
    console.log("gamma", gammaBinary)
    console.log("epsilon", epsilonBinary)
}
getPowerConsumption(decodeBinary(gammaBinary), decodeBinary(epsilonBinary))
