//    -------         DOM CASH        ------
const displayText = document.querySelector('#displayText');
//    -------            UI           ------
window.addEventListener('keydown', (e) => {
    displayText.textContent = e.key;
    console.log(e.key);
})
//    -------           LOGIC         ------
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