const numbers = [3, 7, 1, 9, 3, 5, 3, 8, 6, 3];

let inputNumber = parseInt(prompt("Nhập vào một số nguyên: "));

let count = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === inputNumber) {
        count++;
    }
}

console.log("Mảng số nguyên:", numbers);
console.log(`Số ${inputNumber} xuất hiện ${count} lần trong mảng.`);