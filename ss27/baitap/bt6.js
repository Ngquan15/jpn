function laCapSoCong(arr) {
    if (!arr || !arr.slice || arr.length < 2 || arr.some(x => x !== parseInt(x))) {
        return "dữ liệu không hợp lệ";
    }

    let d = arr[1] - arr[0];

    for (let i = 2; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] !== d) {
            return false;
        }
    }
    return true;
}

console.log(laCapSoCong([2, 4, 6, 8]));
console.log(laCapSoCong([3, 6, 9, 12, 14])); 
console.log(laCapSoCong("abc")); 
console.log(laCapSoCong([1])); 
console.log(laCapSoCong([5, 10, 15, 20])); 
console.log(laCapSoCong([7, 14, 21, 29])); 