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
let usedStorage = 0;
let cnt = 0;
for(var key in map) {   
    var value = map[key];
    if(cnt == 0 ) { //Get value from first element. The root.
        usedStorage = value;
        cnt ++;
    }
    if(value <= 100000)
    {
        score += value;
    }
  }

// //Part 2
let remainingDiskSpace = 70000000 - usedStorage;
let DiskSpaceToRemove = 30000000 - remainingDiskSpace;

removes = [];
for(var key in map)
{
    var value = map[key];
    if(value > DiskSpaceToRemove)
    {
        removes.push(value);
    } 
}

//Sort array to get the lowest.
let resultPartTwo = removes.sort(function(a, b) {
    return a - b;
  });

  //Display result
console.log("Result: "+ resultPartTwo[0]); 13210366

