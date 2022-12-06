const fs = require("fs");

const dat = fs.readFileSync("input.txt", { encoding: 'utf-8'}).replace(/\r/g, "").split("\n");

let game = [];
let score = 0;
let rock = 1;
let paper = 2;
let sciccor = 3;

dat.forEach(element => {
    element.trim();
    game.push(element.split(' '));
});

for (let index = 0; index < game.length; index++) {
    calcScore(game[index][0],game[index][1])  
}

function calcScore(oppisite, you) {

switch(oppisite) {
// Rock 1, Paper 2, Scissor 3
 //lose 0, draw 3, won 6
// X rock, Y Papers Z Scissor
// A rock, B Papers C Scissor
    case('A'): 
    if(you == 'X')
        score += (3+rock);
    if(you == 'Y')
    score += (6+paper);     
    if(you == 'Z')
    score += sciccor;
    break;

    case('B'):
   
    if(you == 'X')
    score += rock;
    if(you == 'Y')
    score += (3+paper);    
    if(you == 'Z')
    score += (6+sciccor);
    break;
    
    case('C'):

    if(you == 'X')
    score += (6+rock)
    if(you == 'Y')
    score += paper;
    if(you == 'Z')
    score += (3+sciccor)  
    break;
}
}
//12586
console.log(score);