let number1= +prompt("Nhập số đầu tiên :");
let number2= +prompt("Nhập số thứ hai :");

let min = Math.min(number1, number2);
let max = Math.max(number1, number2);

let soNgauNhien = Math.random() * (max - min) + min;

alert("Giá trị là :", soNgauNhien);