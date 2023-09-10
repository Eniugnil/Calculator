function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let number1
let operator
let number2 

function operate(num1, op, num2) {
    if (op === "+") {
        add(num1, num2)
    } else if (op === "-") {
        subtract(num1, num2)
    } else if (op === "*") {
        multiply(num1, num2)
    } else if (op === "/") {
        divide(num1, num2)
    }
}

let container = document.getElementById('calcScreen');
let calcNum = document.createElement('div'); 
container.appendChild(calcNum);

function addNumber(number) {
    calcNum.textContent += number;
}

function clearAll() {
    calcNum.textContent = " ";
}