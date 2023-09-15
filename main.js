let container = document.getElementById('calcScreen');

let calcNumOne = document.createElement('div'); 
container.appendChild(calcNumOne);

let ope = document.createElement('div'); 
container.appendChild(ope);

let calcNumTwo = document.createElement('div'); 
container.appendChild(calcNumTwo);

function add(a, b) {
    return +a + +b;
}

function subtract(a, b) {
    return +a - +b;
}

function multiply(a, b) {
    return +a * +b;
}

function divide(a, b) { 
    let c = (+a / +b);
    return c.toFixed(4);
}

let numberOne;
let operator;
let numberTwo;
let answer;

function input(number) {
    const numericRegex = /^[0-9]+(\.[0-9]+)?$/;
    
    if (numericRegex.test(number) || number === ".") {
        if (!operator) {
            // If there's no operator set, append to numberOne
            calcNumOne.textContent += number;
        } else {
            // If there's an operator, append to numberTwo
            calcNumTwo.textContent += number;
        }
    } else if (number === "+" || number === "-" || number === "*" || number === "/") {
        if (!operator) {
            // If there's no operator set, set the operator
            operator = number;
            ope.textContent = operator;
        } else {
            // If there's an operator set, calculate the result
            calculateResult();
            operator = number;
            ope.textContent = operator;
        }
    } else if (number === "=") {
        calculateResult();
    }
}

function calculateResult() {
    const num1 = parseFloat(calcNumOne.textContent);
    const num2 = parseFloat(calcNumTwo.textContent);

    switch (operator) {
        case "+":
            answer = add(num1, num2);
            break;
        case "-":
            answer = subtract(num1, num2);
            break;
        case "*":
            answer = multiply(num1, num2);
            break;
        case "/":
            answer = divide(num1, num2);
            break;
    }

    numberOne = answer;
    calcNumOne.textContent = answer;
    numberTwo = "";
    calcNumTwo.textContent = "";
}

function clearAll() {
    calcNumOne.textContent = "";
    ope.textContent = "";
    calcNumTwo.textContent = "";

    numberOne = "";
    operator = "";
    numberTwo = "";
    answer = "";
}

function deleteOne() {
    let currentText2 = calcNumTwo.textContent;
    let currentText1 = calcNumOne.textContent;
    let currentOperator = ope.textContent;

    
    if (currentText2.length > 0) {
        let newText = currentText2.slice(0, -1);
        calcNumTwo.textContent = newText;
        numberTwo = newText;
    }

    if (currentOperator.length > 0 && !currentText2.length > 0) {
        let newText = currentOperator.slice(0, -1);
        ope.textContent = newText;
        operator = newText;
    }

    if (currentText1.length >= 0 && !currentText2.length > 0 && !currentOperator.length > 0) {
        let newText = currentText1.slice(0, -1);
        calcNumOne.textContent = newText;
        numberOne = newText
    }
}