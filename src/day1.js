const { log } = require('console');
const fs = require('fs');

function solution1(input) {
    let moves = fs.readFileSync(input, {encoding: 'utf-8'}).split("\n");
    
    let position = 50;
    let count = 0;

    for (let move of moves) {
        if (move[0] == "L") {
            position = ((position - Number(move.slice(1,))) % 100 + 100) % 100;
        } else {
            position = ((position + Number(move.slice(1,))) % 100 + 100) % 100;
        }

        if (position == 0) count++;
    } 

    console.log(count);
}

function solution2naive(input) {
    let moves = fs.readFileSync(input, {encoding: 'utf-8'}).split("\n");
    
    let currentPosition = 50;
    let count = 0;

    for (let move of moves) {
        let magnitude = Number(move.slice(1,));
        let direction = ((move[0] == "L") ? -1 : 1);

        // console.log(`Moving ${direction == 1 ? "right" : "left"} ${magnitude} ticks.`);

        for (let i = 0; i < magnitude; i++) {
            currentPosition = ((currentPosition + direction) % 100 + 100) % 100;
            if (currentPosition == 0) {
                count++;
            }
        }

        // console.log(`Position after move: ${currentPosition}\n`);
    }

    console.log(`Count: ${count}`);

}

function solution2clever(input) {
    let moves = fs.readFileSync(input, {encoding: 'utf-8'}).split("\n");
    
    let currentPosition = 50;
    let count = 0;

    for (let move of moves) {
        let magnitude = Number(move.slice(1,));
        let direction = ((move[0] == "L") ? -1 : 1);

        let destination = currentPosition + (magnitude * direction);

        if (magnitude >= 100) {
            let timesPastZero = Math.floor(magnitude / 100); 
            count += timesPastZero;
        } 
        
        if (destination == 0) {
            count++;
        }

        if (currentPosition != 0) {
            if (direction == 1 && destination > 100) {
                count++;
            } else if (direction == -1 && destination < 0) {
                count++;
            }
        }

        currentPosition = ((destination % 100) + 100) % 100;
    }
    console.log(`Count: ${count}`);
}

// solution1("../inputs/day1.txt"); // 1132
solution2naive("../inputs/day1.txt"); // 
solution2clever("../inputs/day1.txt"); // 