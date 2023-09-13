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
    return +a / +b;
}

let numberOne;
let operator;
let numberTwo;
let answer;

function input(number) {
    if (number === "+" || number === "-" || number === "*" || number === "/") {
        operator = number;
        ope.textContent = operator;
        numberOne = calcNumOne.textContent;
        console.log(numberOne + " one");
    }

    const numericRegex = /^[0-9]+(\.[0-9]+)?$/;
    if (numericRegex.test(number) || number === ".") {
        if (!numberOne) {
            calcNumOne.textContent += number;
        }
    }

    if (numberOne) {
        if (numberOne.length >= 1 || numberOne === answer) {
            numTwo(number);
        }
    }
}


function numTwo(number) {
    if (number === "=") {
        numberTwo = calcNumTwo.textContent;
        if (operator === "+") {
            answer = add(numberOne, numberTwo);
        } else if (operator === "-") {
            answer = subtract(numberOne, numberTwo);
        } else if (operator === "*" && numberTwo.length >= 1) {
            answer = multiply(numberOne, numberTwo);
        } else if (operator === "/" && numberTwo.length >= 1) {
            answer = divide(numberOne, numberTwo);
        }
    
        numberOne = answer;
        calcNumOne.textContent = answer;
        numberTwo = "";
        calcNumTwo.textContent = "";
    }
    

    if (!numberTwo && (number === "+" || number === "-" || (number === "*" && numberTwo.length >= 1) || (number === "/" && numberTwo.length >= 1))) {
        numberTwo = calcNumTwo.textContent;
        if (operator === "+") {
            answer = add(numberOne, numberTwo);
        } else if (operator === "-") {
            answer = subtract(numberOne, numberTwo);
        } else if (operator === "*" && numberTwo.length >= 1) {
            answer = multiply(numberOne, numberTwo);
        } else if (operator === "/" && numberTwo.length >= 1) {
            answer = divide(numberOne, numberTwo);
        }
        
        numberOne = answer;
        calcNumOne.textContent = answer;
        numberTwo = "";
        calcNumTwo.textContent = "";
        operator = number;
        ope.textContent = operator;
    }

    const numericRegex = /^[0-9]+(\.[0-9]+)?$/;
    if (numericRegex.test(number)|| number === ".") {
        if (!numberTwo || numberTwo === "") {
            calcNumTwo.textContent += number;
        }
    }
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