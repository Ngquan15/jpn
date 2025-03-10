
let arr = [];

while (true) {
    console.log("Menu:");
    console.log("1. Nhập mảng số nguyên");
    console.log("2. Hiển thị mảng");
    console.log("3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó");
    console.log("4. Tính tổng và trung bình cộng của các số dương trong mảng");
    console.log("5. Đảo ngược mảng");
    console.log("6. Kiểm tra mảng có đối xứng không");
    console.log("7. Thoát chương trình");

    let choice = parseInt(prompt("Chọn chức năng: "));

    if (choice === 1) {
        arr = prompt("Nhập các phần tử của mảng, cách nhau bởi dấu phẩy: ").split(',').map(Number);
    } else if (choice === 2) {
        console.log("Mảng hiện tại: ", arr);
    } else if (choice === 3) {
        let max = Math.max(...arr);
        let index = arr.indexOf(max);
        console.log("Phần tử lớn nhất là " + max + " ở chỉ số " + index);
    } else if (choice === 4) {
        let sum = 0;
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > 0) {
                sum += arr[i];
                count++;
            }
        }
        let avg = count > 0 ? sum / count : 0;
        console.log("Tổng các số dương: " + sum);
        console.log("Trung bình cộng các số dương: " + avg);
    } else if (choice === 5) {
        arr.reverse();
        console.log("Mảng sau khi đảo ngược: ", arr);
    } else if (choice === 6) {
        let isSymmetric = true;
        for (let i = 0; i < arr.length / 2; i++) {
            if (arr[i] !== arr[arr.length - 1 - i]) {
                isSymmetric = false;
                break;
            }
        }
        if (isSymmetric) {
            console.log("Mảng đối xứng");
        } else {
            console.log("Mảng không đối xứng");
        }
    } else if (choice === 7) {
        console.log("Thoát chương trình");
        break;
    } else {
        console.log("Lựa chọn không hợp lệ, vui lòng chọn lại.");
    }
}
