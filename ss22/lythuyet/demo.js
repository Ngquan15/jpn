// Khai báo mảng số nguyên gồm 10 phần tử
let arr = [5, 3, 8, 3, 9, 1, 5, 7, 2, 8];

// Khai báo biến tạm thời
let temp;

// Loại bỏ các phần tử trùng nhau mà không sử dụng new Set, indexOf và push
let uniqueArr = [];
for (let i = 0; i < arr.length; i++) {
    let found = false;
    for (let j = 0; j < uniqueArr.length; j++) {
        if (arr[i] === uniqueArr[j]) {
            found = true;
            break;
        }
    }
    if (!found) {
        uniqueArr[uniqueArr.length] = arr[i];
    }
}

// Sắp xếp mảng theo thứ tự tăng dần mà không sử dụng sort
for (let i = 0; i < uniqueArr.length - 1; i++) {
    for (let j = i + 1; j < uniqueArr.length; j++) {
        if (uniqueArr[i] > uniqueArr[j]) {
            temp = uniqueArr[i];
            uniqueArr[i] = uniqueArr[j];
            uniqueArr[j] = temp;
        }
    }
}

// Hiển thị kết quả
console.log("Mảng sau khi loại bỏ phần tử trùng nhau và sắp xếp tăng dần:", uniqueArr);
