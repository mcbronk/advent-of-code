const fs = require('fs');
const data = fs.readFileSync("input.txt", { encoding: "utf-8" }) 
  .replace(/\r/g, "") 
  .trim() 
  .split("\n"); 

  let cycle = 0;
  let score = 0;
  let value = 1;

  for (let i = 0; i < data.length; i++) {  
     const x = data[i].split(' ');
    if(x[0] == "noop") {
        runCycle();
       
    }
    if(x[0] == "addx") {
        runCycle();
        runCycle();
        value += Number(x[1]);    
    }    
  }
  function runCycle() {
    cycle ++;
    if(cycle == 20 || cycle == 60 || cycle == 100 || cycle == 140 || cycle == 180 || cycle == 220 ) {
        score += value * cycle;
    }  
  }
  console.log("part1: " + score); //17940
