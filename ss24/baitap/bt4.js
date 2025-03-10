let array = [];

while (true) {
    console.log("Menu:");
    console.log("1. Nhập mảng 2 chiều");
    console.log("2. Hiển thị mảng 2 chiều");
    console.log("3. Tính tổng các phần tử trong mảng");
    console.log("4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó");
    console.log("5. Tính trung bình cộng các phần tử của một hàng cụ thể");
    console.log("6. Đảo ngược các hàng trong mảng");
    console.log("7. Thoát chương trình");
    let choice = parseInt(prompt("Chọn chức năng: "));

    if (choice === 1) {
        let rows = parseInt(prompt("Nhập số hàng: "));
        let cols = parseInt(prompt("Nhập số cột: "));
        array = [];
        for (let i = 0; i < rows; i++) {
            array[i] = [];
            for (let j = 0; j < cols; j++) {
                array[i][j] = parseInt(prompt(`Nhập phần tử tại [${i}][${j}]: `));
            }
        }
    } else if (choice === 2) {
        console.log("Mảng 2 chiều:");
        for (let i = 0; i < array.length; i++) {
            console.log(array[i].join(" "));
        }
    } else if (choice === 3) {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array[i].length; j++) {
                sum += array[i][j];
            }
        }
        console.log("Tổng các phần tử trong mảng: " + sum);
    } else if (choice === 4) {
        let max = array[0][0];
        let index = [0, 0];
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array[i].length; j++) {
                if (array[i][j] > max) {
                    max = array[i][j];
                    index = [i, j];
                }
            }
        }
        console.log(`Phần tử lớn nhất là ${max} tại vị trí [${index[0]}][${index[1]}]`);
    } else if (choice === 5) {
        let row = parseInt(prompt("Nhập số hàng: "));
        if (row < 0 || row >= array.length) {
            console.log("Hàng không hợp lệ");
        } else {
            let sum = 0;
            for (let j = 0; j < array[row].length; j++) {
                sum += array[row][j];
            }
            let avg = sum / array[row].length;
            console.log(`Trung bình cộng các phần tử của hàng ${row} là ${avg}`);
        }
    } else if (choice === 6) {
        for (let i = 0; i < array.length; i++) {
            array[i].reverse();
        }
        console.log("Đã đảo ngược các hàng trong mảng");
    } else if (choice === 7) {
        console.log("Thoát chương trình");
        break;
    } else {
        console.log("Chức năng không hợp lệ");
    }
}
