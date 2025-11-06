let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let operand1 = 0;
let operand2 = 0;

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function appendOperator(op) {
    operator = op;
    operand1 = parseFloat(currentInput);
    currentInput = '';
}

function calculate() {
    operand2 = parseFloat(currentInput);
    let result = 0;
    switch (operator) {
        case '+':
            result = operand1 + operand2;
            break;
        case '-':
            result = operand1 - operand2;
            break;
        case '*':
            result = operand1 * operand2;
            break;
        case '/':
            result = operand1 / operand2;
            break;
    }
    currentInput = result;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    operand1 = 0;
    operand2 = 0;
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function updateDisplay() {
    display.textContent = currentInput || '0';
}
