const fs = require("fs");
const data = fs.readFileSync("input.txt", { encoding: 'utf-8'}).replace(/\r/g, "").split("\n");
var one = [];
var two = [];
var three = [];
let score = 0;

for (let index = 0; index < data.length; index+= 3) {
   one = data[index].split('');
   two = data[index+1].split('');
   three = data[index+2].split('');

   var res = [one,two,three];
   
   let result = res.reduce((a, b) => a.filter(c => b.includes(c)))[0];
   score += result.charCodeAt(0) - (result === result.toLowerCase() ? 96 : 38); 
}

console.log(score); //2413
