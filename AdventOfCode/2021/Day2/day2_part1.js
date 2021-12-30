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
for (var _i = 0, inputFile_1 = inputFile; _i < inputFile_1.length; _i++) {
    var item = inputFile_1[_i];
    var splitted = item.split(" ");
    // console.log(splitted);
    if (splitted[0] === 'down')
        submarine.aim += Number(splitted[1]);
    if (splitted[0] === 'forward') {
        submarine.horizontal += Number(splitted[1]);
        submarine.depth += (submarine.aim * Number(splitted[1]));
    }
    if (splitted[0] === 'up')
        submarine.aim -= Number(splitted[1]);
}
submarine.get_answer_day_2(submarine.horizontal, submarine.depth);
