let danhBa = [];

function Contact(id, name, email, phone) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
}

function themLienHe() {
    let id = +prompt("Nhập ID liên hệ:");
    let name = prompt("Nhập tên:");
    let email = prompt("Nhập email:");
    let phone = prompt("Nhập số điện thoại:");

    if (danhBa.some(contact => contact.id === id)) {
        console.log("ID này đã tồn tại. Vui lòng chọn ID khác.");
    } else {
        let lienHeMoi = new Contact(id, name, email, phone);
        danhBa.push(lienHeMoi);
        console.log("Đã thêm liên hệ mới.");
    }
}

function hienThiDanhBa() {
    if (danhBa.length === 0) {
        console.log("Danh bạ trống.");
    } else {
        console.log("Danh sách liên hệ:");
        for (let i = 0; i < danhBa.length; i++) {
            let contact = danhBa[i];
            console.log(`ID: ${contact.id}, Tên: ${contact.name}, Email: ${contact.email}, SĐT: ${contact.phone}`);
        }
    }
}

function timKiemTheoSDT() {
    let phone = prompt("Nhập số điện thoại cần tìm:");
    let ketQua = danhBa.filter(contact => contact.phone.includes(phone));

    if (ketQua.length > 0) {
        console.log("Liên hệ tìm thấy:");
        for (let i = 0; i < ketQua.length; i++) {
            let contact = ketQua[i];
            console.log(`ID: ${contact.id}, Tên: ${contact.name}, Email: ${contact.email}, SĐT: ${contact.phone}`);
        }
    } else {
        console.log("Không tìm thấy liên hệ nào với số điện thoại này.");
    }
}

function capNhatLienHe() {
    let id = +prompt("Nhập ID liên hệ cần cập nhật:");
    let contact = danhBa.find(contact => contact.id === id);

    if (contact) {
        contact.name = prompt(`Nhập tên mới (Hiện tại: ${contact.name}):`) || contact.name;
        contact.email = prompt(`Nhập email mới (Hiện tại: ${contact.email}):`) || contact.email;
        contact.phone = prompt(`Nhập số điện thoại mới (Hiện tại: ${contact.phone}):`) || contact.phone;
        console.log("Đã cập nhật thông tin liên hệ.");
    } else {
        console.log("Không tìm thấy liên hệ với ID này.");
    }
}

function xoaLienHe() {
    let id = +prompt("Nhập ID liên hệ cần xóa:");
    let index = danhBa.findIndex(contact => contact.id === id);

    if (index !== -1) {
        let xacNhan = confirm(`Bạn có chắc muốn xóa liên hệ ${danhBa[index].name} không?`);
        if (xacNhan) {
            danhBa.splice(index, 1);
            console.log(`Đã xóa liên hệ với ID ${id}.`);
        }
    } else {
        console.log("Không tìm thấy liên hệ với ID này.");
    }
}

function hienThiMenu() {
    let luaChon;
    do {
luaChon = +prompt("Chọn chức năng:\n1. Thêm liên hệ\n2. Hiển thị danh bạ\n3. Tìm kiếm theo số điện thoại\n4. Cập nhật thông tin liên hệ\n5. Xóa liên hệ\n6. Thoát");

        switch (luaChon) {
            case 1:
                themLienHe();
                break;
            case 2:
                hienThiDanhBa();
                break;
            case 3:
                timKiemTheoSDT();
                break;
            case 4:
                capNhatLienHe();
                break;
            case 5:
                xoaLienHe();
                break;
            case 6:
                console.log("Thoát chương trình.");
                break;
            default:
                console.log("Lựa chọn không hợp lệ.");
                break;
        }
    } while (luaChon !== 6);
}

hienThiMenu();