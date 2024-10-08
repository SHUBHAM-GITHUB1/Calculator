let displayValue = '';
let firstValue = null;
let secondValue = null;
let currentOperation = null;

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function setOperation(operation) {
    if (currentOperation !== null) {
        calculate();
    }
    firstValue = parseFloat(displayValue);
    currentOperation = operation;
    displayValue = '';
}

function calculate() {
    secondValue = parseFloat(displayValue);
    switch (currentOperation) {
        case '+':
            displayValue = firstValue + secondValue;
            break;
        case '-':
            displayValue = firstValue - secondValue;
            break;
        case '*':
            displayValue = firstValue * secondValue;
            break;
        case '/':
            displayValue = firstValue / secondValue;
            break;
        case 'exp':
            displayValue = Math.pow(firstValue, secondValue);
            break;
        default:
            return;
    }
    currentOperation = null;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    firstValue = null;
    secondValue = null;
    currentOperation = null;
    updateDisplay();
}

function clearEntry() {
    displayValue = '';
    updateDisplay();
}

function sqrt() {
    displayValue = Math.sqrt(parseFloat(displayValue)).toString();
    updateDisplay();
}

function square() {
    displayValue = Math.pow(parseFloat(displayValue), 2).toString();
    updateDisplay();
}

function cube() {
    displayValue = Math.pow(parseFloat(displayValue), 3).toString();
    updateDisplay();
}

function cubeRoot() {
    displayValue = Math.cbrt(parseFloat(displayValue)).toString();
    updateDisplay();
}

function exponent() {
    if (currentOperation !== null) {
        calculate();
    }
    firstValue = parseFloat(displayValue);
    currentOperation = 'exp';
    displayValue = '';
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}
