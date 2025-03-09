let number = [1, 4, 5, 6, 3, 11, 2, 9, 45, 3];
let temp;
for (let i = 0; i < number.length; i++) {
    for (let j = 0; j < number.length - i - 1; j++) {
        if (number[i] < number[j]) {
            temp = number[i];
            number[i] = number[j];

        }
    }
}
console.log(number);
