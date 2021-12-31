/* Amazon is hosting a team hackathon.

Each team will have exactly teamSize developers.
A developer's skill level is denoted by skill[i].
The difference between the maximum and minimum skill levels within a team cannot exceed a threshold, maxDiff.
Determine the maximum number of teams that can be formed from the contestants.

Example

skill = [3, 4, 3, 1, 6, 5], teamSize = 3, maxDiff = 2: At most, 2 teams can be formed: [3, 3, 1] and [4, 6, 5]. 
The difference between the maximum and minimum skill levels is 2 in each case, which does not exceed the threshold value of 2.
 */


'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'countMaximumTeams' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY skill
 *  2. INTEGER teamSize
 *  3. INTEGER maxDiff
 */

function countMaximumTeams(skill, teamSize, maxDiff) {
    // Write your code here
    console.log(teamSize)
    console.log(maxDiff)
    const skillOrder = skill.sort();
    let teams = 0;
    console.log(skillOrder)
    for(let i = 0; i < skillOrder.length - teamSize + 1; i++) {
      if((skillOrder[i+teamSize-1] - skillOrder[i]) <= maxDiff) {
        teams++;
        i = i + teamSize - 1;
      }
    }
    return teams;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const skillCount = parseInt(readLine().trim(), 10);

    let skill = [];

    for (let i = 0; i < skillCount; i++) {
        const skillItem = parseInt(readLine().trim(), 10);
        skill.push(skillItem);
    }

    const teamSize = parseInt(readLine().trim(), 10);

    const maxDiff = parseInt(readLine().trim(), 10);

    const result = countMaximumTeams(skill, teamSize, maxDiff);

    ws.write(result + '\n');

    ws.end();
}
