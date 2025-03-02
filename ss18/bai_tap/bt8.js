let a = Number(prompt("Nhập vào cạnh 1"));
let b = Number(prompt("Nhập vào cạnh 2"));
let c = Number(prompt("Nhập vào cạnh 3"));

if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
    document.write("Thông tin bạn nhập không hợp lệ");
} else if (a + b <= c || a + c <= b || b + c <= a) {
    document.write("Ba cạnh không tạo thành một tam giác!");
} else {
    if (a === b && b === c) {
        document.write("Đây là một tam giác đều");
    } else if (a === b || a === c || b === c) {
        document.write("Đây là một tam giác cân");
    } else if (a ** 2 + b ** 2 === c ** 2 || c ** 2 + b ** 2 === a ** 2 || c ** 2 + a ** 2 === b ** 2) {
        document.write("Đây là một tam giác vuông");
    } else {
        document.write("Đây là một tam giác thường");
    }
}