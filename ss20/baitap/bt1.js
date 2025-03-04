let num = Number(prompt("Nhập vào một số bất kì"));
let check = isNaN(num);

if (!check && Number.isInteger(num)) { 
    if (num > 1) {
        let sum = 0; // Biến lưu cộng dồn
        for (let i = 1; i <= num; i++) { 
            sum += i;
        }
        document.write("Tổng số nguyên từ 1 đến ", num, " là: ", sum);
    } else {
        document.write("Dữ liệu không hợp lệ");
    }
} else {
    document.write("Dữ liệu không hợp lệ");
}