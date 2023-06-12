// all the buttons
const previousOperand = document.querySelector('#previous-operand');
const currentOperand = document.querySelector('#current-operand');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const allClearButton = document.querySelector('#all-clear');
const deleteButton = document.querySelector('#delete');
const equalsButton = document.querySelector('#equals');

let currentValue = '';
let previousValue = '';
let operator = '';

numberButtons.forEach(button => { 
    button.addEventListener('click', () => {
        if (button.textContent === '.' && currentOperand.textContent.includes('.')) return;
        currentOperand.textContent += button.textContent;
    })
}
)

allClearButton.addEventListener('click', () => {
    currentOperand.textContent = '';
    previousOperand.textContent = '';
    operator =  '';
}
)

deleteButton.addEventListener('click', () => {
    currentOperand.textContent = currentOperand.textContent.slice(0, -1);
}
)

operatorButtons.forEach(button => { 
    button.addEventListener('click', () => {
        if (currentOperand.textContent === '') return;
        if (previousOperand.textContent !== '') {
            currentValue = currentOperand.textContent;
            calculate();
        }
        operator = button.textContent;
        previousValue = currentOperand.textContent;
        previousOperand.textContent = `${currentOperand.textContent} ${button.textContent}`;
        currentOperand.textContent = '';
    })
}
)

equalsButton.addEventListener('click', () => {
    if (currentOperand.textContent === '' || previousOperand.textContent.includes("=")) return;
    currentValue = currentOperand.textContent;
    calculate();
    previousOperand.textContent += ` ${currentValue} =`;
    operator = '';
}
)


function calculate() {
    if (operator === '+') {
        currentOperand.textContent = parseFloat(previousValue) + parseFloat(currentValue);
    } else if (operator === '-') {
        currentOperand.textContent = parseFloat(previousValue) - parseFloat(currentValue);
    } else if (operator === 'x') {
        currentOperand.textContent = parseFloat(previousValue) * parseFloat(currentValue);
    } else if (operator === '÷') {
        currentOperand.textContent = parseFloat(previousValue) / parseFloat(currentValue);
    }
}