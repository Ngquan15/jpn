const number = [];
for (let i = 0; i < 5; i++) {
    number.push(Math.floor(Math.random() * 100) + 1);
}

let le = 0, chan = 0;
for (let i = 0; i < number.length; i++) {
    if (number[i] % 2 === 0) {
        chan += number[i];
    } else {
        le += number[i];
    }
}

console.log("Mảng số nguyên:", number);
console.log("Tổng các số lẻ:", le);
console.log("Tổng các số chẵn:", chan);