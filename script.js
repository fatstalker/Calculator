function add (x, y) {
    return x + y
};

function subtract (x, y) {
    return x - y
};

function multiply (x, y) {
    return x * y
};

function divide (x, y) {
    return x / y
};

function operate (operator, firstOperand, secondOperand) {
    switch (operator) {
        case signs[1]:
            return add(firstOperand, secondOperand).toFixed(2);
        case signs[2]:
            return subtract(firstOperand, secondOperand).toFixed(2);
        case signs[3]:
            return multiply(firstOperand, secondOperand).toFixed(2);
        case signs[4]:
            return divide(firstOperand, secondOperand).toFixed(2);
    }
};
const signs = 
    {
        1 : "+",
        2 : "-",
        3 : "x",
        4 : "÷",
    }

let addButton = document.querySelector('#add');
addButton.addEventListener('click', () => signClick(addButton.textContent));
let subtractButton = document.querySelector('#subtract');
subtractButton.addEventListener('click', () => signClick(subtractButton.textContent));
let multiplyButton = document.querySelector('#multiply');
multiplyButton.addEventListener('click', () => signClick(multiplyButton.textContent));
let divideButton = document.querySelector('#divide');
divideButton.addEventListener('click', () => signClick(divideButton.textContent));
let equalsButton = document.querySelector('#equalsButton');
let clearButton = document.querySelector('#clearButton');


let firstOperandDisplay = document.querySelector('.firstOperandDisplay');
let secondOperandDisplay = document.querySelector('.secondOperandDisplay');
let operatorDisplay = document.querySelector('.operatorDisplay');
operatorDisplay.textContent = '';
let firstOperand;
let secondOperand;

let numButtons = Array.from(document.querySelectorAll('.numButton'));
numButtons = numButtons.sort((numButtonX, numButtonY) => {if (numButtonX.textContent > numButtonY.textContent) {return 1} else {return -1}})
for (let i = 0; i < numButtons.length; i++) {
    numButtons[i].addEventListener('click', () => {populateDisplay(numButtons[i].textContent)});
}


function populateDisplay (text) {
        if (!firstOperand) {
            firstOperandDisplay.textContent += text
        }
        else secondOperandDisplay.textContent += text
    };

function signClick (sign) {
    if (!firstOperand) {
        firstOperand = firstOperandDisplay.textContent;
        operatorDisplay.textContent = sign;
    }
    else {
        if (!secondOperandDisplay.textContent) {
            operatorDisplay.textContent = sign;
        }
        else {
        firstOperandDisplay.textContent = operate(operatorDisplay.textContent, (+firstOperandDisplay.textContent), (+secondOperandDisplay.textContent));
        secondOperandDisplay.textContent = '';
        operatorDisplay.textContent = sign;
        firstOperand = '';
        }
    }
};

equalsButton.addEventListener('click', () => {
    if (!firstOperand) {
        return
    }
    else {
        signClick()
    }
});

clearButton.addEventListener('click', () => {
    firstOperand = '';
    firstOperandDisplay.textContent = '';
    secondOperandDisplay.textContent = '';
    operatorDisplay.textContent = ''
});