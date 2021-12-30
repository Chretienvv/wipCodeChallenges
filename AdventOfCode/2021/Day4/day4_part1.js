"use strict";
exports.__esModule = true;
var fs = require("fs");
var bingoCard = /** @class */ (function () {
    function bingoCard(bingoNumbers) {
        this.bingoNumbers = bingoNumbers;
        this.rows = [];
        this.columns = [];
    }
    bingoCard.prototype.calculateRows = function () {
        for (var _i = 0, _a = this.bingoNumbers; _i < _a.length; _i++) {
            var row = _a[_i];
            this.rows.push(row);
        }
    };
    bingoCard.prototype.calculateColumns = function () {
        var position = 0;
        while (position < 5) {
            var column = this.rows.map(function (row) { return row[position]; });
            position++;
            this.columns.push(column);
        }
    };
    bingoCard.prototype.checkRows = function (markedNumbers) {
        var bingo = false;
        for (var _i = 0, _a = this.rows; _i < _a.length; _i++) {
            var row = _a[_i];
            if (row.every(function (value) { return markedNumbers.includes(value); })) {
                return (bingo = true);
            }
        }
        return bingo;
    };
    bingoCard.prototype.checkColumns = function (markedNumbers) {
        var bingo = false;
        for (var _i = 0, _a = this.columns; _i < _a.length; _i++) {
            var column = _a[_i];
            if (column.every(function (value) { return markedNumbers.includes(value); })) {
                return (bingo = true);
            }
        }
        return bingo;
    };
    return bingoCard;
}());
var inputFile = fs
    .readFileSync("test.txt")
    .toString()
    .split("\n")
    .map(function (line) { return line.trim(); })
    .filter(function (line) { return line.length > 0; });
function createBingoCard(inputArray) {
    var bingoCards = [];
    var bingoCardNumbers = [];
    var test = [];
    for (var _i = 0, _a = inputArray.slice(1); _i < _a.length; _i++) {
        var value = _a[_i];
        var row = value
            .split(" ")
            .filter(function (item) { return item.trim() !== ""; })
            .map(function (item) { return parseInt(item); });
        bingoCardNumbers.push(row);
        if (bingoCardNumbers.length === 5) {
            var card = new bingoCard(bingoCardNumbers);
            card.calculateRows();
            card.calculateColumns();
            bingoCards.push(card);
            bingoCardNumbers = [];
            test = [];
        }
    }
    return bingoCards;
}
function startBingo(bingoCards) {
    var markedNumbers = [];
    var winnerStatus = false;
    var bingoNumberOrder = inputFile[0].split(",").map(function (item) { return parseInt(item); });
    var bingoRound = 0;
    while (winnerStatus === false) {
        var currentBingoNumber = bingoNumberOrder[bingoRound];
        bingoRound++;
        markedNumbers.push(currentBingoNumber);
        if (bingoRound > 4) {
            for (var _i = 0, bingoCards_1 = bingoCards; _i < bingoCards_1.length; _i++) {
                var bingoCard_1 = bingoCards_1[_i];
                var columnBingo = bingoCard_1.checkColumns(markedNumbers);
                var rowBingo = bingoCard_1.checkRows(markedNumbers);
                if (rowBingo || columnBingo) {
                    console.log("winner");
                    var score = calculateScoreOfBingoCard(bingoCard_1, currentBingoNumber, markedNumbers);
                    console.log(score);
                    winnerStatus = true;
                }
            }
        }
    }
}
var bingoCards = createBingoCard(inputFile);
startBingo(bingoCards);
function calculateScoreOfBingoCard(winningCard, currentBingoNumber, markedNumbers) {
    var reducer = function (previousValue, currentValue) { return previousValue + currentValue; };
    var sumOfUnMarkedNumbers = 0;
    for (var _i = 0, _a = winningCard.bingoNumbers; _i < _a.length; _i++) {
        var numArray = _a[_i];
        var goodNumbers = numArray.filter(function (bingoNumber) { return !markedNumbers.includes(bingoNumber); });
        if (goodNumbers.length >= 1) {
            var score = goodNumbers.reduce(reducer);
            sumOfUnMarkedNumbers += score;
        }
    }
    return sumOfUnMarkedNumbers * currentBingoNumber;
}
