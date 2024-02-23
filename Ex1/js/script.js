function removeMiddleDigits(number) {
    let numberStr = number.toString();
    let length = numberStr.length;

    if (length !== 4) {
        console.log("Число має бути чотирицифровим!");
        return;
    }

    let result = numberStr[0] + '__' + numberStr[3];

    return result;
}

let userInput = prompt("Введіть чотирицифрове число:");

let givenNumber = parseInt(userInput);
console.log("Задане число без середніх цифр:", removeMiddleDigits(givenNumber));
