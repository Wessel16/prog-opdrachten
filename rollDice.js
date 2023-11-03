function RollDice(){
    let rand = Math.ceil(Math.random() * 6);
    return rand;

}

function L(){
    let d1 = RollDice();

    let d2 = RollDice();

    let d3 = RollDice();

    let d4 = RollDice();

    let myArr = [d1, d2, d3, d4];

    myArr.sort();

    myArr.splice(0, 1)
    let som = myArr[0] + myArr[1] + myArr[2]

    return som;
}

console.log("STR: " + L())
console.log("DEX: " + L())
console.log("CON: " + L())
console.log("INT: " + L())
console.log("WIS: " + L())
console.log("CHA: " + L())




//STR
//DEX
//CON
//INT
//WIS
//CHA