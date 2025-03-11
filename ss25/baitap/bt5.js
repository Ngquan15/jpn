function countPositiveIntegers(arr) {
    if (!Array.isArray(arr)) {
        return "Dữ liệu không hợp lệ";
    }

    let count = arr.filter(num => Number.isInteger(num) && num > 0).length;

    return count > 0 ? count : "Không có số nguyên dương trong mảng";
}
console.log(countPositiveIntegers([4, 5.4, 6, -2])); // 2
