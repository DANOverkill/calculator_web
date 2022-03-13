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
    let sum = (+a) + (+b);
    memoryOne = [parseFloat(Math.round(sum * 1100000000) / 100000000)]
    memoryTwo = []
    operator = []
    displayText.textContent = memoryOne.join('');
    console.log(memoryOne)
}

function subtration(a, b) {
    let subtration = (+a) - (+b);
    memoryOne = [parseFloat(Math.round(subtration * 100000000) / 100000000)]
    memoryTwo = []
    operator = []
    displayText.textContent = memoryOne.join('');
    console.log(memoryOne);
}

function multiplication(a, b) {
    let multiplication = (+a) * (+b);
    memoryOne = [parseFloat(Math.round(multiplication * 100000000) / 100000000)]
    memoryTwo = []
    operator = []
    displayText.textContent = memoryOne.join('');
    console.log(memoryOne);
}

function division(a, b) {
    if ((+a) == 0 || (+b) == 0) {
        displayText.textContent = 'ERROR!';
        return ('ERROR!')}
    let division = (+a) / (+b); 
    memoryOne = [parseFloat(Math.round(division * 100000000) / 100000000)]
    memoryTwo = []
    operator = []
    displayText.textContent = memoryOne.join('');
    console.log(memoryOne);
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