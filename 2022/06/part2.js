const fs = require('fs');

const data = fs.readFileSync("input.txt", {encoding: "utf-8"}).replace(/\r/g, "");

let marker = 0; //start of message marker
let txt;
// Just like part 1 except 14..
let letters = 14 -1; //nr of string to compare.

for (let i = 0; i < data.length; i++) {   
    if(i + letters < data.length) { // check that we are not out of bounds.
        txt = "";
        for (let j = 0; j <= letters; j++) { //collect the letter so we can see if there are any duplicates in.         
            txt += data[i + j];
        }
        if(!checkDuplicate(txt)) { //check. if no duplicates we are done.
            marker = (i + letters) + 1; //the first free position after last word. 
            break;
        }      
    }   
}

//function to check duplicates.
function checkDuplicate(string) {
    for (let i= 0; i < string.length - 1; i++) {    
        for (let j = i + 1; j < string.length; j++) {
            if(string[i] == string[j]) {
                return true; 
            }
                
        }       
    }
    return false;
}

//Print final score
//2383
console.log(marker);