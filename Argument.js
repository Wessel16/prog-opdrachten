function geschud(woordDatGeschudtMoetWorden){
    const characters = woordDatGeschudtMoetWorden.split('');
    for (let i = characters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [characters[i], characters[j]] = [characters[j], characters[i]];
    }
    const geschudWoord = characters.join('');    
    return geschudWoord;
}

let woord1 = geschud("kaas")
let woord2 = geschud("papier")
let woord3 = geschud("karton")
console.log(woord1, woord2, woord3)




var readline = require('readline-sync');

var jaar = readline.question('In welk jaar ben u geboren? ')
var maand = readline.question('In welke maand bent u geboren? ')
var dag = readline.question('Op welke dag bent u geboren? ') 

function berekenleeftijd(jaar, maand, dag){
    var now = new Date();
    var birth = new Date(jaar, maand, dag); 
    var miliseconds = now - birth;
    var seconds = miliseconds / 1000
    var hours = seconds / 3600
    var days = hours / 24
    return years = days / 365
}

var leeftijd = berekenleeftijd(jaar, maand, dag)
console.log(leeftijd)







