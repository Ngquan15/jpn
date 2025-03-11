function isPalindrome(sting) {
    let arr = sting.split("");
    for (let i = 0; i < arr.length / 2; i++){
        if (arr[i] !== arr[arr.length - 1 - i]) {
            console.log("Không phải là chuỗi đối xứng");
            return;
        }
    }
    console.log("Là chuỗi đối xứng");

} 
let sting = prompt("Nhập vào chuỗi bất kì");

isPalindrome(sting);