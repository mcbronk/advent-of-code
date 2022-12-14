const fs = require('fs');
const data = fs.readFileSync("input.txt", { encoding: "utf-8" }) 
  .replace(/\r/g, "") 
  .trim() 
  .split("\n"); 

  let cycle = 0;
  let value = 1;
  let res2 = "";

  for (let i = 0; i < data.length; i++) {  
    const h = data[i].split(' ');
    if(h[0] == "noop") {
        runCycle();  
    }
    if(h[0] == "addx") {
        runCycle();
        runCycle();
        value += Number(h[1]);     
    }      
  }

  function runCycle() {
    cycle ++;
    let currPos = (cycle % 40);

    if(currPos < value || currPos > value + 2) {
        res2 += ".";
    } else {
        res2 += "#";
        }
        if(currPos == 0) {
            res2 += "\n";
        } 
 }
console.log("part2: ZCBAJFJZ");
console.log(res2); //ZCBAJFJZ