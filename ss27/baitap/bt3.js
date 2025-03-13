function tinhDienTichTron(r) {
    return Math.PI * r * r;
}

function tinhChuViTron(r) {
    return Math.PI * 2 * r;
}

function tinhDienTichChuNhat(chieuDai, chieuRong) {
    return chieuDai * chieuRong;
}

function tinhChuViChuNhat(chieuDai, chieuRong) {
    return 2 * (chieuDai + chieuRong);
}

let choice;
let r;
do {
    choice = +prompt("Chọn chức năng: \n 1. Tính diện tích hình tròn\n 2. Tính chu vi hình tròn\n 3. Tính diện tích hình chữ nhật\n 4. Tính chu vi hình chữ nhật \n 5. Thoát");

    switch (choice) {
        case 1:
            r = +prompt("Nhập bán kính hình tròn:");
            if (r > 0) {
                alert("Diện tích hình tròn: " + tinhDienTichTron(r).toFixed(2));
            } else {
                alert("Bán kính không hợp lệ!");
            }
            break;
        case 2:
            r = +prompt("Nhập bán kính hình tròn:");
            if (r > 0) {
                alert("Chu vi hình tròn: " + tinhChuViTron(r).toFixed(2));
            } else {
                alert("Bán kính không hợp lệ!");
            }
            break;
        case 3:
            let dai = +prompt("Nhập chiều dài hình chữ nhật:");
            let rong = +prompt("Nhập chiều rộng hình chữ nhật:");
            if (dai > 0 && rong > 0) {
                alert("Diện tích hình chữ nhật: " + tinhDienTichChuNhat(dai, rong).toFixed(2));
            } else {
                alert("Kích thước không hợp lệ!");
            }
            break;
        case 4:
            dai = +prompt("Nhập chiều dài hình chữ nhật:");
            rong = +prompt("Nhập chiều rộng hình chữ nhật:");
            if (dai > 0 && rong > 0) {
                alert("Chu vi hình chữ nhật: " + tinhChuViChuNhat(dai, rong).toFixed(2));
            } else {
                alert("Kích thước không hợp lệ!");
            }
            break;
        case 5:
            alert("Đã thoát chương trình.");
            break;
        default:
            alert("Lựa chọn không hợp lệ!");
    }
} while (choice !== 5);