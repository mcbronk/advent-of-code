const fs = require("fs");

const dat = fs.readFileSync("input.txt", { encoding: 'utf-8'}).split("\n");
let values = [];
var highest = 0;
var result = 0;

//sum blocks
for (let index = 0; index <= dat.length; index++) {
   
    if(!isNaN(parseInt(dat[index]))) {
        highest += parseInt(dat[index]);          
    }  else {
        values.push(highest);
        highest = 0;
    }
}
//Finding the highest
for (let index = 0; index <= values.length; index++) {
       
    if(result < values[index]) {
        result = values[index];
    }   
}
//Sort array
for (let i = 0; i < values.length; i++) {

    for (let j = 0; j< values.length; j++) {
        const prev = values[i];
        const next = values[j];
        if(values[i] > values[j]) {

            values[i] = next;
            values[j] = prev;
        }
    }    
}


//sum the three highest.
result = values[0] + values[1] + values[2];
//answer
console.log(result);

