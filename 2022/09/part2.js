const fs = require('fs');
const data = fs.readFileSync("input.txt", { encoding: "utf-8" }) 
  .replace(/\r/g, "") 
  .trim() 
  .split("\n"); 

  class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
}

knots = new Array(10).fill().map((_) => new Point(0,0));
const head = knots[0];
const tailed = new Set();
for (let i = 0; i < data.length; i++) {  
    let x = data[i].split(" ");
    while(x[1] -- > 0) {
        switch(x[0]) {
            case 'R': head.x ++; break;
            case 'L': head.x --;  break;
            case 'U': head.y --;  break;
            case 'D': head.y ++;  break;        
        }     
        for (let j = 1; j < knots.length; j++) {
            followHead(knots[j], knots[j-1]);
        }
        const tail = knots[knots.length - 1]
        tailed.add(`${tail.x}-${tail.y}`);
    }
}

function followHead(tail,head) {
    let distance = Math.max(Math.abs(head.x - tail.x),Math.abs(head.y - tail.y));
    if(distance > 1) {
        if(head.x - tail.x == 0) {
            tail.x += 0;
           
        }
        else if(head.x - tail.x > 0) {
            tail.x += 1;
        }
        else {
            tail.x -= 1;          
        }
    
        if(head.y - tail.y == 0) {
            tail.y += 0;
        }
        else if(head.y - tail.y > 0) {
            tail.y += 1;         
        }
        else {       
            tail.y -= 1;
        }
    }  
}
//2467
console.log(tailed.size);