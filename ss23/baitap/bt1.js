let arr = [1, 22, 12, 8, 7, 9];
let count = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 10) {
        count++;
    }
}

console.log("Số phần tử lớn hơn hoặc bằng 10 là: ",count);
