function chiaMang(arr, n) {
    if (!arr || !arr.slice || !arr.length || !n || n <= 0) {
        return "dữ liệu không hợp lệ";
    }

    let result = [];
    for (let i = 0; i < arr.length; i += n) {
        result.push(arr.slice(i, i + n)); 
    }
    return result;
}

console.log(chiaMang([1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(chiaMang([1, 2, 3, 4, 5, 6, 7, 8], 2));
console.log(chiaMang("abc", 3)); 
console.log(chiaMang(12345, 3)); 
console.log(chiaMang([], 2));