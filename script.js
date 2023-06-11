// all the buttons
const previousOperand = document.querySelector('#previous-operand');
const currentOperand = document.querySelector('#current-operand');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const allClearButton = document.querySelector('#all-clear');
const deleteButton = document.querySelector('#delete');

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
}
)

deleteButton.addEventListener('click', () => {
    currentOperand.textContent = currentOperand.textContent.slice(0, -1);
}
)


