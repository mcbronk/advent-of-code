const fs = require("fs");
const dat = fs.readFileSync("input.txt").toString().split("\r\n").map(x=> x.split(','))
let cnt = 0;

dat.forEach(element => {
var first = element[0].split('-').map(Number);
var second = element[1].split('-').map(Number);

const firstElf = createElf(first[0],first[1]);
const secondElf = createElf(second[0],second[1]);

if(firstElf.start <= secondElf.start && firstElf.end >= secondElf.end || firstElf.start >= secondElf.start && firstElf.end <= secondElf.end) 
cnt ++;
});

function createElf(start,end) {
    return {"start": start, "end": end}
}
//466
console.log("Part 1: " + cnt);