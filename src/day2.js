const fs = require('fs');

function solution1(path) {
    let idRanges = fs.readFileSync(path, {encoding: 'utf-8'}).split(",");

    let sumOfInvalidIds = 0;

    for (let range of idRanges) {
        let [lowerBound, upperBound] = range.split("-");

        for (let i = Number(lowerBound); i <= Number(upperBound); i++) {
            let iString = String(i);
            if (iString.length % 2 == 0) {
                let firstHalf = iString.slice(0, (iString.length / 2));
                let secondHalf = iString.slice((iString.length / 2), );
                
                if (firstHalf == secondHalf) {
                    sumOfInvalidIds += i;
                };
            };
        }
    }

    console.log(sumOfInvalidIds);
}

function solution2(path) {
    let idRanges = fs.readFileSync(path, {encoding: 'utf-8'}).split(",");

    let sumOfInvalidIds = 0;

    for (let range of idRanges) {
        let [lowerBound, upperBound] = range.split("-");

        console.log(`Range: ${lowerBound} - ${upperBound}`);

        for (let i = Number(lowerBound); i <= upperBound; i++) {
            
            let istr = String(i);
            let shift = 0;

            if (istr.length == 1) {
                continue;
            }
            
            let firstChunk = istr.slice(0, (istr.length / 2) - shift);
            let isValidCode = true;

            do {
                for (let multiplier = 2;; multiplier++) {
                    let repeatedString = firstChunk.repeat(multiplier);
    
                    if (repeatedString.length < istr.length) {
                        continue;
                    } else if (repeatedString.length > istr.length) {
                        break;
                    } else {
                        if (istr == repeatedString) {
                            sumOfInvalidIds += i;
                            isValidCode = false;
                            break;
                        }
                    }
                }

                shift++;
                firstChunk = istr.slice(0, (istr.length / 2) - shift);
            } while (firstChunk != "" && isValidCode);
        }
    }

    console.log(sumOfInvalidIds);
}

// solution1("../inputs/day2.txt");
// solution2("../inputs/day2.txt");