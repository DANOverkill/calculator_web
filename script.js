//    -------         DOM CASH        ------
const displayText = document.querySelector('#displayText');
const clearButton = document.querySelector('#clear');
//    -------            UI           ------
window.addEventListener('keydown', (e) => {
    if(!e.code.includes('Numpad')) {return}
    memoryOne.push(e.key)
    displayText.textContent = memoryOne.join('');
    console.log(memoryOne);
})

clearButton.addEventListener('click', () => {
    memoryOne = [];
    displayText.textContent = memoryOne.join('');
    console.log(memoryOne);

})
//    -------           LOGIC         ------

let memoryOne = [];
let memoryTwo = [];

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
    let division = a / b; 
    return division;
}