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

let numberOne;
let operator;
let numberTwo;

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

let containerOne = document.getElementById('calcScreen');
let calcNumOne = document.createElement('div'); 
containerOne.appendChild(calcNumOne);


let containerTwo = document.getElementById('calcScreen');
let calcNumTwo = document.createElement('div'); 
containerTwo.appendChild(calcNumTwo);

function addNumber(number) {
    if (!numberOne) {
    calcNumOne.textContent += number;
    }
    
    if (numberOne) {
        if (numberOne.length > 1) {
            numTwoTesting(number)
        }
    }
    if (!numberOne) {
        if (number === "+" || number === "-" || number === "*" || number === "/") {
            numberOne = calcNumOne.textContent;
            console.log(numberOne + "one");
            }
    }
}

function numTwoTesting(number) {
        calcNumTwo.textContent += number;
        if (number === "+" || number === "-" || number === "*" || number === "/") {
        numberTwo = calcNumTwo.textContent;
        console.log(numberTwo + "two");
        }
    }


    



    // if (numberOne) {
    //   if (numberOne.length > 1) {
    //     calcNumTwo.textContent += number;
    //     numberTwo = calcNumTwo.textContent;
    //     console.log(numberTwo + " two");
    //   }
    // }
  
    

    // if (numberOne && numberTwo) {
    //     if (number === "=") {
    //         console.log("hello")
    //     }
    
    // }


//delete buttons are non working properly
function clearAll() {
    calcNumOne.textContent = "";
}

function deleteOne() {
    let currentText = calcNumOne.textContent;
    if (currentText.length > 0) {
        let newText = currentText.slice(0, -1);
        calcNumOne.textContent = newText;
    }
}