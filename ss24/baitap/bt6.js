let chuoi = "";
let luaChon;
do {
    luaChon = +prompt("Nhập lựa chọn của bạn");
        // 1. Nhập chuỗi
        // 2. Hiển thị chuỗi
        // 3. Tính độ dài của chuỗi
        // 4. Đếm số lần xuất hiện của một ký tự trong chuỗi
        // 5. Kiểm tra chuỗi có phải là chuỗi đối xứng không
        // 6. Chuyển đổi chuỗi thành chữ in hoa các ký tự đầu tiên của từ
        // 7. Thoát chương trình

    switch (luaChon) {
        case 1:
            chuoi = prompt("Nhập chuỗi: ");
            break;
        case 2:
            console.log(`Chuỗi hiện tại: ${chuoi}`);
            break;
        case 3:
            console.log(`Độ dài của chuỗi: ${chuoi.length}`);
            break;
        case 4:
            let kyTuCanDem = prompt("Nhập ký tự cần đếm: ");
            let dem = 0;
            for (let i = 0; i < chuoi.length; i++) {
                if (chuoi[i] === kyTuCanDem) {
                    dem++;
                }
            }
            console.log(`Số lần xuất hiện của '${kyTuCanDem}': ${dem}`);
            break;
        case 5:
            let chuoiDaoNguoc = "";
            for (let i = chuoi.length - 1; i >= 0; i--) {
                chuoiDaoNguoc += chuoi[i];
            }
            if (chuoi === chuoiDaoNguoc) {
                console.log("Chuỗi là chuỗi đối xứng.");
            } else {
                console.log("Chuỗi không phải là chuỗi đối xứng.");
            }
            break;
        case 6:
            let tuTrongChuoi = chuoi.split(" ");
            let ketQua = "";
            for (let i = 0; i < tuTrongChuoi.length; i++) {
                let tu = tuTrongChuoi[i];
                let tuVietHoa = "";
                if (tu.length > 0) {
                    tuVietHoa += tu[0].toUpperCase();
                    for (let j = 1; j < tu.length; j++) {
                        tuVietHoa += tu[j];
                    }
                }
                ketQua += tuVietHoa + " ";
            }
            console.log(`Chuỗi sau khi chuyển đổi: ${ketQua}`);
            break;
        case 7:
            console.log("Chương trình đã thoát.");
            break;
        default:
            console.log("Lựa chọn không hợp lệ. Vui lòng thử lại.");
    }
} while (luaChon !== 7);