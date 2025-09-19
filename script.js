let firstNumber;
let secondNumber;
let operator;

function add(firstNumber,secondNumber){
    return firstNumber + secondNumber;
}

function subtract(firstNumber,secondNumber){
    return firstNumber - secondNumber;
}

function multiply(firstNumber,secondNumber){
    return firstNumber * secondNumber;
}

function divide(firstNumber,secondNumber){
    return secondNumber === 0? "DIV0" : 
    firstNumber / secondNumber;
}

function rest (firstNumber,secondNumber){
    return secondNumber === 0? "DIV0" : 
    firstNumber % secondNumber;
}

function operate (operator,firstNumber,secondNumber){
    switch(operator){
        case "+" : return add(firstNumber,secondNumber);
        case "-" : return subtract(firstNumber,secondNumber);
        case "*" : return multiply(firstNumber,secondNumber);
        case "/" : return divide(firstNumber,secondNumber);
        case "%" : return rest(firstNumber,secondNumber);
        default: return "invalid operator";
    }
}
