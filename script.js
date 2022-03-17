//    -------         DOM CASH        ------
const displayText = document.querySelector('#displayText');
const clearButton = document.querySelector('#clear');

//    -------            UI           ------
window.addEventListener('click', (e) => {
    if (buttonValues.includes(e.path[0].dataset.value)){
        uiLogic (e.path[0].dataset.value)
    }
    else if (e.path[0].dataset.value == 'Backspace') {
        backSpace();
    }
})
window.addEventListener('keydown', (e) => {
    console.log(e.key)
    if (buttonValues.includes(e.key)) {
        uiLogic (e.key);
    }
    else if (e.key == 'Backspace') {
        backSpace();
    }
})
clearButton.addEventListener('click', () => {
    clear();
})

//    -------           LOGIC         ------
let memoryOne = [];
let memoryTwo = [];
let operator = [];
let buttonValues = ['1', '2', '3', '4', '5', 
                    '6', '7', '8', '9', '0',
                    '+', '-', '*', '/', 'Enter',
                    ];

function sum (a, b) {
    let sum = Math.round(((+a) + (+b)) * 100000) / 100000;
    return sum;
}

function subtration(a, b) {
    let subtration = Math.round(((+a) - (+b)) * 100000) / 100000;
    return subtration;
}

function multiplication(a, b) {
    let multiplication = Math.round(((+a) * (+b)) * 100000) / 100000;
    return multiplication;
}

function division(a, b) {
    if ((+a) == 0 || (+b) == 0) {
        displayText.textContent = 'ERROR!';
        return ('ERROR!')}
    let division = Math.round(((+a) / (+b)) * 100000) / 100000;
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
function clear () {
    return (
        memoryOne = [],
        memoryTwo = [],
        operator = [],
        displayText.textContent = '0'
    )
}

function backSpace () {
    if(memoryTwo.length > 0){
        memoryTwo.splice(-1, 1);
        console.log(memoryTwo);
        displayText.textContent = `${memoryOne.join('')}` +
                                ' ' + `${operator.join('')}` +
                                ' ' + `${memoryTwo.join('')}`;
    }
    else if (memoryTwo.length == 0) {
        if (operator.length > 0) {
            operator.splice(-1, 1);
            console.log(operator);
            displayText.textContent = `${memoryOne.join('')}`
        }
        else if (operator.length == 0){
            if (memoryOne.length > 1) {
                memoryOne.splice(-1, 1);
                displayText.textContent = `${memoryOne.join('')}`
            }
            else {
                memoryOne.splice(-1, 1);
                displayText.textContent = '0';
            }

        }
    }
}

function uiLogic (imp) {
    if (operator.length == 0) {
        if (memoryOne.length == 0) {
            if (imp == '0' || imp == '+' || imp == '*' || imp == '/' || imp == 'Enter') {return}
            else if (imp == '.') {
                memoryOne.push('0.')
                displayText.textContent = ''; 
                displayText.textContent = memoryOne.join(''); 
                console.log('condition (memoryOne.length == 0 - imp == .) was triggered');
            }
            else if (imp == '-') {
                memoryOne.push(imp)
                displayText.textContent = '';
                displayText.textContent = memoryOne.join(''); 
                console.log('condition (memoryOne.length == 0 - imp == -) was triggered'); 
            }
            else {
                memoryOne.push(imp)
                displayText.textContent = '';
                displayText.textContent = memoryOne.join('');
                console.log('condition (memoryOne.length == 0 ELSE) was triggered');
            }
        }
        else if (memoryOne.length > 0 && memoryOne[0] == '-' && memoryOne.length <= 1 ) {
            if (imp != '/' && imp != '*' && imp != '-' && imp != '+' && imp != 'Enter'){
                if (!memoryOne.includes('.') && !memoryOne.includes('0.')) {
                    if (imp == '.') {
                        memoryOne.push('0.')
                        displayText.textContent = memoryOne.join(''); 
                        console.log('condition (memoryOne.length == 0 - imp == .) was triggered');
                    }
                }
            }
        }
        else if (memoryOne.length > 1 && memoryOne[0] == '-' && memoryOne.length < 10) {
            if (imp != '/' && imp != '*' && imp != '-' && imp != '+' && imp != 'Enter'){
                if (!memoryOne.includes('.') && !memoryOne.includes('0.')) {
                    if (imp == '.') {
                        memoryOne.push(imp)
                        displayText.textContent = memoryOne.join(''); 
                        console.log('condition (memoryOne.length == 0 - imp == .) was triggered');
                    }
                    else {
                    memoryOne.push(imp)
                    displayText.textContent = memoryOne.join('');
                    console.log('condition (memoryOne.length > 0) was triggered');
                    }
                }
                else if (memoryOne.includes('0.') || memoryOne.includes('.')) {
                    if (imp == '.') {return}
                    else {
                        memoryOne.push(imp)
                        displayText.textContent = memoryOne.join('');
                        console.log('condition (memoryOne.length > 0) was triggered');    
                    }
                       
                }
            }
            else if (imp == '/' || imp == '*' || imp == '-' || imp == '+') {
                if (memoryOne[(memoryOne.length - 1)] == '0.' || memoryOne[(memoryOne.length - 1)] == '.') {
                    memoryOne.push('0')
                    displayText.textContent = memoryOne.join('');
                    operator.push(imp)
                    console.log(operator)
                    displayText.textContent = `${memoryOne.join('')}` + ' ' + `${operator.join('')}` + ' ';
                }
                else {
                    operator.push(imp)
                    console.log(operator)
                    displayText.textContent = `${memoryOne.join('')}` + ' ' + `${operator.join('')}` + ' ';    
                }
            }
        }
        else if (memoryOne.length > 0 && memoryOne[0] != '-' && memoryOne.length < 10) {
            if (imp != '/' && imp != '*' && imp != '-' && imp != '+' && imp != 'Enter') {
                if (!memoryOne.includes('.') && !memoryOne.includes('0.')) {
                    memoryOne.push(imp)
                    displayText.textContent = memoryOne.join('');
                    console.log('condition (memoryOne.length > 0) and NOT an doperator was triggered');
                }
                else if (memoryOne.includes('0.') || memoryOne.includes('.')) {
                    if (imp == '.') {return}
                    else if (imp != '/' || imp != '*' || imp != '-' || imp != '+') {
                        memoryOne.push(imp)
                        displayText.textContent = memoryOne.join('');
                        console.log('condition (memoryOne.length > 0) and NOT an doperator was triggered');    
                    }
                }
            }
            else if (imp == '/' || imp == '*' || imp == '-' || imp == '+') {
                if (memoryOne[(memoryOne.length - 1)] == '0.' || memoryOne[(memoryOne.length - 1)] == '.') {
                    memoryOne.push('0')
                    displayText.textContent = memoryOne.join('');
                    operator.push(imp)
                    console.log(operator)
                    displayText.textContent = `${memoryOne.join('')}` + ' ' + `${operator.join('')}` + ' ';
                }
                else {
                    operator.push(imp)
                    console.log(operator)
                    displayText.textContent = `${memoryOne.join('')}` + ' ' + `${operator.join('')}` + ' ';    
                }
            }
        }
        else if (memoryOne.length == 10){
            if (imp == '/' || imp == '*' || imp == '-' || imp == '+') {
                if (memoryOne[(memoryOne.length - 1)] == '0.' || memoryOne[(memoryOne.length - 1)] == '.') {
                    memoryOne.push('0')
                    displayText.textContent = memoryOne.join('');
                    operator.push(imp)
                    console.log(operator)
                    displayText.textContent = `${memoryOne.join('')}` + ' ' + `${operator.join('')}` + ' ';
                }
                else {
                    operator.push(imp)
                    console.log(operator)
                    displayText.textContent = `${memoryOne.join('')}` + ' ' + `${operator.join('')}` + ' ';    
                }
            }
        }
    }
    else if (operator.length > 0) {
        if (memoryTwo.length == 0) {
            if (imp == '0' || imp == '+' || imp == '-' || imp == '*' || imp == '/' || imp == 'Enter') {return}
            else if (imp == '.') {
                memoryTwo.push('0.')
                displayText.textContent = `${memoryOne.join('')}` + ' ' + `${operator.join('')}` 
                                            + ' ' + `${memoryTwo.join('')}`; 
                console.log('memory Two Sruff');
            }
            else {
                memoryTwo.push(imp)
                displayText.textContent = `${memoryOne.join('')}` + ' ' + `${operator.join('')}` 
                                            + ' ' + `${memoryTwo.join('')}`; 
                console.log('memory two stuff');
            }
        }
        else if (memoryTwo.length > 0 && memoryTwo.length < 10) {
            if (imp != '/' && imp != '*' && imp != '-' && imp != '+' && imp != 'Enter') {
                if (!memoryTwo.includes('.') && !memoryTwo.includes('0.')) {
                    memoryTwo.push(imp)
                    displayText.textContent = `${memoryOne.join('')}` + ' ' + `${operator.join('')}` 
                                            + ' ' + `${memoryTwo.join('')}`; 
                    console.log('memory two stuff');
                }
                else if (memoryTwo.includes('0.') || memoryTwo.includes('.')) {
                    if (imp == '.') {return}
                    else if (imp != '/' || imp != '*' || imp != '-' || imp != '+') {
                        memoryTwo.push(imp)
                        displayText.textContent = `${memoryOne.join('')}` + ' ' + `${operator.join('')}` 
                                            + ' ' + `${memoryTwo.join('')}`; 
                        console.log('memory two stuff');    
                    }
                }
            }
            else if (imp == '/' || imp == '*' || imp == '-' || imp == '+') {
                let m1 = memoryOne.join('')
                let m2 = memoryTwo.join('')
                let op = operator.join('')
                let result = (operate(m1, op, m2))
                console.log(m1, op, m2)
                if (result == '0') {
                    clear();
                }
                else {
                    memoryOne = [result];
                    memoryTwo = [];
                    operator = [];
                    operator.push(imp)
                    displayText.textContent = '';
                    displayText.textContent = `${memoryOne.join('')}` + ' ' + `${operator.join('')}` + ' ';
                }
                
            }
            else if (imp == 'Enter') {
                let m1 = memoryOne.join('')
                let m2 = memoryTwo.join('')
                let op = operator.join('')
                let result = (operate(m1, op, m2))
                console.log(m1, op, m2)
                if (result == '0') {
                    clear();
                }
                else {
                    memoryOne = [result];
                    memoryTwo = [];
                    operator = [];
                    displayText.textContent = '';
                    displayText.textContent = memoryOne.join('')
                }
            }
        }
        else if (memoryTwo.length == 10) {
            if (imp == '/' || imp == '*' || imp == '-' || imp == '+') {
                let m1 = memoryOne.join('')
                let m2 = memoryTwo.join('')
                let op = operator.join('')
                let result = (operate(m1, op, m2))
                console.log(m1, op, m2)
                if (result == '0') {
                    clear();
                }
                else {
                    memoryOne = [result];
                    memoryTwo = [];
                    operator = [];
                    operator.push(imp)
                    displayText.textContent = '';
                    displayText.textContent = `${memoryOne.join('')}` + ' ' + `${operator.join('')}` + ' ';
                }
            }
            else if (imp == 'Enter') {
                let m1 = memoryOne.join('')
                let m2 = memoryTwo.join('')
                let op = operator.join('')
                let result = (operate(m1, op, m2))
                console.log(m1, op, m2)
                if (result == '0') {
                    clear();
                }
                else {
                    memoryOne = [result];
                    memoryTwo = [];
                    operator = [];
                    displayText.textContent = '';
                    displayText.textContent = memoryOne.join('')
            
                }
            }
        }
    }
}