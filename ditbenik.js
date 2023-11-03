var readline = require('readline-sync');

console.log("Hello You!");
console.log("Ik ben Wessel van Arkel");

var userName = readline.question('Wie ben jij? ');
console.log('Hello ' + userName + '!');

console.log("Om mij beter te leren kennen gaan we een quiz doen. Door het beantwoorden van de vragen leer je mij kennen.");

var readlineSync = require('readline-sync'), 
eten = ['Pasta', 'Pizza', 'Sushi', 'Bami', 'Nassi'],
index = readlineSync.keyInSelect(eten, 'Wat is mijn favorieten eten?');
if (index  == 0)
{
console.log("Dat is goed!")
}
else
{
    console.log(`Jammer het antwoord is niet ${eten[index]}`)
} 

var readlineSync = require('readline-sync'), 
leeftijd = ['15', '16', '17', '18'],
index = readlineSync.keyInSelect(leeftijd, 'Hoe oud ben ik?');
if (index  == 1)
{
console.log("Dat is goed!")
}
else
{
    console.log(`Jammer het antwoord is niet ${leeftijd[index]}`)
} 

var readlineSync = require('readline-sync'), 
Huisdier = ['0', '1', '2', '4'],
index = readlineSync.keyInSelect(Huisdier, 'Hoeveel huisdieren heb ik?');
if (index  == 2)
{
console.log("Dat is goed!")
}
else
{
    console.log(`Jammer het antwoord is niet ${Huisdier[index]}`)
} 

var readlineSync = require('readline-sync'), 
huisdieren = ['Katten', 'Kat en Hond', 'Honden', 'Cavias'],
index = readlineSync.keyInSelect(huisdieren, 'Wat voor huisdieren heb ik?');
if (index  == 0)
{
console.log("Dat is goed!")
}
else
{
    console.log(`Jammer het antwoord is niet ${huisdieren[index]}`)
} 

var readlineSync = require('readline-sync'), 
Namen = ['Hunter en Jax', 'Thor en Jax', 'Ollie en Jax'],
index = readlineSync.keyInSelect(Namen, 'Hoe heten mijn katten?');
if (index  == 0)
{
console.log("Dat is goed!")
}
else
{
    console.log(`Jammer het antwoord is niet ${Namen[index]}`)
} 

console.log ("Bedankt voor het spelen van mijn Quiz!")





