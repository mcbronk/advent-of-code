const fs = require('fs');
const input = fs.readFileSync("input.txt", { encoding: "utf-8" }) 
  .replace(/\r/g, "") 
  .trim() 
  .split("\n"); 

  let data = input.map((x) => x.split('').map((x) => Number(x)));
    let width = data[0].length;
    let height = data.length;


let finalScore = -1;

for (let i = 0; i < height - 1; i++) {
    
     for (let j = 0; j < width - 1; j++) {
       let sum =   checkBottomUp(i,j) * checkLeft(i,j) * checkTopDown(i,j) * checkRight(i,j);
       if(sum > finalScore) {
         finalScore = sum;
       }
     }   
   }
   function checkTopDown(x,y) {

    let tree = data[x][y];
    let score = 0;
    for (let i = x + 1; i < height; i++) {
        score ++;
        if(data[i][y] >= tree) {
           break;
        }
       
    }
    return score;
}
   function checkBottomUp(x,y) {

    let tree = data[x][y];
    let score = 0;

    for (let i = x - 1; i >= 0; i--) {
      score ++;
        if(data[i][y] >= tree) {
            break;
        } 
             
    }
    return score;
}


   function checkLeft(x,y) {

        let tree = data[x][y];
        let score = 0;

        for (let i = y - 1; i >= 0; i--) {

         score ++;
            if(data[x][i] >= tree) {           
            break;
            }        
        }

        return score;
}

function checkRight(x,y) {

    let tree = data[x][y];
    let score = 0;

    for (let i = y + 1; i < width; i++) {

score ++;
        if(data[x][i] >= tree) {
          break;
      }         
    }
    return score;
}

// 496125
console.log("Part2: " + finalScore);