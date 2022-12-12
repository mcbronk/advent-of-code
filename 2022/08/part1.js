const fs = require('fs');
const data = fs.readFileSync("input.txt", { encoding: "utf-8" }) 
  .replace(/\r/g, "") 
  .trim() 
  .split("\n"); 

  let test = data.map((x) => x.split('').map((x) => Number(x)));
    let width = test[0].length;
    let height = test.length;

var visibles = Array(width).fill(false).map(x => Array(height).fill(false))

//from left
  for (let i = 0; i < height; i++) {
   let edge = -1
    for (let j = 0; j < width; j++) {
       if(test[i][j] > edge) {
       
           edge = test[i][j];
           visibles[i][j] = true;
       }
    }   
  }
// from right
  for (let i = 0; i < height; i++) {
   let edge = -1
  
    for (let j = width - 1; j >= 0 ; j--) {
     
      if(test [i][j] > edge) {
        edge = test[i][j];
        visibles[i][j] = true;
    }
    }
      
  }
  //from top
  for (let i = 0; i < width; i++) {
   let edge = -1
    for (let j = 0; j < height; j++) {
    
        if(test[j][i] > edge) {
            edge = test[j][i];
            visibles[j][i] = true;
        }
    }
  }

 // from bottom
 for (let i = 0; i < width; i++) {
    let edge = -1
    for (let j = height - 1 ; j >= 0; j--) {
        if(test [j][i] > edge ) {
            edge = test[j][i];
            visibles[j][i] = true;
        }
    }
  }
let output = 0;
 for (let i = 0; i < visibles[0].length; i++) {
  for (let j = 0; j < visibles.length; j++) {
    if(visibles[i][j])
    output ++;
  }   
 }

 console.log(output); //1538


 