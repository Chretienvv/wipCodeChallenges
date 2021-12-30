"use strict";
exports.__esModule = true;
var fs = require("fs");
var inputFile = fs.readFileSync("input.txt").toString().split("\n").map(Number);
// 2000 lines
// Because the submarine is on level 1
var higherNumber = 0;
for (var item in inputFile) {
    var item2 = Number(item);
    var sum = inputFile[item2] + inputFile[item2 + 1] + inputFile[item2 + 2];
    if (isNaN(sum))
        break;
    var sum2 = inputFile[item2 + 1] + inputFile[item2 + 2] + inputFile[item2 + 3];
    if (isNaN(sum2))
        break;
    if (sum2 > sum) {
        higherNumber++;
    }
}
console.log(higherNumber);
