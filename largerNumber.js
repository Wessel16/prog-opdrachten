function largerNum(Number1,Number2){
    if(Number1 > Number2){
        return Number1    
    }
    else if(Number1 == Number2)
    {
        return 0 
    }
    else
    {
        return Number2
    }
}

let largerNumber = largerNum(19,20)
console.log(largerNumber)