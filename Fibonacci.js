let number1 = 0    
let number2 = 1
let number3 = 0

console.log(number1)
console.log(number2)

while (number1 < 10000000){
    number3 = number1 + number2
    console.log(number3)
    number1 = number2 + number3
    console.log(number1)
    number2 = number1 + number3
    console.log (number2)
}

