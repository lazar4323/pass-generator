const characterAmountRange=document.getElementById('characterAmountRange');
const characterAmountNumber=document.getElementById('characterAmountNumber');
const passwordGeneratorForm=document.getElementById('passwordGeneratorForm');
const includeUppercaseElement=document.getElementById('includeUppercase');
const includeNumberElement=document.getElementById('includeNumbers');
const includeSymbolsElement=document.getElementById('includeSymbols');
const passwordDisplay = document.getElementById('passwordDisplay')

const UPPERCASE_CHAR_CODES = arrayFromHightToLow(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromHightToLow(97, 122);
const NUMBER_CHAR_CODES = arrayFromHightToLow(48, 57);
const SYMBOL_CHAR_CODES = arrayFromHightToLow(33, 47).concat(
    arrayFromHightToLow(58,64)
).concat(
    arrayFromHightToLow(91,96)
).concat(
    arrayFromHightToLow(123,126)
);

characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

passwordGeneratorForm.addEventListener('submit', e=> {
    e.preventDefault()
    const characterAmount = characterAmountNumber.value
    const includeUppercase = includeUppercaseElement.checked
    const includeNumbers = includeNumberElement.checked
    const includeSymbols = includeSymbolsElement.checked
    const password = generatePassword(characterAmount,includeUppercase,includeNumbers,includeSymbols)
    passwordDisplay.innerText = password;
})

function generatePassword(characterAmount,includeUppercase,includeNumbers,includeSymbols){
    let charCodes = LOWERCASE_CHAR_CODES;
    if(includeUppercase) {
        charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
    }
    if(includeNumbers) {
        charCodes = charCodes.concat(NUMBER_CHAR_CODES)
    }
    if(includeNumbers) {
        charCodes = charCodes.concat(NUMBER_CHAR_CODES)
    }
    if(includeSymbols) {
        charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
    }

    const passwordCharacters = [];
    for(i=0; i<characterAmount; i++){
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacters.push(String.fromCharCode(characterCode))
    }
    return passwordCharacters.join('')
}

function arrayFromHightToLow(low,high){
    const array=[];
    for(let i = low; i <= high; i++){
        array.push(i);
    }
    return array;
}

function syncCharacterAmount(e){
    const value = e.target.value
    characterAmountNumber.value = value
    characterAmountRange.value = value
}