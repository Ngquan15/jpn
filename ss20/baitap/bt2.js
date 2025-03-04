let num = Number(prompt("Nhập vào một số"));
if (Number.isInteger(num) && num > 1) { 
    document.write("Các số chia hết cho 5 từ 1 đến ", num, " là: ");
    for (let i = 1; i <= num; i++) {  
        if (i % 5 === 0) {  
            document.write(i + ", ");  
        }
    }
} else {
    document.write("Dữ liệu nhập vào không hợp lệ");  
}