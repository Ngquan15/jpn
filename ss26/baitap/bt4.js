let test1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let test2 = [];
let test3 = "abc";

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function filterPrimeNumbers(arr) {
    if (!Array.isArray(arr)) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }

    if (arr.length === 0) {
        console.log("Mảng không chứa phần tử");
        return;
    }

    let ketQua = arr.filter(isPrime);

    return ketQua.length > 0 ? ketQua : "Không có số nguyên tố trong mảng";
}


console.log(filterPrimeNumbers(test1)); 
console.log(filterPrimeNumbers(test2)); 
console.log(filterPrimeNumbers(test3));