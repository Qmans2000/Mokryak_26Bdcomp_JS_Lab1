function sumNumbersWithDigit(d) {
    let sum = 0;

    for (let i = 100; i < 1000; i++) {
        let numberStr = i.toString();
        if (numberStr.includes(d.toString())) {
            sum += i;
        }
    }

    return sum;
};
let d = parseInt(prompt("Введіть цифру d (від 0 до 9):"));

let result = sumNumbersWithDigit(d);
console.log("Сума трицифрових чисел, що містять цифру", d + ":", result);
