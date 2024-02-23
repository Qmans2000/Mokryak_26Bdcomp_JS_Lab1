function isPalindrome(number) {
    const str = number.toString();
    return str === str.split('').reverse().join('');
}

function findPalindromeSquare(startingNumber) {
    let number = startingNumber;
    while (true) {
        if (isPalindrome(number) && isPalindrome(number * number)) {
            return number;
        } 
        number++;
    }
}

let lastPalindrome = 0;

while (true) {
    lastPalindrome = findPalindromeSquare(lastPalindrome + 1);
    console.log("Число-паліндром, квадрат якого теж є паліндромом:", lastPalindrome);

    const answer = prompt("Ви хочете знайти ще одне число-паліндром, квадрат якого є паліндромом? (Так/Ні)");
    if (answer.toLowerCase() !== 'так') {
        break;
    }
}
