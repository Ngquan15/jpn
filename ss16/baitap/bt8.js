let number1 = +prompt("Nhập số thứ nhất:");
let number2 = +prompt("Nhập số thứ hai:");
let number3 = +prompt("Nhập số thứ ba:");

if (number1 === number2 || number2 === number3 || number1 === number3) {
    alert("Nhâp lại!");
} else {
    let maxNum = Math.max(number1, number2, number3);
    alert("Số lớn nhất trong ba số là: " + maxNum);
}