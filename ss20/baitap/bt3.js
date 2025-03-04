const number = prompt("Nhập vào một số nguyên: ");

if (!isNaN(number) && Number.isInteger(Number(number))) {
    let str = number.toString();
    let len = str.length;
    let check = 0; 
    
    for (let i = 0; i < Math.floor(len / 2); i++) {
        if (str[i] !== str[len - 1 - i]) {
            check = 1;
            break;
        }
    }
    if (check === 0) {
        alert(number + " là số đối xứng");
    } else {
        alert(number + " không phải là số đối xứng");
    }
} else {
    alert("Vui lòng nhập một số nguyên hợp lệ.");
}