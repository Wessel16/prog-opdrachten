if (1+1 ==3){    
console.log ("I AM GOOD A MATHS");
} else {
console.log ("Whoops")
}


let rl =require('readline-sync');

console.log("N (north)");
console.log("S (south)");
console.log("E (east)");
console.log("W (west)");
const answer = rl.question('Please input te letter of your choice');

if (answer == 's' || answer == 'S'){
    console.log (" You went south and stepped on a landmine.")
}
if (answer == 'n' || answer == 'N'){
    console.log (" You went north and you fell in a sinkhole.")
}
if (answer == 'e' || answer == 'E'){
    console.log (" You went east and got eaten by a lion.")
}
if (answer == 'w' || answer == 'W'){
    console.log (" You went west and you passed the level!")
}

//use if's here
