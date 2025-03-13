let arr = []; 
let sum = 0, count = 0;
let soChanMax = 0;
let soLeMin = 0;
let coSoChan = false;
let coSoLe = false;

function nhapSoNguyen() {
    let so = +prompt("Nhập số nguyên:");
    if (!Number.isInteger(so)) {
        alert("Vui lòng nhập số nguyên hợp lệ!");
        return;
    }

    arr.push(so);
    sum += so;
    count++;

    if (so % 2 === 0) { chẵn
        if (!coSoChan || so > soChanMax) {
            soChanMax = so;
            coSoChan = true;
        }
    } else { // lẻ
        if (!coSoLe || so < soLeMin) {
            soLeMin = so;
            coSoLe = true;
        }
    }

    alert(`Đã thêm số ${so} vào danh sách!`);
}

function tinhTrungBinh() {
    if (count === 0) {
        alert("Danh sách trống, không thể tính trung bình!");
    } else {
        alert("Trung bình các số: " + (sum / count).toFixed(2));
    }
}

function timSoChanLonNhat() {
    if (coSoChan) {
        alert(`Số chẵn lớn nhất: ${soChanMax}`);
    } else {
        alert("Không có số chẵn nào trong danh sách!");
    }
}

function timSoLeNhoNhat() {
    if (coSoLe) {
        alert(`Số lẻ nhỏ nhất: ${soLeMin}`);
    } else {
        alert("Không có số lẻ nào trong danh sách!");
    }
}

    let choice;
    do {
        choice = +prompt(
            "Chọn chức năng:\n1. Nhập danh sách số nguyên\n2. Tính trung bình các số\n3. Tìm số chẵn lớn nhất\n4. Tìm số lẻ nhỏ nhất\n5. Thoát"
        );

        switch (choice) {
            case 1:
                nhapSoNguyen();
                break;
            case 2:
                tinhTrungBinh();
                break;
            case 3:
                timSoChanLonNhat();
                break;
            case 4:
                timSoLeNhoNhat();
                break;
            case 5:
                alert("Thoát chương trình!");
                break;
            default:
                alert("Lựa chọn không hợp lệ!");
        }
    } while (choice !== 5);