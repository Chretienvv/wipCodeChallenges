import * as fs from "fs";

class bingoCard {
  rows: Array<Array<number>>;
  columns: Array<Array<number>>;
  bingoNumbers: Array<Array<number>>;
  constructor(bingoNumbers: Array<Array<number>>) {
    this.bingoNumbers = bingoNumbers;
    this.rows = [];
    this.columns = [];
  }

  calculateRows() {
    for (let row of this.bingoNumbers) {
      this.rows.push(row);
    }
  }

  calculateColumns() {
    let position = 0;
    while (position < 5) {
      let column = this.rows.map((row) => row[position]);
      position++;
      this.columns.push(column);
    }
  }

  checkRows(markedNumbers: Array<number>) {
    let bingo = false;
    for (let row of this.rows) {
      if (row.every((value) => markedNumbers.includes(value))) {
        return (bingo = true);
      }
    }
    return bingo;
  }

  checkColumns(markedNumbers: Array<number>) {
    let bingo = false;
    for (let column of this.columns) {
      if (column.every((value) => markedNumbers.includes(value))) {
        return (bingo = true);
      }
    }
    return bingo;
  }
}

const inputFile: Array<string> = fs
  .readFileSync("test.txt")
  .toString()
  .split("\n")
  .map((line) => line.trim())
  .filter((line) => line.length > 0);

function createBingoCard(inputArray: Array<string>) {
  let bingoCards: Array<bingoCard> = [];
  let bingoCardNumbers: Array<Array<number>> = [];
  let test: Array<Array<number>> = [];
  for (let value of inputArray.slice(1)) {
    let row = value
      .split(" ")
      .filter((item) => item.trim() !== "")
      .map((item) => parseInt(item));
    bingoCardNumbers.push(row);

    if (bingoCardNumbers.length === 5) {
      let card = new bingoCard(bingoCardNumbers);
      card.calculateRows();
      card.calculateColumns();
      bingoCards.push(card);
      bingoCardNumbers = [];
      test = [];
    }
  }
  return bingoCards;
}

function startBingo(bingoCards: bingoCard[]) {
  let markedNumbers: Array<number> = [];
  let winnerStatus: boolean = false;
  let bingoNumberOrder = inputFile[0].split(",").map((item) => parseInt(item));
  let bingoRound = 0;
  while (winnerStatus === false) {
    let currentBingoNumber: number = bingoNumberOrder[bingoRound];
    bingoRound++;
    markedNumbers.push(currentBingoNumber);
    if (bingoRound > 4) {
      for (let bingoCard of bingoCards) {
        let columnBingo = bingoCard.checkColumns(markedNumbers);
        let rowBingo = bingoCard.checkRows(markedNumbers);
        if (rowBingo || columnBingo) {
          console.log("winner");
          let score = calculateScoreOfBingoCard(
            bingoCard,
            currentBingoNumber,
            markedNumbers
          );
          console.log(score);
          winnerStatus = true;
        }
      }
    }

  }
}

const bingoCards: bingoCard[] = createBingoCard(inputFile);
startBingo(bingoCards);

function calculateScoreOfBingoCard(
  winningCard: bingoCard,
  currentBingoNumber: number,
  markedNumbers: Array<number>
) {
  const reducer = (previousValue, currentValue) => previousValue + currentValue;

  let sumOfUnMarkedNumbers = 0;

  for (let numArray of winningCard.bingoNumbers) {
    let goodNumbers = numArray.filter(
      (bingoNumber) => !markedNumbers.includes(bingoNumber)
    );
    if (goodNumbers.length >= 1) {
      let score = goodNumbers.reduce(reducer);
      sumOfUnMarkedNumbers += score;
    }
  }

  return sumOfUnMarkedNumbers * currentBingoNumber;
}
