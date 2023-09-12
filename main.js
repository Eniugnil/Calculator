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
            //remember to display operator = number
            operator = number;
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

//numberTwo
let containerTwo = document.getElementById('calcScreen');
let calcNumTwo = document.createElement('div'); 
containerTwo.appendChild(calcNumTwo);

function numTwo(number) {
    if (!numberTwo) {
        if (number === "+" || number === "-" || number === "*" || number === "/" || number === "=") {
        numberTwo = calcNumTwo.textContent;
        console.log(numberTwo + " two");
        }
    }

    const numericRegex = /^[0-9]+(\.[0-9]+)?$/;
    if (numericRegex.test(number)|| number === ".") {
        if (!numberTwo) {
            calcNumTwo.textContent += number;
        }
    }

    if (numberTwo) {
        if (numberTwo.length >= 1) {
            operateTest(operator)
        }
    }
}

let containerAns = document.getElementById('calcScreen');
let calcNumAns = document.createElement('div'); 
containerTwo.appendChild(calcNumAns);

function operateTest(mathOperator) {
//(*)figure the logic when someone puts in an operator instead of an = sign

//if they click an operator solve and that answer as num1
//clear num2 so it can be reused
//make it run back to num2 function to continue

//make the answer use what the operator was. Not the one you're going to input next


    if (mathOperator === "+") {
        answeree = add(numberOne, numberTwo);
        numberOne = answeree;
        calcNumOne.textContent = answeree;   //this is the text content and not the actual variable storing the information
        calcNumTwo.textContent = "";
        numberTwo = "";
        answeree = "";

    }

    if (mathOperator === "-") {
        answeree = subtract(numberOne, numberTwo);
        numberOne = answeree;
        calcNumOne.textContent = answeree;
        calcNumTwo.textContent = "";

    }

    if (mathOperator === "*") {
        answeree = multiply(numberOne, numberTwo);
        numberOne = answeree;
        calcNumOne.textContent = answeree;
        calcNumTwo.textContent = "";

    }

    if (mathOperator === "/") {
        answeree = divide(numberOne, numberTwo);
        numberOne = answeree;
        calcNumOne.textContent = answeree;
        calcNumTwo.textContent = "";
    }

    if (mathOperator === "=") {
        if (operator == "+") {
            answeree = add(numberOne, numberTwo);
            calcNumAns.textContent = add(numberOne, numberTwo);

        }

        if (operator == "-") {
            answeree = subtract(numberOne, numberTwo);
            calcNumAns.textContent = subtract(numberOne, numberTwo);

        }

        if (operator == "*") {
            answeree = multiply(numberOne, numberTwo);
            calcNumAns.textContent = multiply(numberOne, numberTwo);

        }

        if (operator == "/") {
            answeree = divide(numberOne, numberTwo);
            calcNumAns.textContent = divide(numberOne, numberTwo);

        }
    }
}

        


        // mathOperator === "-"

        // mathOperator === "*"

        // mathOperator === "/" 

    
function clearAll() {

    //this is the text content and not the actual variable storing the information
    calcNumOne.textContent = "";
    calcNumTwo.textContent = "";
    calcNumAns.textContent = "";

    //this is the actual variable storing the information for the calculator
    numberOne = "";
    operator = "";
    numberTwo = "";
    answeree = "";
}

//delete button is currently not working
// function deleteOne() {
//     let currentText = calcNumOne.textContent;
//     if (currentText.length > 0) {
//         let newText = currentText.slice(0, -1);
//         calcNumOne.textContent = newText;
//     }
// }