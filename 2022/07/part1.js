const fs = require('fs');
const data = fs.readFileSync("input.txt", {encoding: "utf-8"}).replace(/\r/g, "").trim().split("\n");

let path = [];
let map = {};

let x = data;

for (let i = 0; i < x.length; i++)
{  
    var h = x[i].split(' ');  
    if (h[0] == "$")
    {
        if (h[1] == "cd")
        {
            if (h[2] == "..")
            {
                path.pop();
            }
            else if (h[2] == "/")
            {
                path.push(path.join('',path) + h[2]);
            }
            else
            {               
                path.push(path.join('',path) + h[2]);
            }
        }
    } else if (h[0] != "dir") {
        var size = Number(h[0]);
        path.forEach(element => {
            if(map[element] == undefined) {
                map[element] = size;
            } else {
                map[element] = map[element] + size
            }           
        });
    }
}
let score = 0;
for(var key in map) {
    var value = map[key];
    if(value <= 100000)
    {
        score += value;
    }
  }
console.log("Result: " + score); //1306611
