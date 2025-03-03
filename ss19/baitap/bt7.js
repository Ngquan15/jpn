let a = +prompt("Nhập vào số thứ nhất");
let b = +prompt("Nhập vào số thứ hai");
let c = +prompt("Nhập vào số thứ ba");
let max = (a > b) ? (a > c ? a : c) : (b > c ? b : c);
document.write("Số lớn nhất là ", max);