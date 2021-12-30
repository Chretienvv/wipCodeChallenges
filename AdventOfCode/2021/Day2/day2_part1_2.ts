import * as fs from 'fs';

let inputFile =fs.readFileSync("input.txt").toString().split("\n")

class Submarine{
    depth: number;
    horizontal: number;
    aim: number;

    constructor(depth:number, horizontal:number, aim:number){
        this.depth = depth
        this.horizontal = horizontal
        this.aim = aim
    }

    get_answer_day_2(depth:number, horizontal:number){
        console.log(depth)
        console.log(horizontal)
        console.log(horizontal * depth) 
    }

    
}

let submarine = new Submarine(0,0,0)

for(let item of inputFile){
    let splitted = item.split(" ")
    // console.log(splitted);

    if(splitted[0] === 'down') submarine.aim += Number(splitted[1]);
    
    if(splitted[0] === 'forward') {
        submarine.horizontal += Number(splitted[1]);
        submarine.depth += (submarine.aim * Number(splitted[1]))
    }
    if(splitted[0] === 'up') submarine.aim -= Number(splitted[1]);
  
}
submarine.get_answer_day_2(submarine.horizontal, submarine.depth )
    