let number = [2, 5, 3, 9, 7, 9, 4, 1, 6];

for (let i = 0; i < number.length - 1; i++) {
    for (let j = 0; j < number.length - 1 - i; j++) {
        if (number[j] > number[j + 1]) {

            let temp = number[j];
            number[j] = number[j + 1];
            number[j + 1] = temp;
        }
    }
}
console.log("Mảng sau khi sắp xếp tăng dần:", number);