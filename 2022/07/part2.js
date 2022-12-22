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
                path.push(addPath());
            }
            else
            {               
               path.push(addPath());
            }
        }
    } else if (h[0] != "dir") {
        var size = Number(h[0]);
        path.forEach(element => {
            if(map[element] == undefined) { //if no item in stack create new
                map[element] = size;
            } else { //update directory in stack
                map[element] = map[element] + size
            }           
        });
    }
}

function addPath() {
    let pathString = path.join('',path) + h[2];
    return pathString;
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
let diskSpaceLeft = 70000000 - usedStorage;
let toBeRemoved = 30000000 - diskSpaceLeft;

let directoriesToRemove = [];
for(var key in map)
{
    var value = map[key];
    if(value > toBeRemoved)
    {
        directoriesToRemove.push(value);
    } 
}

//Sort array to get the lowest.
let resultPartTwo = directoriesToRemove.sort(function(a, b) {
    return a - b;
  });

  //Display result
console.log("Part 2: "+ resultPartTwo[0]); //13210366

