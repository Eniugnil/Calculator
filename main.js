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
let answeree;

function operate(num1, op, num2) {
    let total;
    if (op === "+") {
        total = add(num1, num2)
        return total
    } else if (op === "-") {
        total = subtract(num1, num2)
        return total
    } else if (op === "*") {
        total = multiply(num1, num2)
        return total
    } else if (op === "/") {
        total = divide(num1, num2)
        return total
    }
}

//numberOne
let containerOne = document.getElementById('calcScreen');
let calcNumOne = document.createElement('div'); 
containerOne.appendChild(calcNumOne);


function addNumber(number) {
    if (!numberOne) {
        if (number === "+" || number === "-" || number === "*" || number === "/") {
            operator = number;
            ope.textContent = operator
            numberOne = calcNumOne.textContent;
            console.log(numberOne + " one");
        }
    }

    const numericRegex = /^[0-9]+(\.[0-9]+)?$/;
    if (numericRegex.test(number)|| number === ".") {
        if (!numberOne) {
            calcNumOne.textContent += number;
        }
    }
    
    if (numberOne) {
        if (numberOne.length >= 1 || numberOne === answeree) {
            numTwo(number)
        }
    }
}

//operator (also remember to just combine all the containers from num1,ope,num2,ans)
let containerOpe = document.getElementById('calcScreen');
let ope = document.createElement('div'); 
containerOpe.appendChild(ope);

//numberTwo
let containerTwo = document.getElementById('calcScreen');
let calcNumTwo = document.createElement('div'); 
containerTwo.appendChild(calcNumTwo);

function numTwo(number) {
    if (!numberTwo) {
        if (number === "+" || number === "-" || number === "*" || number === "/" ) {
            numberTwo = calcNumTwo.textContent;
            if (operator === "+") {
                answeree = add(numberOne, numberTwo);
                numberOne = answeree;
                calcNumOne.textContent = answeree;
                numberTwo = "";
                calcNumTwo.textContent = "";
                operator = number;
                ope.textContent = operator
            } else if (operator === "-") {
                answeree = subtract(numberOne, numberTwo);
                numberOne = answeree;
                calcNumOne.textContent = answeree;
                numberTwo = "";
                calcNumTwo.textContent = "";
                operator = number;
                ope.textContent = operator
            } else if (operator === "*") {
                answeree = multiply(numberOne, numberTwo);
                numberOne = answeree;
                calcNumOne.textContent = answeree;
                numberTwo = "";
                calcNumTwo.textContent = "";
                operator = number;
                ope.textContent = operator
            } else if (operator === "/") {
                answeree = divide(numberOne, numberTwo);
                numberOne = answeree;
                calcNumOne.textContent = answeree;
                numberTwo = "";
                calcNumTwo.textContent = "";
                operator = number;
                ope.textContent = operator
            }
        }
    }

    const numericRegex = /^[0-9]+(\.[0-9]+)?$/;
    if (numericRegex.test(number)|| number === ".") {
        if (!numberTwo || numberTwo === "") {
            calcNumTwo.textContent += number;
        }
    }
}

function clearAll() {

    //this is the text content and not the actual variable storing the information
    calcNumOne.textContent = "";
    ope.textContent = "";
    calcNumTwo.textContent = "";
    calcNumAns.textContent = "";

    //this is the actual variable storing the information for the calculator
    numberOne = "";
    operator = "";
    numberTwo = "";
    answeree = "";
}
