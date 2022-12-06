
const fs = require("fs");
const dat = fs.readFileSync("input.txt", { encoding: 'utf-8'}).replace(/\r/g, "").split("\n");

let game = [];
let score = 0;

dat.forEach(element => {
    element.trim();
    game.push(element.split(' '));
});

for (let index = 0; index < game.length; index++) {
 //   console.log(game[index][0]);
    calcScore(game[index][0],game[index][1])
   
}
function calcScore(opposite, you) {

switch(opposite) {
//Same as part 1 but score is the output i want. Lose, tie, win..
    case('A'): 
        if(you == 'X')
            score += 3
        if(you == 'Y')
        score += 4   
        if(you == 'Z')
        score += 8
    break;

    case('B'):  
        if(you == 'X')
            score += 1
        if(you == 'Y')
           score += 5   
        if(you == 'Z')
           score += 9
    break;
    
    case('C'):

        if(you == 'X')
        score += 2
        if(you == 'Y')
        score += 6
        if(you == 'Z')
            score += 7
    break;
}
}
//13193
console.log(score);
