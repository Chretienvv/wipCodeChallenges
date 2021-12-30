"use strict";
exports.__esModule = true;
var fs = require("fs");
var inputFile = fs.readFileSync("input.txt").toString().split("\n");
var Submarine = /** @class */ (function () {
    function Submarine(depth, horizontal, aim) {
        this.depth = depth;
        this.horizontal = horizontal;
        this.aim = aim;
    }
    Submarine.prototype.get_answer_day_2 = function (depth, horizontal) {
        console.log(depth);
        console.log(horizontal);
        console.log(horizontal * depth);
    };
    return Submarine;
}());
var submarine = new Submarine(0, 0, 0);
function getPowerConsumption(gamma, epsilon) {
    console.log(gamma * epsilon);
}
function decodeBinary(binary) {
    return parseInt(binary, 2);
}
function toBinary(decimal) {
    return decimal.toString(2);
}
var objectOfOnes = {
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
    "11": 0
};
var objectOfZeros = {
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
    "11": 0
};
var gammaBinary = "";
var epsilonBinary = "";
for (var _i = 0, inputFile_1 = inputFile; _i < inputFile_1.length; _i++) {
    var code = inputFile_1[_i];
    var codeArray = code.split("");
    for (var position in codeArray) {
        if (codeArray[position] === "0")
            objectOfZeros[position] += 1;
        if (codeArray[position] === "1")
            objectOfOnes[position] += 1;
    }
}
calculateGammaAndEpsilon(objectOfOnes, objectOfZeros);
function calculateGammaAndEpsilon(objectOfOnes, objectOfZeros) {
    for (var _i = 0, _a = Object.entries(objectOfOnes); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        if (objectOfOnes[key] > objectOfZeros[key]) {
            gammaBinary += "1";
            epsilonBinary += "0";
        }
        else {
            gammaBinary += "0";
            epsilonBinary += "1";
        }
    }
    console.log("gamma", gammaBinary);
    console.log("epsilon", epsilonBinary);
}
getPowerConsumption(decodeBinary(gammaBinary), decodeBinary(epsilonBinary));
