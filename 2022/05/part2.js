const fs = require('fs');

const data = fs.readFileSync("input.txt", {encoding: "utf-8"}).replace(/\r/g, "").trim().split("\n");
// let cargo = [
//     ["Z","N"],
//     ["M","C","D"],
//     ["P"]
// ]
 let cargo = [
     ["B","S","V","Z","G","P","W"],
     ["J","V","B","C","Z","F"],
     ["V","L","M","H","N","Z","D","C"],
     ["L","D","M","Z","P","F","J","B"],
     ["V","F","C","G","J","B","Q","H"],
     ["G","F","Q","T","S","L","B"],
     ["L","G","C","Z","V"],
     ["N","L","G"],
     ["J","F","H","C"]    
]
for (let i = 0; i < data.length; i++) {
   
    const text = data[i].split(' ');
    const move = parseInt(text[1]);
    const from = parseInt(text[3] - 1);
    const to = parseInt(text[5] - 1);

    let endPosition = move; //From where to splice the array
    let startPosition = cargo[from].length - move; //From where to end splice

    let movedCargo = cargo[from].splice(startPosition,endPosition); //The array we want to move to the other
   
    //Iterate through the moved cargos and push the cargo to the other cargo.
   movedCargo.forEach(element => {
       cargo[to].push(element);
   }); 
}
let answer = "";
cargo.forEach(element => {
    answer += element.toString().slice(-1);
});

//Result: LCTQFBVZV
console.log("Asnwer: " + answer);
//console.log(cargo);