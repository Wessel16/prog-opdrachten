var readlineSync = require('readline-sync');
var answer = readlineSync.question('Wat is 1+1? :');

while (answer != 2) {
answer = readlineSync.question('Wat is 1+1? :');    
}
console.log('Goed 1+1 is ' + answer);

for(let i =0; i < 1001; i++){
    console.log('getal i = ' + i);
}