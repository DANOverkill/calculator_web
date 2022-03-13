//    -------         DOM CASH        ------
const displayText = document.querySelector('#displayText');
const clearButton = document.querySelector('#clear');

//    -------            UI           ------
window.addEventListener('keydown', (e) => {
    if(e.code.includes('Numpad')) {
        if (memoryOne.length == 0 && operator.length == 0) {
            if (e.key == '0' || e.key == '+' || e.key == '*' || e.key == '/' || e.key == 'Enter') {return}
            else if (e.key == '.') {
                memoryOne.push('0.')
                displayText.textContent = memoryOne.join(''); 
                console.log('condition (memoryOne.length == 0 - e.key == .) was triggered');
            }
            else if (e.key == '-') {
                memoryOne.push(e.key)
                displayText.textContent = memoryOne.join(''); 
                console.log('condition (memoryOne.length == 0 - e.key == -) was triggered'); 
            }
            else {
                memoryOne.push(e.key)
                displayText.textContent = memoryOne.join('');
                console.log('condition (memoryOne.length == 0 ELSE) was triggered');
            }
        }
        else if (memoryOne.length > 0 && memoryOne[0] == '-' && memoryOne.length < 10 && operator.length == 0) {
            if (!memoryOne.includes('.') && !memoryOne.includes('0.')) {
                if (e.key == '0') {return}
                else if (e.key == '.') {
                    memoryOne.push('0.')
                    displayText.textContent = memoryOne.join(''); 
                    console.log('condition (memoryOne.length == 0 - e.key == .) was triggered');
                }
                else {
                memoryOne.push(e.key)
                displayText.textContent = memoryOne.join('');
                console.log('condition (memoryOne.length > 0) was triggered');
                }
            }
            else if (memoryOne.includes('0.') || memoryOne.includes('.')) {
                if (e.key == '.') {return}
                else {
                    memoryOne.push(e.key)
                    displayText.textContent = memoryOne.join('');
                    console.log('condition (memoryOne.length > 0) was triggered');    
                }
                   
            }
        }
        else if (memoryOne.length > 0 && memoryOne[0] != '-' && memoryOne.length < 10 && operator.length == 0) {
            if (!memoryOne.includes('.') && !memoryOne.includes('0.')) {
                memoryOne.push(e.key)
                displayText.textContent = memoryOne.join('');
                console.log('condition (memoryOne.length > 0) was triggered');
            }
            else if (memoryOne.includes('0.') || memoryOne.includes('.')) {
                if (e.key == '.') {return}
                else {
                    memoryOne.push(e.key)
                    displayText.textContent = memoryOne.join('');
                    console.log('condition (memoryOne.length > 0) was triggered');    
                }
                   
            }
            // else if (e.key == '/' || e.key == '*' || e.key == '-' || e.key == '+') {
            //     operator.push(e.key)
            //     console.log(operator)
            // }
            
        }
        
    }
    
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