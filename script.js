const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}


//password copy function
clipboardEl.addEventListener('click', () => {
    const cb = navigator.clipboard;
    const copyPswd = document.querySelector('#result');
    cb.writeText(copyPswd.innerText).then(() => alert('Password copied to clipboard'));
})

//password ganerate button 
generateEl.addEventListener('click', () => {
    let passwordLength = lengthEl.value;
    let isUpperCase = uppercaseEl.checked;
    let isLowercase = lowercaseEl.checked;
    let isNumber = numbersEl.checked;
    let isSymbol = symbolsEl.checked;
    generatePassword(isLowercase, isUpperCase, isNumber, isSymbol, passwordLength);
})


//main function to generate password
function generatePassword(lower, upper, number, symbol, length) {
        let password = "";
        if (lower) (
            password += (getRandomLower(length))
        )
        if (upper) (
            password += (getRandomUpper(length))
        )
        if (number) (
            password += (getRandomNumber(length))
        )
        if (symbol) (
            password += (getRandomSymbol(length))
        )
        let finalPassword = "";
        for (var i = 0; i < length; i++) {
            var randomNumber = Math.floor(Math.random() * password.length);
            finalPassword += password.substring(randomNumber, randomNumber + 1);
        }
        resultEl.textContent = finalPassword
    }

//to get random lowercase characters
function getRandomLower(len) {
    var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
    let randomLower = "";
    for (var i = 0; i < len; i++) {
        var randomNumber = Math.floor(Math.random() * lowerCaseLetters.length);
        randomLower += lowerCaseLetters.substring(randomNumber, randomNumber + 1);
    }
    return randomLower;
}

//to get random Uppercase characters
function getRandomUpper(len) {
    let upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let randomUpper = "";
    for (var i = 0; i < len; i++) {
        var randomNumber = Math.floor(Math.random() * upperCaseLetters.length);
        randomUpper += upperCaseLetters.substring(randomNumber, randomNumber + 1);
    }
    return randomUpper;
}

//to get random numbers
function getRandomNumber(len) {
    let numbers = "0123456789"
    let randomNumbers = "";
    for (var i = 0; i <len; i++) {
        var randomNumber = Math.floor(Math.random() * numbers.length);
        randomNumbers += numbers.substring(randomNumber, randomNumber + 1);
    }
    return randomNumbers;
}

//to get random symbols
function getRandomSymbol(len) {
    let symbols = "!@#$%^&*"
    let randomSymbol = "";
    for (var i = 0; i < len; i++) {
        var randomNumber = Math.floor(Math.random() * symbols.length);
        randomSymbol += symbols.substring(randomNumber, randomNumber + 1);
    }
    return randomSymbol;
}