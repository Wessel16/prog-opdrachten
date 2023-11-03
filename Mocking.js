let rl = require('readline-sync')
let vraag = rl.question("Zeg iets.") 

let vraag2 = ""
for (let i = 0; i < vraag.length; i++) {
    let element = vraag[i];
    if(i % 2 == 0){
    element = element.toUpperCase()
    }
    vraag2 += element
    }
    console.log(vraag2)
    



