const fs = require('fs');
const input = fs.readFileSync("input.txt", { encoding: "utf-8" }) 
  .replace(/\r/g, "") 
  .trim() 
  .split("\n"); 

  let data = input.map((x) => x.split('').map((x) => Number(x)));
    let width = data[0].length;
    let height = data.length;

var visibleTrees = Array(width).fill(false).map(x => Array(height).fill(false))

//from left
  for (let i = 0; i < height; i++) {
   let edge = -1
    for (let j = 0; j < width; j++) {
       if(data[i][j] > edge) {
       
           edge = data[i][j];
           visibleTrees[i][j] = true;
       }
    }   
  }
// from right
  for (let i = 0; i < height; i++) {
   let edge = -1
  
    for (let j = width - 1; j >= 0 ; j--) {
     
      if(data [i][j] > edge) {
        edge = data[i][j];
        visibleTrees[i][j] = true;
    }
    }
      
  }
  //from top
  for (let i = 0; i < width; i++) {
   let edge = -1
    for (let j = 0; j < height; j++) {
    
        if(data[j][i] > edge) {
            edge = data[j][i];
            visibleTrees[j][i] = true;
        }
    }
  }

 // from bottom
 for (let i = 0; i < width; i++) {
    let edge = -1
    for (let j = height - 1 ; j >= 0; j--) {
        if(data [j][i] > edge ) {
            edge = data[j][i];
            visibleTrees[j][i] = true;
        }
    }
  }
let result = 0;
 for (let i = 0; i < visibleTrees[0].length; i++) {
  for (let j = 0; j < visibleTrees.length; j++) {
    if(visibleTrees[i][j])
    result ++;
  }   
 }

 console.log("Part1: " + result); //1538


 