let arr = [];

while (true) {
    console.log("Menu:");
    console.log("1. Nhập mảng 2 chiều");
    console.log("2. Hiển thị mảng 2 chiều");
    console.log("3. Tính tổng các phần tử trong mảng");
    console.log("4. Tính tổng đường chéo chính");
    console.log("5. Tính tổng đường chéo phụ");
    console.log("6. Tính trung bình cộng các phần tử trong một hàng hoặc một cột");
    console.log("7. Thoát chương trình");
    const choice = parseInt(prompt("Chọn chức năng: "));

    if (choice === 1) {
        const rows = parseInt(prompt("Nhập số hàng: "));
        const cols = parseInt(prompt("Nhập số cột: "));
        arr = [];
        for (let i = 0; i < rows; i++) {
            arr[i] = [];
            for (let j = 0; j < cols; j++) {
                arr[i][j] = parseInt(prompt(`Nhập phần tử tại vị trí [${i}][${j}]: `));
            }
        }
    } else if (choice === 2) {
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i].join(' '));
        }
    } else if (choice === 3) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                sum += arr[i][j];
            }
        }
        console.log("Tổng các phần tử trong mảng: ", sum);
    } else if (choice === 4) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i][i];
        }
        console.log("Tổng đường chéo chính: ", sum);
    } else if (choice === 5) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i][arr.length - 1 - i];
        }
        console.log("Tổng đường chéo phụ: ", sum);
    } else if (choice === 6) {
        const type = prompt("Chọn hàng hoặc cột (row/column): ");
        const index = parseInt(prompt(`Nhập chỉ số ${type}: `));
        let sum = 0;
        let count = 0;
        if (type === 'row') {
            for (let j = 0; j < arr[index].length; j++) {
                sum += arr[index][j];
                count++;
            }
        } else if (type === 'column') {
            for (let i = 0; i < arr.length; i++) {
                sum += arr[i][index];
                count++;
            }
        }
        console.log(`Trung bình cộng các phần tử trong ${type} ${index}: `, sum / count);
    } else if (choice === 7) {
        console.log("Thoát chương trình");
        break;
    } else {
        console.log("Chức năng không hợp lệ, vui lòng chọn lại.");
    }
}
