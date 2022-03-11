//    -------         DOM CASH        ------
const displayText = document.querySelector('#displayText');
const clearButton = document.querySelector('#clear');

//    -------            UI           ------
window.addEventListener('keydown', (e) => {
    if(!e.code.includes('Numpad')) {return}
    // if(e.keyCode < 96 || e.keyCode > 105) {return}
    memoryOne.push(e.key)
    displayText.textContent = memoryOne.join('');
    console.log(e.keyCode);
})

clearButton.addEventListener('click', () => {
    memoryOne = [];
    displayText.textContent = memoryOne.join('');
    console.log(memoryOne);
})

//    -------           LOGIC         ------
let memoryOne = [];
let memoryTwo = [];
let operator = [];

function sum (a, b) {
    let sum = a + b;
    return sum;
}

function subtration(a, b) {
    let subtration = a - b;
    return subtration;
}

function multiplication(a, b) {
    let multiplication = a * b;
    return multiplication;
}

function division(a, b) {
    if (a == 0 || b == 0) {
        displayText.textContent = 'ERROR!';
        return ('ERROR!')}
    let division = a / b; 
    return division;
}

function operate (num1, operator, num2) {
    if (operator == '+') {
        return sum(num1, num2);
    }
    if (operator == '-') {
        return subtration(num1, num2);
    }
    if (operator == '*'){
        return multiplication(num1, num2);
    }
    if (operator == '/') {
        return division(num1, num2);
    }
}