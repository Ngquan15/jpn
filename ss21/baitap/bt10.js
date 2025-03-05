let n = +(prompt("Nhập vào số lượng số nguyên tố cần in ra:"));
let count = 0;
let num = 2;

while (count < n) {
    let check = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            check = false;
            break;
        }
    }
    if (check) {
        document.write(num, " ");
        count++;
    }
    num++;
}