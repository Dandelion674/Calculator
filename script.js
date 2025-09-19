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

const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".btn");

let currentValue = "";

buttons.forEach(button =>{
    button.addEventListener("click", () => {
        const value = button.dataset.value;

        if(!isNaN(value) || value === "."){
            currentValue +=value;
            display.textContent = currentValue;
        }
        
        if (button.textContent === "AC"){
            currentValue="";
            display.textContent = "0";
        }

        if (button.textContent === "C"){
            currentValue = currentValue.slice(0,-1)
            display.textContent = currentValue === ""? "0":currentValue;
        }

        if (["+", "-", "*", "/", "%"].includes(value)){ 
            firstNumber = parseFloat(currentValue); 
            operator = value; currentValue = ""; 
        } 
        
        if (value === "="){
            secondNumber = parseFloat(currentValue)
            const result = operate (operator,firstNumber,secondNumber);
            display.textContent = result; currentValue = result.toString();
        }
    })
})
