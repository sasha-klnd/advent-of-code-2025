const fs = require("fs");

function solution1(path) {
    let batteryBanks = fs.readFileSync(path, {encoding: 'utf-8'}).split("\n").map(line => {return line.trim()});

    let totalScore = 0;

    for (let bank of batteryBanks) {
        let largestFirstDigit = 0;
        let largestSecondDigit = 0;
        let largestIndex = 0;

        for (let i = 0; i < (bank.length - 1); i++) {
            if (Number(bank[i]) > largestFirstDigit) {
                largestFirstDigit = Number(bank[i]);
                largestIndex = i;
            }
        }

        for (let i = largestIndex + 1; i < bank.length; i++) {
            if (Number(bank[i]) > largestSecondDigit) {
                largestSecondDigit = Number(bank[i]);
            }
        }

        totalScore += Number("" + largestFirstDigit + largestSecondDigit);
    }

    console.log(totalScore);
}

function solution2(path) {
    let batteryBanks = fs.readFileSync(path, {encoding: 'utf-8'}).split("\n").map(line => {return line.trim()});

    let totalScore = 0;

    for (let bank of batteryBanks) {
        console.log(bank);
    }

    console.log(totalScore);
}

// solution1("../inputs/day3.txt");
// solution2("../inputs/day3mini.txt");