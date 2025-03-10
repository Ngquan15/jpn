let array = [];

while (true) {
    console.log("Menu:");
    console.log("1. Nhập mảng số nguyên");
    console.log("2. Hiển thị mảng");
    console.log("3. Tìm các phần tử chẵn và lẻ");
    console.log("4. Tính trung bình cộng của mảng");
    console.log("5. Xóa phần tử tại vị trí chỉ định");
    console.log("6. Tìm phần tử lớn thứ hai trong mảng");
    console.log("7. Thoát chương trình");

    const choice = parseInt(prompt("Chọn chức năng: "));

    if (choice === 1) {
        array = prompt("Nhập các số nguyên, cách nhau bởi dấu phẩy: ").split(',').map(Number);
    } else if (choice === 2) {
        console.log("Mảng hiện tại:", array);
    } else if (choice === 3) {
        const even = array.filter(num => num % 2 === 0);
        const odd = array.filter(num => num % 2 !== 0);
        console.log("Các phần tử chẵn:", even);
        console.log("Các phần tử lẻ:", odd);
    } else if (choice === 4) {
        const sum = array.reduce((acc, num) => acc + num, 0);
        const average = sum / array.length;
        console.log("Trung bình cộng của mảng:", average);
    } else if (choice === 5) {
        const index = parseInt(prompt("Nhập vị trí cần xóa: "));
        if (index >= 0 && index < array.length) {
            array.splice(index, 1);
            console.log("Mảng sau khi xóa phần tử tại vị trí", index, ":", array);
        } else {
            console.log("Vị trí không hợp lệ.");
        }
    } else if (choice === 6) {
        if (array.length < 2) {
            console.log("Mảng không đủ phần tử để tìm phần tử lớn thứ hai.");
        } else {
            let first = -Infinity, second = -Infinity;
            for (let num of array) {
                if (num > first) {
                    second = first;
                    first = num;
                } else if (num > second && num !== first) {
                    second = num;
                }
            }
            console.log("Phần tử lớn thứ hai trong mảng là:", second);
        }
    } else if (choice === 7) {
        console.log("Thoát chương trình.");
        break;
    } else {
        console.log("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
    }
}
