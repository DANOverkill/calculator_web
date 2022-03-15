//    -------         DOM CASH        ------
const displayText = document.querySelector('#displayText');
const clearButton = document.querySelector('#clear');

//    -------            UI           ------
window.addEventListener('keydown', (e) => {
    if(e.code.includes('Numpad')) {
        if (operator.length == 0) {
            if (memoryOne.length == 0) {
                if (e.key == '0' || e.key == '+' || e.key == '*' || e.key == '/' || e.key == 'Enter') {return}
                else if (e.key == '.') {
                    memoryOne.push('0.')
                    displayText.textContent = ''; 
                    displayText.textContent = memoryOne.join(''); 
                    console.log('condition (memoryOne.length == 0 - e.key == .) was triggered');
                }
                else if (e.key == '-') {
                    memoryOne.push(e.key)
                    displayText.textContent = '';
                    displayText.textContent = memoryOne.join(''); 
                    console.log('condition (memoryOne.length == 0 - e.key == -) was triggered'); 
                }
                else {
                    memoryOne.push(e.key)
                    displayText.textContent = '';
                    displayText.textContent = memoryOne.join('');
                    console.log('condition (memoryOne.length == 0 ELSE) was triggered');
                }
            }
            else if (memoryOne.length > 0 && memoryOne[0] == '-' && memoryOne.length <= 1 ) {
                if (e.key != '/' && e.key != '*' && e.key != '-' && e.key != '+' && e.key != 'Enter'){
                    if (!memoryOne.includes('.') && !memoryOne.includes('0.')) {
                        if (e.key == '.') {
                            memoryOne.push('0.')
                            displayText.textContent = memoryOne.join(''); 
                            console.log('condition (memoryOne.length == 0 - e.key == .) was triggered');
                        }
                    }
                }
            }
            else if (memoryOne.length > 1 && memoryOne[0] == '-' && memoryOne.length < 10) {
                if (e.key != '/' && e.key != '*' && e.key != '-' && e.key != '+'){
                    if (!memoryOne.includes('.') && !memoryOne.includes('0.')) {
                        if (e.key == '.') {
                            memoryOne.push(e.key)
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
                else if (e.key == '/' || e.key == '*' || e.key == '-' || e.key == '+') {
                    if (memoryOne[(memoryOne.length - 1)] == '0.' || memoryOne[(memoryOne.length - 1)] == '.') {
                        memoryOne.push('0')
                        displayText.textContent = memoryOne.join('');
                        operator.push(e.key)
                        console.log(operator)
                        displayText.textContent = `${memoryOne.join('')}` + ' ' + `${operator.join('')}` + ' ';
                    }
                    else {
                        operator.push(e.key)
                        console.log(operator)
                        displayText.textContent = `${memoryOne.join('')}` + ' ' + `${operator.join('')}` + ' ';    
                    }
                }
            }
            else if (memoryOne.length > 0 && memoryOne[0] != '-' && memoryOne.length < 10) {
                if (e.key != '/' && e.key != '*' && e.key != '-' && e.key != '+') {
                    if (!memoryOne.includes('.') && !memoryOne.includes('0.')) {
                        memoryOne.push(e.key)
                        displayText.textContent = memoryOne.join('');
                        console.log('condition (memoryOne.length > 0) and NOT an doperator was triggered');
                    }
                    else if (memoryOne.includes('0.') || memoryOne.includes('.')) {
                        if (e.key == '.') {return}
                        else if (e.key != '/' || e.key != '*' || e.key != '-' || e.key != '+') {
                            memoryOne.push(e.key)
                            displayText.textContent = memoryOne.join('');
                            console.log('condition (memoryOne.length > 0) and NOT an doperator was triggered');    
                        }
                    }
                }
                else if (e.key == '/' || e.key == '*' || e.key == '-' || e.key == '+') {
                    if (memoryOne[(memoryOne.length - 1)] == '0.' || memoryOne[(memoryOne.length - 1)] == '.') {
                        memoryOne.push('0')
                        displayText.textContent = memoryOne.join('');
                        operator.push(e.key)
                        console.log(operator)
                        displayText.textContent = `${memoryOne.join('')}` + ' ' + `${operator.join('')}` + ' ';
                    }
                    else {
                        operator.push(e.key)
                        console.log(operator)
                        displayText.textContent = `${memoryOne.join('')}` + ' ' + `${operator.join('')}` + ' ';    
                    }
                }
            }
            else if (memoryOne.length == 10){
                if (e.key == '/' || e.key == '*' || e.key == '-' || e.key == '+') {
                    if (memoryOne[(memoryOne.length - 1)] == '0.' || memoryOne[(memoryOne.length - 1)] == '.') {
                        memoryOne.push('0')
                        displayText.textContent = memoryOne.join('');
                        operator.push(e.key)
                        console.log(operator)
                        displayText.textContent = `${memoryOne.join('')}` + ' ' + `${operator.join('')}` + ' ';
                    }
                    else {
                        operator.push(e.key)
                        console.log(operator)
                        displayText.textContent = `${memoryOne.join('')}` + ' ' + `${operator.join('')}` + ' ';    
                    }
                }
            }
        }
        else if (operator.length > 0) {
            if (memoryTwo.length == 0) {
                if (e.key == '0' || e.key == '+' || e.key == '-' || e.key == '*' || e.key == '/' || e.key == 'Enter') {return}
                else if (e.key == '.') {
                    memoryTwo.push('0.')
                    displayText.textContent = `${memoryOne.join('')}` + ' ' + `${operator.join('')}` 
                                                + ' ' + `${memoryTwo.join('')}`; 
                    console.log('memory Two Sruff');
                }
                else {
                    memoryTwo.push(e.key)
                    displayText.textContent = `${memoryOne.join('')}` + ' ' + `${operator.join('')}` 
                                                + ' ' + `${memoryTwo.join('')}`; 
                    console.log('memory two stuff');
                }
            }
            else if (memoryTwo.length > 0 && memoryTwo.length < 10) {
                if (e.key != '/' && e.key != '*' && e.key != '-' && e.key != '+' && e.key != 'Enter') {
                    if (!memoryTwo.includes('.') && !memoryTwo.includes('0.')) {
                        memoryTwo.push(e.key)
                        displayText.textContent = `${memoryOne.join('')}` + ' ' + `${operator.join('')}` 
                                                + ' ' + `${memoryTwo.join('')}`; 
                        console.log('memory two stuff');
                    }
                    else if (memoryTwo.includes('0.') || memoryTwo.includes('.')) {
                        if (e.key == '.') {return}
                        else if (e.key != '/' || e.key != '*' || e.key != '-' || e.key != '+') {
                            memoryTwo.push(e.key)
                            displayText.textContent = `${memoryOne.join('')}` + ' ' + `${operator.join('')}` 
                                                + ' ' + `${memoryTwo.join('')}`; 
                            console.log('memory two stuff');    
                        }
                    }
                }
                else if (e.key == '/' || e.key == '*' || e.key == '-' || e.key == '+') {
                    let m1 = memoryOne.join('')
                    let m2 = memoryTwo.join('')
                    let op = operator.join('')
                    let result = (operate(m1, op, m2))
                    console.log(m1, op, m2)
                    memoryOne = [result];
                    memoryTwo = [];
                    operator = [];
                    operator.push(e.key)
                    displayText.textContent = '';
                    displayText.textContent = `${memoryOne.join('')}` + ' ' + `${operator.join('')}` + ' ';
                }
                else if (e.key == 'Enter') {
                    let m1 = memoryOne.join('')
                    let m2 = memoryTwo.join('')
                    let op = operator.join('')
                    let result = (operate(m1, op, m2))
                    console.log(m1, op, m2)
                    memoryOne = [result];
                    memoryTwo = [];
                    operator = [];
                    displayText.textContent = '';
                    displayText.textContent = memoryOne.join('')
                }
            }
            else if (memoryTwo.length == 10) {
                if (e.key == '/' || e.key == '*' || e.key == '-' || e.key == '+') {
                    let m1 = memoryOne.join('')
                    let m2 = memoryTwo.join('')
                    let op = operator.join('')
                    let result = (operate(m1, op, m2))
                    console.log(m1, op, m2)
                    memoryOne = [result];
                    memoryTwo = [];
                    operator = [];
                    operator.push(e.key)
                    displayText.textContent = '';
                    displayText.textContent = `${memoryOne.join('')}` + ' ' + `${operator.join('')}` + ' ';
                }
                else if (e.key == 'Enter') {
                    let m1 = memoryOne.join('')
                    let m2 = memoryTwo.join('')
                    let op = operator.join('')
                    let result = (operate(m1, op, m2))
                    console.log(m1, op, m2)
                    memoryOne = [result];
                    memoryTwo = [];
                    operator = [];
                    displayText.textContent = '';
                    displayText.textContent = memoryOne.join('')
                }
            }
        }
    }
})

clearButton.addEventListener('click', () => {
    memoryOne = [];
    operator = [];
    memoryTwo = [];
    displayText.textContent = '0';
})

//    -------           LOGIC         ------
let memoryOne = [];
let memoryTwo = [];
let operator = [];

function sum (a, b) {
    let sum = parseFloat(Math.round(((+a) + (+b)) * 100000000) / 100000000);
    return sum;
}

function subtration(a, b) {
    let subtration = parseFloat(Math.round(((+a) - (+b)) * 100000000) / 100000000);
    return subtration;
}

function multiplication(a, b) {
    let multiplication = parseFloat(Math.round(((+a) * (+b)) * 100000000) / 100000000);;
    return multiplication;
}

function division(a, b) {
    if ((+a) == 0 || (+b) == 0) {
        displayText.textContent = 'ERROR!';
        return ('ERROR!')}
    let division = parseFloat(Math.round(((+a) / (+b)) * 100000000) / 100000000);; 
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