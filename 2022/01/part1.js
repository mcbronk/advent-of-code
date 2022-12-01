const fs = require("fs");


const dat = fs.readFileSync("input.txt", { encoding: 'utf-8'}).split("\n");
let values = [];
var highest = 0;
var result = 0;

for (let index = 0; index <= dat.length; index++) {
   
    if(!isNaN(parseInt(dat[index]))) {
        highest += parseInt(dat[index]);
       
       
    }  else {
        values.push(highest);
        highest = 0;
    }
}

for (let index = 0; index <= values.length; index++) {
    
    
    if(result < values[index]) {
        result = values[index];
    }
    
    
}
console.log(result);

