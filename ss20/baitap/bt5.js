let a = parseInt(prompt("Nhập số nguyên a: "));
let b = parseInt(prompt("Nhập số nguyên b: "));
let ab = 1;
if (!isNaN(a) && !isNaN(b) && Number.isInteger(a) && Number.isInteger(b) && a !== 0) {
    if (b > 0) {
        for (let i = 0; i < b; i++) {
            ab *= a;
        }
    } else {
        for (let i = 0; i > b; i--) {
            ab /= a;
        }
    }
    alert("Giá trị bằng" + ab)
} else {
    alert("Vui lòng nhập hai số nguyên");
}