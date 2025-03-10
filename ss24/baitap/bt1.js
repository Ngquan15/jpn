let arr = [];

while (true) {
    console.log("Menu:");
    console.log("1. Nhập mảng");
    console.log("2. Hiển thị mảng");
    console.log("3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng");
    console.log("4. Tính tổng các phần tử trong mảng");
    console.log("5. Tìm số lần xuất hiện của một phần tử trong mảng");
    console.log("6. Sắp xếp mảng tăng dần");
    console.log("7. Thoát chương trình");

    let choice = Number(prompt("Chọn một chức năng (1-7):"));

    if (choice === 1) {
        let input = prompt("Nhập các phần tử của mảng, cách nhau bằng dấu phẩy:");
        arr = input.split(",").map(Number);
    } else if (choice === 2) {
        console.log("Mảng hiện tại:", arr);
    } else if (choice === 3) {
        let min = Math.min(...arr);
        let max = Math.max(...arr);
        console.log("Phần tử nhỏ nhất:", min);
        console.log("Phần tử lớn nhất:", max);
    } else if (choice === 4) {
        let sum = arr.reduce((a, b) => a + b, 0);
        console.log("Tổng các phần tử trong mảng:", sum);
    } else if (choice === 5) {
        let element = Number(prompt("Nhập phần tử cần tìm số lần xuất hiện:"));
        let count = arr.filter(x => x === element).length;
        console.log(`Phần tử ${element} xuất hiện ${count} lần trong mảng.`);
    } else if (choice === 6) {
        let sortedArr = [...arr];
        for (let i = 0; i < sortedArr.length - 1; i++) {
            for (let j = i + 1; j < sortedArr.length; j++) {
                if (sortedArr[i] > sortedArr[j]) {
                    let temp = sortedArr[i];
                    sortedArr[i] = sortedArr[j];
                    sortedArr[j] = temp;
                }
            }
        }
        console.log("Mảng sau khi sắp xếp tăng dần:", sortedArr);
    } else if (choice === 7) {
        console.log("Thoát chương trình.");
        break;
    } else {
        console.log("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
    }
}
