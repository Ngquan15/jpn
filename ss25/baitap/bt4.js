function isPrimeNumber(n) {
    if (typeof n !== 'number' || !Number.isInteger(n) || n <= 0) {
        return "Dữ liệu không hợp lệ";
    }
    if (n < 2) {
        return `${n} không phải là số nguyên tố`;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return `${n} không phải là số nguyên tố`;
        }
    }
    return `${n} là số nguyên tố`;
}


console.log(isPrimeNumber(17));
console.log(isPrimeNumber(6));   
console.log(isPrimeNumber("text"));

