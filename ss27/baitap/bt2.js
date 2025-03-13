
function nhapvaosv(a){
    a = +prompt("Nhập vào số lượng sinh viên");
    if (a < 0 || isNaN(a)) {
        alert("Số lượng không hợp lệ");
        return;
    } else {
        for (let i = 0; i < a; i++){
            arr[i] = prompt(`Nhập vào sinh viên thứ ${i + 1}`);         
        }
        alert("Đã thêm thành công!");
    }

}
function printf() {
    if (arr.length <= 0) {
        alert("Hiện không có sinh viên nào trong danh sách");
    } else {
        for (let i = 0; i < arr.length; i++){
            console.log(`Sinh viên thứ ${i + 1} : ${arr[i]}`);
        }
    }
}
function timSinhVien() {
    if (arr.length === 0) {
        alert("Danh sách sinh viên đang trống.");
        return;
    }

    let tenTimKiem = prompt("Nhập tên sinh viên cần tìm:");
    let ketQua = [];

    if (tenTimKiem.length === 0) {
        alert("Thông tin không hợp lệ.");
        return;
    }
        
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes(tenTimKiem)) {
            ketQua.push(arr[i]);
        }
    }

    if (ketQua.length > 0) {
        alert("Sinh viên tìm thấy:\n" + ketQua.join("\n"));
    } else {
        alert("Không tìm thấy sinh viên trong danh sách.");
    }
}
function xoaSinhVien() {
    if (arr.length === 0) {
        alert("Danh sách sinh viên đang trống.");
        return;
    }

    let tenCanXoa = prompt("Nhập tên sinh viên cần xóa:");
    let index = arr.findIndex(sv => sv === tenCanXoa);

    if (index !== -1) {
        arr.splice(index, 1);
        alert(`Đã xóa sinh viên "${tenCanXoa}" khỏi danh sách.`);
    } else {
        alert("Không tìm thấy sinh viên trong danh sách.");
    }
}
let arr = [];
let choice;
do {

    choice = +prompt("  Nhập vào lựa chọn: \n 1.Nhập danh sách sinh viên. \n 2.Hiển thị danh sách sinh viên. \n 3.Tìm sinh viên theo tên. \n 4.Xóa sinh viên khỏi danh sách. \n 5.Thoát.");    
    switch (choice) {
        case 1:
            let a = 0;
            nhapvaosv(a);
            break;
        case 2:
            printf();
            break;
        case 3:
            timSinhVien();
            break;
        case 4:
            xoaSinhVien();
            break;
        case 5:
            alert("Đã thoát chương trình.");
            break;
        default:
            alert("Lựa chọn không tồn tại");
    }
} while (choice != 5)