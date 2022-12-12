const fs = require('fs');
const data = fs.readFileSync("input.txt", { encoding: "utf-8" }) 
  .replace(/\r/g, "") 
  .trim() 
  .split("\n"); 

  let test = data.map((x) => x.split('').map((x) => Number(x)));
    let width = test[0].length;
    let height = test.length;


let finalScore = -1;
//part2

for (let i = 0; i < height - 1; i++) {
    
     for (let j = 0; j < width - 1; j++) {
        
        
       let sum =   checkBottomUp(i,j) * checkLeft(i,j) * checkTopDown(i,j) * checkRight(i,j);
      // console.log("sum: " + sum);
       if(sum > finalScore) {
         finalScore = sum;
       }


     }   
   }
   function checkTopDown(x,y) {

    let tree = test[x][y];
    let score = 0;
    for (let i = x + 1; i < height; i++) {
        score ++;
        if(test[i][y] >= tree) {
           break;
        }
       
    }
    return score;
}
   function checkBottomUp(x,y) {

    let tree = test[x][y];
    let score = 0;

    for (let i = x - 1; i >= 0; i--) {
      score ++;
      //  console.log("after: " + test[i][y] + "tree: " + tree); //ok
        if(test[i][y] >= tree) {
           // console.log("Test");
            break;
        } 
             
    }
    return score;
}


   function checkLeft(x,y) {

        let tree = test[x][y];
        let score = 0;

        for (let i = y - 1; i >= 0; i--) {

         score ++;
            if(test[x][i] >= tree) {           
            break;
            }        
        }

        return score;
}

function checkRight(x,y) {

    let tree = test[x][y];
    let score = 0;

    for (let i = y + 1; i < width; i++) {

score ++;
        if(test[x][i] >= tree) {
          break;
      }         
    }
    return score;
}

// 496125
console.log("sum: " + finalScore);