const fs = require("fs");
const data = fs.readFileSync("input.txt", { encoding: 'utf-8'}).replace(/\r/g, "").split("\n");
const set = [];

let score = 0;
let first, second;
for (let i = 0; i < data.length; i++) {
    const element = data[i];

    let half = element.length / 2;
    first = element.slice(0,half).split('');
    second = element.slice(half,element.length).split('');

    var cont = true;
    for (let index = 0; index < first.length; index++) {
      
        if(cont) {
            if(second.includes(first[index])) {
                set.push(first[index]);
                cont = false;
            } else {
                cont = true;
            }
        }  
    }
}
for(const x of set) {

score += x.charCodeAt(0) - (x === x.toLowerCase() ? 96 : 38); 
}

console.log("Part 1: " + score); //8394


