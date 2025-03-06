let number = prompt("Nhập vào một số bất kì:");
let max;
if (!isNaN(number) && !Number.isInteger(number)) {
    let arr = number.split("");
    let max = arr[0];
    for (let i = 0; i < arr.length-1; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }console.log(`Số lớn nhất là ${max}`)
} else {
    console.log("Thông tin không hợp lệ");
}