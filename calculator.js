'use strict';

const calcs = {
    '+': function (a, b) { return a + b },
    '-': function (a, b) { return a - b },
    '*': function (a, b) { return a * b },
    '/': function (a, b) { return a / b },
}

const signs = [];

for (let i = 0; i < signs.length; i += 1) {
    console.log(calcs[signs[i]](10, 20));
}



let calcString = '';
function handleClick() {

    const keys = document.querySelectorAll('.calc__num');
    keys.forEach(key => {
        document.addEventListener('click', () => {

            calcString += event.currentTarget.dataset.value;
            writeOutput(calcString);
        })
    })
}


function writeOutput(value) {
    document.querySelector('.output').value = value;
}

const acceptablesigns = ['+', '-', '*', '/']
const nums = [];

let num = '';
for (let i = 0; i < calcString.length; i += 1) {
    if (acceptablesigns.indexOf(calcString[i]) === -1) {
        num += calcString[i];
    }
    else {
        console.log(num);
        nums.push(parseFloat(num));
        num = '';
        signs.push(calcString[i])
    }
}
nums.push(parseFloat(num));
console.log(nums, signs);