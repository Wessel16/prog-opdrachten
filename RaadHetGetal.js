var readlineSync = require('readline-sync');
randomgetal()
function randomgetal() {
    let number = 0
    raadgetal = Math.floor(Math.random() * 100) + 1;
    while (raadgetal != number) {
        number = readlineSync.question('Raad het getal tussen de 1 en 100: ');
        if (number > raadgetal) {
            console.log("Je moet lager gaan!")
        }
        if (raadgetal > number) {
            console.log("Je moet wat Hoger gaan!")
        }

    }

    console.log("Hoera je hebt het getal geraden!")
}
