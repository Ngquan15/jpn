let number = parseInt(prompt("Nhập vào một số nguyên: "));
let check = 1;

if (!isNaN(number) && Number.isInteger(number) && number > 1) {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            check = 0;
            break;
        }
    }
    
    if (check) {
        alert(number + "là số nguyên tố");
    } else {
        alert(number +" không phải là số nguyên tố");
    }
} else {
    alert("Giá trị không hợp lệ");
}